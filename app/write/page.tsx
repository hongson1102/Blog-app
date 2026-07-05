"use client"

import { useSession } from "next-auth/react"
import { createPost } from "../actions/post"

export default function Write() {
  const { data: session } = useSession()

  if (!session) {
    return <div className="min-h-screen flex items-center justify-center">Vui lòng đăng nhập!</div>
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-6">Viết bài mới</h1>
        <form action={createPost} className="space-y-4">
          <input type="hidden" name="email" value={session.user?.email ?? ""} />
          <input 
            name="title" 
            placeholder="Tiêu đề" 
            className="w-full p-3 border rounded-lg"
            required
          />
          <textarea 
            name="content" 
            placeholder="Nội dung bài viết..." 
            rows={8}
            className="w-full p-3 border rounded-lg"
            required
          />
          <button type="submit" className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700">
            Đăng bài
          </button>
        </form>
      </div>
    </div>
  )
}