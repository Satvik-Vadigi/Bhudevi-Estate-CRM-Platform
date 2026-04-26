"use client";

import Link from "next/link";

export default function AdminSidebar() {
  return (
    <div className="w-64 h-screen bg-white border-r pt-20 pl-5 fixed left-0 top-0">
      <h2 className="text-xl font-bold mb-6">Bhudevi Admin</h2>

      <nav className="space-y-3 pt-3">
        <Link href="/admin" className="block text-gray-700">
          Dashboard
        </Link>

        <Link href="/admin/properties" className="block text-gray-700">
          Properties
        </Link>

        <Link href="/admin/add-property" className="block text-gray-700">
          Add Property
        </Link>

        <Link href="/admin/inquiries" className="block text-gray-700">
          Inquiries
        </Link>
      </nav>
    </div>
  );
}