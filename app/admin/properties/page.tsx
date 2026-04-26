"use client";

import { useEffect, useState } from "react";

type Property = {
  id: number;
  title: string;
  location: string;
  price: string;
  size: string;
  image?: string;
};

export default function AdminPropertiesPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  const [editingProperty, setEditingProperty] =
    useState<Property | null>(null);

  const [form, setForm] = useState({
    title: "",
    location: "",
    price: "",
    size: "",
    image: "",
  });

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    const res = await fetch("/api/properties");
    const data = await res.json();

    setProperties(data);
    setLoading(false);
  };

  const handleDelete = async (id: number) => {
    await fetch(`/api/properties/${id}`, {
      method: "DELETE",
    });

    setProperties((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const handleUpdate = async () => {
    if (!editingProperty) return;

    await fetch(`/api/properties/${editingProperty.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    setEditingProperty(null);
    fetchProperties();
  };

  return (
    <section className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

          <div>
            <p className="uppercase tracking-[0.35em] text-green-700 text-sm">
              Listing Operations
            </p>

            <h1 className="text-5xl font-bold mt-3">
              Property Management
            </h1>

            <p className="text-gray-500 mt-3">
              Edit, remove and maintain live listings.
            </p>
          </div>

          <div className="bg-white rounded-2xl px-6 py-4 shadow-sm">
            <p className="text-gray-500 text-sm">
              Total Listings
            </p>

            <h2 className="text-3xl font-bold text-green-700">
              {properties.length}
            </h2>
          </div>

        </div>

        {/* Body */}
        {loading ? (
          <p className="text-center mt-14">
            Loading...
          </p>
        ) : properties.length === 0 ? (
          <p className="text-center mt-14 text-gray-500">
            No properties found.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

            {properties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-3xl shadow-sm overflow-hidden"
              >

                {/* Image */}
                {property.image ? (
                  <img
                    src={property.image}
                    alt={property.title}
                    className="h-56 w-full object-cover"
                  />
                ) : (
                  <div className="h-56 bg-gray-200" />
                )}

                {/* Content */}
                <div className="p-6">

                  <h2 className="text-2xl font-bold">
                    {property.title}
                  </h2>

                  <p className="text-gray-500 mt-2">
                    {property.location}
                  </p>

                  <p className="text-green-700 font-bold text-2xl mt-4">
                    {property.price}
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    {property.size}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mt-6">

                    <button
                      onClick={() => {
                        setEditingProperty(property);

                        setForm({
                          title: property.title,
                          location: property.location,
                          price: property.price,
                          size: property.size,
                          image: property.image || "",
                        });
                      }}
                      className="bg-blue-600 text-white py-3 rounded-xl font-semibold"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        handleDelete(property.id)
                      }
                      className="bg-red-600 text-white py-3 rounded-xl font-semibold"
                    >
                      Delete
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>
        )}

        {/* Modal */}
        {editingProperty && (
          <div className="fixed inset-0 bg-black/60 z-[9999] flex items-center justify-center px-4">

            <div className="bg-white rounded-3xl p-8 w-full max-w-xl">

              <h2 className="text-3xl font-bold">
                Edit Property
              </h2>

              <div className="space-y-4 mt-6">

                <input
                  value={form.title}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      title: e.target.value,
                    })
                  }
                  placeholder="Title"
                  className="w-full border rounded-xl p-4"
                />

                <input
                  value={form.location}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      location: e.target.value,
                    })
                  }
                  placeholder="Location"
                  className="w-full border rounded-xl p-4"
                />

                <input
                  value={form.price}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      price: e.target.value,
                    })
                  }
                  placeholder="Price"
                  className="w-full border rounded-xl p-4"
                />

                <input
                  value={form.size}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      size: e.target.value,
                    })
                  }
                  placeholder="Size"
                  className="w-full border rounded-xl p-4"
                />

                <input
                  value={form.image}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      image: e.target.value,
                    })
                  }
                  placeholder="Image URL"
                  className="w-full border rounded-xl p-4"
                />

              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">

                <button
                  onClick={handleUpdate}
                  className="bg-green-700 text-white py-4 rounded-xl font-semibold"
                >
                  Save Changes
                </button>

                <button
                  onClick={() =>
                    setEditingProperty(null)
                  }
                  className="bg-gray-200 py-4 rounded-xl font-semibold"
                >
                  Cancel
                </button>

              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}