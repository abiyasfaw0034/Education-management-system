import AdminSideBar from "@/components/adminSideBar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      {/* Fixed Sidebar */}
      <div className="w-1/4 h-screen overflow-hidden">
        <AdminSideBar />
      </div>

      {/* Scrollable Content */}
      <div className="w-3/4 h-screen overflow-y-auto bg-gray-300">
        {children}
      </div>
    </div>
  );
}

// <div className="grid grid-cols-4 h-screen">
//   <div className="my-20 col-span-1">
//     <AdminSideBar />
//   </div>
//   <div className="bg-gray-300 col-span-3 ">{children}</div>
// </div>

// import SchoolSideBar from "@/components/schoolSideBar";

// export default function SchoolLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <>
//       <div className="grid h-screen overflow-hidden grid-rows-[auto,1fr] grid-cols-[auto,1fr] text-black dark:text-white bg-white dark:bg-black">
//         {/* Sidebar */}
//         <div
//           className="row-span-full w-[25rem] bg-gray-100 dark:bg-black border-r border-r-gray-200 dark:border-r-gray-700"
//           id="sidebar"
//         >
//           <SchoolSideBar />
//         </div>

//         {/* Navbar */}
//         <div className="bg-gray-100 dark:bg-gray-800">heyy</div>

//         {/* Main Content */}
//         <div className="overflow-y-scroll  bg-gray-200 dark:bg-gray-900">
//           <main className="mx-auto h-full p-4">{children}</main>
//         </div>
//       </div>
//     </>
//   );
// }
// {
//   /* <div className="flex h-screen">
//       {/* Fixed Sidebar */
// }
// <div className="w-1/4 h-screen overflow-hidden">
//   <SchoolSideBar />
// </div>;

// //   {/* Scrollable Content */}
// //   <div className="w-3/4 h-screen overflow-y-auto bg-gray-300">
// //     {children}
// //   </div>
// // </div> */}
