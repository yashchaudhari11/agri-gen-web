'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import FarmerStories from './FarmerStories';
import ProductCategoryShowcase from './ProductCategoryShowcase';
import ShopByCrop from './ShopByCrop';
import WhyAgriGen from './WhyAgriGen';
import NashikPride from './NashikPride';
import CertificationRibbon from './CertificationRibbon';
import ScrollReveal from './ScrollReveal';

const HERO_SLIDES = [
  {
    id: 0,
    image: '/images/hero_slide_1.png',
    objectPos: 'center center',
    badge: '🌱 100% Certified Organic',
    tagline: 'Enriching Every Seed,',
    headline: 'Every Soil, Every Season',
    headlineMr: 'प्रत्येक बीज, प्रत्येक जमीन',
    subtext: 'Certified organic inputs for every crop.',
    cta1Label: 'Enquire Now',
    cta1Icon: '📞',
    cta2Label: 'Explore Products',
    cta2Icon: '🌿',
    accentColor: '#2D6A4F',
  },
  {
    id: 1,
    image: '/images/hero_slide_2.png',
    objectPos: 'center 40%',
    badge: '🏆 ISO 9001:2015 Certified',
    tagline: 'Maximising Yield Through',
    headline: 'Ingenious Organic Chemistry',
    headlineMr: 'उत्पन्न वाढवा, निसर्ग जपा',
    subtext: 'From soil health to complete crop protection.',
    cta1Label: 'View Products',
    cta1Icon: '🛒',
    cta2Label: 'Learn More',
    cta2Icon: '📖',
    accentColor: '#E09F00',
  },
  {
    id: 2,
    image: '/images/hero_slide_3.png',
    objectPos: 'center 30%',
    badge: '🤝 Farmer-First Philosophy',
    tagline: 'Empowering the Heart of India —',
    headline: 'The Indian Farmer',
    headlineMr: 'भारतीय शेतकरी — आमचा अभिमान',
    subtext: 'With you from planting to harvest.',
    cta1Label: 'Our Story',
    cta1Icon: '🌾',
    cta2Label: 'Contact Us',
    cta2Icon: '📞',
    accentColor: '#2D6A4F',
  },
  {
    id: 3,
    image: '/images/hero_slide_4.png',
    objectPos: 'center center',
    badge: '🔬 Science Meets Nature',
    tagline: 'Leading to a',
    headline: 'Sustainable Green Future',
    headlineMr: 'शाश्वत हरित भविष्याकडे',
    subtext: 'Zero residues. Sustainable farming for generations.',
    cta1Label: 'Our Mission',
    cta1Icon: '🎯',
    cta2Label: 'Get in Touch',
    cta2Icon: '📞',
    accentColor: '#40916C',
  },
];

const SLIDE_DURATION = 6000;

