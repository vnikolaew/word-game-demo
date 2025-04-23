import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";

interface ExtendedToken extends JWT {
   id: string;
   email: string;
   name: string;
}

interface ExtendedUser {
   id: string;
   email: string | null;
   name: string | null;
}

interface ExtendedSession extends Session {
   user: ExtendedUser;
}

export const authOptions: NextAuthOptions = {
   adapter: {
      ...PrismaAdapter(prisma),
   },
   theme: { colorScheme: `auto`, brandColor: `white` },
   session: {
      strategy: "jwt",
      maxAge: 30 * 24 * 60 * 60, // 30 days
   },
   secret: process.env.NEXTAUTH_SECRET ?? `wesfwee12131242`,
   pages: {
      signIn: "/login",
      error: "/login", // Add error page
   },
   events: {
      session: ({ session, token }) => {},
      signIn({ account, user, profile }) {},
   },
   providers: [
      Google({
         clientId: `64687835677-cp7jete2qrfcd6elr8vc5mq6l6sffbio.apps.googleusercontent.com`,
         clientSecret: `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`,
         authorization: {
            params: {
               scope: `openid email profile`,
               access_type: `offline`,
               response_type: `code`,
               prompt: `consent`,
            },
         },
         allowDangerousEmailAccountLinking: true,
      }),
      CredentialsProvider({
         name: "credentials",
         credentials: {
            email: { label: "Email", type: "email" },
            password: { label: "Password", type: "password" },
         },
         type: `credentials`,
         async authorize(credentials) {
            if (!credentials?.email || !credentials?.password) {
               return null;
            }

            const user = await prisma.user.findFirst({
               where: {
                  email: credentials.email,
               },
            });
            if (!user) {
               return null;
            }

            const passwordsMatch = await bcrypt.compare(
               credentials.password,
               user.password
            );

            if (!passwordsMatch) {
               return null;
            }

            return {
               id: user.id,
               email: user.email,
               name: user.name,
            };
         },
      }),
   ],
   callbacks: {
      async signIn({ user, profile, credentials }) {
         if (!user?.email) {
            user.email =
               profile?.email ??
               profile?.name ??
               profile?.data?.username ??
               profile?.data?.name;
         }

         return true;
      },
      async jwt({ token, user }): Promise<ExtendedToken> {
         if (user?.id) token.id = user.id;

         if (user) {
            // First time jwt callback is run, user object is available
            token.id = user.id;
            token.email = user.email ?? "";
            token.name = user.name ?? "";
         } else {
            // Subsequent times, token.sub will contain the user id
            token.id = token.sub ?? "";
         }
         return token as ExtendedToken;
      },
      async session({
         session,
         token,
         user,
         newSession,
      }): Promise<ExtendedSession> {
         // @ts-ignore
         session.user ??= {};

         // @ts-ignore
         session.user.id = token.sub ?? user?.id ?? token.id;
         session.user.name = user?.name ?? token.name;
         session.user.email = user?.email ?? token.email ?? ``;

         return session as ExtendedSession;
      },
   },

   debug: true, // process.env.NODE_ENV === "development",
};
