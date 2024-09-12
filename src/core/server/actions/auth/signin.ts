'use server'

import { db } from '@/core/server/db'
import { users } from '@/core/server/schema'
import bcryptjs from 'bcryptjs'
import { eq, or } from 'drizzle-orm'
import { signIn } from 'next-auth/react'

export async function loginUser(prevState: any, formData: FormData) {
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    if (!email || !password) {
        return { error: 'Email and password are required' }
    }

    try {
        const user = await db.select().from(users).where(
            or(
                eq(users.email, email),
                eq(users.username, email)
            )
        ).limit(1).then(res => res[0])

        if (!user) {
            return { error: 'Invalid email or password' }
        }

        const isPasswordValid = await bcryptjs.compare(password, user.password)

        if (!isPasswordValid) {
            return { error: 'Invalid email or password' }
        }

        const result = await signIn('credentials', {
            email: user.email,
            password,
            redirect: false,
        })

        if (result?.error) {
            return { error: 'Login failed. Please try again.' }
        }

        return { success: true, email: user.email }
    } catch (error) {
        console.error('Login error:', error)
        return { error: 'An unexpected error occurred. Please try again.' }
    }
}
