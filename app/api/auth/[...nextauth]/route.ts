import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { prisma } from "@/lib/prisma"

const handler = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  callbacks: {
    async signIn({ user }) {
      const existing = await prisma.user.findUnique({
        where: { email: user.email! }
      })
      if (!existing) {
        await prisma.user.create({
          data: {
            name: user.name!,
            email: user.email!,
            image: user.image
          }
        })
      }
      return true
    }
  }
})

export { handler as GET, handler as POST }