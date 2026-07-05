"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"

export default function AuthButton() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <Link href="/write" className="text-purple-600 font-medium">Viết bài</Link>
        <img src={session.user?.image ?? ""} className="w-8 h-8 rounded-full" />
        <button onClick={() => signOut()} className="text-red-500 text-sm">Đăng xuất</button>
      </>
    )
  }

  return (
    <button onClick={() => signIn("google")} className="bg-purple-600 text-white px-4 py-2 rounded-lg">
      Đăng nhập
    </button>
  )
}