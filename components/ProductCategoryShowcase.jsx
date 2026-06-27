'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal';

const CATEGORIES = [
  {
    id: 'biostimulant',
    name: 'Unique Biostimulant',
    nameMr: 'बायोस्टिम्युलंट',
    desc: 'Science-driven plant activation formulas that trigger natural growth hormones and maximize yield potential.',
    image: '/images/categories/biostimulant.png',
    accentColor: '#3DAA35',
    accentBg: '#F0FAF0',
    icon: '🌿',
    tag: 'Bestseller',
  },
  {
    id: 'bio-protector',
    name: 'Bio Plant Protector',
    nameMr: 'जैव संरक्षक',
    desc: 'Nature-based defence against pests, fungal disease and pathogens — safe for soil, crops and consumers.',
    image: '/images/categories/bio_protector.png',
    accentColor: '#1A56B4',
    accentBg: '#EFF6FF',
    icon: '🛡️',
    tag: null,
  },
  {
    id: 'adjuvant',
    name: 'Adjuvant',
    nameMr: 'अॅडज्युव्हंट',
    desc: 'Spray enhancers for superior coverage, sticking and absorption — making every application more effective.',
    image: '/images/categories/adjuvant.png',
    accentColor: '#0EA5E9',
    accentBg: '#F0F9FF',
    icon: '💧',
    tag: null,
  },
  {
    id: 'micronutrient',
    name: 'Chelated Micronutrients',
    nameMr: 'सूक्ष्म अन्नद्रव्ये',
    desc: 'Precision-chelated Zn, Fe, Mg, Mn, Cu, B & Mo nutrition for healthy crop colour, flowering and grain fill.',
    image: '/images/categories/micronutrient.png',
    accentColor: '#8B5CF6',
    accentBg: '#F5F3FF',
    icon: '⚗️',
    tag: null,
  },
  {
    id: 'organic-fertilizer',
    name: 'Organic Fertilizer',
    nameMr: 'सेंद्रिय खत',
    desc: 'Humic, fulvic and amino-acid based soil conditioners that rebuild microbial life and long-term soil health.',
    image: '/images/categories/organic_fertilizer.png',
    accentColor: '#D97706',
    accentBg: '#FFFBEB',
    icon: '🌱',
    tag: 'Certified Organic',
  },
  {
    id: 'bio-fertilizer',
    name: 'Bio Fertilizer',
    nameMr: 'जैव खत',
    desc: 'Beneficial microbes for natural nitrogen fixation and phosphorus availability in root zones.',
    image: '/images/categories/bio_fertilizer.png',
    accentColor: '#16A34A',
    accentBg: '#F0FDF4',
    icon: '🔬',
    tag: null,
  },
  {
    id: 'water-soluble',
    name: 'Water Soluble Speciality',
    nameMr: 'जलविद्राव्य खत',
    desc: '100% water-soluble NPK and specialty formulations for drip irrigation and foliar feeding programs.',
    image: '/images/categories/water_soluble.png',
    accentColor: '#0369A1',
    accentBg: '#F0F9FF',
    icon: '🌊',
    tag: null,
  },
];

function CategoryCard({ cat }) {
  const locale = useLocale();
  const prefix = locale === 'en' ? '' : `/${locale}`;

  return (
    <Link
      href={`${prefix}/products`}
      aria-label={`Explore ${cat.name}`}
      className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-200/60 hover:-translate-y-1.5 transition-all duration-400 cursor-pointer h-full"
    >
      {/* Left accent bar on hover */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{ backgroundColor: cat.accentColor }}
      />

      {/* Image area */}
      <div className="relative h-44 overflow-hidden flex-shrink-0" style={{ backgroundColor: cat.accentBg }}>
        <img
          src={cat.image}
          alt={cat.name}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Subtle bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />

        {/* Tag badge */}
        {cat.tag && (
          <span
            className="absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-full text-white shadow-sm z-10"
            style={{ backgroundColor: cat.accentColor }}
          >
            {cat.tag}
          </span>
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5">
        {/* Icon + Marathi label row */}
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-xl">{cat.icon}</span>
          <span className="text-[10px] font-semibold text-gray-400 font-devanagari tracking-wide">
            {cat.nameMr}
          </span>
        </div>

        {/* Category name */}
        <h3
          className="font-headline font-bold text-gray-900 text-[15px] leading-tight mb-2 transition-colors duration-200 group-hover:text-opacity-90"
        >
          {cat.name}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-[12.5px] leading-relaxed flex-1">
          {cat.desc}
        </p>

        {/* CTA row — visible on hover */}
        <div
          className="mt-4 flex items-center gap-1.5 text-[12px] font-bold opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300"
          style={{ color: cat.accentColor }}
        >
          Explore Range
          <ArrowRight size={13} />
        </div>
      </div>
    </Link>
  );
}

export default function ProductCategoryShowcase() {
  const locale = useLocale();
  const prefix = locale === 'en' ? '' : `/${locale}`;

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F7F9F7]" id="product-categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-[10px] font-bold tracking-[0.25em] uppercase text-kisan-green bg-kisan-green/10 rounded-full border border-kisan-green/20">
                <span className="w-1.5 h-1.5 rounded-full bg-kisan-green animate-pulse" />
                Our Product Range
              </span>
              <h2 className="font-headline font-extrabold text-3xl sm:text-4xl text-gray-900 leading-tight">
                Premium Agri-Input{' '}
                <span className="text-kisan-green">Categories</span>
              </h2>
              <p className="text-gray-500 text-sm mt-2 max-w-lg leading-relaxed">
                Complete science-backed solutions for sustainable, high-yield farming — from seed to harvest.
              </p>
              <p className="font-devanagari text-gray-400 text-[13px] mt-1">
                सेंद्रिय शेतीसाठी संपूर्ण उत्पादन श्रेणी
              </p>
            </div>

            <Link
              href={`${prefix}/products`}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-kisan-green border-2 border-kisan-green hover:bg-kisan-green hover:text-white transition-all duration-300 whitespace-nowrap flex-shrink-0 self-start sm:self-auto"
            >
              View All Products
              <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>

        {/* Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {CATEGORIES.map((cat) => (
            <StaggerItem key={cat.id}>
              <CategoryCard cat={cat} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA strip */}
        <ScrollReveal>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-2xl px-7 py-5 border border-gray-100 shadow-sm">
            <div>
              <p className="font-bold text-gray-800 text-[15px]">Not sure which product is right for your crop?</p>
              <p className="text-gray-500 text-sm mt-0.5">Our agronomy experts are ready to help — free consultation, no obligation.</p>
            </div>
            <Link
              href={`${prefix}/contact`}
              className="inline-flex items-center gap-2 bg-kisan-green hover:bg-[#328f2c] text-white font-semibold text-sm px-6 py-2.5 rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0"
            >
              Talk to an Expert
              <ArrowRight size={15} />
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
