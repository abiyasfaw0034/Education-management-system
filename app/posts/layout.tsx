import Link from "next/link";

export default function PostsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-4 h-screen">
      <div className="my-20 col-span-1">
        <div className="p-10">SideBar or smtg </div>
        <Link className="p-10 bg-yellow-300" href={"/posts"}>
          Posts
        </Link>
      </div>
      <div className="bg-gray-300 col-span-3 ">{children}</div>
    </div>
  );
}
