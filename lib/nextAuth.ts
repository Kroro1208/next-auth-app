import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { getServerSession, NextAuthOptions } from "next-auth";
import { prisma } from "@/lib/prisma";
import GitHubProvider from "next-auth/providers/github";

// NextAuthの設定
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
  session: {
    // セッションはJWTとして管理する
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {},
  pages: {},
};

// サーバーサイドでCookieからSession情報を取得
export const getAuthSession = async () => {
  return getServerSession(authOptions);
};
