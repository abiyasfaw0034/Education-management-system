import AdminSideBar from "@/components/adminSideBar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-4 h-screen">
      <div className="my-20 col-span-1">
        <AdminSideBar />
      </div>
      <div className="bg-gray-300 col-span-3 ">{children}</div>
    </div>
  );
}
