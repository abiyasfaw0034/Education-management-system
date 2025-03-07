import prisma from "@/lib/prisma";
import React from "react";

export default async function PostPage({ params }: { params: string }) {
  const { slug } = await params;
  const post = await prisma.post.findUnique({
    where: {
      slug: slug,
    },
  });
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
