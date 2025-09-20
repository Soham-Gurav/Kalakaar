'use client';

import { useState, useEffect } from 'react';

// Define types for our data for cleaner, more reliable code
type User = { _id: string; name: string; craftType: string; region: string; };
type Product = { _id: string; title: string; price?: { amount: number; currency: string; }; imageUrls?: string[]; };

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('users'); // Default to searching for artisans
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  
  const [results, setResults] = useState<(User | Product)[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  // This is our main search function that now includes filters
  const performSearch = async () => {
    setIsLoading(true);
    setError('');
    setResults([]);

    try {
      // Build a clean URL with all the selected filters
      const params = new URLSearchParams({
        query: searchQuery,
        type: searchType,
        category: category,
        location: location,
      });
      // The fetch request now sends all parameters to the backend
      const response = await fetch(`/api/search?${params.toString()}`);

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || 'Search request failed.');
      }
      
      const data = await response.json();
      setResults(data);

    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  // This runs the search once when the page first loads to show initial results
  // Do not run search on mount — require the user to enter a query and click Search

  // This handles the form submission when you click the search button
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    performSearch();
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-gray-800 mb-6">Search Artisans</h1>
        
        {/* Search and Filter Form */}
        <form onSubmit={handleFormSubmit} className="bg-white rounded-lg shadow-lg p-4 mb-8 flex flex-wrap items-center gap-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, craft, or keyword..."
            className="flex-grow p-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-amber-500"
          />
          
          <select value={searchType} onChange={e => setSearchType(e.target.value)} className="p-3 border rounded-lg border-gray-300 bg-white focus:ring-2 focus:ring-amber-500">
            <option value="users">Artisans</option>
            <option value="products">Products</option>
          </select>

          {/* This is your Category Filter Dropdown, now connected to the state */}
          <select value={category} onChange={e => setCategory(e.target.value)} className="p-3 border rounded-lg border-gray-300 bg-white focus:ring-2 focus:ring-amber-500">
            <option value="">All Categories</option>
            <option value="Pottery">Pottery</option>
            <option value="Weaving">Weaving</option>
            <option value="Woodwork">Woodwork</option>
            <option value="Painting">Painting</option>
          </select>

          {/* This is your Location Filter Dropdown, now connected to the state */}
          <select value={location} onChange={e => setLocation(e.target.value)} className="p-3 border rounded-lg border-gray-300 bg-white focus:ring-2 focus:ring-amber-500">
            <option value="">All Locations</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
          </select>
          
          <button type="submit" disabled={isLoading || searchQuery.trim() === ''} className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-amber-700 transition-colors disabled:opacity-50">
            {isLoading ? 'Searching...' : 'Search'}
          </button>
        </form>

        {/* Results Display */}
        <div>
          {isLoading && <p className="text-center text-gray-600">Loading results...</p>}
          {error && <p className="text-center text-red-600">Error: {error}</p>}
          {!isLoading && searchQuery.trim() === '' && <p className="text-center text-gray-600">Enter a search term and click Search to see results.</p>}
          {!isLoading && searchQuery.trim() !== '' && results.length === 0 && <p className="text-center text-gray-600">No results found. Try adjusting your filters.</p>}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {results.map((item) => (
              searchType === 'users'
                ? <UserCard key={item._id} user={item as User} />
                : <ProductCard key={item._id} product={item as Product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Card component for displaying a User ---
function UserCard({ user }: { user: User }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 text-center transition-transform hover:scale-105">
      <h3 className="text-xl font-bold text-gray-800">{user.name}</h3>
      <p className="text-amber-700 font-semibold">{user.craftType}</p>
      <p className="text-sm text-gray-500 mt-2">{user.region}</p>
    </div>
  );
}

// --- Card component for displaying a Product ---
function ProductCard({ product }: { product: Product }) {
  const imageUrl = product.imageUrls?.[0] || 'https://placehold.co/600x400/EEE/31343C?text=No+Image';
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transition-transform hover:scale-105">
      <img src={imageUrl} alt={product.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 truncate" title={product.title}>{product.title}</h3>
        {product.price && (
          <p className="text-md text-gray-700 mt-1">
            {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(product.price.amount / 100)}
          </p>
        )}
      </div>
    </div>
  );
}

