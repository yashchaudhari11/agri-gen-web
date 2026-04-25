'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

const farmerStories = [
  {
    name: 'Sanjay Patil',
    location: 'Dindori, Nashik',
    locationMr: 'दिंडोरी, नाशिक',
    crop: 'Grapes',
    image: '/images/farmer_1.png',
    quote:
      'After using Agri-Gen organic inputs, my grape yield increased by 40%. The quality improved so much that I got better prices at the market.',
    quoteMr:
      'कृषी-जेनचे सेंद्रिय उत्पादने वापरल्यानंतर माझ्या द्राक्षांचे उत्पादन ४०% वाढले. गुणवत्ता इतकी सुधारली की मला बाजारात चांगला भाव मिळाला.',
    before: '12 quintal/acre',
    after: '18 quintal/acre',
  },
  {
    name: 'Sunita Bhosale',
    location: 'Igatpuri, Nashik',
    locationMr: 'इगतपुरी, नाशिक',
    crop: 'Onions',
    image: '/images/farmer_2.png',
    quote:
      'The microbial solutions helped restore my soil health. My onion crops are now more resilient to diseases and the yield has doubled.',
    quoteMr:
      'मायक्रोबियल सोल्युशन्सने माझ्या जमिनीचे आरोग्य पुनर्संचयित केले. माझ्या कांद्याचे पीक आता रोगांना अधिक प्रतिरोधक आहे.',
    before: '8 quintal/acre',
    after: '15 quintal/acre',
  },
  {
    name: 'Ramesh Wagh',
    location: 'Sinnar, Nashik',
    locationMr: 'सिन्नर, नाशिक',
    crop: 'Pomegranate',
    image: '/images/farmer_3.png',
    quote:
      'I have been farming for 30 years. Agri-Gen products are the best organic inputs I have ever used. My pomegranates are now export quality.',
    quoteMr:
      'मी ३० वर्षे शेती करतो. कृषी-जेन उत्पादने ही सर्वोत्तम सेंद्रिय उत्पादने आहेत. माझी डाळिंबे आता निर्यात दर्जाची आहेत.',
    before: '6 ton/acre',
    after: '10 ton/acre',
  },
];

export default function FarmerStories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const t = useTranslations('farmerStories');
  const story = farmerStories[activeIndex];

  const next = () =>
    setActiveIndex((i) => (i === farmerStories.length - 1 ? 0 : i + 1));
  const prev = () =>
    setActiveIndex((i) => (i === 0 ? farmerStories.length - 1 : i - 1));

  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-cream soil-pattern"
      id="farmer-stories"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase bg-kisan-green/10 text-kisan-green rounded-full border border-kisan-green/20">
            🌾 {t('title')}
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary leading-tight mb-3">
            {t('subtitle')}
          </h2>
          <p className="text-kisan-green font-devanagari text-lg">
            {t('subtitleLocal')}
          </p>
        </div>

        {/* Story Card */}
        <div className="max-w-5xl mx-auto bg-white rounded-kisan-xl shadow-kisan-lg overflow-hidden border-2 border-kisan-green/10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Farmer Photo */}
            <div className="relative h-72 sm:h-80 lg:h-full min-h-[320px]">
              <img
                src={story.image}
                alt={`${story.name} from ${story.location}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-bold text-xl sm:text-2xl">
                  {story.name}
                </h3>
                <p className="text-white/80 text-sm">
                  📍 {story.location}{' '}
                  <span className="font-devanagari">({story.locationMr})</span>
                </p>
                <span className="inline-block mt-2 px-3 py-1 bg-harvest-gold text-earth-brown text-xs font-extrabold rounded-full">
                  🌿 {story.crop}
                </span>
              </div>
            </div>

            {/* Story Content */}
            <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <p className="text-text-primary text-base sm:text-lg leading-relaxed mb-4 italic">
                  &ldquo;{story.quote}&rdquo;
                </p>
                <p className="text-kisan-green font-devanagari text-sm leading-relaxed mb-6">
                  &ldquo;{story.quoteMr}&rdquo;
                </p>
              </div>

              {/* Yield Comparison */}
              <div className="bg-cream rounded-2xl p-4 sm:p-5 mb-6">
                <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-3">
                  📊 Yield Comparison / उत्पादन तुलना
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-xs text-text-muted uppercase font-bold mb-1">
                      Before
                    </p>
                    <p className="text-lg font-extrabold text-earth-brown">
                      {story.before}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-text-muted uppercase font-bold mb-1">
                      After ✅
                    </p>
                    <p className="text-lg font-extrabold text-kisan-green">
                      {story.after}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {farmerStories.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 touch-target ${
                        i === activeIndex
                          ? 'bg-kisan-green w-8'
                          : 'bg-kisan-green/20'
                      }`}
                      aria-label={`Story ${i + 1}`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="w-11 h-11 flex items-center justify-center rounded-xl bg-cream text-kisan-green hover:bg-kisan-green hover:text-white transition-all duration-200 touch-target"
                    aria-label="Previous story"
                  >
                    <span className="material-symbols-outlined">
                      chevron_left
                    </span>
                  </button>
                  <button
                    onClick={next}
                    className="w-11 h-11 flex items-center justify-center rounded-xl bg-kisan-green text-white hover:bg-kisan-green-dark transition-all duration-200 touch-target"
                    aria-label="Next story"
                  >
                    <span className="material-symbols-outlined">
                      chevron_right
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
