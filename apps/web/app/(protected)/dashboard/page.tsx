import Header from "@/components/header";
import { getSession } from "@/lib/auth/session";

export default async function DashboardPage() {
  const session = await getSession();
  return (
    <div>
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="mt-2">Signed in as {session?.user?.email}</p>
    </div>
  );
}
