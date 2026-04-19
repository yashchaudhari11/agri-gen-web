import Image from 'next/image';
import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[420px]">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1605000797498-6f2145b1d0e5?w=1400&q=80"
          alt="Farmer delivering organic excellence"
          fill
          className="object-cover object-center"
          unoptimized
        />

        {/* Heavy gradient overlay (left-dominant) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-transparent to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full min-h-[380px] sm:min-h-[420px] px-8 sm:px-14 lg:px-20 py-12 max-w-2xl">
          {/* Badge */}
          <div className="inline-flex w-fit items-center gap-2 bg-ag-green text-gray-900 text-xs font-black px-4 py-1.5 rounded-full mb-6 tracking-wide">
            🎯 Our Mission
          </div>

          {/* Headline */}
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight text-gray-900 mb-5">
            Delivering Excellence that{' '}
            <span className="text-gradient">Brings Smiles</span>{' '}
            to Farmers
          </h2>

          {/* Subtext */}
          <p className="text-gray-600 text-base leading-relaxed max-w-lg">
            Every product we source, every partnership we forge, and every delivery we make is
            driven by a single purpose — creating lasting prosperity for the farming communities
            that feed our nation.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-ag-green text-gray-900 font-bold px-7 py-3.5 rounded-full hover:bg-green-300 hover:shadow-xl hover:shadow-ag-green/30 transition-all duration-200 text-sm"
            >
              Partner With Us →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
