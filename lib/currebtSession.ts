import { headers } from "next/headers";
import { auth } from "./auth";
export async function getSession() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    return session;
  } else {
    return null;
  }
}
