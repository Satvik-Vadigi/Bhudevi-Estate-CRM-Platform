import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function HomePage() {
  const properties = await prisma.property.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
  });

  return (
    <main>

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1800"
          alt="Luxury Estate"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center">
          <div className="max-w-3xl text-white">

            <p className="uppercase tracking-[0.35em] text-green-400 text-sm mb-5">
              Bhudevi Estate
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Find Your Perfect
              <span className="text-green-400"> Property</span>
            </h1>

            <p className="mt-6 text-lg text-gray-200 max-w-2xl leading-8">
              Premium residential and investment properties curated for buyers and investors.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <Link
                href="/listings"
                className="bg-green-700 hover:bg-green-800 px-7 py-4 rounded-xl font-semibold"
              >
                Explore Listings
              </Link>

              <Link
                href="/contact"
                className="border border-white/30 hover:bg-white/10 px-7 py-4 rounded-xl font-semibold"
              >
                Contact Us
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="py-24 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex justify-between items-center mb-12">

            <h2 className="text-4xl md:text-5xl font-bold">
              Featured Properties
            </h2>

            <Link
              href="/listings"
              className="text-green-700 font-semibold"
            >
              View All →
            </Link>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {properties.map((property) => (

              <div
                key={property.id}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition"
              >

                <img
                  src={
                    property.image ||
                    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200"
                  }
                  alt={property.title}
                  className="h-64 w-full object-cover"
                />

                <div className="p-6">

                  <h3 className="text-2xl font-bold">
                    {property.title}
                  </h3>

                  <p className="text-gray-500 mt-2">
                    📍 {property.location}
                  </p>

                  <p className="text-green-700 font-bold text-xl mt-4">
                    ₹ {property.price}
                  </p>

                  <p className="text-gray-500 mt-2">
                    {property.size}
                  </p>

                  <Link
                    href={`/property/${property.id}`}
                    className="inline-block mt-6 bg-green-700 text-white px-5 py-3 rounded-xl"
                  >
                    View Details
                  </Link>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}
