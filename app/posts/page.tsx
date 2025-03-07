import prisma from "@/lib/prisma";
import Link from "next/link";
import { CreatePost } from "../actions/action";

export default async function PostsPage() {
  const posts = await prisma.post.findMany();

  if (!posts || posts.length === 0) {
    return <div className="text-center text-gray-600">No posts available</div>;
  }

  const postCount = await prisma.post.count();
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white p-6 text-center">
        <h1 className="text-3xl font-bold">Posts List ({postCount})</h1>
        <p className="mt-2">Explore all the latest posts</p>
      </header>

      {/* Posts Grid */}
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <Link href={`/posts/${post.slug}`}>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 line-clamp-3">{post.content}</p>
                </div>
              </Link>
            </div>
          ))}

          <form action={CreatePost} className="flex flex-col gap-2">
            <input
              type="text"
              name="title"
              className="px-2 py-1 rounded-sm bg-white"
              placeholder="title"
            />
            <textarea
              name="content"
              placeholder="content"
              rows={5}
              className="px-2 py-1 rounded-sm bg-white"
            />
            <button
              type="submit"
              className="bg-gray-700 text-white py-2 rounded-sm"
            >
              Create Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
