import { NextAuthOptions, SessionOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";
import { Provider } from "next-auth/providers/index";

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

const credentials = CredentialsProvider({
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
         user.password!
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
});

const google = Google({
   clientId: process.env.GOOGLE_AUTH_CLIENT_ID!,
   clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET!,
   authorization: {
      params: {
         scope: `openid email profile`,
         access_type: `offline`,
         response_type: `code`,
         prompt: `consent`,
      },
   },
   allowDangerousEmailAccountLinking: true,
});

const providers: Provider[] = [google, credentials] as const;

const session: Partial<SessionOptions> = {
   strategy: "jwt",
   maxAge: 30 * 24 * 60 * 60, // 30 days
};

export const authOptions: NextAuthOptions = {
   adapter: PrismaAdapter(prisma),
   theme: { colorScheme: `auto`, brandColor: `white` },
   session,
   secret: process.env.NEXTAUTH_SECRET ?? `wesfwee12131242`,
   pages: {
      signIn: "/login",
      error: "/login",
   },
   providers,
   callbacks: {
      async signIn({ user, profile }) {
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
      async session({ session, token, user }): Promise<ExtendedSession> {
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
