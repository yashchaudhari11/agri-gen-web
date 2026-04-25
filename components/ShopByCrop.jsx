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
    products: 'Plant Growth Promoters, Fungicides, Micronutrients',
    count: '18+ Products',
    emoji: '🍇',
  },
  {
    name: 'Onions',
    nameLocal: 'कांदा',
    image: '/images/crop_onions.png',
    color: 'from-amber-600/80 to-amber-900/90',
    products: 'Soil Conditioners, Bio-Protectants, Yield Boosters',
    count: '14+ Products',
    emoji: '🧅',
  },
  {
    name: 'Sugarcane',
    nameLocal: 'ऊस',
    image: '/images/crop_sugarcane.png',
    color: 'from-green-600/80 to-green-900/90',
    products: 'Bio-Fertilizers, Growth Regulators, Pest Management',
    count: '12+ Products',
    emoji: '🌾',
  },
  {
    name: 'Pomegranate',
    nameLocal: 'डाळिंब',
    image: '/images/crop_pomegranate.png',
    color: 'from-red-600/80 to-red-900/90',
    products: 'Disease Control, Fruit Quality, Organic Nutrients',
    count: '16+ Products',
    emoji: '🍎',
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
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6" staggerDelay={0.12}>
          {crops.map((crop) => (
            <StaggerItem key={crop.name}>
              <Link
                href={`${prefix}/products`}
                className="group relative block rounded-kisan-lg overflow-hidden h-72 sm:h-80 lg:h-96 shadow-warm hover:shadow-kisan-lg transition-all duration-500 hover:-translate-y-2"
              >
                {/* Background Image */}
                <img
                  src={crop.image}
                  alt={`${crop.name} farming in Maharashtra`}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${crop.color} group-hover:opacity-90 transition-opacity duration-500`} />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 z-10">
                  {/* Emoji */}
                  <span className="text-4xl sm:text-5xl mb-3 group-hover:scale-125 transition-transform duration-500 inline-block w-fit">
                    {crop.emoji}
                  </span>

                  {/* Crop Name */}
                  <h3 className="font-headline font-extrabold text-xl sm:text-2xl lg:text-3xl text-white leading-tight mb-1">
                    {crop.name}
                  </h3>
                  <p className="font-devanagari text-white/70 text-sm mb-3">
                    {crop.nameLocal}
                  </p>

                  {/* Product count badge */}
                  <div className="bg-white/20 backdrop-blur-md rounded-xl px-3 py-2 mb-3 border border-white/10 w-fit">
                    <p className="text-white font-bold text-xs">
                      {crop.count}
                    </p>
                  </div>

                  {/* Product types */}
                  <p className="text-white/60 text-[10px] sm:text-xs leading-relaxed line-clamp-2">
                    {crop.products}
                  </p>

                  {/* Explore arrow */}
                  <div className="mt-3 flex items-center gap-1.5 text-white/80 group-hover:text-white transition-colors">
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
