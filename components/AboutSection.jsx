'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

const features = [
  {
    icon: '🏛️',
    titleKey: 'hq',
    localKey: 'hqLocal',
    desc: 'Based in Nashik, Maharashtra — one of India\'s most renowned agricultural hubs. We are deeply rooted in the farming heartland.',
  },
  {
    icon: '🚀',
    titleKey: 'established',
    localKey: null,
    desc: 'Rapidly emerging as a diversified business group with a strong focus on agricultural manufacturing and organic inputs.',
  },
  {
    icon: '🧪',
    titleKey: 'science',
    localKey: null,
    desc: 'Transforming modern agriculture through sustainable practices and advanced agri-tech solutions for higher yield.',
  },
];

export default function AboutSection() {
  const t = useTranslations('about');

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left: Image Grid */}
        <div className="grid grid-cols-2 gap-4 lg:sticky lg:top-32">
          <div className="relative h-48 sm:h-56 rounded-kisan overflow-hidden border-2 border-kisan-green/10 shadow-warm group">
            <Image
              src="/images/field_wide.png"
              alt="Agricultural field in Nashik region"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              unoptimized
            />
          </div>
          <div className="relative h-48 sm:h-56 rounded-kisan overflow-hidden border-2 border-kisan-green/10 shadow-warm group">
            <Image
              src="/images/farmer_1.png"
              alt="Farmer from Nashik with harvested crops"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              unoptimized
            />
          </div>
          <div className="col-span-2 relative h-52 sm:h-72 rounded-kisan overflow-hidden border-2 border-kisan-green/10 shadow-warm group">
            <Image
              src="/images/hero_farmer.png"
              alt="Smiling Indian farmer in green agricultural field"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-kisan-green-dark/40 to-transparent" />
            <div className="absolute bottom-4 left-4 bg-harvest-gold text-earth-brown text-xs font-extrabold px-4 py-2 rounded-full shadow-lg">
              ✅ {t('hq')} — {t('hqLocal')}
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex flex-col gap-8">
          {/* Label */}
          <div className="inline-flex items-center gap-2 bg-kisan-green/10 w-fit px-4 py-2 rounded-full border border-kisan-green/20">
            <span className="w-2 h-2 rounded-full bg-kisan-green animate-pulse" />
            <span className="text-kisan-green text-xs font-bold tracking-widest uppercase">
              {t('label')}
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-headline font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight text-pure-black">
            {t('title').split('Innovation')[0]}
            <span className="text-gradient-kisan">Innovation</span>
          </h2>

          {/* Body Content */}
          <div className="flex flex-col gap-5 text-text-secondary leading-relaxed text-base sm:text-lg">
            <p>
              Agri-Gen Innovation is a forward-thinking agricultural company headquartered in <strong className="text-pure-black">Nashik, Maharashtra</strong> — one of India&apos;s renowned spiritual and agricultural hubs.
            </p>
            <p>
              Established in 2026, we specialize in a wide range of high-quality agricultural inputs, including organic plant protectors, microbial solutions, mycorrhizae products, and plant growth promoters.
            </p>
            <p>
              We act as a bridge that empowers farmers with smarter, more efficient, and environmentally responsible solutions. By integrating research, field expertise, and a farmer-centric approach, we strive to create sustainable agricultural systems.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            {features.map((f) => (
              <div
                key={f.titleKey}
                className="flex flex-col gap-3 bg-cream border-2 border-kisan-green/10 rounded-kisan p-5 hover:border-kisan-green/30 hover:shadow-kisan transition-all duration-300 group"
              >
                <div className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {f.icon}
                </div>
                <div>
                  <div className="font-bold text-pure-black text-sm mb-1">
                    {t(f.titleKey)}
                  </div>
                  {f.localKey && (
                    <div className="font-devanagari text-kisan-green text-xs mb-1">
                      {t(f.localKey)}
                    </div>
                  )}
                  <div className="text-text-muted text-xs leading-relaxed">
                    {f.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Commitment Box */}
          <div className="bg-kisan-green-dark rounded-kisan-lg p-6 sm:p-8 text-white relative overflow-hidden group">
            <div className="relative z-10">
              <h4 className="text-lg font-bold mb-2">{t('commitment')}</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                {t('commitmentDesc')}
              </p>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-harvest-gold/10 rounded-full -mr-10 -mt-10 blur-3xl group-hover:bg-harvest-gold/20 transition-all" />
          </div>
        </div>
      </div>
    </section>
  );
}
