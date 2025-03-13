import React from "react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function AdminDashBoard() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  // const router = useRouter();
  if (!session) {
    return redirect("/");
  }
  const user = session?.user;
  console.log(user);
  return (
    <div className="">
      <div className="p-5">{user.name}</div>

      <div>
        Some statistics here to be shown like how many schools are registeres in
        the month and so on
      </div>
    </div>
  );
}
