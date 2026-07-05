

import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"
import PostList from "./PostList"
import AuthButton from "./AuthButton"


export default function Home() {

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-purple-600">📝 Blog App</h1>
        <div className="flex items-center gap-4">
          <AuthButton></AuthButton>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto p-8">
        <h2 className="text-2xl font-bold mb-6">Bài viết mới nhất</h2>
        <PostList></PostList>
      </div>
    </div>
  )
}