import { db } from "@/core/server/db"
import { users } from "@/core/server/schema"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import bcryptjs from "bcryptjs"
import { eq } from "drizzle-orm"
import NextAuth, { NextAuthConfig } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
    adapter: DrizzleAdapter(db),
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) {
                    return null
                }

                const user = await db.select().from(users).where(eq(users.email, credentials.email)).limit(1).then(res => res[0])

                if (!user) {
                    return null
                }

                const isPasswordValid = await bcryptjs.compare(credentials.password, user.password)

                if (!isPasswordValid) {
                    return null
                }

                return {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                }
            }
        })
    ],
    callbacks: {
        async session({ session, user }: { session: any, user: any }) {
            if (session.user) {
                session.user.id = user.id;
            }
            return session;
        },
    },
    pages: {
        signIn: "/login"
    },
    session: {
        strategy: "jwt"
    }
}
 F
const handler = NextAuth(authOptions as NextAuthConfig)

export { handler as GET, handler as POST }
