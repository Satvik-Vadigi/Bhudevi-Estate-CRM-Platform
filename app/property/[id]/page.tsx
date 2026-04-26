import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PropertyDetailPage({
  params,
}: Props) {
  const { id } = await params;

  const property = await prisma.property.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!property) return notFound();

  return (
    <section className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Image */}
          <div className="overflow-hidden rounded-3xl shadow-xl bg-white">
            {property.image ? (
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-[520px] object-cover hover:scale-105 transition duration-700"
              />
            ) : (
              <div className="h-[520px] bg-gray-200" />
            )}
          </div>

          {/* Content */}
          <div>

            <p className="uppercase tracking-[0.3em] text-green-700 text-sm">
              Exclusive Opportunity
            </p>

            <h1 className="text-5xl font-bold mt-4 leading-tight">
              {property.title}
            </h1>

            <p className="text-gray-500 text-lg mt-5">
              📍 {property.location}
            </p>

            <p className="text-gray-500 mt-2">
              📐 {property.size}
            </p>

            <p className="text-green-700 text-5xl font-bold mt-8">
              $ {property.price}
            </p>

            <p className="text-gray-600 leading-8 mt-8 text-lg">
              A premium real estate opportunity located in a high-demand market.
              Ideal
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}