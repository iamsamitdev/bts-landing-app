import {NextRequest, NextResponse } from "next/server";

// GET /api/hello/:id
export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    return NextResponse.json({ 
        message: `Hello, World! Your ID is ${id}` 
    });
}