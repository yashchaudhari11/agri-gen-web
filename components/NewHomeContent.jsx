'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import FarmerStories from './FarmerStories';
import FeaturedProducts from './FeaturedProducts';
import ShopByCrop from './ShopByCrop';
import WhyAgriGen from './WhyAgriGen';
import NashikPride from './NashikPride';
import CertificationRibbon from './CertificationRibbon';
import ScrollReveal from './ScrollReveal';

export default function NewHomeContent() {
  const t = useTranslations();
  const locale = useLocale();
  const prefix = locale === 'en' ? '' : `/${locale}`;

  return (
    <div className="bg-warm-white font-body text-text-primary">
      {/* ===== HERO SECTION ===== */}
      <section
        className="relative min-h-screen flex items-center pt-24 sm:pt-2 overflow-hidden"
        id="home"
      >
        {/* Background blurs */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-20 right-[-10%] w-[300px] sm:w-[450px] lg:w-[600px] h-[300px] sm:h-[450px] lg:h-[600px] bg-kisan-green rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[250px] sm:w-[350px] lg:w-[500px] h-[250px] sm:h-[350px] lg:h-[500px] bg-harvest-gold rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10 py-10">
          {/* Left Content */}
          <ScrollReveal variant="fadeLeft" duration={0.8}>
          <div className="text-center md:text-left">
            <span className="inline-block px-4 py-2 mb-6 text-xs font-bold tracking-widest uppercase bg-kisan-green/10 text-kisan-green rounded-full border border-kisan-green/20">
              🌾 {t('hero.badge')}
            </span>

            <h1 className="font-headline text-4xl sm:text-5xl lg:text-7xl font-extrabold text-pure-black leading-[1.1] tracking-tight mb-4">
              {t('hero.title')} <br />
              <span className="text-gradient-kisan italic">
                {t('hero.titleHighlight')}
              </span>
            </h1>

            {/* Bilingual subtitle */}
            <p className="font-devanagari text-kisan-green text-lg sm:text-xl mb-6 font-medium">
              {t('hero.subtitle')}
            </p>

            {/* ISO Badge */}
            <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
              <div className="iso-seal">
                <span>ISO<br/>9001<br/>2015</span>
              </div>
              <div>
                <span className="bg-harvest-gold text-earth-brown text-xs font-extrabold px-4 py-1.5 rounded-full">
                  ✅ {t('hero.isoCertified')}
                </span>
              </div>
            </div>

            <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-8 sm:mb-10 max-w-xl mx-auto md:mx-0">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href={`${prefix}/contact`}
                className="w-full sm:w-auto px-8 py-4 bg-kisan-green text-white rounded-2xl font-bold btn-3d shadow-3d hover:shadow-3d-hover transition-all duration-200 text-center text-base"
                id="hero-enquire-btn"
              >
                📞 {t('hero.cta1')}
              </Link>
              <Link
                href={`${prefix}/products`}
                className="w-full sm:w-auto px-8 py-4 bg-harvest-gold text-earth-brown rounded-2xl font-bold btn-3d shadow-3d-gold transition-all duration-200 text-center text-base"
                id="hero-products-btn"
              >
                🛒 {t('hero.cta2')}
              </Link>
            </div>
          </div>
          </ScrollReveal>

          {/* Right — Hero Image */}
          <ScrollReveal variant="fadeRight" duration={0.8} delay={0.2}>
          <div className="relative group max-w-md mx-auto md:max-w-none">
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-4 bg-kisan-green/10 rounded-kisan-xl blur-3xl group-hover:bg-kisan-green/20 group-hover:scale-110 transition-all duration-700" />

              {/* Image Card */}
              <div className="relative rounded-kisan-xl overflow-hidden shadow-2xl border-4 border-white/50 transition-all duration-500 group-hover:shadow-kisan-lg">
                <img
                  src="/images/hero_farmer.png"
                  alt="Indian farmer standing proudly in a flourishing agricultural field"
                  className="w-full h-auto max-h-[600px] object-cover transition-all duration-700 group-hover:scale-105"
                  style={{ aspectRatio: '4/5' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kisan-green-dark/30 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute bottom-4 left-4 sm:-bottom-6 sm:-left-6 glass-card p-4 sm:p-5 rounded-2xl shadow-warm border border-white/40 max-w-[220px]">
              <div className="flex gap-3 items-center">
                <div className="w-11 h-11 rounded-full bg-kisan-green/10 flex items-center justify-center text-kisan-green">
                  <span
                    className="material-symbols-outlined text-2xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    eco
                  </span>
                </div>
                <div>
                  <p className="text-2xl font-black text-kisan-green leading-none">
                    100%
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-text-muted">
                    {t('trust.certifiedOrganic')}
                  </p>
                </div>
              </div>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="bg-kisan-green py-6 sm:py-8" id="trust-bar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 text-center">
            <div className="flex flex-col items-center gap-2">
              <span
                className="material-symbols-outlined text-harvest-gold text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              <div>
                <p className="font-headline font-black text-sm text-white uppercase tracking-wide">
                  {t('trust.certifiedOrganic')}
                </p>
                <p className="text-xs text-white/70 font-devanagari">
                  {t('trust.certifiedOrganicDesc')}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span
                className="material-symbols-outlined text-harvest-gold text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                groups
              </span>
              <div>
                <p className="font-headline font-black text-sm text-white uppercase tracking-wide">
                  {t('trust.farmers')}
                </p>
                <p className="text-xs text-white/70 font-devanagari">
                  {t('trust.farmersDesc')}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span
                className="material-symbols-outlined text-harvest-gold text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                public
              </span>
              <div>
                <p className="font-headline font-black text-sm text-white uppercase tracking-wide">
                  {t('trust.districts')}
                </p>
                <p className="text-xs text-white/70 font-devanagari">
                  {t('trust.districtsDesc')}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span
                className="material-symbols-outlined text-harvest-gold text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                inventory_2
              </span>
              <div>
                <p className="font-headline font-black text-sm text-white uppercase tracking-wide">
                  {t('trust.products')}
                </p>
                <p className="text-xs text-white/70 font-devanagari">
                  {t('trust.productsDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CERTIFICATION RIBBON ===== */}
      <CertificationRibbon />

      {/* ===== BUSINESS MODEL ===== */}
      <section className="py-16 sm:py-20 lg:py-28 bg-warm-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Image Grid */}
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-4 sm:space-y-6">
                  <div className="aspect-square rounded-kisan overflow-hidden shadow-warm hover:translate-y-[-8px] transition-transform duration-300">
                    <img
                      className="w-full h-full object-cover"
                      src="/images/field_wide.png"
                      alt="Lush agricultural field in Nashik"
                    />
                  </div>
                  <div className="aspect-square sm:aspect-[3/4] bg-kisan-green/5 rounded-kisan p-5 sm:p-8 flex flex-col justify-end border-2 border-kisan-green/10">
                    <span
                      className="material-symbols-outlined text-kisan-green text-4xl sm:text-5xl mb-4"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      agriculture
                    </span>
                    <h4 className="font-headline text-lg sm:text-2xl font-bold text-text-primary">
                      {t('business.b2bTitle')}
                    </h4>
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-6 pt-8 sm:pt-12">
                  <div className="aspect-square sm:aspect-[3/4] bg-harvest-gold/10 rounded-kisan p-5 sm:p-8 flex flex-col justify-end border-2 border-harvest-gold/20">
                    <span
                      className="material-symbols-outlined text-harvest-gold-dark text-4xl sm:text-5xl mb-4"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      storefront
                    </span>
                    <h4 className="font-headline text-lg sm:text-2xl font-bold text-text-primary">
                      {t('business.b2cTitle')}
                    </h4>
                  </div>
                  <div className="aspect-square rounded-kisan overflow-hidden shadow-warm hover:translate-y-[-8px] transition-transform duration-300">
                    <img
                      className="w-full h-full object-cover"
                      src="/images/farmer_1.png"
                      alt="Happy farmer with harvested crops"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 sm:mb-8 leading-tight text-pure-black">
                {t('business.title')}
              </h2>

              <p className="text-base sm:text-lg text-text-secondary mb-10 sm:mb-12 leading-relaxed">
                {t('business.description')}
              </p>

              <div className="space-y-8 sm:space-y-10">
                <div className="flex gap-4 sm:gap-6 items-start text-left">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-kisan-green flex items-center justify-center text-white font-bold text-lg shadow-3d">
                    1
                  </div>
                  <div>
                    <h3 className="font-headline text-lg sm:text-xl font-bold mb-2 text-pure-black">
                      {t('business.b2bTitle')}
                    </h3>
                    <p className="text-text-secondary text-sm sm:text-base">
                      {t('business.b2bDesc')}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 sm:gap-6 items-start text-left">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-harvest-gold flex items-center justify-center text-earth-brown font-bold text-lg shadow-3d-gold">
                    2
                  </div>
                  <div>
                    <h3 className="font-headline text-lg sm:text-xl font-bold mb-2 text-pure-black">
                      {t('business.b2cTitle')}
                    </h3>
                    <p className="text-text-secondary text-sm sm:text-base">
                      {t('business.b2cDesc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CORE VALUES ===== */}
      <section
        className="py-16 sm:py-20 lg:py-28 bg-cream soil-pattern rounded-t-[60px] sm:rounded-t-[80px] lg:rounded-t-[120px]"
        id="about"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-pure-black">
              {t('values.title')}
            </h2>
            <p className="text-text-secondary text-base sm:text-lg">
              {t('values.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { icon: 'workspace_premium', label: t('values.quality') },
              { icon: 'handshake', label: t('values.trust') },
              { icon: 'verified_user', label: t('values.accountability') },
              { icon: 'groups', label: t('values.honouring') },
              { icon: 'eco', label: t('values.environmental') },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-kisan hover:bg-kisan-green hover:text-white transition-all duration-300 group shadow-warm flex flex-col items-center text-center border-2 border-transparent hover:border-kisan-green cursor-default"
              >
                <span
                  className="material-symbols-outlined text-4xl mb-4 text-kisan-green group-hover:text-harvest-gold transition-colors"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {item.icon}
                </span>
                <h4 className="font-headline font-bold uppercase tracking-tight text-xs sm:text-sm">
                  {item.label}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SHOP BY CROP ===== */}
      <ShopByCrop />

      {/* ===== FEATURED PRODUCTS ===== */}
      <FeaturedProducts />

      {/* ===== WHY AGRI-GEN ===== */}
      <WhyAgriGen />

      {/* ===== FARMER STORIES ===== */}
      <FarmerStories />

      {/* ===== NASHIK PRIDE ===== */}
      <NashikPride />

      {/* ===== CORE PURPOSE / CTA ===== */}
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
            <span className="material-symbols-outlined text-harvest-gold text-4xl sm:text-5xl">
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
    </div>
  );
}
