const listings = [
  {
    title: "Bhudevi Garden Plot",
    location: "Prime Area",
    price: "₹18 Lakhs",
  },
  {
    title: "Luxury Villa Land",
    location: "High Growth Zone",
    price: "₹32 Lakhs",
  },
  {
    title: "Commercial Space",
    location: "Main Road Facing",
    price: "₹45 Lakhs",
  },
];

export default function FeaturedListings() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-center">
        Featured Properties
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {listings.map((item, index) => (
          <div
            key={index}
            className="border rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-gray-500">{item.location}</p>
            <p className="mt-4 text-green-700 font-bold">{item.price}</p>

            <a
              href="/contact"
              className="inline-block mt-6 bg-green-700 text-white px-4 py-2 rounded-lg"
            >
              Enquire Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}