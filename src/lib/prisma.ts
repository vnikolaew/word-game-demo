import { Prisma, PrismaClient, User } from "@prisma/client";
import { InternalArgs } from "../../prisma/generated/client/runtime/library";
import { PROLIFIC_EMAIL_REGEX, PROLIFIC_USER_IMAGE } from "./utils";

const globalForPrisma = globalThis as unknown as {
   prisma: ReturnType<typeof getPrismaClient> | undefined;
};

const getPrismaClient = () =>
   new PrismaClient({
      log: ["query"],
   }).$extends({
      result: {
         user: {
            hasProlificEmail: {
               needs: { email: true, id: true },
               compute({ email }) {
                  return PROLIFIC_EMAIL_REGEX.test(email);
               },
            },
            hasFinishedProficiencyTest: {
               needs: { metadata: true, id: true },
               compute({ metadata }: { metadata: any }) {
                  const date_regex = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD
                  try {
                     return (
                        !isNaN(metadata?.score) &&
                        date_regex.test(metadata.proficiencyQuizFinishedAt) &&
                        !isNaN(Date.parse(metadata.proficiencyQuizFinishedAt))
                     );
                  } catch (error) {
                     return false;
                  }
               },
            },
            proficiencyQuizFinishedAt: {
               needs: { metadata: true, id: true },
               compute({ metadata }: { metadata: any }) {
                  return isNaN(Date.parse(metadata?.proficiencyQuizFinishedAt))
                     ? null
                     : new Date(metadata.proficiencyQuizFinishedAt);
               },
            },
            score: {
               needs: { metadata: true, id: true },
               compute({ metadata }: { metadata: any }) {
                  return isNaN(metadata?.score)
                     ? null
                     : Number(metadata?.score);
               },
            },
         },
      },
      model: {
         user: {
            async prolificSignIn(
               {
                  email,
                  username,
               }: {
                  email: string;
                  username: string;
               },
               select?: Prisma.UserSelect<InternalArgs>
            ): Promise<Partial<User> | null> {
               let user = await prisma.user.findFirst({
                  where: {
                     OR: [
                        {
                           email: email as string,
                        },
                        {
                           name: username as string,
                        },
                     ],
                  },
                  select: {
                     id: true,
                     email: true,
                     name: true,
                     image: true,
                     ...(select ?? {}),
                  },
               });
               if (!user) {
                  user = await prisma.user.create({
                     data: {
                        email: email as string,
                        emailVerified: new Date(),
                        name: username as string,
                        image: PROLIFIC_USER_IMAGE,
                        metadata: {
                           domain: process.env.WEB_DOMAIN!,
                        },
                     },
                     select: {
                        id: true,
                        email: true,
                        name: true,
                        image: true,
                        ...(select ?? {}),
                     },
                  });

                  await prisma.account.create({
                     data: {
                        userId: user.id,
                        provider: `prolific`,
                        providerAccountId: user.id,
                        type: `prolific`,
                     },
                  });

                  return user;
               } else return user;
            },
            async updateProficiencyScore(userId: string, score: number) {
               try {
                  let user = await prisma.user.findUnique({
                     where: { id: userId },
                  });

                  if (!user) return false;
                  user = await prisma.user.update({
                     where: { id: user.id },
                     data: {
                        metadata: {
                           ...(user?.metadata ?? {}),
                           score,
                           proficiencyQuizFinishedAt: new Date().toISOString(),
                        },
                     },
                  });
                  return true;
               } catch (error) {
                  return false;
               }
            },
         },
      },
   });

export const prisma = globalForPrisma.prisma ?? getPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
