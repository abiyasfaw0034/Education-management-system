import { getSession } from "@/lib/currebtSession";
import prisma from "@/lib/prisma";
import React from "react";

export default async function ListStudents() {
  // Get user session
  const session = await getSession();

  if (!session || !session.user) {
    return <p>Please log in to view students.</p>;
  }

  const schoolId = session.user.schoolId; // Get schoolId from session

  if (!schoolId) {
    return <p>You are not associated with any school.</p>;
  }

  // Fetch students directly using Prisma
  const students = await prisma.student.findMany({
    where: { schoolId },
  });

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-semibold text-center">List of Students</h2>
      {students.length === 0 ? (
        <p className="text-center text-gray-500">
          No students found for this school.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Date of Birth</th>
                <th className="px-4 py-2 text-left">Gender</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-2">
                    {student.firstName} {student.lastName}
                  </td>
                  <td className="px-4 py-2">
                    {student.dateOfBirth
                      ? new Date(student.dateOfBirth).toLocaleDateString()
                      : "N/A"}
                  </td>
                  <td className="px-4 py-2">
                    {student.gender || "Not specified"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
