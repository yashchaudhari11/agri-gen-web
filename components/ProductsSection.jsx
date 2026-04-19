'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Search, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { products } from '@/lib/products-data';

const categories = [
  'All Products',
  'Food Products',
  'Spice Collection',
  'Agro-commodities',
  'Nutraceuticals',
  'Green Formulation',
];

function ProductCard({ product }) {
  return (
    <div className="group bg-ag-card border border-gray-200 rounded-2xl overflow-hidden hover:border-ag-green/40 hover:shadow-lg hover:shadow-ag-green/10 transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50/80 to-transparent" />
        <div className="absolute top-3 left-3 bg-ag-green/15 border border-ag-green/30 text-ag-green text-xs font-semibold px-3 py-1 rounded-full">
          {product.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-grow">
        <h3 className="font-display font-bold text-gray-900 text-base leading-tight">{product.name}</h3>
        <p className="text-gray-600 text-xs leading-relaxed flex-grow line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between pt-1">
          <span className="text-ag-green font-bold text-sm">{product.price}</span>
        </div>
        <Link 
          href={`/products/${product.id}`}
          className="w-full border border-ag-green/50 text-ag-green text-sm font-semibold py-2.5 rounded-full hover:bg-ag-green hover:text-gray-900 hover:border-ag-green transition-all duration-200 flex items-center justify-center gap-2 mt-auto"
        >
          <ShoppingBag size={14} />
          Enquire Now
        </Link>
      </div>
    </div>
  );
}

export default function ProductsSection() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Products');

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat = activeCategory === 'All Products' || p.category === activeCategory;
      const matchSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [search, activeCategory]);

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="text-ag-green text-sm font-semibold tracking-widest uppercase mb-3">
          — Our Range
        </div>
        <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-gray-900">
          Explore Products
        </h2>
      </div>

      {/* Search */}
      <div className="relative max-w-md mx-auto mb-8">
        <Search
          size={16}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
        />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="w-full bg-ag-card border border-gray-200 text-gray-900 placeholder-gray-400 text-sm pl-11 pr-5 py-3.5 rounded-full focus:outline-none focus:border-ag-green/60 focus:shadow-lg focus:shadow-ag-green/10 transition-all duration-200"
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2.5 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full border transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-ag-green text-gray-900 border-ag-green shadow-lg shadow-ag-green/20'
                : 'bg-transparent text-gray-600 border-gray-200 hover:border-ag-green/40 hover:text-ag-green'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-600">
          <div className="text-4xl mb-3">🌿</div>
          <p className="text-sm">No products found. Try a different search or filter.</p>
        </div>
      )}
    </section>
  );
}
