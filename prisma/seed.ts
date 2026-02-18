import "dotenv/config"
import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from "../lib/generated/prisma/client"

const connectionString = `${process.env.DATABASE_URL}`
const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

async function main() {
    console.log("🌱 Seeding database...")

    // ลบข้อมูลเดิม (ถ้ามี) — ลบ Post ก่อน เพราะมี Foreign Key
    await prisma.post.deleteMany()
    await prisma.user.deleteMany()

    // ===== สร้าง User พร้อม Posts =====
    const alice = await prisma.user.create({
        data: {
            name: "Alice",
            email: "alice@prisma.io",
            posts: {
                create: [
                    {
                        title: "Hello World",
                        content: "This is my first post!",
                        published: true,
                    },
                    {
                        title: "My Second Post",
                        content: "Learning Prisma is fun!",
                        published: false,
                    },
                ],
            },
        },
        include: { posts: true },
    })

    const bob = await prisma.user.create({
        data: {
            name: "Bob",
            email: "bob@prisma.io",
            posts: {
                create: {
                    title: "Bob's First Post",
                    content: "Hi from Bob!",
                    published: true,
                },
            },
        },
        include: { posts: true },
    })

    console.log("✅ Created user Alice with", alice.posts.length, "posts")
    console.log("✅ Created user Bob with", bob.posts.length, "posts")
    console.log("🎉 Seed completed!")
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })