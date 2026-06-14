'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal';

const stats = [
  { value: '500+', label: 'Product SKUs', icon: 'inventory_2', color: 'text-kisan-green' },
  { value: '1200+', label: 'Farmers Served', icon: 'groups', color: 'text-harvest-gold-dark' },
  { value: '50+', label: 'Districts', icon: 'public', color: 'text-kisan-green' },
  { value: 'ISO', label: '9001:2015', icon: 'verified', color: 'text-harvest-gold-dark' },
];

const pillars = [
  {
    icon: '🏛️',
    titleKey: 'hq',
    localKey: 'hqLocal',
    desc: 'Based in Nashik, Maharashtra — one of India\'s most renowned agricultural hubs. Deeply rooted in the farming heartland.',
    accent: 'border-kisan-green/25 hover:border-kisan-green/50',
    iconBg: 'bg-kisan-green/10 group-hover:bg-kisan-green',
  },
  {
    icon: '🚀',
    titleKey: 'established',
    localKey: null,
    desc: 'Rapidly emerging as a diversified business group with a strong focus on agricultural manufacturing and organic inputs.',
    accent: 'border-harvest-gold/25 hover:border-harvest-gold/50',
    iconBg: 'bg-harvest-gold/10 group-hover:bg-harvest-gold',
  },
  {
    icon: '🧪',
    titleKey: 'science',
    localKey: null,
    desc: 'Transforming modern agriculture through sustainable practices and advanced agri-tech solutions for higher yield.',
    accent: 'border-field-green/25 hover:border-field-green/50',
    iconBg: 'bg-field-green/10 group-hover:bg-field-green',
  },
];

