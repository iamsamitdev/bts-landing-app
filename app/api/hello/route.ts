import {NextRequest, NextResponse } from "next/server";

// GET /api/hello
export async function GET() {
    return NextResponse.json({ message: "Hello, World!" });
}

// POST /api/hello
export async function POST(request: NextRequest) {
    const { name, email, tel } = await request.json();
    return NextResponse.json({ 
        message: `Hello, ${name}! Email: ${email} Tel: ${tel}` 
    });
}

// PUT /api/hello
export async function PUT(request: NextRequest) {
    const { name, email, tel } = await request.json();
    return NextResponse.json({ message: `Updated name to ${name} Email: ${email} Tel: ${tel}` });
}

// PATCH /api/hello
export async function PATCH(request: NextRequest) {
    const { name, email, tel } = await request.json();
    return NextResponse.json({ message: `Partially updated name to ${name} Email: ${email} Tel: ${tel}` });
}

// DELETE /api/hello
export async function DELETE() {
    return NextResponse.json({ message: "Deleted resource" });
}