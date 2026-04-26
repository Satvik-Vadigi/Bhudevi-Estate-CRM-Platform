import Link from "next/link";

export default function HomePage() {
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
              Global Luxury Real Estate
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Acquire Exceptional
              <span className="text-green-400"> Properties</span>
            </h1>

            <p className="mt-6 text-lg text-gray-200 max-w-2xl leading-8">
              Curated villas, penthouses, beachfront estates and elite investment opportunities across premium global markets.
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
                Speak With Advisor
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-white py-14 border-b">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 className="text-4xl font-bold text-green-700">50+</h3>
            <p className="text-gray-500 mt-2">Years Legacy Network</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-green-700">100+</h3>
            <p className="text-gray-500 mt-2">Qualified Investors</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-green-700">24/7</h3>
            <p className="text-gray-500 mt-2">Private Assistance</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-green-700">Global</h3>
            <p className="text-gray-500 mt-2">Premium Opportunities</p>
          </div>

        </div>
      </section>

      {/* FEATURED */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured Collection
            </h2>

            <Link
              href="/listings"
              className="text-green-700 font-semibold"
            >
              View All →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[1].map((item) => (
              <div
                key={item}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition"
              >
                <img
                  src="https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?q=80&w=1400"
                  className="h-64 w-full object-cover hover:scale-105 transition duration-500"
                />

                <div className="p-7">
                  <h3 className="text-2xl font-bold">
                    Waterfront Residence
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Dubai Marina, UAE
                  </p>

                  <p className="text-green-700 font-bold text-xl mt-4">
                    $3,200,000
                  </p>

                  <Link
                    href="/listings"
                    className="inline-block mt-6 bg-green-700 text-white px-5 py-3 rounded-xl"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}

            {[1].map((item) => (
              <div
                key={item}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition"
              >
                <img
                  src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1600"
                  className="h-64 w-full object-cover hover:scale-105 transition duration-500"
                />

                <div className="p-7">
                  <h3 className="text-2xl font-bold">
                    Downtown Skyline Penthouse
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Dubai Marina, UAE
                  </p>

                  <p className="text-green-700 font-bold text-xl mt-4">
                    $3,200,000
                  </p>

                  <Link
                    href="/listings"
                    className="inline-block mt-6 bg-green-700 text-white px-5 py-3 rounded-xl"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}

            {[1].map((item) => (
              <div
                key={item}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition"
              >
                <img
                  src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1600"
                  className="h-64 w-full object-cover hover:scale-105 transition duration-500"
                />

                <div className="p-7">
                  <h3 className="text-2xl font-bold">
                    Elite Marina Apartment
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Doha, Qatar
                  </p>

                  <p className="text-green-700 font-bold text-xl mt-4">
                    $1,980,000
                  </p>

                  <Link
                    href="/listings"
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

      {/* WHY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold">
            Why Bhudevi Estate
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            Trusted relationships, premium sourcing, investor-first guidance and confidential service.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            <div className="p-8 border rounded-3xl">
              <h3 className="text-xl font-bold">
                Curated Opportunities
              </h3>
              <p className="text-gray-500 mt-3">
                Only selective premium listings with strong market potential.
              </p>
            </div>

            <div className="p-8 border rounded-3xl">
              <h3 className="text-xl font-bold">
                Wealth-Oriented Advice
              </h3>
              <p className="text-gray-500 mt-3">
                Decisions focused on appreciation, security and long-term upside.
              </p>
            </div>

            <div className="p-8 border rounded-3xl">
              <h3 className="text-xl font-bold">
                Private Guidance
              </h3>
              <p className="text-gray-500 mt-3">
                Confidential consultations with fast response support.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-green-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-5xl font-bold">
            Ready For Your Next Move?
          </h2>

          <p className="mt-5 text-lg text-green-100">
            Speak with our team for premium opportunities and private guidance.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-8 bg-white text-green-700 px-7 py-4 rounded-xl font-bold"
          >
            Book Consultation
          </Link>

        </div>
      </section>

    </main>
  );
}