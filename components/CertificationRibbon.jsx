'use client';

import { useEffect, useRef } from 'react';

const certifications = [
  { label: 'ISO 9001:2015 Certified', icon: '🏅', sublabel: 'Quality Management' },
  { label: 'Certified Organic Inputs', icon: '🌿', sublabel: 'प्रमाणित सेंद्रिय' },
  { label: 'Made in India', icon: '🇮🇳', sublabel: 'Proudly Indian' },
  { label: 'GMP Compliant', icon: '🔬', sublabel: 'Good Manufacturing Practice' },
  { label: 'Lab Tested Quality', icon: '🧪', sublabel: 'प्रयोगशाळा चाचणी' },
  { label: 'FSSAI Approved', icon: '✅', sublabel: 'Food Safety Standards' },
  { label: 'Export Quality', icon: '🌍', sublabel: 'निर्यात दर्जा' },
  { label: 'Farmer Verified', icon: '👨‍🌾', sublabel: 'शेतकरी प्रमाणित' },
];

// Duplicate for seamless loop
const allCerts = [...certifications, ...certifications];

export default function CertificationRibbon() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId;
    let position = 0;
    const speed = 0.5;

    const animate = () => {
      position -= speed;
      const halfWidth = el.scrollWidth / 2;
      if (Math.abs(position) >= halfWidth) {
        position = 0;
      }
      el.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Pause on hover
    const pause = () => cancelAnimationFrame(animationId);
    const resume = () => { animationId = requestAnimationFrame(animate); };
    el.addEventListener('mouseenter', pause);
    el.addEventListener('mouseleave', resume);

    return () => {
      cancelAnimationFrame(animationId);
      el.removeEventListener('mouseenter', pause);
      el.removeEventListener('mouseleave', resume);
    };
  }, []);

  return (
    <section className="py-5 sm:py-6 bg-cream border-y-2 border-kisan-green/10 overflow-hidden" id="certification-ribbon">
      <div className="flex items-center" ref={scrollRef} style={{ willChange: 'transform' }}>
        {allCerts.map((cert, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-5 sm:px-8 flex-shrink-0 group"
          >
            <span className="text-2xl sm:text-3xl group-hover:scale-125 transition-transform duration-300">
              {cert.icon}
            </span>
            <div className="whitespace-nowrap">
              <p className="text-xs sm:text-sm font-bold text-pure-black tracking-tight">
                {cert.label}
              </p>
              <p className="text-[10px] text-text-muted font-medium">
                {cert.sublabel}
              </p>
            </div>
            <span className="text-kisan-green/20 text-xl ml-3 sm:ml-5">•</span>
          </div>
        ))}
      </div>
    </section>
  );
}
