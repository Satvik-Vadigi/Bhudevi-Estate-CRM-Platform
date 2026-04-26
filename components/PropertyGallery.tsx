"use client";

import { useState } from "react";

export default function PropertyGallery({
  images,
}: {
  images: string[];
}) {
  const [active, setActive] = useState(0);

  if (images.length === 0) {
    return (
      <div className="w-full h-[420px] bg-gray-200 rounded-3xl" />
    );
  }

  return (
    <div>

      {/* Main Image */}
      <img
        src={images[active]}
        className="w-full h-[420px] object-cover rounded-3xl shadow-lg"
      />

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-3 mt-4">

        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`rounded-xl overflow-hidden border-2 ${
              active === index
                ? "border-green-700"
                : "border-transparent"
            }`}
          >
            <img
              src={img}
              className="h-20 w-full object-cover"
            />
          </button>
        ))}

      </div>
    </div>
  );
}