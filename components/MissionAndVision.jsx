'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import TextToSpeech from './TextToSpeech';

const MissionAndVision = () => {
  const t = useTranslations('mission');

  return (
    <section
      id="mission-vision"
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-warm-white"
    >
      {/* Background Decorative */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] opacity-10 bg-kisan-green rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] opacity-10 bg-harvest-gold rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20 animate-fade-in">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase bg-kisan-green/10 text-kisan-green rounded-full border border-kisan-green/20">
            🎯 {t('sectionTitle')}
          </span>
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-extrabold text-pure-black leading-tight">
            {t('pageTitle').split('Better')[0]}
            <span className="text-gradient-kisan italic">Better Tomorrow</span>
          </h1>
          <div className="w-24 h-1.5 bg-kisan-green mx-auto mt-8 rounded-full" />
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Mission Card */}
          <div className="group relative flex flex-col p-8 sm:p-12 rounded-kisan-xl bg-white border-2 border-kisan-green/10 shadow-warm hover:shadow-kisan-lg hover:border-kisan-green/30 transition-all duration-500 hover:translate-y-[-6px]">
            <div className="absolute top-0 right-0 p-8 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity">
              <span className="material-symbols-outlined text-[120px] text-kisan-green">
                rocket_launch
              </span>
            </div>

            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-kisan-green/10 rounded-kisan flex items-center justify-center text-kisan-green mb-8 group-hover:bg-kisan-green group-hover:text-white transition-all duration-500 shadow-sm">
              <span
                className="material-symbols-outlined text-3xl sm:text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                rocket_launch
              </span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <h3 className="font-headline font-extrabold text-2xl sm:text-3xl text-pure-black">
                {t('missionTitle')}
              </h3>
              <TextToSpeech text={t('missionText')} />
            </div>

            <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-8 flex-grow">
              {t('missionText')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {['Advanced Tech', 'Ethical Growth', 'Farmer First'].map(
                (item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-cream px-4 py-3 rounded-2xl border border-kisan-green/10"
                  >
                    <span className="w-2 h-2 rounded-full bg-kisan-green" />
                    <span className="font-bold text-text-primary text-xs sm:text-sm">
                      {item}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative flex flex-col p-8 sm:p-12 rounded-kisan-xl bg-white border-2 border-kisan-green/10 shadow-warm hover:shadow-kisan-lg hover:border-kisan-green/30 transition-all duration-500 hover:translate-y-[-6px]">
            <div className="absolute top-0 right-0 p-8 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity">
              <span className="material-symbols-outlined text-[120px] text-kisan-green">
                visibility
              </span>
            </div>

            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-harvest-gold/10 rounded-kisan flex items-center justify-center text-harvest-gold-dark mb-8 group-hover:bg-harvest-gold group-hover:text-earth-brown transition-all duration-500 shadow-sm">
              <span
                className="material-symbols-outlined text-3xl sm:text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                visibility
              </span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <h3 className="font-headline font-extrabold text-2xl sm:text-3xl text-pure-black">
                {t('visionTitle')}
              </h3>
              <TextToSpeech text={t('visionText')} />
            </div>

            <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-8 flex-grow">
              {t('visionText')}
            </p>

            <div className="p-5 rounded-kisan bg-kisan-green/5 border border-kisan-green/10">
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="material-symbols-outlined text-kisan-green text-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  eco
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-kisan-green">
                  Future Impact
                </span>
              </div>
              <p className="text-text-secondary font-medium text-sm">
                Restoring ecosystems and ensuring agricultural resilience for
                generations.
              </p>
            </div>
          </div>
        </div>

        {/* Driving Growth Box */}
        <div className="mt-16 sm:mt-20 text-center max-w-4xl mx-auto bg-kisan-green/5 p-8 sm:p-12 rounded-kisan-xl border-2 border-kisan-green/10">
          <span
            className="material-symbols-outlined text-kisan-green text-5xl mb-6"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            psychology
          </span>
          <h4 className="font-headline text-xl sm:text-2xl font-bold text-pure-black mb-3">
            {t('drivingGrowth')}
          </h4>
          <p className="text-text-secondary text-base sm:text-lg">
            {t('drivingGrowthDesc')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionAndVision;