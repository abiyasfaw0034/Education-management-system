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
    <div className="flex flex-col p-4 h-full justify-between">
      {/* Links Section */}
      <div className="flex flex-col space-y-4 p-4 mt-10">
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
            View Schools
          </div>
        </Link>
        <Link href="/admin/addschool">
          <div
            className={`p-2 rounded ${getActiveClass(
              "/admin/addschool",
              pathname
            )}`}
          >
            Add Schools
          </div>
        </Link>
        <Link href="/admin/user">
          <div
            className={`p-2 rounded ${getActiveClass("/admin/user", pathname)}`}
          >
            User
          </div>
        </Link>
      </div>

      {/* Logout Button at the Bottom */}
      <Button onClick={handleSubmit} className="w-full">
        Log Out
      </Button>
    </div>
  );
}
