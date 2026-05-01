"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    property: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");

    const res = await fetch("/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok) {
      setSuccess("Inquiry submitted successfully!");

      setForm({
        name: "",
        phone: "",
        email: "",
        property: "",
        message: "",
      });

      if (data.whatsappUrl) {
        window.open(data.whatsappUrl, "_blank");
      }
    } else {
      setSuccess(data.error || "Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div>

          <p className="uppercase tracking-[0.35em] text-green-700 text-sm">
            Private Consultation
          </p>

          <h1 className="text-5xl font-bold mt-4 leading-tight">
            Let’s Secure Your Next
            <span className="text-green-700"> Property Move</span>
          </h1>

          <p className="text-gray-600 mt-6 text-lg leading-8">
            Speak with our team regarding villas, penthouses,
            investment opportunities, luxury residences and
            exclusive market access.
          </p>

          {/* Trust Boxes */}
          <div className="grid grid-cols-2 gap-4 mt-10">

            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="text-2xl font-bold text-green-700">
                Fast
              </h3>
              <p className="text-gray-500 mt-2 text-sm">
                Quick response support
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="text-2xl font-bold text-green-700">
                Private
              </h3>
              <p className="text-gray-500 mt-2 text-sm">
                Confidential inquiries
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="text-2xl font-bold text-green-700">
                Premium
              </h3>
              <p className="text-gray-500 mt-2 text-sm">
                Curated opportunities
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="text-2xl font-bold text-green-700">
                Trusted
              </h3>
              <p className="text-gray-500 mt-2 text-sm">
                Relationship-first service
              </p>
            </div>

          </div>

          <a
            href="https://wa.me/+91999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-green-700 hover:bg-green-800 text-white px-7 py-4 rounded-xl font-semibold"
          >
            WhatsApp Instantly
          </a>

        </div>

        {/* Right Form */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">

          <h2 className="text-3xl font-bold">
            Request Consultation
          </h2>

          <p className="text-gray-500 mt-2">
            Submit your details and we’ll reach out shortly.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 mt-8"
          >

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full border rounded-xl p-4"
            />

            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full border rounded-xl p-4"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full border rounded-xl p-4"
            />

            <input
              type="text"
              name="property"
              value={form.property}
              onChange={handleChange}
              placeholder="Property of Interest"
              className="w-full border rounded-xl p-4"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us what you're looking for..."
              rows={5}
              className="w-full border rounded-xl p-4"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-xl font-semibold"
            >
              {loading
                ? "Submitting..."
                : "Request Consultation"}
            </button>

            {success && (
              <p className="text-center text-green-700 font-medium">
                {success}
              </p>
            )}

          </form>

        </div>

      </div>
    </section>
  );
}
