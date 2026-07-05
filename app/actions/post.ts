"use server"

import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

export async function createPost(formData: FormData) {
  const title = formData.get("title") as string
  const content = formData.get("content") as string
  const email = formData.get("email") as string

  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) return

  await prisma.post.create({
    data: {
      title,
      content,
      authorId: user.id
    }
  })
  revalidatePath("/")
  redirect("/")
}