import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from "./generated/prisma/client"

// ดึง Connection String จาก .env
const connectionString = `${process.env.DATABASE_URL}`

// Singleton Pattern: เก็บ instance ไว้ใน globalThis
// เพื่อไม่ให้สร้าง connection ใหม่ทุกครั้งที่ Hot Reload
const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined
}

// สร้าง adapter สำหรับ PostgreSQL
const adapter = new PrismaPg({ connectionString })

// ใช้ instance เดิมถ้ามี ไม่งั้นสร้างใหม่
export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter })

// ใน development: เก็บ instance ไว้ใน globalThis
if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma
}