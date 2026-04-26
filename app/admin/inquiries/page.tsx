import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function AdminInquiriesPage() {
  const leads = await prisma.lead.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <section className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex justify-between items-center">

          <div>
            <p className="uppercase tracking-[0.35em] text-green-700 text-sm">
              Customer Requests
            </p>

            <h1 className="text-5xl font-bold mt-3">
              All Inquiries
            </h1>
          </div>

          <Link
            href="/admin"
            className="border border-gray-300 px-6 py-3 rounded-xl font-semibold"
          >
            Back Dashboard
          </Link>

        </div>

        {/* Table */}
        <div className="bg-white rounded-3xl shadow-sm mt-10 overflow-hidden">

          {leads.length === 0 ? (
            <p className="p-10 text-center text-gray-500">
              No inquiries yet.
            </p>
          ) : (
            <div className="divide-y">

              {leads.map((lead) => (
                <div
                  key={lead.id}
                  className="p-6 hover:bg-gray-50 transition"
                >
                  <div className="flex flex-col md:flex-row md:justify-between gap-4">

                    <div>
                      <h2 className="text-xl font-bold">
                        {lead.name}
                      </h2>

                      <p className="text-gray-500 mt-1">
                        📞 {lead.phone}
                      </p>

                      <p className="text-gray-500">
                        📧 {lead.email || "No email"}
                      </p>

                      <p className="text-gray-500 mt-2">
                        🏠 {lead.property || "General Inquiry"}
                      </p>

                      <p className="mt-3 text-gray-700">
                        {lead.message || "No message"}
                      </p>
                    </div>

                    <div className="text-sm text-gray-400">
                      {new Date(
                        lead.createdAt
                      ).toLocaleString()}
                    </div>

                  </div>
                </div>
              ))}

            </div>
          )}

        </div>

      </div>
    </section>
  );
}