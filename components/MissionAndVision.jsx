'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import TextToSpeech from './TextToSpeech';
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal';

const coreValues = [
  { icon: 'workspace_premium', label: 'Quality', labelMr: 'गुणवत्ता', color: 'bg-kisan-green' },
  { icon: 'handshake', label: 'Trust', labelMr: 'विश्वास', color: 'bg-harvest-gold' },
  { icon: 'verified_user', label: 'Accountability', labelMr: 'जबाबदारी', color: 'bg-kisan-green' },
  { icon: 'groups', label: 'Farmer First', labelMr: 'शेतकरी प्रथम', color: 'bg-field-green' },
  { icon: 'eco', label: 'Sustainability', labelMr: 'शाश्वतता', color: 'bg-earth-brown' },
];

const MissionAndVision = () => {
  const t = useTranslations('mission');

  return (
    <section id="mission-vision" className="relative overflow-hidden bg-warm-white">

      {/* ===== Hero Banner ===== */}
      <div className="relative min-h-[320px] sm:min-h-[380px] overflow-hidden">
        <img
          src="/images/field_wide.png"
          alt="Agri-Gen mission fields"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-kisan-green-dark/85 via-kisan-green/70 to-warm-white" />
        <div className="absolute inset-0 leaf-overlay-pattern opacity-10" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <span className="inline-block px-4 py-1.5 mb-5 text-xs font-bold tracking-widest uppercase bg-white/15 text-white rounded-full border border-white/30 backdrop-blur-sm">
            🎯 {t('sectionTitle')}
          </span>
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg">
            {t('pageTitle').split('Better')[0]}
            <span className="text-harvest-gold italic">Better Tomorrow</span>
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Rooted in Maharashtra&apos;s agricultural heritage, guided by science, and driven by the promise of a more prosperous future for every Indian farmer.
          </p>
          <p className="font-devanagari text-harvest-gold text-base sm:text-lg mt-3">
            महाराष्ट्राच्या शेतीच्या वारशात रुजलेले, विज्ञानाने मार्गदर्शित
          </p>
          {/* Decorative divider */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-harvest-gold/60" />
            <span className="material-symbols-outlined text-harvest-gold text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
            <div className="h-px w-16 bg-harvest-gold/60" />
          </div>
        </div>
      </div>

      {/* ===== Mission & Vision Cards ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">

          {/* Mission Card */}
          <ScrollReveal variant="fadeLeft">
            <div className="group relative flex flex-col h-full rounded-[28px] bg-white border-2 border-kisan-green/12 shadow-warm hover:shadow-kisan-lg hover:border-kisan-green/35 transition-all duration-500 hover:-translate-y-2 overflow-hidden">

              {/* Accent top strip */}
              <div className="h-1.5 w-full bg-gradient-to-r from-kisan-green to-field-green" />

              {/* Watermark icon */}
              <div className="absolute top-6 right-6 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity">
                <span className="material-symbols-outlined text-[140px] text-kisan-green">rocket_launch</span>
              </div>

              <div className="flex flex-col flex-1 p-8 sm:p-12 relative z-10">
                {/* Icon */}
                <div className="w-18 h-18 sm:w-20 sm:h-20 bg-kisan-green/10 rounded-2xl flex items-center justify-center text-kisan-green mb-6 group-hover:bg-kisan-green group-hover:text-white transition-all duration-500 shadow-sm w-[72px] h-[72px]">
                  <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1, 'wght' 600" }}>
                    rocket_launch
                  </span>
                </div>

                {/* Title + TTS */}
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-headline font-extrabold text-2xl sm:text-3xl text-pure-black">
                    {t('missionTitle')}
                  </h3>
                  <TextToSpeech text={t('missionText')} />
                </div>
                <p className="font-devanagari text-kisan-green text-sm mb-5">आमचे ध्येय</p>

                {/* Separator */}
                <div className="w-12 h-1 rounded-full bg-kisan-green mb-6" />

                {/* Text */}
                <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-8 flex-grow">
                  {t('missionText')}
                </p>

                {/* Inline image + tags */}
                <div className="flex gap-4 items-start mb-6">
                  <img src="/images/lab.jpeg" alt="Research lab" className="w-20 h-16 rounded-xl object-cover flex-shrink-0 border border-kisan-green/15 shadow-sm" />
                  <p className="text-text-muted text-xs leading-relaxed">
                    Science-backed formulations tested in our Nashik facility before reaching your field.
                  </p>
                </div>

                {/* Tag pills */}
                <div className="grid grid-cols-3 gap-2">
                  {['Advanced Tech', 'Ethical Growth', 'Farmer First'].map((item) => (
                    <div key={item} className="flex items-center gap-1.5 bg-kisan-green/8 px-3 py-2 rounded-xl border border-kisan-green/15">
                      <span className="w-1.5 h-1.5 rounded-full bg-kisan-green flex-shrink-0" />
                      <span className="font-bold text-kisan-green-dark text-[10px] sm:text-xs">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Vision Card */}
          <ScrollReveal variant="fadeRight" delay={0.1}>
            <div className="group relative flex flex-col h-full rounded-[28px] bg-white border-2 border-harvest-gold/20 shadow-warm hover:shadow-kisan-lg hover:border-harvest-gold/45 transition-all duration-500 hover:-translate-y-2 overflow-hidden">

              {/* Accent top strip */}
              <div className="h-1.5 w-full bg-gradient-to-r from-harvest-gold to-harvest-gold-light" />

              {/* Watermark icon */}
              <div className="absolute top-6 right-6 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity">
                <span className="material-symbols-outlined text-[140px] text-harvest-gold">visibility</span>
              </div>

              <div className="flex flex-col flex-1 p-8 sm:p-12 relative z-10">
                {/* Icon */}
                <div className="w-[72px] h-[72px] bg-harvest-gold/12 rounded-2xl flex items-center justify-center text-harvest-gold-dark mb-6 group-hover:bg-harvest-gold group-hover:text-earth-brown transition-all duration-500 shadow-sm">
                  <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1, 'wght' 600" }}>
                    visibility
                  </span>
                </div>

                {/* Title + TTS */}
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-headline font-extrabold text-2xl sm:text-3xl text-pure-black">
                    {t('visionTitle')}
                  </h3>
                  <TextToSpeech text={t('visionText')} />
                </div>
                <p className="font-devanagari text-harvest-gold-dark text-sm mb-5">आमची दृष्टी</p>

                {/* Separator */}
                <div className="w-12 h-1 rounded-full bg-harvest-gold mb-6" />

                {/* Text */}
                <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-8 flex-grow">
                  {t('visionText')}
                </p>

                {/* Inline image + text */}
                <div className="flex gap-4 items-start mb-6">
                  <img src="/images/farmer_3.png" alt="Farmer family" className="w-20 h-16 rounded-xl object-cover flex-shrink-0 border border-harvest-gold/20 shadow-sm" />
                  <p className="text-text-muted text-xs leading-relaxed">
                    Building lasting prosperity for farmer families across Maharashtra and beyond.
                  </p>
                </div>

                {/* Future impact card */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-harvest-gold/10 to-harvest-gold/5 border border-harvest-gold/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-harvest-gold-dark text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-harvest-gold-dark">Future Impact</span>
                  </div>
                  <p className="text-text-secondary font-medium text-sm">
                    Restoring ecosystems and ensuring agricultural resilience for generations to come.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ===== Core Values Strip ===== */}
        <ScrollReveal delay={0.1}>
          <div className="mt-16 sm:mt-20">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 mb-3 text-xs font-bold tracking-widest uppercase bg-kisan-green/10 text-kisan-green rounded-full border border-kisan-green/20">
                🌿 Our Core Values
              </span>
              <h3 className="font-headline text-2xl sm:text-3xl font-extrabold text-pure-black">
                The Principles That Guide Us
              </h3>
            </div>

            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4" staggerDelay={0.08}>
              {coreValues.map((v, i) => (
                <StaggerItem key={i}>
                  <div className="group flex flex-col items-center text-center gap-3 bg-white p-5 rounded-2xl border-2 border-kisan-green/8 hover:border-kisan-green/30 shadow-sm hover:shadow-kisan hover:-translate-y-1 transition-all duration-300 cursor-default">
                    <div className={`w-14 h-14 ${v.color} rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1, 'wght' 600" }}>{v.icon}</span>
                    </div>
                    <div>
                      <p className="font-headline font-bold text-pure-black text-sm">{v.label}</p>
                      <p className="font-devanagari text-kisan-green text-xs mt-0.5">{v.labelMr}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </ScrollReveal>

        {/* ===== Driving Growth Box ===== */}
        <ScrollReveal delay={0.15}>
          <div className="mt-14 sm:mt-16 relative bg-gradient-to-br from-kisan-green-dark to-kisan-green rounded-[28px] p-8 sm:p-12 text-white text-center overflow-hidden">
            {/* Background image overlay */}
            <img src="/images/field_wide.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-kisan-green-dark/40" />

            {/* Blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-harvest-gold/10 rounded-full -mr-20 -mt-20 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-12 -mb-12 blur-2xl" />

            <div className="relative z-10">
              <span className="material-symbols-outlined text-harvest-gold text-5xl sm:text-6xl mb-5" style={{ fontVariationSettings: "'FILL' 1, 'wght' 600" }}>
                psychology
              </span>
              <h4 className="font-headline text-2xl sm:text-3xl font-extrabold text-white mb-3">
                {t('drivingGrowth')}
              </h4>
              <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-6">
                {t('drivingGrowthDesc')}
              </p>
              {/* Stats row */}
              <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
                {[
                  { n: '500+', l: 'Product SKUs' },
                  { n: '1200+', l: 'Farmers' },
                  { n: '50+', l: 'Districts' },
                ].map(s => (
                  <div key={s.l} className="text-center">
                    <p className="font-headline font-black text-3xl text-harvest-gold">{s.n}</p>
                    <p className="text-white/60 text-xs font-semibold uppercase tracking-wider">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default MissionAndVision;