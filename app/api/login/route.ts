import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const password = body.password;

    if (password !== "Bhudevi@123") {
      return NextResponse.json(
        { success: false, message: "Invalid password" },
        { status: 401 }
      );
    }

    const res = NextResponse.json({
      success: true,
    });

    res.cookies.set("admin_token", "bhudevi_admin", {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return res;
  } catch {
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}