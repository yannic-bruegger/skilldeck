import type { NextAuthOptions } from "next-auth";
import AzureADProvider from "next-auth/providers/azure-ad";

export const authOptions: NextAuthOptions = {
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID!,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
      tenantId: process.env.AZURE_AD_TENANT_ID!,
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async signIn({ profile }) {
      // Optional: restrict to a single tenant or email domain
      // Example: only @voss.net
      const email = (profile as any)?.email || (profile as any)?.upn;
      return true;
    },
    async jwt({ token, account, profile }) {
      if (account) {
        token.provider = account.provider;
        token.email = token.email ?? (profile as any)?.email ?? (profile as any)?.upn;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.email) session.user!.email = token.email;
      return session;
    },
  },
  pages: {
    signIn: "/signin", // our custom page
  },
};
