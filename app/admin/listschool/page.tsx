import prisma from "@/lib/prisma";
import React from "react";
export default async function ListSchool() {
  const schools = await prisma.school.findMany();

  if (!schools || schools.length === 0) {
    return (
      <div className="text-center text-gray-600 p-10">No schools available</div>
    );
  }

  const schoolscount = await prisma.post.count();

  return (
    <div className="p-10">
      <div>list of students{schoolscount}</div>
      <div>
        {schools.map((school) => (
          <div key={school.id}>{school.name}</div>
        ))}
      </div>
    </div>
  );
}
