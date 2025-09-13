"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const { data: session, status } = useSession();
  const authed = status === "authenticated";

  return (
    <header className="border-b">
      <div className="container mx-auto flex items-center justify-between py-4">
        <nav className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>
        <div>
          {authed ? (
            <Button variant="outline" onClick={() => signOut({ callbackUrl: "/" })}>
              Sign out
            </Button>
          ) : (
            <Button onClick={() => signIn("azure-ad", { callbackUrl: "/dashboard" })}>
              Sign in
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
