"use client";

import { signIn } from "next-auth/react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center h-[70vh]">
      <Card className="p-8 space-y-6 max-w-sm w-full">
        <h1 className="text-xl font-semibold">Sign in</h1>
        <Button className="w-full" onClick={() => signIn("azure-ad")}>
          Continue with Microsoft
        </Button>
      </Card>
    </div>
  );
}
