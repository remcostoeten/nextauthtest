'use server'

import { db } from '@/core/server/db'
import { users } from '@/core/server/schema'
import { createId } from '@paralleldrive/cuid2'
import bcryptjs from 'bcryptjs'
import { eq } from 'drizzle-orm'
export async function registerUser(prevState: any, formData: FormData) {
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const username = formData.get('username') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    if (!firstName || !lastName || !username || !email || !password) {
        return { error: 'All fields are required' }
    }

    if (password.length < 8) {
        return { error: 'Password must be at least 8 characters long' }
    }

    try {
        const existingUser = await db.select().from(users).where(eq(users.email, email)).limit(1)

        if (existingUser.length > 0) {
            return { error: 'User with this email or username already exists' }
        }

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        await db.insert(users).values({
            id: createId(),
            firstName,
            lastName,
            username,
            email,
            password: hashedPassword,
        })

        return { success: true }
    } catch (error) {
        console.error('Registration error:', error)
        return { error: 'Registration failed. Please try again.' }
    }
}
