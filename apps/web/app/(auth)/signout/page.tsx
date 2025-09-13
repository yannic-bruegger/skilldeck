"use client";

import { signOut } from "next-auth/react";

export default function SignOutPage() {
  signOut({ callbackUrl: "/" });
  return (
    <div>Signing you out ...</div>
  );
}
