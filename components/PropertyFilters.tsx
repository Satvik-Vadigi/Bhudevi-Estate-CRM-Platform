"use client";

type Props = {
  onSearch: (value: string) => void;
  onPrice: (value: string) => void;
  onSort: (value: string) => void;
};

export default function PropertyFilters({
  onSearch,
  onPrice,
  onSort,
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 mt-10 grid md:grid-cols-3 gap-4">

      <input
        type="text"
        placeholder="Search location..."
        onChange={(e) => onSearch(e.target.value)}
        className="border rounded-xl px-4 py-3 outline-none"
      />

      <input
        type="number"
        placeholder="Max Price"
        onChange={(e) => onPrice(e.target.value)}
        className="border rounded-xl px-4 py-3 outline-none"
      />

      <select
        onChange={(e) => onSort(e.target.value)}
        className="border rounded-xl px-4 py-3 outline-none"
      >
        <option value="latest">Latest</option>
        <option value="low">Price Low to High</option>
        <option value="high">Price High to Low</option>
      </select>

    </div>
  );
}