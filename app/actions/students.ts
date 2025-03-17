"use server";

import { getSession } from "@/lib/currebtSession";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// Create a new student
export async function createStudent(formData: FormData) {
  const session = await getSession();

  const schoolId = session?.user?.schoolId;
  if (!schoolId) {
    throw new Error("You are not associated with any school.");
  }

  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const dateOfBirth = formData.get("dateOfBirth") as string | null;
  const gender = formData.get("gender") as string | null;

  await prisma.student.create({
    data: {
      firstName,
      lastName,
      dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : null,
      gender,
      schoolId,
    },
  });

  revalidatePath("/school/liststudents");
}

// Fetch students based on schoolId from session
export async function fetchStudents() {
  const session = await getSession();

  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  const schoolId = session.user.schoolId;
  if (!schoolId) {
    throw new Error("You are not associated with any school.");
  }

  return prisma.student.findMany({ where: { schoolId } });
}
