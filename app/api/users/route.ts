import {NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

/**
 * GET /api/users
 * ดึงข้อมูลผู้ใช้ทั้งหมดจากฐานข้อมูลและส่งกลับเป็น JSON
 */
export async function GET() {
    try {
        // ดึงข้อมูลผู้ใช้ทั้งหมดจากฐานข้อมูล
        const users = await prisma.user.findMany()
        // ส่งกลับข้อมูลผู้ใช้ในรูปแบบ JSON
        return NextResponse.json(users)
    } catch (error) {
        console.error("Error fetching users:", error)
        return NextResponse.json(
            { error: "Failed to fetch users" },
            { status: 500 }
        )
    }
}

/**
 * POST /api/users
 * รับข้อมูลผู้ใช้ใหม่จาก body ของ request และบันทึกลงฐานข้อมูล
 */
export async function POST(request: NextRequest) {
    try {
        const { name, email } = await request.json()

        // เช็คอีเมลว่ามีอยู่แล้วหรือไม่
        const existingUser = await prisma.user.findUnique({
            where: { email }
        })
        if (existingUser) {
            return NextResponse.json(
                { error: "Email already exists" },
                { status: 400 }
            )
        }

        // สร้างผู้ใช้ใหม่ในฐานข้อมูล
        const newUser = await prisma.user.create({
            data: { name, email }
        })
        // ส่งกลับข้อมูลผู้ใช้ที่ถูกสร้างใหม่ในรูปแบบ JSON
        return NextResponse.json(newUser, { status: 201 })
    } catch (error) {
        console.error("Error creating user:", error)
        return NextResponse.json(
            { error: "Failed to create user" },
            { status: 500 }
        )
    }
}