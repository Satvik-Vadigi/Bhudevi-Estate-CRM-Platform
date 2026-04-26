"use client";

import { useState } from "react";

export default function AddPropertyPage() {
  const [form, setForm] = useState({
    title: "",
    location: "",
    price: "",
    size: "",
    image: "",
  });

  const [msg, setMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
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

    const res = await fetch("/api/properties", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setMsg("Property added successfully!");
      setForm({
        title: "",
        location: "",
        price: "",
        size: "",
        image: "",
      });
    } else {
      setMsg("Failed to add property.");
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold">
        Add New Property
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-4"
      >
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Property Title"
          className="w-full border p-3 rounded-lg"
          required
        />

        <input
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Location"
          className="w-full border p-3 rounded-lg"
          required
        />

        <input
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full border p-3 rounded-lg"
          required
        />

        <input
          name="size"
          value={form.size}
          onChange={handleChange}
          placeholder="Size"
          className="w-full border p-3 rounded-lg"
          required
        />

        <input
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="Image URLs (comma separated)"
          className="w-full border p-3 rounded-lg"
        />

        <button
          type="submit"
          className="w-full bg-green-700 text-white py-3 rounded-lg"
        >
          Add Property
        </button>

        {msg && (
          <p className="text-center text-green-700">
            {msg}
          </p>
        )}
      </form>
    </section>
  );
}