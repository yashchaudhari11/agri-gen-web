'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Download, CheckCircle2 } from 'lucide-react';

// const featured = [
//   {
//     id: 1,
//     category: 'Nutraceuticals',
//     name: 'Ashwagandha KSM-66® Extract',
//     description:
//       'The world\'s most clinically studied ashwagandha root extract with full-spectrum bioactives. Cultivated organically in Madhya Pradesh and standardized to ≥5% withanolides.',
//     specs: [
//       'Withanolides ≥5% (HPLC)',
//       'Full-spectrum root extract',
//       'USDA Organic & NPOP Certified',
//       'Heavy metals tested (below EU limits)',
//       'Vegan & allergen-free',
//     ],
//     image: 'https://images.unsplash.com/photo-1600857062241-98e5dba7f74e?w=700&q=80',
//     price: '₹ 1,200 / kg (bulk)',
//   },
//   {
//     id: 2,
//     category: 'Spice Collection',
//     name: 'Single-Origin Malabar Black Pepper',
//     description:
//       'Handpicked, sun-dried Malabar black pepper from heritage farms in Wayanad, Kerala. Bold aroma and superior piperine — the gold standard for culinary and nutraceutical use.',
//     specs: [
//       'Piperine ≥6.5% (HPLC)',
//       'Moisture <10%',
//       'Non-fumigated, no ETO treatment',
//       'FSSAI & NPOP Certified',
//       'Traceable farm sourcing',
//     ],
//     image: 'https://images.unsplash.com/photo-1612690669207-fed642192c40?w=700&q=80',
//     price: '₹ 680 / kg (bulk)',
//   },
//   {
//     id: 3,
//     category: 'Green Formulation',
//     name: 'Moringa Leaf Powder Ultra-Fine',
//     description:
//       'Ultra-fine milled organic Moringa oleifera leaves with preserved heat-sensitive nutrients. Ideal for functional food, beverage, and dietary supplement manufacturing.',
//     specs: [
//       'Protein ≥25% (dry basis)',
//       'Particle size ≤80 mesh',
//       'Moisture <5%',
//       'Zero additives or fillers',
//       'ISO 22000 food-safety compliant',
//     ],
//     image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=700&q=80',
//     price: '₹ 450 / kg (bulk)',
//   },
// ];

export default function FeaturedProduct() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? featured.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === featured.length - 1 ? 0 : i + 1));

  const product = featured[index];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-10">
        <div className="text-ag-green text-sm font-semibold tracking-widest uppercase mb-3">
          — Featured
        </div>
        <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-gray-900">
          Spotlight Product
        </h2>
      </div>

      {/* Feature Card */}
      <div className="bg-ag-card border border-gray-200 rounded-3xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: Image */}
          <div className="relative h-64 lg:h-auto min-h-[400px]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-all duration-500"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-50/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-50/80 to-transparent lg:hidden" />

            {/* Nav buttons at bottom-left */}
            <div className="absolute bottom-4 left-4 flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-900 rounded-full hover:bg-ag-green hover:text-gray-900 hover:border-ag-green transition-all duration-200"
                aria-label="Previous product"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-900 rounded-full hover:bg-ag-green hover:text-gray-900 hover:border-ag-green transition-all duration-200"
                aria-label="Next product"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Slide indicator */}
            {/* <div className="absolute bottom-4 right-4 flex gap-1.5">
              {featured.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    i === index ? 'bg-ag-green w-5' : 'bg-gray-100/50'
                  }`}
                />
              ))}
            </div>
          </div> */}

          {/* Right: Details */}
          <div className="p-8 lg:p-10 flex flex-col gap-5 justify-center">
            {/* Category */}
            <div className="inline-flex w-fit items-center gap-1.5 bg-ag-green/10 border border-ag-green/30 text-ag-green text-xs font-semibold px-4 py-1.5 rounded-full">
              {product.category}
            </div>

            {/* Product Name */}
            <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-gray-900 leading-tight">
              {product.name}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>

            {/* Specs */}
            <ul className="flex flex-col gap-2.5">
              {product.specs.map((spec) => (
                <li key={spec} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 size={15} className="text-ag-green flex-shrink-0" />
                  <span className="text-gray-600">{spec}</span>
                </li>
              ))}
            </ul>

            {/* Price */}
            <div className="text-ag-green font-bold text-xl pt-1">{product.price}</div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 pt-1">
              <button className="inline-flex items-center gap-2 bg-ag-green text-gray-900 font-bold text-sm px-6 py-3 rounded-full hover:bg-green-300 hover:shadow-lg hover:shadow-ag-green/30 transition-all duration-200">
                <Download size={15} />
                Download Specs
              </button>
              <button className="border border-gray-200 text-gray-900 text-sm font-semibold px-6 py-3 rounded-full hover:border-ag-green/50 hover:text-ag-green transition-all duration-200">
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
