import SchoolSideBar from "@/components/schoolSideBar";

export default function SchoolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      {/* Fixed Sidebar */}
      <div className="w-1/4 h-screen overflow-hidden">
        <SchoolSideBar />
      </div>

      {/* Scrollable Content */}
      <div className="w-3/4 h-screen overflow-y-auto bg-gray-300">
        {children}
      </div>
    </div>
  );
}
