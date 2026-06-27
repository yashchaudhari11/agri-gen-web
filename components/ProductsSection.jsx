'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { products, categories } from '@/lib/products-data';
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal';

const CATEGORY_COLORS = {
  'All Products':          { bg: '#3DAA35', text: '#fff' },
  'Biostimulants':         { bg: '#3DAA35', text: '#fff' },
  'Soil Conditioners':     { bg: '#E8A320', text: '#fff' },
  'Micronutrients':        { bg: '#1A56B4', text: '#fff' },
  'Plant Growth Promoters':{ bg: '#8B5CF6', text: '#fff' },
  'B2B / Bulk Supply':     { bg: '#0F2414', text: '#fff' },
};

function ProductCard({ product }) {
  const locale = useLocale();
  const prefix = locale === 'en' ? '' : `/${locale}`;
  const [imgError, setImgError] = useState(false);
  const cat = CATEGORY_COLORS[product.category] || { bg: '#3DAA35', text: '#fff' };

  return (
    <Link
      href={`${prefix}/products/${product.id}`}
      className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-52 bg-gray-50 overflow-hidden flex-shrink-0">
        {!imgError ? (
          <Image
            src={product.image}
            alt={product.nameShort || product.name}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-600"
            unoptimized
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl opacity-30">🌿</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        {/* Single category badge */}
        <div className="absolute top-3 left-3">
          <span
            className="text-[10px] font-extrabold px-2.5 py-1 rounded-full"
            style={{ backgroundColor: cat.bg, color: cat.text }}
          >
            {product.category}
          </span>
        </div>

        {/* Origin */}
        {product.origin && (
          <div className="absolute top-3 right-3">
            <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-black/50 text-white backdrop-blur-sm">
              📍 {product.origin}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow gap-3">
        <div>
          <h3 className="font-headline font-bold text-gray-900 text-sm leading-tight mb-1.5 group-hover:text-[#3DAA35] transition-colors duration-200">
            {product.nameShort || product.name}
          </h3>
          <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Pack sizes */}
        {product.packSizes?.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {product.packSizes.map((ps, i) => (
              <span key={i} className="text-[9px] font-semibold px-2 py-0.5 rounded bg-gray-50 text-gray-400 border border-gray-100">
                {ps}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
          <p className="text-xs font-bold text-gray-400">
            {product.price}
          </p>
          <span
            className="inline-flex items-center gap-1 text-[11px] font-bold transition-colors duration-200"
            style={{ color: '#3DAA35' }}
          >
            View Details
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function ProductsSection() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Products');

  const filtered = useMemo(() =>
    products.filter((p) => {
      const matchCat = activeCategory === 'All Products' || p.category === activeCategory;
      const matchSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        (p.category || '').toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    }),
    [search, activeCategory]
  );

  return (
    <div className="bg-white">

      {/* ── Hero Banner ── */}
      <div className="relative h-[42vh] min-h-[280px] max-h-[420px] overflow-hidden">
        <img
          src="/images/field_wide.png"
          alt="Agri-Gen products"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-white/50 text-xs font-bold tracking-[0.3em] uppercase mb-4">
              Our Products
            </p>
            <h1 className="font-headline font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-3 drop-shadow-lg">
              Premium Agri-Input{' '}
              <span style={{ color: '#3DAA35' }}>Solutions</span>
            </h1>
            <p className="font-devanagari text-white/60 text-base sm:text-lg">
              ISO प्रमाणित सेंद्रिय कृषी उत्पादने — शेतकऱ्यांसाठी
            </p>
          </div>
        </div>
      </div>

      {/* ── Products Section ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20">

        {/* Search + Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 items-start sm:items-center">
          <div className="relative flex-1 max-w-md">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 text-xl">search</span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full bg-white border border-gray-200 text-gray-800 placeholder-gray-300 text-sm pl-11 pr-5 py-3 rounded-xl focus:outline-none focus:border-[#3DAA35] transition-all duration-200"
            />
          </div>
          <p className="text-gray-400 text-sm">
            <strong className="text-[#3DAA35]">{filtered.length}</strong> product{filtered.length !== 1 ? 's' : ''} found
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => {
            const c = CATEGORY_COLORS[cat];
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 text-xs font-bold rounded-xl border transition-all duration-200"
                style={
                  isActive
                    ? { backgroundColor: c?.bg || '#3DAA35', color: '#fff', borderColor: c?.bg || '#3DAA35' }
                    : { backgroundColor: '#fff', color: '#6b7280', borderColor: '#e5e7eb' }
                }
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.06}>
            {filtered.map((product) => (
              <StaggerItem key={product.id}>
                <ProductCard product={product} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : (
          <div className="text-center py-24 text-gray-400">
            <p className="text-4xl mb-4">🌿</p>
            <p className="text-sm font-medium mb-2">No products found</p>
            <button
              onClick={() => { setSearch(''); setActiveCategory('All Products'); }}
              className="mt-4 px-6 py-2 text-xs font-bold rounded-xl border border-[#3DAA35] text-[#3DAA35] hover:bg-[#3DAA35] hover:text-white transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* B2B CTA */}
        <ScrollReveal delay={0.1}>
          <div
            className="mt-20 rounded-2xl overflow-hidden px-8 sm:px-14 py-12 sm:py-16 text-center"
            style={{ background: 'linear-gradient(135deg, #0F2414 0%, #1B4332 60%, #1A3A6B 100%)' }}
          >
            <p className="text-white/40 text-[10px] font-bold tracking-[0.35em] uppercase mb-5">
              🤝 Premium B2B Partnership
            </p>
            <h2 className="font-headline font-extrabold text-3xl sm:text-4xl text-white mb-3 leading-tight">
              Bulk Supply &amp;{' '}
              <span style={{ color: '#E8A320' }}>Custom Formulations</span>
            </h2>
            <p className="font-devanagari text-white/40 text-base mb-8">
              थोक पुरवठा आणि कस्टम फॉर्म्युलेशन
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-10">
              <a
                href="tel:7385266728"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm transition-all duration-200"
                style={{ backgroundColor: '#E8A320', color: '#1a1a0a' }}
              >
                📞 Call: 73852 66728
              </a>
              <a
                href="/documents/Brochure.pdf"
                download
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white border border-white/25 hover:bg-white/20 font-bold text-sm rounded-xl transition-all duration-200"
              >
                <span className="material-symbols-outlined text-[#E8A320] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>download</span>
                Download Brochure
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-2xl mx-auto">
              {[
                { icon: 'local_shipping', label: 'Bulk Supply' },
                { icon: 'branding_watermark', label: 'White Label' },
                { icon: 'precision_manufacturing', label: 'Contract Mfg' },
                { icon: 'inventory_2', label: 'Private Label' },
                { icon: 'handshake', label: 'Co-Marketing' },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center gap-2 bg-white/8 rounded-xl p-3.5 border border-white/10">
                  <span className="material-symbols-outlined text-[#E8A320] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>{s.icon}</span>
                  <span className="text-white/70 text-[10px] font-bold text-center">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
