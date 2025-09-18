"use client";

export default function SearchPage() {
  return (
    <div className="min-h-screen p-10 bg-[var(--color-bg)] text-[var(--color-text)]">
      <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
        Search Artisans
      </h2>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <select className="p-3 border rounded-lg dark:bg-gray-800">
          <option>Category</option>
          <option>Furniture</option>
          <option>Textiles</option>
          <option>Pottery</option>
        </select>
        <select className="p-3 border rounded-lg dark:bg-gray-800">
          <option>Location</option>
          <option>Mumbai</option>
          <option>Delhi</option>
          <option>Kolkata</option>
        </select>
      </div>

      {/* Results */}
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((id) => (
          <div key={id} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
            <img src="/Furniture.png" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">Artisan {id}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Specializes in pottery</p>
          </div>
        ))}
      </div>
    </div>
  );
}
