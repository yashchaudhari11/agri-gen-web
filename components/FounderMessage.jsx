'use client';

import { useState, useEffect, useCallback } from 'react';
import ScrollReveal from './ScrollReveal';

const founders = [
  {
    id: 0,
    name: 'Founder & Director',
    nameLocal: 'संस्थापक आणि संचालक',
    company: 'AGRI-GEN Innovation Pvt. Ltd., Nashik',
    photo: '/images/founder.png',
    accentColor: 'kisan-green',
    badgeColor: 'bg-kisan-green/10 text-kisan-green border-kisan-green/20',
    iconBg: 'bg-kisan-green',
    quoteEn:
      'When I started Agri-Gen Innovation, my vision was simple — to give every farmer access to the same quality organic inputs that were previously reserved for large-scale operations. Agriculture is not just our business; it is our\u00a0',
    quoteHighlight: 'dharma.',
    quoteEn2:
      'We believe that the future of Indian agriculture lies in the perfect balance of traditional wisdom and modern science. Every product we develop is field-tested by real farmers before it reaches your hands. That\'s our promise — verified results, not empty promises.',
    quoteMr:
      'प्रत्येक शेतकऱ्याला दर्जेदार सेंद्रिय उत्पादने मिळाली पाहिजेत — हे आमचे ध्येय आहे. शेती हा आमचा व्यवसाय नाही, हा आमचा धर्म आहे.',
    tags: ['Innovation', 'Farmer First', 'Organic Vision'],
  },
  {
    id: 1,
    name: 'Co-Founder & Director',
    nameLocal: 'सह-संस्थापक आणि संचालक',
    company: 'AGRI-GEN Innovation Pvt. Ltd., Nashik',
    photo: '/images/founder2.png',
    accentColor: 'harvest-gold',
    badgeColor: 'bg-harvest-gold/15 text-harvest-gold-dark border-harvest-gold/30',
    iconBg: 'bg-harvest-gold',
    quoteEn:
      'Our journey is built on a foundation of trust — trust earned in the field, row by row, season by season. We do not just sell products; we build long-term relationships with farmers across Maharashtra.',
    quoteHighlight: null,
    quoteEn2:
      'We are committed to ensuring that every input we provide is traceable, accountable, and genuinely improves livelihoods. The smiles of satisfied farmers are what drive us every single day.',
    quoteMr:
      'शेतकऱ्यांचा विश्वास हीच आमची सर्वात मोठी संपत्ती आहे. दर्जेदार उत्पादनांमुळे त्यांचे जीवनमान उंचावणे हेच आमचे लक्ष्य आहे.',
    tags: ['Trust', 'Quality', 'Sustainable Growth'],
  },
];

