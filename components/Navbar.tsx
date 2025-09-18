"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

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
      
      <div className="flex-1 max-w-md mx-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search artisans..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 pl-10 rounded-full border border-gray-300 
                     focus:outline-none focus:ring-2 focus:ring-amber-500/50 
                     bg-white/90 text-black placeholder-gray-500"
          />
          <svg 
            className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
        </div>
      </div>

      <div className="flex gap-6 items-center text-black font-sans">
        <Link className="font-serif" href="/searchpage">Search</Link>
        <Link className="font-serif" href="/ta">Top Artisans</Link>
        <Link className="font-serif" href="/iapage">Artisans</Link>
        <Link className="font-serif" href="/cartpage">Cart</Link>
        <Link className="font-serif" href="/login">Login</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}