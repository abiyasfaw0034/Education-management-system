"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function CreatePost(formdata: FormData) {
  await prisma.post.create({
    data: {
      title: formdata.get("title") as string,
      slug: (formdata.get("title") as string)
        .replace(/\s+/g, "-")
        .toLowerCase(),
      content: formdata.get("content") as string,
    },
  });
  revalidatePath("/posts");
}
export async function EditPost(formdata: FormData, id: string) {
  await prisma.post.update({
    where: { id },
    data: {
      title: formdata.get("title") as string,
      slug: (formdata.get("title") as string)
        .replace(/\s+/g, "-")
        .toLowerCase(),
      content: formdata.get("content") as string,
    },
  });

  revalidatePath("/posts");
}

export async function name(id: string) {
  await prisma.post.delete({
    where: { id },
  });

  revalidatePath("/posts");
}
