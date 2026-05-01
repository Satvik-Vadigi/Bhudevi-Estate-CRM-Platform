import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-2xl font-bold text-green-400">
            Bhudevi Estate
          </h2>
          <p className="text-gray-400 mt-4 leading-7">
            Premium real estate opportunities, trusted relationships and modern investment guidance.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg">Company</h3>
          <div className="mt-4 space-y-3 text-gray-400">
            <Link href="/">Home</Link><br />
            <Link href="/listings">Listings</Link><br />
            <Link href="/about">About</Link><br />
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg">Services</h3>
          <div className="mt-4 space-y-3 text-gray-400">
            <p>Luxury Homes</p>
            <p>Investment Deals</p>
            <p>Commercial Assets</p>
            <p>Private Advisory</p>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg">Contact</h3>
          <div className="mt-4 space-y-3 text-gray-400">
            <p>+91 999999999</p>
            <p>bhudevi.notworking@gmail.com</p>
            <p>Available 24/7</p>
          </div>
        </div>

      </div>

      <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500 px-6">
        © 2026 Bhudevi Estate. All rights reserved.
      </div>
    </footer>
  );
}
