import { prisma } from "@/lib/prisma"

export default async function PostDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  
  const post = await prisma.post.findUnique({
    where: { id: parseInt(id) },
    include: { author: true }
  })

  if (!post) {
    return <div className="min-h-screen flex items-center justify-center">Không tìm thấy bài viết!</div>
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-400 mb-6">Bởi {post.author.name}</p>
        <p className="text-gray-700 whitespace-pre-wrap">{post.content}</p>
      </div>
    </div>
  )
}