export default function NewHomeContent() {
  const t = useTranslations();
  const locale = useLocale();
  const prefix = locale === 'en' ? '' : `/${locale}`;

  // ===== Hero Slider State =====
  const [activeSlide, setActiveSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(null);
  const [textVisible, setTextVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(null);
  const timerRef = useRef(null);
  const progressStart = useRef(null);

  const goToSlide = useCallback((idx) => {
    if (idx === activeSlide) return;
    setTextVisible(false);
    setPrevSlide(activeSlide);
    setTimeout(() => {
      setActiveSlide(idx);
      setProgress(0);
      progressStart.current = performance.now();
      setTimeout(() => setTextVisible(true), 120);
    }, 600);
  }, [activeSlide]);

  const nextSlide = useCallback(() => {
    goToSlide((activeSlide + 1) % HERO_SLIDES.length);
  }, [activeSlide, goToSlide]);

  const prevSlideBtn = useCallback(() => {
    goToSlide((activeSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, [activeSlide, goToSlide]);

  // Auto-advance + progress bar
  useEffect(() => {
    setProgress(0);
    progressStart.current = performance.now();

    const animate = (now) => {
      const elapsed = now - (progressStart.current || now);
      const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        progressRef.current = requestAnimationFrame(animate);
      }
    };
    progressRef.current = requestAnimationFrame(animate);

    timerRef.current = setTimeout(() => nextSlide(), SLIDE_DURATION);

    return () => {
      cancelAnimationFrame(progressRef.current);
      clearTimeout(timerRef.current);
    };
  }, [activeSlide, nextSlide]);

  const slide = HERO_SLIDES[activeSlide];

  return (
    <div className="bg-warm-white font-body text-text-primary">

      {/* ===== HERO SLIDER — FULL-VIEWPORT PROFESSIONAL ===== */}
      <section className="relative h-screen min-h-[600px] max-h-[1000px] overflow-hidden" id="home">

        {/* ── Background Images (cross-fade stack) ── */}
        <div className="absolute inset-0 z-0">
          {HERO_SLIDES.map((s, i) => (
            <div
              key={s.id}
              className="absolute inset-0 transition-opacity"
              style={{
                opacity: i === activeSlide ? 1 : 0,
                transitionDuration: '800ms',
                transitionTimingFunction: 'ease-in-out',
                zIndex: i === activeSlide ? 2 : i === prevSlide ? 1 : 0,
              }}
            >
              <img
                src={s.image}
                alt={s.headline}
                className="w-full h-full object-cover"
                style={{ objectPosition: s.objectPos }}
              />
            </div>
          ))}
          {/* Permanent gradient overlays */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/75 via-black/40 to-black/20" />
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
        </div>

        {/* ── Slide Content ── */}
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16">
            <div className="max-w-3xl">

              {/* Badge pill */}
              <div
                className="transition-all duration-500"
                style={{
                  opacity: textVisible ? 1 : 0,
                  transform: textVisible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: '0ms',
                }}
              >
                <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-white/15 text-white rounded-full border border-white/30 backdrop-blur-sm">
                  {slide.badge}
                </span>
              </div>

              {/* Tagline (light weight) */}
              <div
                className="transition-all duration-500"
                style={{
                  opacity: textVisible ? 1 : 0,
                  transform: textVisible ? 'translateY(0)' : 'translateY(28px)',
                  transitionDelay: '80ms',
                }}
              >
                <p className="font-headline text-2xl sm:text-3xl lg:text-4xl font-light text-white/90 leading-tight mb-1">
                  {slide.tagline}
                </p>
              </div>

              {/* Main headline (bold) */}
              <div
                className="transition-all duration-500"
                style={{
                  opacity: textVisible ? 1 : 0,
                  transform: textVisible ? 'translateY(0)' : 'translateY(32px)',
                  transitionDelay: '150ms',
                }}
              >
                <h1 className="font-headline text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-3 drop-shadow-lg">
                  {slide.headline}
                </h1>
              </div>

              {/* Marathi subtitle */}
              <div
                className="transition-all duration-500"
                style={{
                  opacity: textVisible ? 1 : 0,
                  transform: textVisible ? 'translateY(0)' : 'translateY(28px)',
                  transitionDelay: '200ms',
                }}
              >
                <p className="font-devanagari text-white/70 text-base sm:text-lg mb-5">
                  {slide.headlineMr}
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* ── Right: Slide Number Indicator ── */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-center gap-4">
          {HERO_SLIDES.map((s, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="group flex flex-col items-center gap-1 focus:outline-none"
            >
              <div
                className={`w-px transition-all duration-500 ${
                  i === activeSlide ? 'h-10 bg-harvest-gold' : 'h-6 bg-white/30 group-hover:bg-white/60'
                }`}
              />
              <span
                className={`text-xs font-black transition-all duration-300 ${
                  i === activeSlide ? 'text-harvest-gold scale-110' : 'text-white/40 group-hover:text-white/70'
                }`}
              >
                0{i + 1}
              </span>
            </button>
          ))}
        </div>

        {/* ── Bottom Controls Bar ── */}
        <div className="absolute bottom-0 left-0 right-0 z-30">
          {/* Progress bar */}
          <div className="h-0.5 bg-white/10">
            <div
              className="h-full bg-harvest-gold transition-none"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Controls row */}
          <div className="flex items-center justify-between px-6 sm:px-10 py-4 bg-gradient-to-t from-black/60 to-transparent">

            {/* Left: dot indicators */}
            <div className="flex items-center gap-3">
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`rounded-full transition-all duration-400 ${
                    i === activeSlide
                      ? 'w-8 h-2 bg-harvest-gold'
                      : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>

            {/* Center: slide counter */}
            <div className="text-white/50 text-xs font-bold tracking-widest hidden sm:block">
              <span className="text-white font-black text-sm">0{activeSlide + 1}</span>
              <span className="mx-1">/</span>
              0{HERO_SLIDES.length}
            </div>

            {/* Right: Prev / Next */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlideBtn}
                aria-label="Previous slide"
                className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/15 hover:border-white/60 transition-all duration-200"
              >
                <span className="material-symbols-outlined text-lg">arrow_back</span>
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="w-9 h-9 rounded-full bg-harvest-gold flex items-center justify-center text-earth-brown hover:bg-harvest-gold-light transition-all duration-200 shadow-lg"
              >
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* ── Scroll indicator ── */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-1 animate-bounce opacity-40">
          <span className="text-white text-[10px] font-bold tracking-widest uppercase">Scroll</span>
          <span className="material-symbols-outlined text-white text-lg">expand_more</span>
        </div>

      </section>

      {/* ===== BUSINESS MODEL — Enhanced, B2C First ===== */}
      <section className="py-16 sm:py-20 lg:py-28 bg-warm-white overflow-hidden relative" id="business-model">
        {/* Organic topo background pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cpath d='M10 50 Q25 20 50 50 Q75 80 90 50' fill='none' stroke='%232D6A4F' stroke-width='1.5'/%3E%3Cpath d='M0 30 Q25 0 50 30 Q75 60 100 30' fill='none' stroke='%232D6A4F' stroke-width='1'/%3E%3Cpath d='M0 70 Q25 40 50 70 Q75 100 100 70' fill='none' stroke='%232D6A4F' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px',
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase bg-harvest-gold/15 text-harvest-gold-dark rounded-full border border-harvest-gold/30">
                🌱 How We Serve You
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight text-pure-black">
                {t('business.title')}
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
                {t('business.description')}
              </p>
            </div>
          </ScrollReveal>

          {/* ── Clean 2-col split: B2C left | B2B right ── */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mt-12">

            {/* B2C — Direct to Farmer */}
            <ScrollReveal variant="fadeUp" delay={0.1}>
              <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-400 min-h-[360px]">
                <img
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/farmer_1.png"
                  alt="Direct to farmer — B2C"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-harvest-gold/20 to-transparent" />

                {/* Badge */}
                <div className="absolute top-5 left-5">
                  <span className="inline-flex items-center gap-1.5 bg-harvest-gold text-earth-brown text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-earth-brown/60" />Direct to Farmer
                  </span>
                </div>

                {/* Content at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-headline text-2xl sm:text-3xl font-extrabold text-white mb-2 leading-tight">
                    {t('business.b2cTitle')}
                  </h3>
                  <p className="text-white/75 text-sm leading-relaxed mb-4">{t('business.b2cDesc')}</p>
                  <div className="flex flex-wrap gap-2">
                    {['Direct Sales', 'Field Support', 'Agri Advisory'].map(tag => (
                      <span key={tag} className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-harvest-gold/25 text-harvest-gold border border-harvest-gold/40">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* B2B — Institutional / Bulk */}
            <ScrollReveal variant="fadeUp" delay={0.2}>
              <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-400 min-h-[360px]">
                <img
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/field_wide.png"
                  alt="Bulk B2B supply"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-kisan-green/25 to-transparent" />

                {/* Badge */}
                <div className="absolute top-5 left-5">
                  <span className="inline-flex items-center gap-1.5 bg-kisan-green text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/60" />Institutional
                  </span>
                </div>

                {/* Content at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-headline text-2xl sm:text-3xl font-extrabold text-white mb-2 leading-tight">
                    {t('business.b2bTitle')}
                  </h3>
                  <p className="text-white/75 text-sm leading-relaxed mb-4">{t('business.b2bDesc')}</p>
                  <div className="flex flex-wrap gap-2">
                    {['Bulk Supply', 'Export Quality', 'Custom Formulations'].map(tag => (
                      <span key={tag} className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-kisan-green/30 text-white border border-kisan-green/40">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ===== CERTIFICATION RIBBON ===== */}
      <CertificationRibbon />
      
      {/* ===== DELIVERING EXCELLENCE — Original Style, now directly after Business Model ===== */}
      <section
        className="relative py-20 sm:py-28 lg:py-36 overflow-hidden"
        id="purpose"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/images/field_wide.png"
            alt="Flourishing agricultural field"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-kisan-green-dark/90 to-kisan-green/70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="mb-8 sm:mb-12 inline-block p-3 sm:p-4 bg-white/20 backdrop-blur-xl rounded-full">
            <span className="material-symbols-outlined text-harvest-gold text-4xl sm:text-5xl"
              style={{ fontVariationSettings: "'FILL' 1, 'wght' 600" }}
            >
              sentiment_very_satisfied
            </span>
          </div>

          <h2 className="font-headline text-3xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-4 max-w-5xl mx-auto">
            {t('purpose.title')}
          </h2>
          <p className="font-devanagari text-harvest-gold text-xl sm:text-2xl mb-8">
            {t('purpose.smiles')} — {t('purpose.smilesLocal')}
          </p>

          <div className="w-20 sm:w-24 h-1 bg-harvest-gold mx-auto mb-8 sm:mb-12 rounded-full" />

          <p className="text-white/80 text-lg sm:text-xl lg:text-2xl italic max-w-2xl mx-auto px-2">
            &ldquo;{t('purpose.quote')}&rdquo;
          </p>

          <div className="mt-10">
            <Link
              href={`${prefix}/contact`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-harvest-gold text-earth-brown font-bold text-base rounded-2xl btn-3d shadow-3d-gold hover:shadow-none transition-all"
            >
              📞 {t('hero.cta1')}
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CORE VALUES — Immediately after Delivering Excellence ===== */}
      <section
        className="py-16 sm:py-20 lg:py-28 bg-cream soil-pattern"
        id="about"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase bg-kisan-green/10 text-kisan-green rounded-full border border-kisan-green/20">
                🌿 Our Foundation
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-pure-black">
                {t('values.title')}
              </h2>
              <p className="text-text-secondary text-base sm:text-lg">
                {t('values.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          {/* Masonry-style value cards with imagery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

            {/* Card 1 — Quality (large, with image background) */}
            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-400 min-h-[280px] sm:row-span-1 lg:col-span-1 cursor-default">
              <img src="/images/value_quality.png" alt="Quality inspection" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-kisan-green-dark/90 via-kisan-green/40 to-kisan-green/10" />
              <div className="relative z-10 p-7 flex flex-col justify-end h-full">
                <div className="w-14 h-14 rounded-2xl bg-harvest-gold flex items-center justify-center mb-4 shadow-lg">
                  <span className="material-symbols-outlined text-earth-brown text-3xl" style={{ fontVariationSettings: "'FILL' 1, 'wght' 600" }}>workspace_premium</span>
                </div>
                <h4 className="font-headline font-extrabold text-xl text-white mb-1">{t('values.quality')}</h4>
                <p className="text-white/70 text-xs">ISO 9001:2015 certified — every batch, every time.</p>
              </div>
            </div>

            {/* Card 2 — Trust (split layout: image left, text right) */}
            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-400 cursor-default bg-white border-2 border-kisan-green/10">
              <div className="flex h-full min-h-[280px]">
                <div className="relative w-2/5 flex-shrink-0 overflow-hidden">
                  <img src="/images/value_trust.png" alt="Farmer partnership" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-kisan-green/20" />
                </div>
                <div className="flex-1 p-6 flex flex-col justify-center">
                  <div className="w-12 h-12 rounded-2xl bg-kisan-green/10 flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-kisan-green text-2xl" style={{ fontVariationSettings: "'FILL' 1, 'wght' 600" }}>handshake</span>
                  </div>
                  <h4 className="font-headline font-extrabold text-lg text-pure-black mb-1">{t('values.trust')}</h4>
                  <p className="text-text-secondary text-xs">Transparent partnerships across Maharashtra.</p>
                </div>
              </div>
            </div>

            {/* Card 3 — Accountability */}
            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-400 cursor-default bg-kisan-green">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-10 -mt-10 blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-harvest-gold/10 rounded-full -ml-8 -mb-8 blur-xl" />
              <div className="relative z-10 p-7 flex flex-col justify-between h-full min-h-[280px]">
                <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
                  <span className="material-symbols-outlined text-harvest-gold text-3xl" style={{ fontVariationSettings: "'FILL' 1, 'wght' 600" }}>verified_user</span>
                </div>
                <div>
                  <h4 className="font-headline font-extrabold text-xl text-white mb-1">{t('values.accountability')}</h4>
                  <p className="text-white/70 text-xs">Full traceability — production to your field.</p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="h-1.5 flex-1 rounded-full bg-white/20">
                      <div className="h-1.5 w-5/6 rounded-full bg-harvest-gold" />
                    </div>
                    <span className="text-harvest-gold text-xs font-bold">ISO Certified</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 — Honouring Farmers (with field image watermark) */}
            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-400 cursor-default bg-white border-2 border-harvest-gold/20">
              <div className="flex h-full min-h-[280px]">
                <div className="flex-1 p-6 flex flex-col justify-center">
                  <div className="w-12 h-12 rounded-2xl bg-harvest-gold/15 flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-harvest-gold-dark text-2xl" style={{ fontVariationSettings: "'FILL' 1, 'wght' 600" }}>groups</span>
                  </div>
                  <h4 className="font-headline font-extrabold text-lg text-pure-black mb-1">{t('values.honouring')}</h4>
                  <p className="text-text-secondary text-xs">Every farmer is a partner in our growth.</p>
                  <div className="mt-4 flex gap-1.5">
                    {[1,2,3,4,5].map(i => (
                      <div key={i} className="h-2 flex-1 rounded-full bg-harvest-gold/80" />
                    ))}
                  </div>
                </div>
                <div className="relative w-2/5 flex-shrink-0 overflow-hidden">
                  <img src="/images/farmer_3.png" alt="Farmers being honoured" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-harvest-gold/15" />
                </div>
              </div>
            </div>

            {/* Card 5 — Environmental (large spanning card with image) */}
            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-400 min-h-[280px] sm:col-span-2 lg:col-span-2 cursor-default">
              <img src="/images/value_environment.png" alt="Soil and seedlings" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-kisan-green-dark/90 via-kisan-green-dark/60 to-transparent" />
              <div className="relative z-10 p-7 flex flex-col justify-end h-full lg:max-w-lg">
                <div className="w-14 h-14 rounded-2xl bg-field-green flex items-center justify-center mb-4 shadow-lg">
                  <span className="material-symbols-outlined text-white text-3xl" style={{ fontVariationSettings: "'FILL' 1, 'wght' 600" }}>eco</span>
                </div>
                <h4 className="font-headline font-extrabold text-2xl text-white mb-2">{t('values.environmental')}</h4>
                <p className="text-white/70 text-xs leading-relaxed">Zero residues. Soil-first. Biodiversity protected.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== SHOP BY CROP ===== */}
      <ShopByCrop />

      {/* ===== PRODUCT CATEGORY SHOWCASE ===== */}
      <ProductCategoryShowcase />

      {/* ===== WHY AGRI-GEN ===== */}
      <WhyAgriGen />

      {/* ===== FARMER STORIES ===== */}
      <FarmerStories />

      {/* ===== NASHIK PRIDE ===== */}
      <NashikPride />

    </div>
  );
}
