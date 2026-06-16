'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { products, categories } from '@/lib/products-data';
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal';

const BADGE_STYLES = {
  bestseller: 'bg-harvest-gold text-earth-brown',
  highyield: 'bg-kisan-green text-white',
  eco: 'bg-field-green text-white',
  imported: 'bg-blue-600 text-white',
  spectrum: 'bg-purple-600 text-white',
  b2b: 'bg-kisan-green-dark text-white',
};

const CATEGORY_ICONS = {
  'All Products': '🌿',
  'Biostimulants': '🧬',
  'Soil Conditioners': '🌱',
  'Micronutrients': '🔬',
  'Plant Growth Promoters': '📈',
  'B2B / Bulk Supply': '🤝',
};

function ProductCard({ product }) {
  const locale = useLocale();
  const prefix = locale === 'en' ? '' : `/${locale}`;
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group bg-white border-2 border-kisan-green/8 rounded-[24px] overflow-hidden hover:border-kisan-green/35 hover:shadow-kisan-lg transition-all duration-300 flex flex-col hover:-translate-y-1">

      {/* Product Image */}
      <div className="relative h-56 overflow-hidden bg-cream flex-shrink-0">
        {!imgError ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-600"
            unoptimized
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-kisan-green/10 to-kisan-green/20 flex items-center justify-center">
            <span className="text-5xl">🌿</span>
          </div>
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full ${BADGE_STYLES[product.badgeType] || 'bg-kisan-green text-white'}`}>
            {product.badge}
          </span>
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-black/50 text-white backdrop-blur-sm">
            {product.category}
          </span>
        </div>

        {/* Origin tag */}
        {product.origin && (
          <div className="absolute bottom-3 right-3">
            <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-black/50 text-white backdrop-blur-sm">
              📍 {product.origin}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-grow">
        <div>
          <h3 className="font-headline font-bold text-pure-black text-sm sm:text-base leading-tight mb-1.5 group-hover:text-kisan-green transition-colors duration-200">
            {product.nameShort || product.name}
          </h3>
          <p className="font-devanagari text-kisan-green text-[11px] mb-2">{product.tagline?.split('.')[0]}</p>
          <p className="text-text-secondary text-xs leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Key specs */}
        <div className="flex flex-wrap gap-1.5">
          {(product.benefits || []).slice(0, 3).map((b, i) => (
            <span key={i} className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-kisan-green/8 text-kisan-green border border-kisan-green/15">
              ✓ {b}
            </span>
          ))}
        </div>

        {/* Pack sizes */}
        {product.packSizes && product.packSizes.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {product.packSizes.map((ps, i) => (
              <span key={i} className="text-[9px] font-semibold px-2 py-0.5 rounded bg-cream text-text-muted border border-kisan-green/10">
                {ps}
              </span>
            ))}
          </div>
        )}

        {/* Price + CTA */}
        <div className="mt-auto pt-3 border-t border-kisan-green/8 flex items-center justify-between gap-3">
          <div>
            <p className="text-kisan-green font-extrabold text-sm">{product.price}</p>
            {product.priceNote && (
              <p className="text-text-muted text-[9px]">{product.priceNote}</p>
            )}
          </div>
          <a
            href="tel:7385266728"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-kisan-green hover:bg-kisan-green-dark text-white text-xs font-bold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap"
          >
            📞 Enquire
          </a>
        </div>
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
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        (p.category || '').toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [search, activeCategory]);

  return (
    <div className="bg-warm-white">

      {/* ===== Page Hero Banner ===== */}
      <div className="relative overflow-hidden min-h-[280px] sm:min-h-[340px]">
        <img
          src="/images/field_wide.png"
          alt="Agri-Gen product fields"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-kisan-green-dark/92 via-kisan-green-dark/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <span className="inline-flex items-center gap-2 w-fit px-4 py-1.5 mb-5 text-xs font-bold tracking-widest uppercase bg-white/15 text-white rounded-full border border-white/30 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-harvest-gold animate-pulse" />
            Our Product Range
          </span>
          <h1 className="font-headline font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-4 max-w-2xl drop-shadow-lg">
            Premium Agri-Input{' '}
            <span className="text-harvest-gold italic">Solutions</span>
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-xl leading-relaxed mb-2">
            Certified organic biostimulants, soil conditioners, micronutrients & plant growth promoters — engineered for Maharashtra's farmers.
          </p>
          <p className="font-devanagari text-harvest-gold text-base">
            प्रीमियम सेंद्रिय शेती उत्पादने — प्रत्येक पीकासाठी
          </p>

          {/* Quick stats */}
          <div className="mt-8 flex flex-wrap gap-4">
            {[
              { n: '500+', l: 'Product SKUs' },
              { n: '1200+', l: 'Farmers Served' },
              { n: 'ISO', l: '9001:2015 Certified' },
              { n: '50+', l: 'Districts' },
            ].map(s => (
              <div key={s.l} className="flex items-center gap-2 bg-white/12 backdrop-blur-md border border-white/20 rounded-full px-4 py-2">
                <span className="text-harvest-gold font-black text-sm">{s.n}</span>
                <span className="text-white/70 text-xs">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Products Section ===== */}
      <section id="products" className="py-14 sm:py-18 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        {/* Search + Filters Row */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-muted text-xl">search</span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full bg-white border-2 border-kisan-green/12 text-text-primary placeholder-text-muted text-sm pl-11 pr-5 py-3.5 rounded-2xl focus:outline-none focus:border-kisan-green/40 focus:shadow-kisan transition-all duration-200"
            />
          </div>

          {/* Result count */}
          <div className="flex items-center gap-2 text-text-muted text-sm">
            <span className="material-symbols-outlined text-kisan-green text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>inventory_2</span>
            <span><strong className="text-kisan-green">{filtered.length}</strong> product{filtered.length !== 1 ? 's' : ''} found</span>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl border-2 transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-kisan-green text-white border-kisan-green shadow-md'
                  : 'bg-white text-text-secondary border-kisan-green/12 hover:border-kisan-green/35 hover:text-kisan-green hover:bg-kisan-green/5'
              }`}
            >
              <span>{CATEGORY_ICONS[cat] || '🌿'}</span>
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {filtered.length > 0 ? (
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {filtered.map((product) => (
              <StaggerItem key={product.id}>
                <ProductCard product={product} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : (
          <div className="text-center py-24 text-text-secondary">
            <div className="text-5xl mb-4">🌿</div>
            <p className="text-base font-medium mb-2">No products found</p>
            <p className="text-sm text-text-muted">Try a different search or filter category</p>
            <button
              onClick={() => { setSearch(''); setActiveCategory('All Products'); }}
              className="mt-4 px-6 py-2.5 bg-kisan-green text-white text-sm font-bold rounded-xl hover:bg-kisan-green-dark transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* ===== B2B CTA Banner ===== */}
        <ScrollReveal delay={0.1}>
          <div className="mt-20 relative rounded-[28px] overflow-hidden">
            <img src="/images/facility.png" alt="Agri-Gen facility" className="absolute inset-0 w-full h-full object-cover opacity-20" />
            <div className="relative z-10 bg-gradient-to-r from-kisan-green-dark to-kisan-green p-8 sm:p-12 lg:p-16">
              <div className="max-w-4xl mx-auto text-center">
                <span className="inline-block px-4 py-1.5 mb-5 text-xs font-bold tracking-widest uppercase bg-white/15 text-white rounded-full border border-white/25">
                  🤝 Premium B2B Partnership
                </span>
                <h2 className="font-headline font-extrabold text-3xl sm:text-4xl text-white mb-3 leading-tight">
                  Bulk Supply & Custom Formulations
                </h2>
                <p className="font-devanagari text-harvest-gold text-base mb-5">थोक पुरवठा आणि कस्टम फॉर्म्युलेशन</p>
                <p className="text-white/80 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
                  White Label Manufacturing · Contract Manufacturing · Private Label Packaging · Co-Marketing Models
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href="tel:7385266728"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-harvest-gold hover:bg-harvest-gold-light text-earth-brown font-extrabold rounded-xl shadow-lg transition-all duration-200"
                  >
                    📞 Call: 7385266728
                  </a>
                  <a
                    href="https://wa.me/917385266728"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/15 backdrop-blur-sm text-white border border-white/40 hover:bg-white/25 font-bold rounded-xl transition-all duration-200"
                  >
                    💬 WhatsApp Enquiry
                  </a>
                </div>

                {/* B2B services row */}
                <div className="mt-10 grid grid-cols-2 sm:grid-cols-5 gap-4">
                  {[
                    { icon: 'local_shipping', label: 'Bulk Supply' },
                    { icon: 'branding_watermark', label: 'White Label' },
                    { icon: 'precision_manufacturing', label: 'Contract Mfg' },
                    { icon: 'inventory_2', label: 'Private Label' },
                    { icon: 'handshake', label: 'Co-Marketing' },
                  ].map(s => (
                    <div key={s.label} className="flex flex-col items-center gap-2 bg-white/10 rounded-2xl p-4 border border-white/15">
                      <span className="material-symbols-outlined text-harvest-gold text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>{s.icon}</span>
                      <span className="text-white text-xs font-bold text-center">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
