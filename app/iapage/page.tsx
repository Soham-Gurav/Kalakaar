"use client";

export default function VendorProfile() {
  return (
    <div className="min-h-screen p-10 bg-[var(--color-bg)] text-[var(--color-text)]">
      <div className="flex gap-10">
        {/* Profile Info */}
        <div className="w-1/3 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg">
          <img src="/Textile.png" className="w-full h-60 object-cover rounded-xl mb-4" />
          <h2 className="text-2xl font-bold text-[var(--color-primary)]">Artisan Name</h2>
          <p className="text-gray-600 dark:text-gray-400">Location: Jaipur</p>
          <p className="mt-2">“Bringing heritage textiles to modern homes.”</p>
        </div>

        {/* Products */}
        <div className="w-2/3 grid md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((id) => (
            <div key={id} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <img src="/Pottery.png" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">Product {id}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">₹500</p>
              <button className="mt-2 bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
