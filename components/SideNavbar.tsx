"use client";

import Link from "next/link";

export default function SideNavbar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-52 bg-[#573015] border-r p-6 flex flex-col gap-6 text-xl">
      <h1 className="text-3xl font-bold text-[var(--color-primary)]">Kalakar</h1>
      <nav className="flex flex-col gap-4">
        <Link className="text-white" href="/">Home</Link>
        <Link className="text-white" href="/search">Search</Link>
        <Link className="text-white" href="/top-artisans">Top Artisans</Link>
        <Link className="text-white" href="/cart">Cart</Link>
        <Link className="text-white" href="/login">Login</Link>
      </nav>
    </aside>
  );
}
