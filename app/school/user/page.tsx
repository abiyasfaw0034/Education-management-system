import React from "react";
import { getSession } from "@/lib/currebtSession";
export default async function UserPage() {
  const session = await getSession();

  return (
    <div>
      <div>{session?.user?.name}</div>
      <div>{session?.user?.email}</div>
    </div>
  );
}
