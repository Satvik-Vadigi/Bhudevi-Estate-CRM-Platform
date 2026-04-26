import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function AdminPage() {
  const totalProperties = await prisma.property.count();
  const totalLeads = await prisma.lead.count();

  const newLeads = await prisma.lead.count({
    where: {
      status: "New",
    },
  });

  const closedLeads = await prisma.lead.count({
    where: {
      status: "Closed",
    },
  });

  const recentLeads = await prisma.lead.findMany({
    take: 5,
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <section className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          <div>
            <p className="uppercase tracking-[0.35em] text-green-700 text-sm">
              Executive Control Center
            </p>

            <h1 className="text-5xl font-bold mt-3">
              Bhudevi Admin
            </h1>

            <p className="text-gray-500 mt-3">
              Real-time listings, leads and growth management.
            </p>
          </div>

          <div className="flex gap-3 flex-wrap">

            <Link
              href="/admin/add-property"
              className="bg-green-700 text-white px-6 py-3 rounded-xl font-semibold"
            >
              + Add Property
            </Link>

            <Link
              href="/admin/leads"
              className="border border-gray-300 px-6 py-3 rounded-xl font-semibold relative"
            >
              Open CRM

              {newLeads > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs min-w-[22px] h-[22px] px-1 rounded-full flex items-center justify-center font-bold">
                  {newLeads}
                </span>
              )}
            </Link>

          </div>

        </div>

        {/* Alert Banner */}
        {newLeads > 0 && (
          <div className="mt-8 bg-red-600 text-white rounded-2xl px-6 py-4 flex justify-between items-center">

            <div>
              <h2 className="font-bold text-lg">
                🔴 {newLeads} New Lead{newLeads > 1 ? "s" : ""} Waiting
              </h2>

              <p className="text-sm opacity-90">
                Follow up fast. Fresh leads convert best.
              </p>
            </div>

            <Link
              href="/admin/leads"
              className="bg-white text-red-600 px-5 py-2 rounded-xl font-semibold"
            >
              View Now
            </Link>

          </div>
        )}

        {/* Analytics */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">

          <div className="bg-white rounded-3xl p-7 shadow-sm">
            <p className="text-gray-500">
              Total Listings
            </p>

            <h2 className="text-4xl font-bold text-green-700 mt-2">
              {totalProperties}
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-7 shadow-sm">
            <p className="text-gray-500">
              Total Leads
            </p>

            <h2 className="text-4xl font-bold text-green-700 mt-2">
              {totalLeads}
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-7 shadow-sm border-2 border-yellow-400">
            <p className="text-gray-500">
              New Leads
            </p>

            <h2 className="text-4xl font-bold text-yellow-500 mt-2">
              {newLeads}
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-7 shadow-sm">
            <p className="text-gray-500">
              Closed Deals
            </p>

            <h2 className="text-4xl font-bold text-green-600 mt-2">
              {closedLeads}
            </h2>
          </div>

        </div>

        {/* Main Actions */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <Link
            href="/admin/properties"
            className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-2xl font-bold">
              Manage Listings
            </h2>

            <p className="text-gray-500 mt-3">
              Add, edit, remove and update live properties.
            </p>
          </Link>

          <Link
            href="/admin/leads"
            className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition relative"
          >
            <h2 className="text-2xl font-bold">
              Lead CRM
            </h2>

            <p className="text-gray-500 mt-3">
              Track inquiries, notes, status and conversions.
            </p>

            {newLeads > 0 && (
              <span className="absolute top-6 right-6 bg-red-600 text-white text-xs px-3 py-1 rounded-full font-bold">
                {newLeads} New
              </span>
            )}
          </Link>

        </div>

        {/* Recent Leads */}
        <div className="bg-white rounded-3xl p-8 shadow-sm mt-10">

          <div className="flex justify-between items-center">

            <h2 className="text-3xl font-bold">
              Latest Leads
            </h2>

            <Link
              href="/admin/leads"
              className="text-green-700 font-semibold"
            >
              View All →
            </Link>

          </div>

          <div className="mt-6 space-y-4">

            {recentLeads.length === 0 ? (
              <p className="text-gray-500">
                No leads yet.
              </p>
            ) : (
              recentLeads.map((lead) => (
                <div
                  key={lead.id}
                  className="border rounded-2xl p-5 flex justify-between items-center"
                >
                  <div>
                    <div className="flex items-center gap-3">

                      <h3 className="font-bold text-lg">
                        {lead.name}
                      </h3>

                      {lead.status === "New" && (
                        <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-semibold">
                          New
                        </span>
                      )}

                    </div>

                    <p className="text-gray-500 mt-1">
                      {lead.phone}
                    </p>
                  </div>

                  <span className="text-sm text-gray-400">
                    {new Date(
                      lead.createdAt
                    ).toLocaleDateString()}
                  </span>
                </div>
              ))
            )}

          </div>

        </div>

      </div>
    </section>
  );
}