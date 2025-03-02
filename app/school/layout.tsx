import SchoolSideBar from "@/components/schoolSideBar";

export default function SchoolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-4 h-screen">
      <div className="my-20 col-span-1">
        <SchoolSideBar />
      </div>
      <div className="bg-gray-300 col-span-3 p-32">{children}</div>
    </div>
  );
}
