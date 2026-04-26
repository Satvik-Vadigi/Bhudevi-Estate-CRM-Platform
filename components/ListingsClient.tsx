"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export default function ListingsClient({ properties }: any) {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");
  const [type, setType] = useState("All");
  const [budget, setBudget] = useState("All");

  const filtered = useMemo(() => {
    return properties.filter((p: any) => {
      const title = p.title.toLowerCase();
      const loc = p.location.toLowerCase();

      const matchesSearch =
        title.includes(search.toLowerCase()) ||
        loc.includes(search.toLowerCase());

      const matchesLocation =
        location === "All" ||
        p.location.toLowerCase().includes(location.toLowerCase());

      const matchesType =
        type === "All" ||
        p.title.toLowerCase().includes(type.toLowerCase());

      const price = Number(p.price);

      let matchesBudget = true;

      if (budget === "1") matchesBudget = price < 1000000;
      if (budget === "2") matchesBudget = price >= 1000000 && price <= 5000000;
      if (budget === "3") matchesBudget = price > 5000000 && price <= 10000000;
      if (budget === "4") matchesBudget = price > 10000000;

      return (
        matchesSearch &&
        matchesLocation &&
        matchesType &&
        matchesBudget
      );
    });
  }, [search, location, type, budget, properties]);

  return (
    <>
      {/* Filters */}
      <div className="bg-white rounded-3xl shadow-md p-5 mt-12">
        <div className="grid md:grid-cols-4 gap-4">

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search city, villa..."
            className="border rounded-xl px-4 py-3"
          />

          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border rounded-xl px-4 py-3"
          >
            <option value="All">All Locations</option>
            <option>Dubai</option>
            <option>Miami</option>
            <option>London</option>
            <option>Los Angeles</option>
          </select>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border rounded-xl px-4 py-3"
          >
            <option value="All">All Types</option>
            <option>Villa</option>
            <option>Penthouse</option>
            <option>Apartment</option>
            <option>Mansion</option>
          </select>

          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="border rounded-xl px-4 py-3"
          >
            <option value="All">Any Budget</option>
            <option value="1">Under $1M</option>
            <option value="2">$1M - $5M</option>
            <option value="3">$5M - $10M</option>
            <option value="4">$10M+</option>
          </select>

        </div>
      </div>

      {/* Results */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

        {filtered.map((property: any) => (
          <div
            key={property.id}
            className="bg-white rounded-3xl overflow-hidden shadow-md"
          >
            <img
              src={property.image}
              className="h-64 w-full object-cover"
            />

            <div className="p-6">
              <h2 className="text-2xl font-bold">
                {property.title}
              </h2>

              <p className="text-gray-500 mt-2">
                📍 {property.location}
              </p>

              <p className="text-green-700 text-2xl font-bold mt-4">
                $ {property.price}
              </p>

              <Link
                href={`/property/${property.id}`}
                className="inline-block mt-5 bg-green-700 text-white px-5 py-3 rounded-xl"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}

      </div>
    </>
  );
}