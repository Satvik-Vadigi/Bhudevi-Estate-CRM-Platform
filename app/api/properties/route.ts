import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const properties = await prisma.property.findMany({
      orderBy: { createdAt: "desc" },
    });

    return Response.json(properties);
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch properties" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const property = await prisma.property.create({
      data: {
        title: body.title,
        location: body.location,
        price: body.price,
        size: body.size,
        image: body.image || "",
      },
    });

    return Response.json(property);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return Response.json(
      { error: "Failed to create property" },
      { status: 500 }
    );
  }
}