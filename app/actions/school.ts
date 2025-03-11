/* eslint-disable react-hooks/rules-of-hooks */
// app/actions/school.ts
"use server";

import { authClient } from "@/lib/auth-client";
import prisma from "@/lib/prisma";
import { randomUUID } from "crypto";
import { revalidatePath } from "next/cache";

export async function CreateSchool(formData: FormData) {
  const schoolName = formData.get("schoolName") as string;
  const schoolType = formData.get("schoolType") as string;
  const address = formData.get("address") as string;
  const city = formData.get("city") as string;
  const numofStudents = formData.get("numOfStudents") as string;
  const userName = formData.get("userName") as string;
  const userEmail = formData.get("userEmail") as string;
  const userPassword = formData.get("userPassword") as string;

  const uid = randomUUID();

  await prisma.school.create({
    data: {
      id: uid,
      name: schoolName,
      type: schoolType,
      address,
      city,
      numofStudents,
    },
  });

  const { data, error } = await authClient.signUp.email(
    {
      name: userName,
      email: userEmail,
      password: userPassword,
      role: "user",
      schoolId: uid,
    },
    {
      onRequest: () => {
        console.log("making the user");
      },
      onSuccess: () => {
        revalidatePath("/school");
      },
      onError: (ctx) => {
        console.log("error", ctx);
      },
    }
  );

  revalidatePath("/admin/listschool");
  // For testing
  console.log({
    schoolName,
    schoolType,
    address,
    city,
    numofStudents,
    userName,
    userEmail,
    userPassword,
  });
}

// try {
//   const response = await fetch("/api/auth/signup", {
//     method: "POST",
//     body: JSON.stringify({
//       name: userName,
//       email: userEmail,
//       password: userPassword,
//       role: "user",
//       schoolId: uid,
//     }),
//   });

//   if (!response.ok) {
//     throw new Error("can't sign up");
//   }
// } catch (error) {
//   console.log((error as Error).message);
// } finally {
//   console.log("suceess");
// }
