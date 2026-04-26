import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = body.name?.trim() || "";
    const phone = body.phone?.trim() || "";
    const email = body.email?.trim() || "";
    const property = body.property?.trim() || "";
    const message = body.message?.trim() || "";

    /* Required */
    if (!name || !phone) {
      return NextResponse.json(
        {
          success: false,
          error: "Name and phone are required.",
        },
        { status: 400 }
      );
    }

    /* Name length */
    if (name.length < 2) {
      return NextResponse.json(
        {
          success: false,
          error: "Enter valid full name.",
        },
        { status: 400 }
      );
    }

    /* Phone validation */
    const cleanPhone = phone.replace(/\D/g, "");

    if (cleanPhone.length < 10 || cleanPhone.length > 15) {
      return NextResponse.json(
        {
          success: false,
          error: "Enter valid phone number.",
        },
        { status: 400 }
      );
    }

    /* Email validation (optional) */
    if (email) {
      const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        return NextResponse.json(
          {
            success: false,
            error: "Enter valid email address.",
          },
          { status: 400 }
        );
      }
    }

    /* Duplicate recent lead check */
    const existingLead =
      await prisma.lead.findFirst({
        where: {
          phone: cleanPhone,
        },
        orderBy: {
          createdAt: "desc",
        },
      });

    if (existingLead) {
      const oldTime = new Date(
        existingLead.createdAt
      ).getTime();

      const now = Date.now();

      const diffMinutes =
        (now - oldTime) / 1000 / 60;

      if (diffMinutes < 30) {
        return NextResponse.json(
          {
            success: false,
            error:
              "You already submitted recently. Please wait.",
          },
          { status: 400 }
        );
      }
    }

    /* Save lead */
    const lead = await prisma.lead.create({
      data: {
        name,
        phone: cleanPhone,
        email,
        property,
        message,
        status: "New",
      },
    });

    /* Owner WhatsApp Alert */
    const ownerPhone = "919876543210"; // replace

    const waMessage = `
🔥 New Lead - Bhudevi Estate

Name: ${name}
Phone: ${cleanPhone}
Email: ${email || "N/A"}
Property: ${property || "General Inquiry"}

Message:
${message || "No message"}
    `.trim();

    const whatsappUrl = `https://wa.me/${ownerPhone}?text=${encodeURIComponent(
      waMessage
    )}`;

    return NextResponse.json(
      {
        success: true,
        message: "Lead submitted successfully.",
        lead,
        whatsappUrl,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to save lead.",
      },
      { status: 500 }
    );
  }
}