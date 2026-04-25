'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { products } from '@/lib/products-data';

const categories = [
  'All Products',
  'Food Products',
  'Spice Collection',
  'Agro-commodities',
  'Nutraceuticals',
  'Green Formulation',
];

const bestsellerIds = [1, 3, 6, 8];
const highYieldIds = [4, 7, 10];

function ProductCard({ product, t, locale }) {
  const prefix = locale === 'en' ? '' : `/${locale}`;
  const isBestseller = bestsellerIds.includes(product.id);
  const isHighYield = highYieldIds.includes(product.id);

  return (
    <div className="group bg-white border-2 border-kisan-green/10 rounded-kisan overflow-hidden hover:border-kisan-green/30 hover:shadow-kisan-lg transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          <span className="bg-kisan-green/90 text-white text-[10px] font-bold px-3 py-1 rounded-full">
            {product.category}
          </span>
          {isBestseller && (
            <span className="badge-bestseller animate-badge-shine">
              ⭐ {t('bestseller')}
            </span>
          )}
          {isHighYield && (
            <span className="badge-highyield">
              📈 {t('highYield')}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-grow">
        <h3 className="font-headline font-bold text-pure-black text-base leading-tight">
          {product.name}
        </h3>
        <p className="text-text-secondary text-xs leading-relaxed flex-grow line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between pt-1">
          <span className="text-kisan-green font-extrabold text-lg">
            {product.price}
          </span>
        </div>
        <Link
          href={`${prefix}/products/${product.id}`}
          className="w-full bg-kisan-green text-white text-sm font-bold py-3 rounded-2xl btn-3d shadow-3d hover:shadow-3d-hover transition-all duration-200 flex items-center justify-center gap-2 mt-auto touch-target"
        >
          📞 {t('enquire')}
        </Link>
      </div>
    </div>
  );
}

export default function ProductsSection() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Products');
  const t = useTranslations('products');
  const locale = useLocale();

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat =
        activeCategory === 'All Products' || p.category === activeCategory;
      const matchSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [search, activeCategory]);

  return (
    <section id="products" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="text-kisan-green text-sm font-bold tracking-widest uppercase mb-3 inline-block">
          🌿 {t('subtitle')}
        </span>
        <h2 className="font-headline font-extrabold text-3xl sm:text-4xl lg:text-5xl text-pure-black">
          {t('title')}
        </h2>
      </div>

      {/* Search */}
      <div className="relative max-w-md mx-auto mb-8">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
        />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t('search')}
          className="w-full bg-cream border-2 border-kisan-green/10 text-text-primary placeholder-text-muted text-sm pl-11 pr-5 py-4 rounded-2xl focus:outline-none focus:border-kisan-green/40 focus:shadow-kisan transition-all duration-200 touch-target"
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2.5 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-3 text-xs sm:text-sm font-bold rounded-2xl border-2 transition-all duration-200 touch-target ${
              activeCategory === cat
                ? 'bg-kisan-green text-white border-kisan-green shadow-3d'
                : 'bg-white text-text-secondary border-kisan-green/10 hover:border-kisan-green/30 hover:text-kisan-green'
            }`}
          >
            {cat === 'All Products' ? t('allProducts') : cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              t={t}
              locale={locale}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-text-secondary">
          <div className="text-4xl mb-3">🌿</div>
          <p className="text-sm">No products found. Try a different search or filter.</p>
        </div>
      )}
    </section>
  );
}
