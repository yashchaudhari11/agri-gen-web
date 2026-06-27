'use client';

import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal';

// Other Brands vs Agri-Gen Innovation
// Intent: Show WHY Agri-Gen is the smarter choice — brand credibility, not chemical vs organic
const comparisons = [
  {
    aspect: 'Product Quality',
    aspectLocal: 'उत्पादनाची गुणवत्ता',
    icon: 'workspace_premium',
    other: 'Generic formulations with inconsistent batch quality and unverified inputs',
    agrigen: 'Imported-grade ingredients, ISO 9001:2015 certified — every batch verified',
  },
  {
    aspect: 'Transparency',
    aspectLocal: 'पारदर्शकता',
    icon: 'fact_check',
    other: 'Hidden fillers, no ingredient disclosure, no lab reports shared with farmers',
    agrigen: 'Full specification sheets, lab certificates & crop trial data available on request',
  },
  {
    aspect: 'Farmer Support',
    aspectLocal: 'शेतकरी सहाय्य',
    icon: 'support_agent',
    other: 'Sell and move on — no follow-up, no field guidance after purchase',
    agrigen: 'Dedicated field advisors, free agri-advisory calls, crop-specific guidance',
  },
  {
    aspect: 'Product Range',
    aspectLocal: 'उत्पादन श्रेणी',
    icon: 'category',
    other: 'Limited, copied product lines with little innovation or specialisation',
    agrigen: '7 unique categories — biostimulants, bio-protectors, adjuvants, micronutrients & more',
  },
  {
    aspect: 'Supply Reliability',
    aspectLocal: 'पुरवठ्याची विश्वासार्हता',
    icon: 'local_shipping',
    other: 'Seasonal shortages, delayed deliveries, no bulk-ready infrastructure',
    agrigen: 'Consistent supply chain, B2B bulk-ready, export-grade packaging & logistics',
  },
  {
    aspect: 'Value for Farmer',
    aspectLocal: 'शेतकऱ्यासाठी मूल्य',
    icon: 'savings',
    other: 'High upfront cost with diminishing returns, no visible yield improvement data',
    agrigen: 'Measurable crop results, cost-efficient per-acre inputs, re-order driven by results',
  },
];

export default function WhyAgriGen() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white border-t border-gray-100" id="why-agrigen">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-8">

        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-gray-400 text-[10px] font-bold tracking-[0.35em] uppercase mb-5">
              Why Choose Us
            </p>
            <h2 className="font-headline font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight mb-4">
              Other Brands vs{' '}
              <span style={{ color: '#3DAA35' }}>Agri-Gen Innovation</span>
            </h2>
            <p className="font-devanagari text-gray-400 text-base max-w-md mx-auto">
              इतर ब्रँड्स विरुद्ध अॅग्री-जेन इनोव्हेशन — फरक स्वतः पहा
            </p>
          </div>
        </ScrollReveal>

        {/* Column Headers */}
        <ScrollReveal delay={0.05}>
          <div className="grid grid-cols-[1fr_1fr] gap-3 mb-4 ml-[calc(2rem+1px)] sm:ml-[calc(3.5rem+1px)]">
            {/* Other Brands */}
            <div className="rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-center">
              <p className="font-headline font-extrabold text-sm text-gray-500 tracking-tight">
                ✗ &nbsp;Other Brands
              </p>
              <p className="font-devanagari text-gray-400 text-[11px] mt-0.5">इतर ब्रँड्स</p>
            </div>
            {/* Agri-Gen */}
            <div
              className="rounded-xl px-4 py-3 text-center"
              style={{ background: '#3DAA3512', border: '1.5px solid #3DAA3530' }}
            >
              <p
                className="font-headline font-extrabold text-sm tracking-tight"
                style={{ color: '#3DAA35' }}
              >
                ✓ &nbsp;Agri-Gen Innovation
              </p>
              <p className="font-devanagari text-[11px] mt-0.5" style={{ color: '#3DAA3580' }}>
                अॅग्री-जेन इनोव्हेशन
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Comparison Rows */}
        <StaggerContainer className="flex flex-col gap-2.5" staggerDelay={0.08}>
          {comparisons.map((item) => (
            <StaggerItem key={item.aspect}>
              <div className="group grid grid-cols-[auto_1fr_1fr] gap-3 items-stretch">

                {/* Aspect Label */}
                <div className="w-8 sm:w-14 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-1.5">
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#3DAA3512' }}
                    >
                      <span
                        className="material-symbols-outlined text-base"
                        style={{ color: '#3DAA35', fontVariationSettings: "'FILL' 1, 'wght' 600" }}
                      >
                        {item.icon}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Other Brands */}
                <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 sm:p-5">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    {item.aspect}
                    <span className="font-devanagari normal-case ml-1.5 text-gray-300">
                      · {item.aspectLocal}
                    </span>
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    {item.other}
                  </p>
                </div>

                {/* Agri-Gen */}
                <div
                  className="rounded-xl p-4 sm:p-5 group-hover:shadow-sm transition-shadow duration-200"
                  style={{ background: '#3DAA3508', border: '1.5px solid #3DAA3520' }}
                >
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span
                      className="text-[10px] font-extrabold uppercase tracking-wider"
                      style={{ color: '#3DAA35' }}
                    >
                      Agri-Gen Innovation
                    </span>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-medium">
                    {item.agrigen}
                  </p>
                </div>

              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom — Brand Differentiator Statement */}
        <ScrollReveal delay={0.2}>
          <div
            className="mt-12 sm:mt-16 rounded-2xl overflow-hidden px-8 sm:px-12 py-10 sm:py-14 text-center"
            style={{ background: 'linear-gradient(135deg, #0F2414 0%, #1B4332 60%, #1A3A6B 100%)' }}
          >
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
            <p className="text-white/40 text-[10px] font-bold tracking-[0.35em] uppercase mb-5">
              The Agri-Gen Promise
            </p>
            <p className="font-headline font-extrabold text-2xl sm:text-3xl text-white leading-snug mb-4 max-w-2xl mx-auto">
              Quality You Can See.{' '}
              <span style={{ color: '#E8A320' }}>Results You Can Measure.</span>
            </p>
            <p className="font-devanagari text-white/45 text-sm mb-8">
              गुणवत्ता दिसते — परिणाम जाणवतो. हेच आमचे वचन.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['ISO 9001:2015 Certified', 'Imported-Grade Inputs', 'Field Advisor Support', 'Full Spec Transparency'].map(
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
        </ScrollReveal>

      </div>
    </section>
  );
}
