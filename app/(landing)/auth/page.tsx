import AuthScreen from "@Screens/Auth";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentification",
  description: "Welcome to Next.js",
};

export async function generateMetadata({
  searchParams,
}: {
  params: { signin: string };
  searchParams: { signin: string };
}): Promise<Metadata> {
  const metaTitle = searchParams.signin === "true" ? "Sign In" : "Sign Up";
  return { title: metaTitle };
}

export default AuthScreen;
