import React from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import { Button } from "./ui/button";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/currebtSession";

export default async function NavBar() {
  // const [isOpen, setIsOpen] = useState(false);
  const session = await getSession();
  console.log(session?.user);
  // const router = useRouter();

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-gray-900 dark:text-white"
          >
            School Management System
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {session && (
              <Link
                href="/"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                {session.user.name}
              </Link>
            )}

            {session && (
              <Link
                href={session?.user.role === "admin" ? "/admin" : "/school"}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                {session?.user.role === "admin" ? "Admin" : "school"}
              </Link>
            )}

            <Link
              href="/"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/posts"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Contact
            </Link>
            {session ? (
              <form
                action={async () => {
                  "use server";
                  await auth.api.signOut({
                    headers: await headers(),
                  });
                  redirect("/");
                }}
              >
                <Button type="submit">Sign Out</Button>
              </form>
            ) : (
              <Link
                href="/sign-in"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900 dark:text-white"
            // onClick={() => setIsOpen(!isOpen)}
          >
            {/* {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />} */}
          </button>
        </div>

        {/* Mobile Menu */}
        {false && (
          <div className="md:hidden flex flex-col space-y-4 py-4 border-t border-gray-200 dark:border-gray-700">
            <Link
              href="/"
              className="block text-gray-700 dark:text-gray-300 px-4"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 dark:text-gray-300 px-4"
            >
              About
            </Link>
            <Link
              href="/services"
              className="block text-gray-700 dark:text-gray-300 px-4"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 dark:text-gray-300 px-4"
            >
              Contact
            </Link>
            <Link
              href="/sign-up"
              className="block text-gray-700 dark:text-gray-300 px-4"
            >
              Sign In
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
