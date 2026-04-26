import { prisma } from "@/lib/prisma";

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  await prisma.property.delete({
    where: { id: Number(id) },
  });

  return Response.json({ success: true });
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await req.json();

  try {
    const updated = await prisma.property.update({
      where: { id: Number(id) },
      data: {
        title: body.title,
        location: body.location,
        price: body.price,
        size: body.size,
        image: body.image,
      },
    });

    return Response.json(updated);
  } catch (error) {
    return Response.json(
      { error: "Update failed" },
      { status: 500 }
    );
  }
}