export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[4px] text-green-400 text-sm">
              Premium Real Estate
            </p>

            <h1 className="text-5xl md:text-7xl font-bold text-white mt-4 leading-tight">
              Find Your Dream Property With Confidence
            </h1>

            <p className="text-gray-200 text-lg mt-6 max-w-xl">
              Buy premium lands, villas, homes, and investment
              opportunities with Bhudevi Estate.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="/listings"
                className="bg-green-700 hover:bg-green-800 text-white px-7 py-3 rounded-xl"
              >
                View Properties
              </a>

              <a
                href="/contact"
                className="border border-white text-white px-7 py-3 rounded-xl hover:bg-white/10 transition hover:text-gray-300 hover:border-gray-300"
              >
                Contact Us
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12 text-white max-w-xl">
              <div>
                <p className="text-3xl font-bold">100+</p>
                <p className="text-sm text-gray-300">Happy Clients</p>
              </div>

              <div>
                <p className="text-3xl font-bold">50+</p>
                <p className="text-sm text-gray-300">Properties</p>
              </div>

              <div>
                <p className="text-3xl font-bold">10+</p>
                <p className="text-sm text-gray-300">Years Trust</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}