export default function FounderMessage() {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('next'); // 'next' | 'prev'

  const goTo = useCallback(
    (idx, dir = 'next') => {
      if (isAnimating || idx === active) return;
      setDirection(dir);
      setIsAnimating(true);
      setTimeout(() => {
        setActive(idx);
        setIsAnimating(false);
      }, 380);
    },
    [active, isAnimating]
  );

  const next = useCallback(() => {
    goTo((active + 1) % founders.length, 'next');
  }, [active, goTo]);

  const prev = useCallback(() => {
    goTo((active - 1 + founders.length) % founders.length, 'prev');
  }, [active, goTo]);

  // Auto-play every 7s
  useEffect(() => {
    const timer = setTimeout(next, 7000);
    return () => clearTimeout(timer);
  }, [active, next]);

  const f = founders[active];
  const isGreen = f.accentColor === 'kisan-green';

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-cream soil-pattern" id="founder-message">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase bg-kisan-green/10 text-kisan-green rounded-full border border-kisan-green/20">
              💬 Message from Our Founders
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-pure-black mb-3">
              The Minds Behind the Mission
            </h2>
            <p className="font-devanagari text-kisan-green text-lg">
              ध्येयामागील विचार
            </p>
          </div>
        </ScrollReveal>

        {/* Carousel Card */}
        <div className="relative">
          {/* Main card — cross-fade animation */}
          <div
            className="relative bg-white rounded-[32px] shadow-2xl overflow-hidden border-2 transition-all duration-500"
            style={{
              borderColor: isGreen ? 'rgba(45,106,79,0.15)' : 'rgba(255,183,3,0.25)',
            }}
          >
            {/* Decorative bg blobs */}
            <div
              className="absolute top-0 right-0 w-80 h-80 rounded-full -mr-40 -mt-40 blur-3xl transition-all duration-700"
              style={{ background: isGreen ? 'rgba(45,106,79,0.06)' : 'rgba(255,183,3,0.08)' }}
            />
            <div
              className="absolute bottom-0 left-0 w-56 h-56 rounded-full -ml-28 -mb-28 blur-3xl transition-all duration-700"
              style={{ background: isGreen ? 'rgba(255,183,3,0.05)' : 'rgba(45,106,79,0.05)' }}
            />

            {/* Slide content */}
            <div
              className={`grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-0 relative z-10 transition-opacity duration-380 ${
                isAnimating ? 'opacity-0 scale-[0.99]' : 'opacity-100 scale-100'
              }`}
              style={{ transition: 'opacity 0.38s ease, transform 0.38s ease' }}
            >
              {/* ===== Founder Photo Panel ===== */}
              <div className="relative h-72 sm:h-96 lg:h-full min-h-[380px] overflow-hidden">
                <img
                  src={f.photo}
                  alt={f.name}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700"
                  style={{ transform: isAnimating ? (direction === 'next' ? 'translateX(-4%)' : 'translateX(4%)') : 'translateX(0)' }}
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 transition-all duration-700"
                  style={{
                    background: isGreen
                      ? 'linear-gradient(to top, rgba(27,67,50,0.7) 0%, transparent 50%), linear-gradient(to right, transparent, rgba(255,255,255,0) 85%)'
                      : 'linear-gradient(to top, rgba(78,52,46,0.6) 0%, transparent 50%), linear-gradient(to right, transparent, rgba(255,255,255,0) 85%)',
                  }}
                />

                {/* Founder number badge */}
                <div className="absolute top-5 left-5">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-base shadow-lg transition-colors duration-500"
                    style={{ background: isGreen ? '#2D6A4F' : '#FFB703', color: isGreen ? 'white' : '#4E342E' }}
                  >
                    {f.id + 1}
                  </div>
                </div>

                {/* Name overlay at bottom (mobile) */}
                <div className="absolute bottom-5 left-5 right-5 lg:hidden">
                  <p className="text-white font-headline font-bold text-lg drop-shadow-lg">{f.name}</p>
                  <p className="font-devanagari text-white/80 text-sm">{f.nameLocal}</p>
                </div>
              </div>

              {/* ===== Message Panel ===== */}
              <div className="p-7 sm:p-10 lg:p-12 flex flex-col justify-center gap-5">
                {/* Badge */}
                <div className="hidden lg:flex items-center gap-3">
                  <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full border ${f.badgeColor}`}>
                    💬 Message from the Founders
                  </span>
                  {/* Slide counter */}
                  <span className="text-text-muted text-xs font-bold">
                    {active + 1} / {founders.length}
                  </span>
                </div>

                {/* Big quote mark */}
                <div
                  className="text-7xl sm:text-8xl font-serif leading-none -mb-4 transition-colors duration-500"
                  style={{ color: isGreen ? 'rgba(45,106,79,0.12)' : 'rgba(255,183,3,0.2)' }}
                >
                  &ldquo;
                </div>

                {/* Quote EN 1 */}
                <blockquote className="text-text-primary text-base sm:text-lg leading-relaxed pl-2">
                  {f.quoteEn}
                  {f.quoteHighlight && (
                    <em
                      className="font-bold not-italic transition-colors duration-500"
                      style={{ color: isGreen ? '#2D6A4F' : '#E09F00' }}
                    >
                      {f.quoteHighlight}
                    </em>
                  )}
                </blockquote>

                {/* Quote EN 2 */}
                <blockquote className="text-text-secondary text-sm sm:text-base leading-relaxed pl-2">
                  {f.quoteEn2}
                </blockquote>

                {/* Marathi quote */}
                <p
                  className="font-devanagari text-sm leading-relaxed pl-3 py-2 border-l-4 transition-colors duration-500"
                  style={{
                    color: isGreen ? '#2D6A4F' : '#E09F00',
                    borderColor: isGreen ? 'rgba(45,106,79,0.25)' : 'rgba(255,183,3,0.35)',
                  }}
                >
                  &ldquo;{f.quoteMr}&rdquo;
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {f.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold px-3 py-1 rounded-full border transition-colors duration-500"
                      style={{
                        background: isGreen ? 'rgba(45,106,79,0.08)' : 'rgba(255,183,3,0.1)',
                        color: isGreen ? '#2D6A4F' : '#E09F00',
                        borderColor: isGreen ? 'rgba(45,106,79,0.2)' : 'rgba(255,183,3,0.3)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Signature row */}
                <div
                  className="flex items-center gap-4 pt-5 border-t transition-colors duration-500"
                  style={{ borderColor: isGreen ? 'rgba(45,106,79,0.12)' : 'rgba(255,183,3,0.2)' }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0 border-2 transition-colors duration-500"
                    style={{ borderColor: isGreen ? 'rgba(45,106,79,0.25)' : 'rgba(255,183,3,0.35)' }}
                  >
                    <img src={f.photo} alt={f.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-headline font-bold text-pure-black text-sm sm:text-base">{f.name}</p>
                    <p className="font-devanagari text-xs transition-colors duration-500" style={{ color: isGreen ? '#2D6A4F' : '#E09F00' }}>
                      {f.nameLocal}
                    </p>
                    <p className="text-text-muted text-xs truncate">{f.company}</p>
                  </div>
                  <div className="ml-auto hidden sm:block flex-shrink-0">
                    <div className="iso-seal"><span className="text-[7px]">ISO<br />9001<br />2015</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===== Navigation Controls ===== */}
          {/* Prev / Next arrow buttons */}
          <button
            onClick={prev}
            aria-label="Previous founder"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white shadow-lg border border-kisan-green/15 flex items-center justify-center text-kisan-green hover:bg-kisan-green hover:text-white transition-all duration-200 hover:scale-110"
          >
            <span className="material-symbols-outlined text-xl">chevron_left</span>
          </button>
          <button
            onClick={next}
            aria-label="Next founder"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white shadow-lg border border-kisan-green/15 flex items-center justify-center text-kisan-green hover:bg-kisan-green hover:text-white transition-all duration-200 hover:scale-110"
          >
            <span className="material-symbols-outlined text-xl">chevron_right</span>
          </button>

          {/* Dot indicators + thumbnail strip */}
          <div className="mt-8 flex flex-col items-center gap-4">
            {/* Dot indicators */}
            <div className="flex items-center gap-3">
              {founders.map((fd, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > active ? 'next' : 'prev')}
                  aria-label={`Go to founder ${i + 1}`}
                  className="group flex items-center gap-2 focus:outline-none"
                >
                  <div
                    className={`rounded-full transition-all duration-400 ${
                      i === active
                        ? 'w-8 h-3 bg-kisan-green shadow-md'
                        : 'w-3 h-3 bg-kisan-green/25 hover:bg-kisan-green/50'
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Thumbnail selector */}
            <div className="flex items-center gap-4">
              {founders.map((fd, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > active ? 'next' : 'prev')}
                  className={`group flex items-center gap-3 px-4 py-3 rounded-2xl border-2 transition-all duration-300 ${
                    i === active
                      ? 'border-kisan-green/40 bg-white shadow-kisan scale-105'
                      : 'border-transparent bg-white/60 hover:bg-white hover:border-kisan-green/20'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 border-2 border-kisan-green/15">
                    <img src={fd.photo} alt={fd.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="text-left hidden sm:block">
                    <p className="font-headline font-bold text-xs text-pure-black">{fd.name}</p>
                    <p className="text-text-muted text-[10px]">Founder {i + 1}</p>
                  </div>
                  {/* Active progress bar */}
                  {i === active && (
                    <div className="w-12 h-1 rounded-full bg-kisan-green/20 overflow-hidden hidden sm:block">
                      <div
                        className="h-full bg-kisan-green rounded-full"
                        style={{ animation: 'progressBar 7s linear forwards' }}
                      />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Progress bar animation keyframe */}
      <style>{`
        @keyframes progressBar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}
