import { prisma } from "@/lib/prisma"
import Link from "next/link"

export default async function PostList() {
  const posts = await prisma.post.findMany({
    include: { author: true },
    orderBy: { createdAt: "desc" }
  })

  return (
    <div className="space-y-4">
      {posts.map(post => (
        <Link key={post.id} href={`/posts/${post.id}`}>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
            <p className="text-gray-500 line-clamp-2 mb-2">{post.content}</p>
            <p className="text-sm text-gray-400">Bởi {post.author.name}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}