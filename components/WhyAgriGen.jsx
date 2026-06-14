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

function ProgressBar({ score, color, bgColor }) {
  const pct = (score / 5) * 100;
  return (
    <div className={`h-2.5 w-full rounded-full ${bgColor} overflow-hidden mt-3`}>
      <div
        className={`h-full rounded-full ${color} transition-all duration-700`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export default function WhyAgriGen() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-warm-white overflow-hidden relative" id="why-agrigen">
      {/* Organic background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Ccircle cx='40' cy='40' r='35' fill='none' stroke='%232D6A4F' stroke-width='1'/%3E%3Ccircle cx='40' cy='40' r='20' fill='none' stroke='%232D6A4F' stroke-width='1'/%3E%3Ccircle cx='40' cy='40' r='5' fill='none' stroke='%232D6A4F' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundSize: '80px 80px',
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

        {/* Split Header Labels */}
        <ScrollReveal delay={0.05}>
          <div className="grid grid-cols-[auto_1fr_1fr] gap-3 sm:gap-4 mb-4 px-2">
            <div className="w-12 sm:w-16" /> {/* spacer for icon column */}
            <div className="rounded-2xl overflow-hidden">
              <div className="bg-red-600 text-white text-center py-3 px-4">
                <span className="text-lg sm:text-xl font-black tracking-tight flex items-center justify-center gap-2">
                  <span className="text-xl">⚠️</span> Traditional Chemicals
                </span>
                <p className="text-red-200 text-xs mt-0.5 font-medium">रासायनिक खते</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <div className="bg-kisan-green text-white text-center py-3 px-4">
                <span className="text-lg sm:text-xl font-black tracking-tight flex items-center justify-center gap-2">
                  <span className="text-xl">✅</span> Agri-Gen Organic
                </span>
                <p className="text-green-200 text-xs mt-0.5 font-medium">सेंद्रिय उत्पादने</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Comparison Rows */}
        <StaggerContainer className="flex flex-col gap-3" staggerDelay={0.08}>
          {comparisons.map((item) => (
            <StaggerItem key={item.aspect}>
              <div className="group grid grid-cols-[auto_1fr_1fr] gap-3 sm:gap-4 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.01]">

                {/* Icon Column */}
                <div className="w-12 sm:w-16 flex items-stretch">
                  <div className="flex-1 bg-white rounded-xl flex flex-col items-center justify-center gap-1.5 border-2 border-kisan-green/10 group-hover:border-kisan-green/30 transition-colors p-2">
                    <span
                      className="material-symbols-outlined text-kisan-green text-2xl sm:text-3xl"
                      style={{ fontVariationSettings: "'FILL' 1, 'wght' 600" }}
                    >
                      {item.icon}
                    </span>
                    <p className="text-[8px] sm:text-[9px] font-bold text-text-muted uppercase tracking-wider text-center leading-tight">
                      {item.aspect}
                    </p>
                    <p className="font-devanagari text-kisan-green text-[8px] text-center leading-tight hidden sm:block">
                      {item.aspectLocal}
                    </p>
                  </div>
                </div>

                {/* Traditional Side — Red tint */}
                <div className="bg-red-50 border-2 border-red-100 rounded-xl p-4 sm:p-5 relative overflow-hidden">
                  {/* Subtle red watermark */}
                  <div className="absolute top-2 right-2 text-red-200 text-4xl font-black opacity-20 select-none">✗</div>
                  <div className="flex items-start gap-2 mb-2 relative z-10">
                    <span className="text-red-500 text-base flex-shrink-0 mt-0.5">❌</span>
                    <p className="text-red-800 text-xs sm:text-sm leading-relaxed font-medium">
                      {item.traditional}
                    </p>
                  </div>
                  <ProgressBar score={item.traditionalScore} color="bg-red-500" bgColor="bg-red-100" />
                  <div className="flex justify-between mt-1">
                    <span className="text-red-400 text-[9px] font-bold uppercase tracking-wider">Score</span>
                    <span className="text-red-600 text-[9px] font-black">{item.traditionalScore}/5</span>
                  </div>
                </div>

                {/* Agri-Gen Organic Side — Green tint */}
                <div className="bg-kisan-green/5 border-2 border-kisan-green/15 rounded-xl p-4 sm:p-5 relative overflow-hidden group-hover:border-kisan-green/30 transition-colors">
                  {/* Subtle green watermark */}
                  <div className="absolute top-2 right-2 text-kisan-green text-4xl font-black opacity-10 select-none">✓</div>
                  <div className="flex items-start gap-2 mb-2 relative z-10">
                    <span className="text-kisan-green text-base flex-shrink-0 mt-0.5">✅</span>
                    <p className="text-kisan-green-dark text-xs sm:text-sm leading-relaxed font-medium">
                      {item.organic}
                    </p>
                  </div>
                  <ProgressBar score={item.organicScore} color="bg-kisan-green" bgColor="bg-kisan-green/10" />
                  <div className="flex justify-between mt-1">
                    <span className="text-kisan-green/60 text-[9px] font-bold uppercase tracking-wider">Score</span>
                    <span className="text-kisan-green text-[9px] font-black">{item.organicScore}/5</span>
                  </div>
                </div>

              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Mobile legend */}
        <div className="sm:hidden flex gap-4 mt-4 justify-center text-xs font-bold">
          <span className="flex items-center gap-1 text-red-600"><span>⚠️</span> Traditional</span>
          <span className="flex items-center gap-1 text-kisan-green"><span>✅</span> Agri-Gen Organic</span>
        </div>

        {/* Bottom verdict */}
        <ScrollReveal delay={0.2}>
          <div className="mt-10 sm:mt-14 bg-gradient-to-r from-kisan-green to-kisan-green-light rounded-kisan-xl p-6 sm:p-10 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-60 h-60 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-harvest-gold/10 rounded-full -ml-10 -mb-10 blur-2xl" />
            <div className="relative z-10">
              {/* Big stat */}
              <p className="text-5xl sm:text-6xl font-black mb-2 text-harvest-gold">92%</p>
              <p className="text-white/90 text-sm sm:text-base font-medium max-w-xl mx-auto mb-3">
                of farmers who switched to Agri-Gen organic inputs reported better soil health and equal or higher yields within 2 seasons
              </p>
              <p className="font-devanagari text-harvest-gold text-sm">
                ९२% शेतकऱ्यांनी सेंद्रिय उत्पादनांतून चांगले परिणाम नोंदवले
              </p>

              {/* Mini metrics row */}
              <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg mx-auto">
                {[
                  { label: 'Soil Health Improvement', pct: 88 },
                  { label: 'Yield Consistency', pct: 76 },
                  { label: 'Cost Reduction', pct: 65 },
                ].map((m) => (
                  <div key={m.label} className="text-center">
                    <div className="text-lg sm:text-2xl font-black text-white mb-1">{m.pct}%</div>
                    <div className="h-1.5 w-full rounded-full bg-white/20 mb-1 overflow-hidden">
                      <div className="h-full rounded-full bg-harvest-gold transition-all" style={{ width: `${m.pct}%` }} />
                    </div>
                    <p className="text-white/60 text-[9px] font-semibold uppercase tracking-wider leading-tight">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
