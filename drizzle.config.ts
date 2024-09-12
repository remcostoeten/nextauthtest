import type { Config } from 'drizzle-kit'

/** @type {import('drizzle-kit').Config} */
export default {
  driver: 'turso',
  schema: 'src/core/server/schema/index.ts',
  out: 'src/core/server/migrations',
  dialect: 'sqlite',
  dbCredentials: {
    url: 'libsql://settling-horridus-remcostoeten.turso.io',
    authToken: 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MjYxNjcxNjksImlkIjoiMThiYTA1MWYtMzQ1Mi00Mjc3LWIwYjMtNmViNDA1ZDUyY2M5In0.Lvmh3MQxDwY7S-HkD9V9RMvtJ_uozhZHqOonKj8P64i6RzDIrLdTCPKEz04Oq-sh8T8Ao5-vXCfp040frYkeAw'
  },
  verbose: true
} satisfies Config
