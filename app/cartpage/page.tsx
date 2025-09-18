"use client";

export default function CartPage() {
  return (
    <div className="min-h-screen p-10 bg-[var(--color-bg)] text-[var(--color-text)]">
      <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">Your Cart</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {[1, 2].map((id) => (
          <div key={id} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg flex items-center gap-4">
            <img src="/Furniture.png" className="w-24 h-24 object-cover rounded-lg" />
            <div>
              <h3 className="text-xl font-semibold">Product {id}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">₹1000</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-between items-center">
        <p className="text-xl font-semibold">Total: ₹2000</p>
        <button className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-lg">
          Checkout
        </button>
      </div>
    </div>
  );
}
