import getServerSession from "next-auth";
import { redirect } from "next/navigation";
import { config as authOptions } from "@/auth";

export default function LandingPage() {
  const session = getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <main>
      <h1>Welcome to Reflecty</h1>
      <p>Track your habits and moods with us.</p>
    </main>
  );
}
