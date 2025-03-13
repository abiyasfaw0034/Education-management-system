import { getSession } from "@/lib/currebtSession";
import React from "react";
export default async function SchoolDashBoard() {
  const session = await getSession();

  return (
    <div>
      <div>{session?.user?.name}</div>
      <div>{session?.user?.email}</div>
      <div>school dashboard with statiscts</div>
    </div>
  );
}
