'use client';

import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal';

const milestones = [
  {
    year: '2026',
    quarter: 'Q1',
    title: 'Foundation',
    titleLocal: 'स्थापना',
    description: 'Agri-Gen Innovation established in Nashik, Maharashtra as a certified organic agri-inputs manufacturer.',
    icon: 'rocket_launch',
    color: 'bg-kisan-green',
  },
  {
    year: '2026',
    quarter: 'Q2',
    title: 'ISO Certification',
    titleLocal: 'ISO प्रमाणपत्र',
    description: 'Achieved ISO 9001:2015 certification, establishing quality management systems from day one.',
    icon: 'verified',
    color: 'bg-harvest-gold',
  },
  {
    year: '2026',
    quarter: 'Q2',
    title: 'Product Portfolio Launch',
    titleLocal: 'उत्पादन श्रेणी',
    description: 'Launched 500+ product SKUs across organic plant protectors, microbial solutions, mycorrhizae, and growth promoters.',
    icon: 'inventory_2',
    color: 'bg-kisan-green',
  },
  {
    year: '2026',
    quarter: 'Q3',
    title: 'Multi-Channel Expansion',
    titleLocal: 'बहु-माध्यम विस्तार',
    description: 'Expanded across retail, wholesale, bulk supply, exports, and B2B distribution channels simultaneously.',
    icon: 'hub',
    color: 'bg-field-green',
  },
  {
    year: '2026',
    quarter: 'Q3',
    title: '50+ Districts Reached',
    titleLocal: '५०+ जिल्ह्यांमध्ये',
    description: 'Products now available across 50+ districts, serving 1200+ farmers with dedicated field support teams.',
    icon: 'public',
    color: 'bg-harvest-gold',
  },
  {
    year: '2026',
    quarter: 'Q4',
    title: 'Export Operations',
    titleLocal: 'निर्यात कार्ये',
    description: 'Commenced international export operations, bringing Indian organic agri-inputs to global markets.',
    icon: 'flight_takeoff',
    color: 'bg-kisan-green',
  },
  {
    year: '2027',
    quarter: 'Vision',
    title: 'National Presence',
    titleLocal: 'राष्ट्रीय उपस्थिती',
    description: 'Expanding to become India\'s most trusted organic agri-inputs brand, empowering 10,000+ farmers nationwide.',
    icon: 'flag',
    color: 'bg-earth-brown',
  },
];

export default function CompanyTimeline() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-cream soil-pattern" id="company-timeline">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-14 sm:mb-20">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase bg-kisan-green/10 text-kisan-green rounded-full border border-kisan-green/20">
              📅 Our Journey
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-pure-black mb-3">
              Rapidly Emerging. Deeply Rooted.
            </h2>
            <p className="font-devanagari text-kisan-green text-lg">
              वेगाने उदयास येत आहे. खोलवर रुजलेले.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-kisan-green/15" />

          <StaggerContainer className="flex flex-col gap-8 sm:gap-10" staggerDelay={0.1}>
            {milestones.map((item, idx) => (
              <StaggerItem key={idx}>
                <div className="flex gap-4 sm:gap-6 relative group">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 ${item.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span
                        className="material-symbols-outlined text-xl sm:text-2xl"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {item.icon}
                      </span>
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 bg-white rounded-kisan p-5 sm:p-7 shadow-warm border-2 border-kisan-green/5 hover:border-kisan-green/20 hover:shadow-kisan transition-all duration-300 group-hover:-translate-y-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs font-black text-kisan-green bg-kisan-green/10 px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                      <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">
                        {item.quarter}
                      </span>
                    </div>
                    <h3 className="font-headline font-bold text-base sm:text-lg text-pure-black mb-1">
                      {item.title}
                    </h3>
                    <p className="font-devanagari text-kisan-green text-xs mb-2">
                      {item.titleLocal}
                    </p>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
