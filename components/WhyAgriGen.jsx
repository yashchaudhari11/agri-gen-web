'use client';

import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal';

const comparisons = [
  {
    aspect: 'Soil Health',
    aspectLocal: 'जमिनीचे आरोग्य',
    icon: 'landscape',
    traditional: 'Degrades soil microbiome over time, reducing natural fertility',
    organic: 'Restores and enriches soil biology, builds long-term fertility',
    traditionalScore: 2,
    organicScore: 5,
  },
  {
    aspect: 'Crop Safety',
    aspectLocal: 'पीक सुरक्षा',
    icon: 'shield',
    traditional: 'Chemical residues can contaminate produce and harm consumers',
    organic: 'Zero harmful residues — safe for direct consumption and export quality',
    traditionalScore: 1,
    organicScore: 5,
  },
  {
    aspect: 'Cost Over Time',
    aspectLocal: 'दीर्घकालीन खर्च',
    icon: 'savings',
    traditional: 'Increasing doses needed each season as soil becomes dependent',
    organic: 'Costs decrease as soil health improves, reducing input needs naturally',
    traditionalScore: 2,
    organicScore: 4,
  },
  {
    aspect: 'Market Value',
    aspectLocal: 'बाजार मूल्य',
    icon: 'trending_up',
    traditional: 'Standard pricing — no premium advantage for chemical-grown produce',
    organic: '30-60% premium pricing for certified organic produce in domestic & export markets',
    traditionalScore: 2,
    organicScore: 5,
  },
  {
    aspect: 'Environmental Impact',
    aspectLocal: 'पर्यावरणीय परिणाम',
    icon: 'eco',
    traditional: 'Water pollution, beneficial insect death, biodiversity loss',
    organic: 'Promotes biodiversity, protects water sources, supports pollinators',
    traditionalScore: 1,
    organicScore: 5,
  },
  {
    aspect: 'Yield Consistency',
    aspectLocal: 'उत्पादन सातत्य',
    icon: 'analytics',
    traditional: 'High initial yield, but diminishing returns over 3-5 years',
    organic: 'Steady improvement — yields match or exceed chemical within 2-3 seasons',
    traditionalScore: 3,
    organicScore: 4,
  },
];

function ScoreBar({ score, color }) {
  return (
    <div className="flex gap-1 mt-2">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className={`h-2 w-6 sm:w-8 rounded-full transition-all duration-500 ${
            i <= score ? color : 'bg-gray-200'
          }`}
        />
      ))}
    </div>
  );
}

export default function WhyAgriGen() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-warm-white overflow-hidden" id="why-agrigen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase bg-harvest-gold/15 text-harvest-gold-dark rounded-full border border-harvest-gold/30">
              ⚖️ The Organic Advantage
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-pure-black mb-3">
              Why Agri-Gen Organic?
            </h2>
            <p className="font-devanagari text-kisan-green text-lg mb-2">
              रासायनिक विरुद्ध सेंद्रिय — फरक पहा
            </p>
            <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
              See the difference that science-backed organic inputs make for your field, your family, and your future
            </p>
          </div>
        </ScrollReveal>

        {/* Column Headers */}
        <ScrollReveal delay={0.1}>
          <div className="hidden sm:grid sm:grid-cols-[1.2fr_1fr_1fr] gap-4 mb-6 sticky top-20 z-20 bg-warm-white/95 backdrop-blur-md py-3 px-4 rounded-2xl border border-kisan-green/5">
            <div className="text-xs font-bold uppercase tracking-widest text-text-muted">
              Comparison Factor
            </div>
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-red-50 text-red-700 text-xs font-bold border border-red-200">
                ⚠️ Traditional Chemicals
              </span>
            </div>
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-kisan-green/10 text-kisan-green text-xs font-bold border border-kisan-green/20">
                ✅ Agri-Gen Organic
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Comparison Rows */}
        <StaggerContainer className="flex flex-col gap-3 sm:gap-4" staggerDelay={0.08}>
          {comparisons.map((item) => (
            <StaggerItem key={item.aspect}>
              <div className="group grid grid-cols-1 sm:grid-cols-[1.2fr_1fr_1fr] gap-3 sm:gap-4 bg-white rounded-kisan p-5 sm:p-6 border-2 border-kisan-green/5 hover:border-kisan-green/20 hover:shadow-kisan transition-all duration-300 relative">
                {/* Z-axis depth effect */}
                <div className="absolute inset-0 rounded-kisan shadow-[0_8px_32px_rgba(45,106,79,0.06)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Factor Name */}
                <div className="flex items-center gap-3 sm:gap-4 relative z-10">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-kisan-green/10 flex items-center justify-center text-kisan-green group-hover:bg-kisan-green group-hover:text-white transition-all duration-300">
                    <span
                      className="material-symbols-outlined text-xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-sm sm:text-base text-pure-black">
                      {item.aspect}
                    </h4>
                    <p className="font-devanagari text-kisan-green text-xs">
                      {item.aspectLocal}
                    </p>
                  </div>
                </div>

                {/* Traditional */}
                <div className="bg-red-50/50 rounded-xl p-4 border border-red-100/50 relative z-10">
                  <span className="sm:hidden text-[10px] font-bold uppercase tracking-widest text-red-400 mb-1 block">
                    ⚠️ Traditional
                  </span>
                  <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                    {item.traditional}
                  </p>
                  <ScoreBar score={item.traditionalScore} color="bg-red-400" />
                </div>

                {/* Organic */}
                <div className="bg-kisan-green/5 rounded-xl p-4 border border-kisan-green/10 relative z-10">
                  <span className="sm:hidden text-[10px] font-bold uppercase tracking-widest text-kisan-green mb-1 block">
                    ✅ Agri-Gen Organic
                  </span>
                  <p className="text-text-primary text-xs sm:text-sm leading-relaxed font-medium">
                    {item.organic}
                  </p>
                  <ScoreBar score={item.organicScore} color="bg-kisan-green" />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom verdict */}
        <ScrollReveal delay={0.2}>
          <div className="mt-10 sm:mt-14 bg-gradient-to-r from-kisan-green to-kisan-green-light rounded-kisan-xl p-6 sm:p-10 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-60 h-60 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl" />
            <div className="relative z-10">
              <p className="text-3xl sm:text-4xl font-black mb-2">92%</p>
              <p className="text-white/90 text-sm sm:text-base font-medium max-w-xl mx-auto">
                of farmers who switched to Agri-Gen organic inputs reported better soil health and equal or higher yields within 2 seasons
              </p>
              <p className="font-devanagari text-harvest-gold text-sm mt-3">
                ९२% शेतकऱ्यांनी सेंद्रिय उत्पादनांतून चांगले परिणाम नोंदवले
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
