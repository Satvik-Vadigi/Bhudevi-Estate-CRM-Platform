"use client";

import { useEffect, useMemo, useState } from "react";

type Lead = {
  id: number;
  name: string;
  phone: string;
  email?: string;
  property?: string;
  message?: string;
  status: string;
  notes?: string;
  createdAt: string;
};

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    const res = await fetch("/api/leads/all");
    const data = await res.json();
    setLeads(data);
    setLoading(false);
  };

  const updateLead = async (
    id: number,
    payload: { status?: string; notes?: string }
  ) => {
    await fetch(`/api/leads/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    setLeads((prev) =>
      prev.map((lead) =>
        lead.id === id ? { ...lead, ...payload } : lead
      )
    );
  };

  const deleteLead = async (id: number) => {
    await fetch(`/api/leads/${id}`, {
      method: "DELETE",
    });

    setLeads((prev) => prev.filter((lead) => lead.id !== id));
  };

  const filteredLeads = useMemo(() => {
    let data = [...leads];

    data.sort((a, b) => {
      if (a.status === "New" && b.status !== "New") return -1;
      if (a.status !== "New" && b.status === "New") return 1;

      return (
        new Date(b.createdAt).getTime() -
        new Date(a.createdAt).getTime()
      );
    });

    if (statusFilter !== "All") {
      data = data.filter(
        (lead) => lead.status === statusFilter
      );
    }

    if (search.trim()) {
      const q = search.toLowerCase();

      data = data.filter(
        (lead) =>
          lead.name.toLowerCase().includes(q) ||
          lead.phone.toLowerCase().includes(q) ||
          (lead.email || "")
            .toLowerCase()
            .includes(q)
      );
    }

    return data;
  }, [leads, search, statusFilter]);

  const total = leads.length;
  const fresh = leads.filter((x) => x.status === "New").length;
  const contacted = leads.filter(
    (x) => x.status === "Contacted"
  ).length;
  const closed = leads.filter(
    (x) => x.status === "Closed"
  ).length;

  const badge = (status: string) => {
    if (status === "Closed") return "bg-green-100 text-green-700";
    if (status === "Contacted") return "bg-blue-100 text-blue-700";
    return "bg-yellow-100 text-yellow-700";
  };

  const waLink = (lead: Lead) => {
    const msg = `Hello ${lead.name}, regarding your Bhudevi Estate inquiry.`;
    return `https://wa.me/${lead.phone}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center">
          Executive CRM Dashboard
        </h1>

        <p className="text-center text-gray-500 mt-3">
          Leads, follow-ups and closures in one place.
        </p>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-5 mt-12">

          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <p className="text-gray-500">Total Leads</p>
            <h2 className="text-4xl font-bold mt-2">{total}</h2>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <p className="text-gray-500">New</p>
            <h2 className="text-4xl font-bold text-yellow-500 mt-2">
              {fresh}
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <p className="text-gray-500">Contacted</p>
            <h2 className="text-4xl font-bold text-blue-600 mt-2">
              {contacted}
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <p className="text-gray-500">Closed</p>
            <h2 className="text-4xl font-bold text-green-600 mt-2">
              {closed}
            </h2>
          </div>

        </div>

        {/* Search + Filter */}
        <div className="bg-white rounded-3xl p-5 shadow-sm mt-8 grid md:grid-cols-2 gap-4">

          <input
            type="text"
            placeholder="Search name, phone, email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-xl px-4 py-3"
          />

          <select
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value)
            }
            className="border rounded-xl px-4 py-3"
          >
            <option>All</option>
            <option>New</option>
            <option>Contacted</option>
            <option>Closed</option>
          </select>

        </div>

        {loading ? (
          <p className="text-center mt-12">Loading...</p>
        ) : filteredLeads.length === 0 ? (
          <p className="text-center mt-12 text-gray-500">
            No leads found.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6 mt-10">

            {filteredLeads.map((lead) => (
              <div
                key={lead.id}
                className="bg-white rounded-3xl p-6 shadow-sm"
              >
                <div className="flex justify-between gap-4">

                  <div>
                    <h2 className="text-2xl font-bold">
                      {lead.name}
                    </h2>

                    <p className="text-gray-500 mt-1">
                      {lead.phone}
                    </p>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-sm h-fit ${badge(
                      lead.status
                    )}`}
                  >
                    {lead.status}
                  </span>

                </div>

                <p className="mt-4">
                  📧 {lead.email || "No email"}
                </p>

                <p className="mt-1">
                  🏠 {lead.property || "General Inquiry"}
                </p>

                <p className="mt-4 text-gray-600">
                  {lead.message || "No message"}
                </p>

                <textarea
                  defaultValue={lead.notes || ""}
                  placeholder="Add notes..."
                  className="w-full border rounded-xl p-3 mt-5 min-h-[100px]"
                  onBlur={(e) =>
                    updateLead(lead.id, {
                      notes: e.target.value,
                    })
                  }
                />

                <div className="grid grid-cols-3 gap-2 mt-5">

                  <a
                    href={`tel:${lead.phone}`}
                    className="bg-black text-white py-2 rounded-xl text-center"
                  >
                    Call
                  </a>

                  <a
                    href={waLink(lead)}
                    target="_blank"
                    className="bg-green-600 text-white py-2 rounded-xl text-center"
                  >
                    WhatsApp
                  </a>

                  <a
                    href={`mailto:${lead.email || ""}`}
                    className="bg-blue-600 text-white py-2 rounded-xl text-center"
                  >
                    Email
                  </a>

                </div>

                <div className="grid grid-cols-3 gap-2 mt-5">

                  <button
                    onClick={() =>
                      updateLead(lead.id, {
                        status: "New",
                      })
                    }
                    className="bg-yellow-500 text-white py-2 rounded-xl"
                  >
                    New
                  </button>

                  <button
                    onClick={() =>
                      updateLead(lead.id, {
                        status: "Contacted",
                      })
                    }
                    className="bg-blue-600 text-white py-2 rounded-xl"
                  >
                    Contacted
                  </button>

                  <button
                    onClick={() =>
                      updateLead(lead.id, {
                        status: "Closed",
                      })
                    }
                    className="bg-green-600 text-white py-2 rounded-xl"
                  >
                    Closed
                  </button>

                </div>

                <button
                  onClick={() => deleteLead(lead.id)}
                  className="w-full mt-4 bg-red-600 text-white py-3 rounded-xl"
                >
                  Delete Lead
                </button>

                <p className="text-sm text-gray-400 mt-4">
                  {new Date(lead.createdAt).toLocaleString()}
                </p>

              </div>
            ))}

          </div>
        )}

      </div>
    </section>
  );
}