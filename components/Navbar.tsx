"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[9999] backdrop-blur-xl bg-green-900/20 border-b border-white/20">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-green-500 font-bold text-xl"
        >
          Bhudevi Estate
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-white text-shadow-lg/30 items-center">
          <Link href="/" className="hover:text-green-400">
            Home
          </Link>

          <Link href="/listings" className="hover:text-green-400 hover:text-shadow-lg">
            Properties
          </Link>

          <Link href="/about" className="hover:text-green-400 hover:text-shadow-lg">
            About
          </Link>

          <Link href="/contact" className="hover:text-green-400 hover:text-shadow-lg">
            Contact
          </Link>

          <Link
            href="/contact"
            className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-lg text-sm text-shadow-lg"
          >
            Enquire Now
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-xl px-6 py-5 space-y-4 text-white">

          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="block"
          >
            Home
          </Link>

          <Link
            href="/listings"
            onClick={() => setOpen(false)}
            className="block"
          >
            Properties
          </Link>

          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="block"
          >
            About
          </Link>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block"
          >
            Contact
          </Link>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block bg-green-700 text-center py-3 rounded-xl"
          >
            Enquire Now
          </Link>

        </div>
      )}
    </header>
  );
}