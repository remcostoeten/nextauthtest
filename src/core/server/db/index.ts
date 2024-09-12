import { createClient } from '@libsql/client'
import { drizzle } from 'drizzle-orm/libsql'

const client = createClient({
    url: 'libsql://settling-horridus-remcostoeten.turso.io',
    authToken: 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MjYxNjcxNjksImlkIjoiMThiYTA1MWYtMzQ1Mi00Mjc3LWIwYjMtNmViNDA1ZDUyY2M5In0.Lvmh3MQxDwY7S-HkD9V9RMvtJ_uozhZHqOonKj8P64i6RzDIrLdTCPKEz04Oq-sh8T8Ao5-vXCfp040frYkeAw'
})
export const db = drizzle(client)
