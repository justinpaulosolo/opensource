import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Container from "../components/home/Container";

export default function Dashboard() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [router, status]);
  console.log("render");
  return (
    <Container>
      <div>
        <h1>Dashboard</h1>
      </div>
    </Container>
  );
}
