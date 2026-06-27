'use client';

import Image from 'next/image';
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal';

const pillars = [
  {
    icon: 'location_on',
    title: 'Nashik, Maharashtra',
    desc: "Rooted in India's most celebrated agricultural heartland.",
    devanagari: 'नाशिक, महाराष्ट्र',
    color: '#3DAA35',
  },
  {
    icon: 'science',
    title: 'Research-Driven',
    desc: 'Every product backed by dedicated agri-science R&D.',
    devanagari: 'संशोधनावर आधारित',
    color: '#1A56B4',
  },
  {
    icon: 'verified',
    title: 'ISO 9001:2015',
    desc: 'Certified quality management from production to delivery.',
    devanagari: 'गुणवत्ता प्रमाणित',
    color: '#E8A320',
  },
  {
    icon: 'eco',
    title: 'Organic Certified',
    desc: 'Zero harmful chemicals. Soil-safe. Farmer-trusted inputs.',
    devanagari: 'सेंद्रिय प्रमाणित',
    color: '#3DAA35',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white">

      {/* ── Hero Banner ── */}
      <div className="relative h-[45vh] min-h-[320px] max-h-[480px] overflow-hidden">
        <img
          src="/images/field_wide.png"
          alt="Agri-Gen fields"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-white/50 text-xs font-bold tracking-[0.3em] uppercase mb-4">
              About Us
            </p>
            <h1 className="font-headline font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-3 drop-shadow-lg">
              Agri-Gen{' '}
              <span style={{ color: '#3DAA35' }}>Innovation</span>
            </h1>
            <p className="font-devanagari text-white/60 text-base sm:text-lg">
              शेती समृद्धीसाठी — विज्ञान आणि निसर्गाचा संगम
            </p>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24">

        {/* Brand Identity Block */}
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-20 lg:mb-28">

            {/* Logo + Tagline */}
            <div className="flex-shrink-0 text-center lg:text-left">
              <div className="inline-flex flex-col items-center lg:items-start">
                <Image
                  src="/images/nav_logo.png"
                  alt="Agri-Gen Innovation"
                  width={200}
                  height={70}
                  className="h-16 sm:h-20 w-auto object-contain mb-4"
                  unoptimized
                />
                <div className="h-px w-40 bg-gradient-to-r from-[#3DAA35] to-[#1A56B4] mb-4" />
                <p className="text-gray-400 text-xs tracking-[0.25em] uppercase font-medium">
                  "Quality in Every Drop."
                </p>
              </div>
            </div>

            {/* Divider (desktop) */}
            <div className="hidden lg:block w-px h-40 bg-gray-100 flex-shrink-0" />

            {/* About Text */}
            <div className="flex-1">
              <p className="text-gray-800 text-lg sm:text-xl leading-relaxed mb-5 font-medium">
                Agri-Gen Innovation is a forward-thinking agricultural company headquartered in{' '}
                <strong style={{ color: '#3DAA35' }}>Nashik, Maharashtra</strong> — India&apos;s
                premier agricultural hub.
              </p>
              <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-5">
                We specialise in a wide range of premium agricultural inputs — organic plant
                protectors, microbial solutions, biostimulants, micronutrients, and growth
                promoters — engineered with science, tested in fields.
              </p>
              <p className="text-gray-500 text-base leading-relaxed">
                Our mission is simple: empower every farmer with the same quality inputs that
                were once available only to large-scale operations. Agri-Gen bridges science
                and soil — for a sustainable, prosperous farming future.
              </p>
            </div>

          </div>
        </ScrollReveal>

        {/* Pillars Grid */}
        <ScrollReveal delay={0.1}>
          <div className="border-t border-gray-100 pt-16 mb-16">
            <p className="text-gray-400 text-[10px] font-bold tracking-[0.35em] uppercase text-center mb-10">
              Our Foundation
            </p>
            <StaggerContainer
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
              staggerDelay={0.08}
            >
              {pillars.map((p) => (
                <StaggerItem key={p.title}>
                  <div className="group text-center p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300 bg-white">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: p.color + '15' }}
                    >
                      <span
                        className="material-symbols-outlined text-2xl"
                        style={{ color: p.color, fontVariationSettings: "'FILL' 1, 'wght' 600" }}
                      >
                        {p.icon}
                      </span>
                    </div>
                    <h3 className="font-headline font-bold text-gray-900 text-sm mb-1">
                      {p.title}
                    </h3>
                    <p className="font-devanagari text-gray-400 text-[11px] mb-2">
                      {p.devanagari}
                    </p>
                    <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </ScrollReveal>

        {/* Brand Statement */}
        <ScrollReveal delay={0.15}>
          <div
            className="relative rounded-2xl overflow-hidden px-8 sm:px-14 py-12 sm:py-16 text-center"
            style={{ background: 'linear-gradient(135deg, #0F2414 0%, #1B4332 60%, #1A3A6B 100%)' }}
          >
            {/* Subtle dots pattern */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />
            <div className="relative z-10">
              <p className="text-white/40 text-[10px] font-bold tracking-[0.35em] uppercase mb-6">
                Our Commitment
              </p>
              <p className="font-headline font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white leading-snug mb-5 max-w-3xl mx-auto">
                Advance Biosolution for{' '}
                <span style={{ color: '#E8A320' }}>Sustainable Farming</span>
              </p>
              <p className="font-devanagari text-white/50 text-base mb-8">
                शाश्वत शेतीसाठी प्रगत जैव उपाय
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Organic Certified', 'Field Tested', 'Farmer Trusted', 'ISO 9001:2015'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold px-4 py-1.5 rounded-full border text-white/70 border-white/15 bg-white/5"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
