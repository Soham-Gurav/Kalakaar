"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 
                   flex items-center justify-between px-8 py-4 
                   bg-[var(--color-bg)]/70 backdrop-blur-lg 
                   rounded-full shadow-lg w-[90%] max-w-5xl">
      <Link
        href="/"
        className="text-2xl font-bold text-black font-serif"
      >
        Kalakaar
      </Link>

      <div className="flex gap-6 items-center text-black font-sans">
        <Link className="font-serif" href="/searchpage">Search</Link>
        <Link className="font-serif" href="/ta">Top Artisans</Link>
        <Link className="font-serif" href="/iapage">Artisans</Link>
        <Link className="font-serif" href="/cartpage">Cart</Link>
        <Link className="font-serif" href="/login">Login</Link>
      </div>
    </nav>
  );
}