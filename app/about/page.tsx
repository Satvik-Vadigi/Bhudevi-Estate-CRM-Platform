import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center">
          <p className="uppercase tracking-[0.35em] text-green-700 text-sm">
            Our Legacy
          </p>

          <h1 className="text-5xl font-bold mt-4">
            Built on Trust. Driven by Opportunity.
          </h1>

          <p className="text-gray-500 mt-6 max-w-3xl mx-auto text-lg leading-8">
            Bhudevi Estate represents premium real estate opportunities,
            trusted relationships and long-term value creation through
            strategic property guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold">Experience</h3>
            <p className="text-gray-500 mt-4 leading-7">
              Built through decades of market understanding and trusted networks.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold">Vision</h3>
            <p className="text-gray-500 mt-4 leading-7">
              Connecting investors and families with premium opportunities.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold">Commitment</h3>
            <p className="text-gray-500 mt-4 leading-7">
              Transparent service, strategic advice and lasting relationships.
            </p>
          </div>

        </div>

        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="bg-green-700 text-white px-7 py-4 rounded-xl font-semibold"
          >
            Speak With Us
          </Link>
        </div>

      </div>
    </section>
  );
}