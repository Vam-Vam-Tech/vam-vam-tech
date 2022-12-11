import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../lib/prismadb";

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_CLIENT_ID as string,
			clientSecret: process.env.GITHUB_ACCESS_TOKEN as string,
		}),
	],

	callbacks: {
		async jwt({ token }) {
			token.userRole = "admin";
			return token;
		},
	},
};

export default NextAuth(authOptions);
