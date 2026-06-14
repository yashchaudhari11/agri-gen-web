'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal';

const crops = [
  {
    name: 'Grapes',
    nameLocal: 'द्राक्षे',
    image: '/images/crop_grapes.png',
    color: 'from-purple-600/80 to-purple-900/90',
    badgeColor: 'bg-purple-500',
    products: 'Plant Growth Promoters, Fungicides, Micronutrients',
    count: '18+ Products',
    emoji: '🍇',
  },
  {
    name: 'Onions',
    nameLocal: 'कांदा',
    image: '/images/crop_onions.png',
    color: 'from-amber-600/80 to-amber-900/90',
    badgeColor: 'bg-amber-500',
    products: 'Soil Conditioners, Bio-Protectants, Yield Boosters',
    count: '14+ Products',
    emoji: '🧅',
  },
  {
    name: 'Sugarcane',
    nameLocal: 'ऊस',
    image: '/images/crop_sugarcane.png',
    color: 'from-green-600/80 to-green-900/90',
    badgeColor: 'bg-green-600',
    products: 'Bio-Fertilizers, Growth Regulators, Pest Management',
    count: '12+ Products',
    emoji: '🌿',
  },
  {
    name: 'Pomegranate',
    nameLocal: 'डाळिंब',
    image: '/images/crop_pomegranate.png',
    color: 'from-red-600/80 to-red-900/90',
    badgeColor: 'bg-red-500',
    products: 'Disease Control, Fruit Quality, Organic Nutrients',
    count: '16+ Products',
    emoji: '🍎',
  },
  {
    name: 'Cotton',
    nameLocal: 'कापूस',
    image: '/images/crop_cotton.png',
    color: 'from-slate-500/80 to-slate-800/90',
    badgeColor: 'bg-slate-500',
    products: 'Boll Development, Pest Defense, Soil Enrichment',
    count: '10+ Products',
    emoji: '🤍',
  },
  {
    name: 'Banana',
    nameLocal: 'केळी',
    image: '/images/crop_banana.png',
    color: 'from-yellow-500/80 to-yellow-900/90',
    badgeColor: 'bg-yellow-500',
    products: 'Bunch Size Booster, Ripening Management, Organic Nutrition',
    count: '11+ Products',
    emoji: '🍌',
  },
  {
    name: 'Wheat',
    nameLocal: 'गहू',
    image: '/images/crop_wheat.png',
    color: 'from-orange-500/80 to-orange-900/90',
    badgeColor: 'bg-orange-500',
    products: 'Grain Fill Enhancer, Disease Resistance, Micronutrients',
    count: '9+ Products',
    emoji: '🌾',
  },
  {
    name: 'Soybean',
    nameLocal: 'सोयाबीन',
    image: '/images/crop_soybean.png',
    color: 'from-lime-600/80 to-lime-900/90',
    badgeColor: 'bg-lime-600',
    products: 'Nodule Activators, Yield Boosters, Bio-Protectants',
    count: '8+ Products',
    emoji: '🫘',
  },
];

export default function ShopByCrop() {
  const locale = useLocale();
  const prefix = locale === 'en' ? '' : `/${locale}`;

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-cream soil-pattern" id="shop-by-crop">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase bg-kisan-green/10 text-kisan-green rounded-full border border-kisan-green/20">
              🌾 Shop by Crop
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-pure-black mb-3">
              Solutions for Your Harvest
            </h2>
            <p className="font-devanagari text-kisan-green text-lg mb-2">
              तुमच्या पिकासाठी योग्य उत्पादने
            </p>
            <p className="text-text-secondary text-base sm:text-lg max-w-xl mx-auto">
              Click your crop to see every input you need — from seed to harvest
            </p>
          </div>
        </ScrollReveal>

        {/* Crop Cards */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6" staggerDelay={0.08}>
          {crops.map((crop) => (
            <StaggerItem key={crop.name}>
              <Link
                href={`${prefix}/products`}
                className="group relative block rounded-kisan-lg overflow-hidden h-64 sm:h-72 lg:h-80 shadow-warm hover:shadow-kisan-lg transition-all duration-500 hover:-translate-y-2"
              >
                {/* Background Image */}
                <img
                  src={crop.image}
                  alt={`${crop.name} farming in Maharashtra`}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${crop.color} group-hover:opacity-90 transition-opacity duration-500`} />

                {/* Top badge */}
                <div className="absolute top-3 right-3 z-10">
                  <span className={`${crop.badgeColor} text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-md uppercase tracking-wider`}>
                    {crop.count}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 z-10">
                  {/* Emoji */}
                  <span className="text-3xl sm:text-4xl mb-2 group-hover:scale-125 transition-transform duration-500 inline-block w-fit">
                    {crop.emoji}
                  </span>

                  {/* Crop Name */}
                  <h3 className="font-headline font-extrabold text-lg sm:text-xl lg:text-2xl text-white leading-tight mb-0.5">
                    {crop.name}
                  </h3>
                  <p className="font-devanagari text-white/70 text-xs mb-2">
                    {crop.nameLocal}
                  </p>

                  {/* Product types */}
                  <p className="text-white/60 text-[9px] sm:text-[10px] leading-relaxed line-clamp-2 mb-2">
                    {crop.products}
                  </p>

                  {/* Explore arrow */}
                  <div className="flex items-center gap-1.5 text-white/80 group-hover:text-white transition-colors">
                    <span className="text-xs font-bold">Explore Solutions</span>
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
