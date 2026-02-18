import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

/**
 * GET /api/users/:id
 * ดึงข้อมูลผู้ใช้ตาม ID จากฐานข้อมูลและส่งกลับเป็น JSON
 */
export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params
    try {
        // ดึงข้อมูลผู้ใช้ตาม ID จากฐานข้อมูล
        const user = await prisma.user.findUnique({
            where: { id: Number(id) }
        })
        if (!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }
        // ส่งกลับข้อมูลผู้ใช้ในรูปแบบ JSON
        return NextResponse.json(user)
    } catch (error) {
        console.error("Error fetching user:", error)
        return NextResponse.json(
            { error: "Failed to fetch user" },
            { status: 500 }
        )
    }
}

/**
 * PUT /api/users/:id
 * รับข้อมูลผู้ใช้ที่ต้องการอัปเดตจาก body ของ request และอัปเดตข้อมูลในฐานข้อมูลตาม ID
 */
export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params

    try {
        const { name, email } = await request.json()

        // เช็คว่ามี id ที่ต้องการอัปเดตอยู่ในฐานข้อมูลหรือไม่
        const existingUser = await prisma.user.findUnique({
            where: { id: Number(id) }
        })
        if (!existingUser) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            )
        }

        // อัปเดตข้อมูลผู้ใช้ในฐานข้อมูลตาม ID
        const updatedUser = await prisma.user.update({
            where: { id: Number(id) },
            data: { name, email }
        })
        // ส่งกลับข้อมูลผู้ใช้ที่ถูกอัปเดตในรูปแบบ JSON
        return NextResponse.json(updatedUser)
    } catch (error) {
        console.error("Error updating user:", error)
        return NextResponse.json(
            { error: "Failed to update user" },
            { status: 500 }
        )
    }
}

/**
 * DELETE /api/users/:id
 * ลบผู้ใช้ตาม ID จากฐานข้อมูล
 */
export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params
    try {
        // เช็คว่ามี id ที่ต้องการลบอยู่ในฐานข้อมูลหรือไม่
        const existingUser = await prisma.user.findUnique({
            where: { id: Number(id) }
        })
        if (!existingUser) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            )
        }
        // ลบผู้ใช้จากฐานข้อมูลตาม ID
        await prisma.user.delete({
            where: { id: Number(id) }
        })
        // ส่งกลับข้อความยืนยันการลบในรูปแบบ JSON
        return NextResponse.json({ message: "User deleted successfully" })
    } catch (error) {
        console.error("Error deleting user:", error)
        return NextResponse.json(
            { error: "Failed to delete user" },
            { status: 500 }
        )
    }
}