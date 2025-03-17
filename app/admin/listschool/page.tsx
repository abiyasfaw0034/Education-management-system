import prisma from "@/lib/prisma";
import React from "react";

export default async function ListSchool() {
  // Fetch all schools
  const schools = await prisma.school.findMany();

  if (!schools || schools.length === 0) {
    return (
      <div className="text-center text-gray-600 p-10">No schools available</div>
    );
  }

  return (
    <div className="p-10 space-y-6">
      <h2 className="text-3xl font-semibold text-center">List of Schools</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Address</th>
              <th className="px-4 py-2 text-left">Type</th>
              <th className="px-4 py-2 text-left">City</th>
              <th className="px-4 py-2 text-left">Country</th>
              <th className="px-4 py-2 text-left">Number of Students</th>
            </tr>
          </thead>
          <tbody>
            {schools.map((school) => (
              <tr key={school.id} className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">{school.name}</td>
                <td className="px-4 py-2">{school.address || "N/A"}</td>
                <td className="px-4 py-2">{school.type || "N/A"}</td>
                <td className="px-4 py-2">{school.city || "N/A"}</td>
                <td className="px-4 py-2">{school.country || "N/A"}</td>
                <td className="px-4 py-2">{school.numofStudents || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
