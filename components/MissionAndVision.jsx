'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal';

const coreValues = [
  { icon: 'workspace_premium', label: 'Quality', labelMr: 'गुणवत्ता', color: '#3DAA35' },
  { icon: 'handshake',         label: 'Trust',   labelMr: 'विश्वास',  color: '#E8A320' },
  { icon: 'verified_user',     label: 'Accountability', labelMr: 'जबाबदारी', color: '#3DAA35' },
  { icon: 'groups',            label: 'Farmer First', labelMr: 'शेतकरी प्रथम', color: '#1A56B4' },
  { icon: 'eco',               label: 'Sustainability', labelMr: 'शाश्वतता', color: '#3DAA35' },
];

const MissionAndVision = () => {
  const t = useTranslations('mission');

  return (
    <section id="mission-vision" className="bg-white">

      {/* ── Hero Banner ── */}
      <div className="relative h-[45vh] min-h-[320px] max-h-[480px] overflow-hidden">
        <img
          src="/images/field_wide.png"
          alt="Agri-Gen mission fields"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-white/50 text-xs font-bold tracking-[0.3em] uppercase mb-4">
              Mission &amp; Vision
            </p>
            <h1 className="font-headline font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-3 drop-shadow-lg">
              Purpose.{' '}
              <span style={{ color: '#3DAA35' }}>Direction.</span>{' '}
              <span style={{ color: '#E8A320' }}>Growth.</span>
            </h1>
            <p className="font-devanagari text-white/60 text-base sm:text-lg">
              उद्देश, दिशा आणि विकास — आमचा मार्ग
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24">

        {/* Mission + Vision Cards */}
        <ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-20">

            {/* Mission */}
            <div className="group border border-gray-100 rounded-2xl p-8 sm:p-10 hover:shadow-md transition-all duration-300 bg-white">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: '#3DAA3518' }}
              >
                <span
                  className="material-symbols-outlined text-2xl"
                  style={{ color: '#3DAA35', fontVariationSettings: "'FILL' 1, 'wght' 600" }}
                >
                  rocket_launch
                </span>
              </div>
              <div className="h-px w-8 mb-6" style={{ backgroundColor: '#3DAA35' }} />
              <p className="text-gray-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-2">
                Our Mission
              </p>
              <h2 className="font-headline font-extrabold text-2xl sm:text-3xl text-gray-900 mb-2 leading-snug">
                {t('missionTitle')}
              </h2>
              <p className="font-devanagari text-sm mb-6" style={{ color: '#3DAA35' }}>
                आमचे ध्येय
              </p>
              <p className="text-gray-500 text-base leading-relaxed">
                {t('missionText')}
              </p>
            </div>

            {/* Vision */}
            <div className="group border border-gray-100 rounded-2xl p-8 sm:p-10 hover:shadow-md transition-all duration-300 bg-white">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: '#E8A32018' }}
              >
                <span
                  className="material-symbols-outlined text-2xl"
                  style={{ color: '#E8A320', fontVariationSettings: "'FILL' 1, 'wght' 600" }}
                >
                  visibility
                </span>
              </div>
              <div className="h-px w-8 mb-6" style={{ backgroundColor: '#E8A320' }} />
              <p className="text-gray-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-2">
                Our Vision
              </p>
              <h2 className="font-headline font-extrabold text-2xl sm:text-3xl text-gray-900 mb-2 leading-snug">
                {t('visionTitle')}
              </h2>
              <p className="font-devanagari text-sm mb-6" style={{ color: '#E8A320' }}>
                आमची दृष्टी
              </p>
              <p className="text-gray-500 text-base leading-relaxed">
                {t('visionText')}
              </p>
            </div>

          </div>
        </ScrollReveal>

        {/* Core Values */}
        <ScrollReveal delay={0.1}>
          <div className="border-t border-gray-100 pt-16 mb-16">
            <p className="text-gray-400 text-[10px] font-bold tracking-[0.35em] uppercase text-center mb-10">
              Our Core Values
            </p>
            <StaggerContainer
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
              staggerDelay={0.08}
            >
              {coreValues.map((v) => (
                <StaggerItem key={v.label}>
                  <div className="group text-center p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-300 bg-white">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: v.color + '15' }}
                    >
                      <span
                        className="material-symbols-outlined text-2xl"
                        style={{ color: v.color, fontVariationSettings: "'FILL' 1, 'wght' 600" }}
                      >
                        {v.icon}
                      </span>
                    </div>
                    <p className="font-headline font-bold text-gray-900 text-sm mb-1">{v.label}</p>
                    <p className="font-devanagari text-xs" style={{ color: v.color }}>
                      {v.labelMr}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </ScrollReveal>

        {/* Brand Commitment Banner */}
        <ScrollReveal delay={0.15}>
          <div
            className="relative rounded-2xl overflow-hidden px-8 sm:px-14 py-12 sm:py-16 text-center"
            style={{ background: 'linear-gradient(135deg, #0F2414 0%, #1B4332 60%, #1A3A6B 100%)' }}
          >
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />
            <div className="relative z-10">
              <p className="text-white/40 text-[10px] font-bold tracking-[0.35em] uppercase mb-6">
                Our Driving Force
              </p>
              <p className="font-headline font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white leading-snug mb-5 max-w-3xl mx-auto">
                {t('drivingGrowth')}
              </p>
              <p className="font-devanagari text-white/50 text-base mb-8">
                शाश्वत शेती, समृद्ध भविष्य
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Research-Driven', 'Field-Verified', 'Farmer-Trusted', 'ISO 9001:2015'].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-bold px-4 py-1.5 rounded-full border text-white/70 border-white/15 bg-white/5"
                  >
                    {tag}
                  </span>
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