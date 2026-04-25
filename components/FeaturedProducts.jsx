'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { products } from '@/lib/products-data';
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal';

const bestsellerIds = [1, 3, 6, 8];
const highYieldIds = [4, 7, 10];

const badgeMap = {
  'Green Formulation': { label: 'Soil Booster', emoji: '🌱', class: 'bg-field-green text-white' },
  'Nutraceuticals': { label: 'High Yield', emoji: '📈', class: 'badge-highyield' },
  'Food Products': { label: 'Pure & Natural', emoji: '🌿', class: 'bg-kisan-green text-white' },
  'Spice Collection': { label: 'Premium Spice', emoji: '🌶️', class: 'bg-harvest-gold text-earth-brown' },
  'Agro-commodities': { label: 'Farm Essential', emoji: '🚜', class: 'bg-earth-brown text-white' },
};

export default function FeaturedProducts() {
  const t = useTranslations('products');
  const locale = useLocale();
  const prefix = locale === 'en' ? '' : `/${locale}`;

  // Take first 12 products for featured grid
  const featured = products.slice(0, 12);

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-warm-white" id="featured-products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase bg-harvest-gold/15 text-harvest-gold-dark rounded-full border border-harvest-gold/30">
              🛒 Featured Solutions
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-pure-black mb-3">
              Proven Products for Every Field
            </h2>
            <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
              From soil boosters to bio-protectants — solutions trusted by 1200+ farmers across Maharashtra
            </p>
          </div>
        </ScrollReveal>

        {/* Product Grid */}
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6" staggerDelay={0.06}>
          {featured.map((product) => {
            const isBestseller = bestsellerIds.includes(product.id);
            const isHighYield = highYieldIds.includes(product.id);
            const badge = badgeMap[product.category];

            return (
              <StaggerItem key={product.id}>
                <Link
                  href={`${prefix}/products/${product.id}`}
                  className="group flex flex-col bg-white rounded-kisan overflow-hidden border-2 border-kisan-green/8 hover:border-kisan-green/25 hover:shadow-kisan-lg transition-all duration-400 h-full relative"
                >
                  {/* Image */}
                  <div className="relative h-36 sm:h-44 overflow-hidden bg-cream">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />

                    {/* Quick View Badge */}
                    <div className="absolute top-2 left-2 flex flex-col gap-1">
                      {badge && (
                        <span className={`text-[9px] sm:text-[10px] font-extrabold px-2.5 py-1 rounded-full ${badge.class}`}>
                          {badge.emoji} {badge.label}
                        </span>
                      )}
                      {isBestseller && (
                        <span className="badge-bestseller animate-badge-shine text-[9px] sm:text-[10px]">
                          ⭐ Bestseller
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-3 sm:p-4 flex flex-col gap-2 flex-grow">
                    <h3 className="font-headline font-bold text-pure-black text-xs sm:text-sm leading-tight line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-text-muted text-[10px] sm:text-xs line-clamp-2 flex-grow">
                      {product.description}
                    </p>
                    {/* Price — Bold Green */}
                    <div className="flex items-center justify-between pt-1 mt-auto">
                      <span className="text-kisan-green font-black text-base sm:text-lg">
                        {product.price}
                      </span>
                      <span className="text-[10px] text-kisan-green font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                        View →
                      </span>
                    </div>
                  </div>

                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-kisan pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_0_2px_rgba(45,106,79,0.15)]" />
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Explore All Products Button */}
        <ScrollReveal delay={0.3}>
          <div className="text-center mt-10 sm:mt-14">
            <Link
              href={`${prefix}/products`}
              className="group inline-flex items-center gap-3 bg-kisan-green text-white font-bold text-base px-10 py-5 rounded-2xl btn-3d shadow-3d hover:shadow-3d-hover transition-all duration-200 touch-target relative overflow-hidden"
              id="explore-all-products-btn"
            >
              {/* Pulse ring */}
              <span className="absolute inset-0 rounded-2xl animate-whatsapp-pulse opacity-30 bg-kisan-green" />
              <span className="relative z-10 flex items-center gap-3">
                🌿 Explore All {products.length}+ Products
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
