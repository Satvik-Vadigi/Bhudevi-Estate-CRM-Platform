"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phone = "+919999999999"; // Phone number

  const message =
    "Hello Bhudevi Estate, I am interested in a property.";

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] h-14 w-14 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl text-2xl transition"
      aria-label="WhatsApp Chat"
      title="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
}