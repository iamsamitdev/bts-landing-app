import "dotenv/config"
import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from "../lib/generated/prisma/client"

const connectionString = `${process.env.DATABASE_URL}`
const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

async function main() {
    console.log("🧪 Testing Prisma Client Queries...\n")

    // ===== 📖 READ — ดึงข้อมูลทั้งหมด =====
    console.log("=== 1. findMany() — ดึง Users ทั้งหมด ===")
    const allUsers = await prisma.user.findMany()
    console.log("Users:", allUsers)
    console.log(`จำนวน Users: ${allUsers.length}\n`)

     // ===== 📖 READ — ดึงข้อมูลพร้อม Relation =====
    console.log("=== 2. findMany() + include — ดึง Users พร้อม Posts ===")
    const usersWithPosts = await prisma.user.findMany({
        include: { posts: true },  // รวม posts ของแต่ละ user
    })
    for (const u of usersWithPosts) {
        console.log(`  👤 ${u.name} (${u.email}) — ${u.posts.length} posts`)
    }
    console.log()

     // ===== 📖 READ — ดึงข้อมูลตาม id =====
    console.log("=== 3. findUnique() — ดึง User ที่ id = 2 ===")
    const user = await prisma.user.findUnique({
        where: { id: 2 },
    })
    console.log("User #2:", user)
    console.log()

    // ===== 📖 READ — ค้นหาตามเงื่อนไข =====
    console.log("=== 4. findMany() + where — ดึง Posts ที่เผยแพร่แล้ว ===")
    const publishedPosts = await prisma.post.findMany({
        where: { published: true },
    })
    console.log("Published Posts:", publishedPosts.length, "posts")
    for (const p of publishedPosts) {
        console.log(`  📝 "${p.title}" (published: ${p.published})`)
    }
    console.log()

    // ===== ✏️ CREATE — สร้างข้อมูลใหม่ มากกว่า 1 รายการ =====
    // console.log("=== 5. createMany() — สร้าง Users ใหม่ ===")
    // const newUsers = await prisma.user.createMany({
    //     data: [
    //         { name: "Charlie", email: "charlie@test.io" },
    //         { name: "Dave", email: "dave@test.io" },
    //     ],
    // })
    // console.log("Created:", newUsers)
    // console.log()

    // ===== ✏️ CREATE — สร้างพร้อม Relation (Nested Create) =====
    // console.log("=== 6. create() + nested — สร้าง User พร้อม Post ===")
    // const userWithPost = await prisma.user.create({
    //     data: {
    //         name: "Diana",
    //         email: "diana@test.io",
    //         posts: {
    //             create: { title: "Diana's Post", content: "สวัสดี!", published: true },
    //         },
    //     },
    //     include: { posts: true },
    // })
    // console.log(`Created: ${userWithPost.name} with ${userWithPost.posts.length} post`)
    // console.log()

     // ===== 🔄 UPDATE — อัปเดตข้อมูล =====
    // console.log("=== 7. update() — อัปเดต User ===")
    // const updatedUser = await prisma.user.update({
    //     where: { id: 3 },
    //     data: { name: "Charlie Updated" },
    // })
    // console.log("Updated:", updatedUser)
    // console.log()

    // ===== 📊 COUNT — นับจำนวน =====
    console.log("=== 8. count() — นับจำนวนข้อมูล ===")
    const userCount = await prisma.user.count()
    const postCount = await prisma.post.count()
    const publishedCount = await prisma.post.count({
        where: { published: true },
    })
    console.log(`Users: ${userCount}, Posts: ${postCount}, Published: ${publishedCount}`)
    console.log()

     // ===== 🔍 FILTER & SORT — กรองและเรียงลำดับ =====
    console.log("=== 9. findMany() + orderBy + take — กรองและเรียง ===")
    const filteredPosts = await prisma.post.findMany({
        where: { published: true },
        orderBy: { id: "desc" },   // เรียงจากใหม่ไปเก่า
        take: 3,                    // จำกัด 3 รายการ
        include: {
            author: { select: { name: true } },
        },
    })
    for (const p of filteredPosts) {
        console.log(`  📝 "${p.title}" by ${p.author.name}`)
    }
    console.log()

     // ===== 🗑️ DELETE — ลบข้อมูลที่สร้างขึ้นมาทดสอบ =====
    console.log("=== 10. delete() — ลบข้อมูลทดสอบ ===")

    // ลบ Posts ก่อน (เพราะมี Foreign Key)
    // ใช้ deleteMany เพื่อไม่ให้ error ถ้าไม่มีข้อมูล
    await prisma.post.deleteMany({ where: { authorId: 3 } })
    await prisma.user.deleteMany({ where: { id: 3 } })
    console.log(`Deleted: User #3 and their posts (if existed)`)

    await prisma.post.deleteMany({ where: { authorId: 2 } })
    await prisma.user.deleteMany({ where: { id: 2 } })
    console.log(`Deleted: User #2 and their posts (if existed)`)
    console.log()

    // ===== ตรวจสอบสถานะหลังลบ =====
    const finalCount = await prisma.user.count()
    console.log(`✅ Final user count: ${finalCount} (กลับสู่สถานะเดิม)`)
    console.log("🎉 All tests passed!")
}

main()
    .catch((e) => {
        console.error("❌ Error:", e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })