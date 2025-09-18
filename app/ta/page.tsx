"use client";

export default function TopArtisansPage() {
  return (
    <div className="min-h-screen p-10 bg-[var(--color-bg)] text-[var(--color-text)]">
      <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
        Top Artisans Near You
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((id) => (
          <div key={id} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
            <img src="/Textile.png" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">Artisan {id}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Specializes in furniture</p>
            <p className="text-sm">Location: Delhi</p>
          </div>
        ))}
      </div>
    </div>
  );
}