export default function AboutSection() {
  const t = useTranslations('about');

  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-warm-white">
      {/* Organic topo background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cpath d='M10 50 Q25 20 50 50 Q75 80 90 50' fill='none' stroke='%232D6A4F' stroke-width='1.5'/%3E%3Cpath d='M0 30 Q25 0 50 30 Q75 60 100 30' fill='none' stroke='%232D6A4F' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundSize: '100px 100px',
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ===== Page Hero Banner ===== */}
        <ScrollReveal>
          <div className="relative rounded-[32px] overflow-hidden mb-16 sm:mb-20 min-h-[260px] sm:min-h-[320px]">
            <img
              src="/images/field_wide.png"
              alt="Agri-Gen fields"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-kisan-green-dark/92 via-kisan-green-dark/70 to-transparent" />
            {/* Leaf pattern overlay */}
            <div className="absolute inset-0 leaf-overlay-pattern opacity-10" />

            <div className="relative z-10 p-8 sm:p-12 lg:p-16 flex flex-col justify-center h-full">
              <span className="inline-flex items-center gap-2 w-fit px-4 py-1.5 mb-5 text-xs font-bold tracking-widest uppercase bg-white/15 text-white rounded-full border border-white/30 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-harvest-gold animate-pulse" />
                {t('label')}
              </span>
              <h1 className="font-headline font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight text-white mb-4 drop-shadow-lg max-w-2xl">
                {t('title').split('Innovation')[0]}
                <span className="text-harvest-gold italic">Innovation</span>
              </h1>
              <p className="text-white/80 text-base sm:text-lg max-w-xl leading-relaxed">
                Agri-Gen Innovation is a forward-thinking agricultural company headquartered in{' '}
                <strong className="text-harvest-gold">Nashik, Maharashtra</strong> — transforming farming across India with certified organic inputs.
              </p>

              {/* Stat pills */}
              <div className="mt-8 flex flex-wrap gap-3">
                {stats.map((s) => (
                  <div key={s.label} className="flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-4 py-2">
                    <span className="material-symbols-outlined text-harvest-gold text-sm" style={{ fontVariationSettings: "'FILL' 1, 'wght' 600" }}>
                      {s.icon}
                    </span>
                    <span className="text-white font-black text-sm">{s.value}</span>
                    <span className="text-white/60 text-xs">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ===== Main Content Grid ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: Staggered Image Mosaic */}
          <div className="lg:sticky lg:top-28">
            <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.1}>
              {/* Top left — field */}
              <StaggerItem>
                <div className="relative h-52 sm:h-64 rounded-kisan overflow-hidden shadow-kisan group">
                  <Image
                    src="/images/field_wide.png"
                    alt="Agricultural field in Nashik region"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-kisan-green-dark/30 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-kisan-green text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">Nashik Fields</span>
                  </div>
                </div>
              </StaggerItem>

              {/* Top right — farmer */}
              <StaggerItem>
                <div className="relative h-52 sm:h-64 rounded-kisan overflow-hidden shadow-kisan group mt-6">
                  <Image
                    src="/images/farmer_1.png"
                    alt="Farmer from Nashik"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-harvest-gold/30 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-harvest-gold text-earth-brown text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">1200+ Farmers</span>
                  </div>
                </div>
              </StaggerItem>

              {/* Bottom — wide hero */}
              <StaggerItem>
                <div className="col-span-2 relative h-56 sm:h-72 rounded-kisan overflow-hidden shadow-kisan-lg group">
                  <Image
                    src="/images/hero_farmer.png"
                    alt="Smiling Indian farmer in green agricultural field"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-kisan-green-dark/60 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                    <div>
                      <p className="text-white font-headline font-bold text-lg drop-shadow">Farmer-First Philosophy</p>
                      <p className="font-devanagari text-harvest-gold text-sm">शेतकरी प्रथम — आमचा सिद्धांत</p>
                    </div>
                    <span className="bg-harvest-gold text-earth-brown text-xs font-extrabold px-4 py-2 rounded-full shadow-lg whitespace-nowrap">
                      ✅ {t('hq')}
                    </span>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>

            {/* Mini-soil image strip */}
            <div className="mt-4 relative h-24 rounded-kisan overflow-hidden group shadow-warm">
              <img src="/images/soil_texture.png" alt="Organic soil texture" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-kisan-green-dark/80 to-kisan-green/50" />
              <div className="relative z-10 p-4 flex items-center gap-4 h-full">
                <span className="material-symbols-outlined text-harvest-gold text-3xl" style={{ fontVariationSettings: "'FILL' 1, 'wght' 600" }}>eco</span>
                <div>
                  <p className="text-white font-bold text-sm">Rich Organic Soil</p>
                  <p className="font-devanagari text-harvest-gold text-xs">सेंद्रिय सुपीक जमीन</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col gap-8">

            {/* Body paragraphs with inline farmer image */}
            <ScrollReveal variant="fadeLeft">
              <div className="flex gap-4 items-start">
                <img
                  src="/images/farmer_2.png"
                  alt="Agri-Gen field expert"
                  className="w-20 h-20 rounded-2xl object-cover shadow-warm border-2 border-kisan-green/15 flex-shrink-0 hidden sm:block"
                />
                <div className="flex flex-col gap-4 text-text-secondary leading-relaxed text-base sm:text-lg">
                  <p>
                    Agri-Gen Innovation is a forward-thinking agricultural company headquartered in{' '}
                    <strong className="text-pure-black">Nashik, Maharashtra</strong> — one of India&apos;s renowned spiritual and agricultural hubs.
                  </p>
                  <p>
                    Established in 2026, we specialize in a wide range of high-quality agricultural inputs, including organic plant protectors, microbial solutions, mycorrhizae products, and plant growth promoters.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeLeft" delay={0.1}>
              <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
                We act as a bridge that empowers farmers with smarter, more efficient, and environmentally responsible solutions. By integrating research, field expertise, and a farmer-centric approach, we strive to create sustainable agricultural systems.
              </p>
            </ScrollReveal>

            {/* Pillars */}
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4" staggerDelay={0.1}>
              {pillars.map((f) => (
                <StaggerItem key={f.titleKey}>
                  <div className={`group flex flex-col gap-3 bg-white border-2 ${f.accent} rounded-2xl p-5 hover:shadow-kisan transition-all duration-300 cursor-default`}>
                    <div className={`w-12 h-12 rounded-xl ${f.iconBg} transition-colors duration-300 flex items-center justify-center text-2xl`}>
                      {f.icon}
                    </div>
                    <div>
                      <p className="font-headline font-bold text-pure-black text-sm mb-1">{t(f.titleKey)}</p>
                      {f.localKey && (
                        <p className="font-devanagari text-kisan-green text-xs mb-1">{t(f.localKey)}</p>
                      )}
                      <p className="text-text-muted text-xs leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Quote commitment box */}
            <ScrollReveal delay={0.2}>
              <div className="relative bg-kisan-green-dark rounded-[20px] p-7 sm:p-9 text-white overflow-hidden group">
                <div className="absolute top-0 right-0 w-44 h-44 bg-harvest-gold/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-harvest-gold/20 transition-all duration-700" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-10 -mb-10 blur-2xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-harvest-gold text-3xl" style={{ fontVariationSettings: "'FILL' 1, 'wght' 600" }}>volunteer_activism</span>
                    <h4 className="text-lg font-bold">{t('commitment')}</h4>
                  </div>
                  <p className="text-white/75 text-sm leading-relaxed mb-4">{t('commitmentDesc')}</p>
                  <div className="flex flex-wrap gap-2">
                    {['Organic Certified', 'Field Tested', 'Farmer Trusted'].map(tag => (
                      <span key={tag} className="text-[10px] font-bold px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/15">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
