import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronRight, Sprout } from 'lucide-react';

const stats = [
  { value: '500+', label: 'Products' },
  { value: '1200+', label: 'Farmers' },
  { value: '50+', label: 'Districts' },
];

export default function HeroSection() {
  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-full mx-auto">
      {/* Main Hero Content */}
      <div className="overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-2 bg-ag-green/10 border border-ag-green/30 text-ag-green text-xs font-semibold px-4 py-2 rounded-full">
              <Sprout size={13} />
              100% Organic
            </div>

            {/* Headline */}
            <div>
              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight text-gray-900">
                A House of{' '}
                <span className="block text-gradient">Organic</span>
                <span className="block">Products</span>
              </h1>
            </div>

            {/* Subtext */}
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-md">
              AGRI-GEN brings together the finest certified organic produce, spices, nutraceuticals
              and agro-commodities directly sourced from 1200+ trusted farmers across India.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-ag-green text-gray-900 font-bold px-6 py-3.5 rounded-full hover:bg-green-300 hover:shadow-xl hover:shadow-ag-green/30 transition-all duration-200 text-sm"
              >
                Our Products
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-gray-200 text-gray-900 font-semibold px-6 py-3.5 rounded-full hover:border-ag-green/50 hover:text-ag-green hover:bg-gray-100/50 transition-all duration-200 text-sm"
              >
                Learn More
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-72 sm:h-80 lg:h-[480px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80"
              alt="Lush green organic greenhouse farm"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              unoptimized
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-ag-card via-transparent to-transparent" />

            {/* Floating label */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-md border border-gray-200 text-gray-900 text-xs font-medium px-4 py-2.5 rounded-full">
              🌿 Fresh from the farm
            </div>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-ag-card border border-gray-200 rounded-2xl px-6 py-6 text-center hover:border-ag-green/30 hover:bg-ag-card2 transition-all duration-300 group"
          >
            <div className="font-display font-black text-3xl sm:text-4xl text-ag-green group-hover:scale-110 transition-transform duration-200 inline-block">
              {stat.value}
            </div>
            <div className="text-gray-600 text-sm mt-1 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
