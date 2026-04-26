import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const inquiry = await prisma.inquiry.create({
      data: {
        name: body.name,
        phone: body.phone,
        email: body.email,
        message: body.message,
      },
    });

    return NextResponse.json(inquiry);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to save inquiry" },
      { status: 500 }
    );
  }
}