import { createId } from '@paralleldrive/cuid2';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
    id: text('id').primaryKey().$defaultFn(() => createId()),
    firstName: text('first_name').notNull(),
    lastName: text('last_name').notNull(),
    username: text('username').unique(),
    email: text('email').notNull().unique(),
    password: text('password').notNull(),
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull().defaultNow(),
    updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull().defaultNow(),
});

export const accounts = sqliteTable('accounts', {
    id: text('id').primaryKey(),
    userId: text('userId').notNull().references(() => users.id),
    type: text('type').notNull(),
    provider: text('provider').notNull(),
    providerAccountId: text('providerAccountId').notNull(),
    refreshToken: text('refresh_token'),
    accessToken: text('access_token'),
    expiresAt: integer('expires_at'),
    tokenType: text('token_type'),
    scope: text('scope'),
    idToken: text('id_token'),
    sessionState: text('session_state'),
});

export const sessions = sqliteTable('sessions', {
    id: text('id').primaryKey(),
    userId: text('userId').notNull().references(() => users.id),
    expires: integer('expires', { mode: 'timestamp' }).notNull(),
    sessionToken: text('sessionToken').notNull().unique(),
});

export const verificationTokens = sqliteTable('verificationTokens', {
    identifier: text('identifier').notNull(),
    token: text('token').notNull().unique(),
    expires: integer('expires', { mode: 'timestamp' }).notNull(),
});
