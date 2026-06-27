'use client';

import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal';

// Future-oriented roadmap — framed as vision & commitment, not past achievements
const roadmap = [
  {
    phase: 'Phase 1',
    phaseLocal: 'टप्पा १',
    year: '2026',
    title: 'Strong Foundation',
    titleLocal: 'मजबूत पाया',
    description:
      'Established in Nashik with ISO 9001:2015 certification. Building product quality systems and introducing our first range of certified organic agri-inputs to Maharashtra farmers.',
    icon: 'rocket_launch',
    accent: '#3DAA35',
    status: 'active', // current phase
  },
  {
    phase: 'Phase 2',
    phaseLocal: 'टप्पा २',
    year: '2026–27',
    title: 'Deep Farmer Reach',
    titleLocal: 'शेतकऱ्यांपर्यंत पोहोचणे',
    description:
      'Expanding our direct-to-farmer network across 50+ districts of Maharashtra. Dedicated field advisors, free soil testing camps, and hands-on demonstration farms.',
    icon: 'groups',
    accent: '#1A56B4',
    status: 'upcoming',
  },
  {
    phase: 'Phase 3',
    phaseLocal: 'टप्पा ३',
    year: '2027',
    title: 'B2B & Export Growth',
    titleLocal: 'B2B आणि निर्यात वाढ',
    description:
      'Scaling institutional supply, white-label manufacturing, and export partnerships. Bringing Indian organic agri-inputs to global markets while maintaining our farmer-first promise.',
    icon: 'flight_takeoff',
    accent: '#E8A320',
    status: 'upcoming',
  },
  {
    phase: 'Phase 4',
    phaseLocal: 'टप्पा ४',
    year: '2028',
    title: 'National Leadership',
    titleLocal: 'राष्ट्रीय नेतृत्व',
    description:
      "India's most trusted organic agri-inputs brand — empowering 50,000+ farmers nationwide with science-backed, nature-aligned solutions for every crop and every season.",
    icon: 'flag',
    accent: '#3DAA35',
    status: 'vision',
  },
];

const STATUS_STYLE = {
  active: {
    badge: 'bg-[#3DAA35] text-white',
    label: 'Active Now',
    cardBorder: 'border-[#3DAA35]/30',
    cardBg: 'bg-[#3DAA35]/4',
  },
  upcoming: {
    badge: 'bg-[#1A56B4]/15 text-[#1A56B4] border border-[#1A56B4]/25',
    label: 'Upcoming',
    cardBorder: 'border-gray-100',
    cardBg: 'bg-white',
  },
  vision: {
    badge: 'bg-[#E8A320]/15 text-[#E8A320] border border-[#E8A320]/25',
    label: 'Our Vision',
    cardBorder: 'border-[#E8A320]/20',
    cardBg: 'bg-white',
  },
};

export default function CompanyTimeline() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white border-t border-gray-100" id="roadmap">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-8">

        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-14 sm:mb-18">
            <p className="text-gray-400 text-[10px] font-bold tracking-[0.35em] uppercase mb-5">
              Our Roadmap
            </p>
            <h2 className="font-headline font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4 leading-tight">
              Where We Are{' '}
              <span style={{ color: '#3DAA35' }}>Headed</span>
            </h2>
            <p className="font-devanagari text-gray-400 text-base max-w-md mx-auto">
              आमचा प्रवास — शेतकऱ्यांच्या समृद्धीसाठी
            </p>
          </div>
        </ScrollReveal>

        {/* Roadmap — vertical timeline */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-6 sm:left-8 top-6 bottom-6 w-px bg-gray-100" />

          <StaggerContainer className="flex flex-col gap-8 sm:gap-10" staggerDelay={0.12}>
            {roadmap.map((item, idx) => {
              const s = STATUS_STYLE[item.status];
              return (
                <StaggerItem key={idx}>
                  <div className="flex gap-5 sm:gap-7 relative group">

                    {/* Icon dot */}
                    <div className="flex-shrink-0 relative z-10 mt-1">
                      <div
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300"
                        style={{ backgroundColor: item.accent + '18', border: `1.5px solid ${item.accent}30` }}
                      >
                        <span
                          className="material-symbols-outlined text-xl sm:text-2xl"
                          style={{ color: item.accent, fontVariationSettings: "'FILL' 1, 'wght' 600" }}
                        >
                          {item.icon}
                        </span>
                      </div>
                    </div>

                    {/* Card */}
                    <div
                      className={`flex-1 rounded-2xl p-5 sm:p-7 border-2 ${s.cardBorder} ${s.cardBg} hover:shadow-sm transition-all duration-300`}
                    >
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span
                          className="text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider"
                          style={{ backgroundColor: item.accent + '18', color: item.accent }}
                        >
                          {item.phase}
                        </span>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                          {item.year}
                        </span>
                        <span className={`ml-auto text-[9px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide ${s.badge}`}>
                          {s.label}
                        </span>
                      </div>

                      <h3 className="font-headline font-bold text-base sm:text-lg text-gray-900 mb-0.5">
                        {item.title}
                      </h3>
                      <p className="font-devanagari text-gray-400 text-[11px] mb-3">
                        {item.titleLocal}
                      </p>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

        {/* Footer note */}
        <ScrollReveal delay={0.2}>
          <div className="mt-14 text-center">
            <p className="text-gray-400 text-xs leading-relaxed max-w-sm mx-auto">
              Our roadmap reflects our commitment — not hype. Every step is driven by what
              real farmers need, verified through field experience.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
