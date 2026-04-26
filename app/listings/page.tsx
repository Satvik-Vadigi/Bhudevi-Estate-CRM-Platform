import { prisma } from "@/lib/prisma";
import ListingsClient from "@/components/ListingsClient";

export default async function ListingsPage() {
  const properties = await prisma.property.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <section className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center">
          <p className="uppercase tracking-[0.35em] text-green-700 text-sm">
            Exclusive Collection
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-4">
            Global Premium Listings
          </h1>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto text-lg">
            Discover curated villas, penthouses, waterfront homes and elite investment opportunities worldwide.
          </p>
        </div>

        {/* Functional Filters + Listings */}
        <ListingsClient properties={properties} />

      </div>
    </section>
  );
}