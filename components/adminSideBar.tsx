"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";

// Helper function to determine the active class
const getActiveClass = (path: string, currentPath: string) => {
  return path === currentPath
    ? "bg-gray-200 text-gray-800" // Active link style
    : "text-gray-600 hover:bg-gray-100"; // Inactive link style
};

export default function AdminSideBar() {
  const pathname = usePathname();
  const router = useRouter();
  async function handleSubmit() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/sign-in"); // redirect to login page
        },
      },
    });
  }

  return (
    <div className="flex flex-col space-y-2 p-4">
      <Link href="/admin">
        <div className={`p-2 rounded ${getActiveClass("/admin", pathname)}`}>
          Dashboard
        </div>
      </Link>
      <Link href="/admin/listschool">
        <div
          className={`p-2 rounded ${getActiveClass(
            "/admin/listschool",
            pathname
          )}`}
        >
          View Students
        </div>
      </Link>
      <Link href="/admin/addschool">
        <div
          className={`p-2 rounded ${getActiveClass(
            "/admin/addschool",
            pathname
          )}`}
        >
          Add Students
        </div>
      </Link>
      <Link href="/admin/user">
        <div
          className={`p-2 rounded ${getActiveClass("/admin/user", pathname)}`}
        >
          User
        </div>
      </Link>

      <Button onClick={handleSubmit}>Log Out</Button>
    </div>
  );
}
