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
export default function SchoolSideBar() {
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
      <Link href="/school">
        <div className={`p-2 rounded ${getActiveClass("/school", pathname)}`}>
          Dashboard
        </div>
      </Link>
      <Link
        href="/school/liststudent
        "
      >
        <div
          className={`p-2 rounded ${getActiveClass(
            "/school/liststudent",
            pathname
          )}`}
        >
          View Students
        </div>
      </Link>
      <Link href="/school/addstudent">
        <div
          className={`p-2 rounded ${getActiveClass(
            "/school/addstudent",
            pathname
          )}`}
        >
          Add Students
        </div>
      </Link>
      <Link href="/school/user">
        <div
          className={`p-2 rounded ${getActiveClass("/school/user", pathname)}`}
        >
          User
        </div>
      </Link>

      <Button onClick={handleSubmit}>Log Out</Button>
    </div>
  );
}
