// ─────────────────────────────────────────────────────────────────────────────
// Agri-Gen Innovation — Accurate Product Catalogue
// Extracted from official product marketing images (May 2026)
// ─────────────────────────────────────────────────────────────────────────────

export const categories = [
  'All Products',
  'Biostimulants',
  'Soil Conditioners',
  'Micronutrients',
  'Plant Growth Promoters',
  'B2B / Bulk Supply',
];

export const products = [
  // ── 1. Potassium Fulvic Humate Micro Granules ──────────────────────────────
  {
    id: 1,
    name: 'Potassium Fulvic Humate Micro Granules (High K2O)',
    nameShort: 'Potassium Fulvic Humate',
    category: 'Biostimulants',
    badge: '⭐ Bestseller',
    badgeType: 'bestseller',
    origin: 'Poland',
    tagline: 'Power of Humic. Strength of Potassium. Growth Beyond Expectation.',
    description:
      'Premium imported Polish Potassium Fulvic Humate — 100% water soluble micro granules with high K₂O power for strong roots, better yield, and maximum returns.',
    fullDescription:
      'Agri-Gen\'s Potassium Fulvic Humate Micro Granules are imported directly from Poland — the world\'s leading source of premium humic substances. This 100% water-soluble formulation combines the chelating power of Fulvic Acid with the nutrient density of Humic Acid and Potassium (K₂O), delivering a triple-action biostimulant that dramatically improves soil fertility, enhances root development, and boosts nutrient uptake efficiency. The micro granular form dissolves instantly in water, making it ideal for drip irrigation, fertigation, and foliar spray. Trusted by 1200+ farmers across Maharashtra for consistent, measurable crop results.',
    image: '/products/potassium-fulvic-humate.jpg',
    packSizes: ['250 gm Jar', '500 gm Jar', '1 kg Jar'],
    specifications: [
      'Humic Acid: min 70%',
      'K₂O: 12%',
      'Fulvic Acid: 16%',
      'Form: Micro Granules',
      'Solubility: 100% Water Soluble',
      'Packing: 20 kg Bag',
      'Origin: Poland',
      'GST: 18%',
    ],
    benefits: [
      'Improves Soil Fertility',
      'Enhances Nutrient Uptake',
      'Promotes Healthy Growth',
      'Increases Crop Productivity',
      'Strong Root Development',
    ],
    crops: 'All field crops, vegetables, fruits, sugarcane, grapes, onion, cotton',
    dosage: 'Fertigation: 1–2 kg/acre | Soil Application: 3–5 kg/acre | Foliar: 1 gm/litre',
    price: 'Contact for Price',
    priceNote: 'Multiple pack sizes available',
  },

  // ── 2. Humic Acid Granules ─────────────────────────────────────────────────
  {
    id: 2,
    name: 'Humic Acid Granules',
    nameShort: 'Humic Acid Granules',
    category: 'Soil Conditioners',
    badge: '🌿 Eco Friendly',
    badgeType: 'eco',
    origin: 'India',
    tagline: 'Advance Biosolution for Sustainable Farming',
    description:
      'Premium Humic Acid Granules — a soil conditioner and plant growth promoter with 100% natural composition for stronger roots, higher yield, and sustainable farming.',
    fullDescription:
      'Agri-Gen\'s Humic Acid Granules are a concentrated soil conditioner and plant growth promoter derived from leonardite — one of the richest sources of humic substances on earth. These black granules revitalize degraded soils by improving soil structure, enhancing the cation exchange capacity (CEC), and creating a favorable environment for beneficial soil microorganisms. Regular use leads to improved water retention, reduced nutrient leaching, stronger root networks, and significantly higher crop yields. Net weight: 1 kg per pack.',
    image: '/products/humic-acid-granules.jpg',
    packSizes: ['1 kg Pack'],
    specifications: [
      'Humic Acid: 70–85%',
      'Fulvic Acid: 5–10%',
      'Potassium (K₂O): 5–12%',
      'Appearance: Black Granules',
      'Solubility: Partial (Soil Application)',
      'pH: 9–11',
      'Category: Biostimulants / Soil Conditioner',
      'GST: 5%',
    ],
    benefits: [
      'Strong Root Development',
      'Improves Soil Fertility',
      'Enhances Nutrient Uptake',
      'Boosts Crop Growth & Yield',
      'Supports Microbial Activity',
    ],
    crops: 'All crops — wheat, maize, soybean, cotton, sugarcane, vegetables, fruits',
    dosage: 'Basal Application: 5–10 kg/acre | Mixed with fertilizer or compost',
    price: 'Contact for Price',
    priceNote: '1 kg jar packing',
  },

  // ── 3. Humic Acid Powder ───────────────────────────────────────────────────
  {
    id: 3,
    name: 'Humic Acid Powder',
    nameShort: 'Humic Acid Powder',
    category: 'Soil Conditioners',
    badge: '📦 Imported Quality',
    badgeType: 'imported',
    origin: 'Imported Premium Quality',
    tagline: 'Strong Roots. Healthy Soil. Better Yield.',
    description:
      '100% water soluble imported premium Humic Acid Powder — enhances soil structure, boosts root development, and increases crop yield with proven results.',
    fullDescription:
      'Agri-Gen\'s Humic Acid Powder is a premium imported formulation engineered for maximum solubility and bioavailability. Unlike granular forms, this fine powder dissolves instantly, making it ideal for use in drip irrigation systems, fertigation tanks, and foliar application. Its fine particle structure ensures rapid soil penetration and quicker results. Rich in humic substances, it acts as a natural chelating agent — unlocking locked nutrients in the soil and making them available to plants when they need them most. Available in 250 gm, 500 gm, and 1 kg jar packing.',
    image: '/products/humic-acid-powder.jpg',
    packSizes: ['250 gm Jar', '500 gm Jar', '1 kg Jar'],
    specifications: [
      'Humic Acid: 80–90%',
      'Fulvic Acid: 10–15%',
      'Solubility: 100% Water Soluble',
      'Form: Fine Powder',
      'Carbon (C): High',
      'Potassium (K): Present',
      'Packing: 250 gm / 500 gm / 1 kg Jar',
      'Origin: Imported',
    ],
    benefits: [
      'Improves Soil Structure',
      'Enhances Nutrient Absorption',
      'Boosts Root Development',
      'Increases Crop Yield',
      'Supports Microbial Activity',
      'Promotes Sustainable Farming',
    ],
    crops: 'All crops — sugarcane, grapes, tomato, onion, wheat, cotton, banana',
    dosage: 'Drip/Fertigation: 500 gm–1 kg/acre | Foliar: 1–2 gm/litre water',
    price: 'Contact for Price',
    priceNote: 'Available in 250 gm, 500 gm & 1 kg jar packing',
  },

  // ── 4. Humic + Amino Shiny Balls ───────────────────────────────────────────
  {
    id: 4,
    name: 'Humic + Amino Shiny Balls',
    nameShort: 'Humic + Amino Shiny Balls',
    category: 'Soil Conditioners',
    badge: '📈 High Yield',
    badgeType: 'highyield',
    origin: 'China',
    tagline: 'Nourishing Soil, Powering Growth',
    description:
      'Slow Release Fertilizer — dual-action Humic (50%) + Amino (10%) spherical granules with NPK 12–13% for superior soil conditioning and sustained plant nutrition.',
    fullDescription:
      'Humic + Amino Shiny Balls from Agri-Gen Innovation are a premium slow-release fertilizer combining the soil conditioning power of Humic Acid (50%) with the bio-stimulating effect of Amino Acids (10%) and balanced NPK (12–13%). The unique 2.5–3 mm round spherical form ensures slow, consistent nutrient release directly into the root zone, extending the nutrition window and reducing application frequency. Suitable for all crops and highly effective as a soil conditioner for repacking and resale. Backed by Premium Quality certification.',
    image: '/products/humic-amino-shiny-balls.jpg',
    packSizes: ['1 kg Jar', '2 kg Jar', '50 kg Bag'],
    specifications: [
      'Humic Acid: 50%',
      'Amino Acid: 10%',
      'NPK: 12–13%',
      'Appearance: 2.5–3 mm Round Shiny Balls',
      'Solubility: Fast Release in Soil',
      'Packing: 50 kg Bag / 1 kg / 2 kg Jar',
      'Origin: China',
      'GST: 18%',
      'Category: Biostimulants',
    ],
    benefits: [
      'Improves Soil Health',
      'Stronger Root Development',
      'Better Nutrient Absorption',
      'Higher Yield',
      'Works for All Crops',
      'Slow Release — Long Duration',
    ],
    crops: 'All crops — suitable as universal soil conditioner',
    dosage: 'Basal: 2–3 kg/acre | Mix with organic manure or compost for best results',
    price: 'Contact for Price',
    priceNote: '1 kg jar / 2 kg jar / 50 kg bag',
  },

  // ── 5. Micronutrient Range (Complete) ─────────────────────────────────────
  {
    id: 5,
    name: 'Complete Micronutrient Range',
    nameShort: 'Micronutrient Solutions',
    category: 'Micronutrients',
    badge: '🔬 Full Spectrum',
    badgeType: 'spectrum',
    origin: 'India / Imported',
    tagline: 'Complete Range of Micronutrient Solutions for Every Crop Need',
    description:
      'Full range of individual and blended micronutrient products — Zn, Fe, Mg, Mn, Cu, B, Mo, Mix Combi, Mix Combi Drip, and Micronutrient Liquid — for targeted crop nutrition.',
    fullDescription:
      'Agri-Gen Innovation offers a comprehensive portfolio of micronutrient solutions designed to address specific and broad-spectrum deficiency needs in Indian agriculture. Individual micronutrient bags are available for Zinc (Zn), Iron (Fe), Magnesium (Mg), Manganese (Mn), Copper (Cu), Boron (B), and Molybdenum (Mo). Our Mix Combi and Mix Combi Drip blends provide balanced multi-micronutrient correction in a single application. Micronutrient Liquid and Micronutrient Granules are also available for foliar spray and soil application. All products are manufactured to precise concentrations for maximum agronomic efficacy.',
    image: '/products/micronutrient-range.jpg',
    packSizes: ['Available in Bags & Liquid Cans'],
    specifications: [
      'Individual: Zn, Fe, Mg, Mn, Cu, B, Mo',
      'Blends: Mix Combi, Mix Combi Drip',
      'Forms: Granules, Powder, Liquid',
      'Application: Soil + Foliar + Drip',
      'Concentration: As per product label',
      'Suitable for B2B Bulk Supply',
    ],
    benefits: [
      'Corrects Micronutrient Deficiencies',
      'Improves Photosynthesis (Fe, Mg)',
      'Boosts Enzyme Activity (Mn, Cu, Mo)',
      'Enhances Pollen Viability (B, Zn)',
      'Improves Fruit Quality & Size',
      'Increases Resistance to Disease',
    ],
    crops: 'All crops — grapes, pomegranate, banana, cotton, soybean, vegetables',
    dosage: 'As per individual product label — contact Agri-Gen for crop-specific recommendations',
    price: 'Contact for Price',
    priceNote: 'Bulk B2B pricing available',
  },

  // ── 6. Growth Booster + Nutri Power ───────────────────────────────────────
  {
    id: 6,
    name: 'Growth Booster + Nutri Power (Water Soluble)',
    nameShort: 'Growth Booster & Nutri Power',
    category: 'Plant Growth Promoters',
    badge: '⭐ Bestseller',
    badgeType: 'bestseller',
    origin: 'India',
    tagline: 'Higher Yield · Water Efficiency · Smart Technology · Sustainable Future',
    description:
      'Agri-Gen\'s Growth Booster and Nutri Power are 100% water-soluble plant growth promoters designed to maximize yield, improve water use efficiency, and deliver smart crop nutrition.',
    fullDescription:
      'The Growth Booster and Nutri Power are two of Agri-Gen Innovation\'s flagship plant growth promoting products, engineered for precision crop nutrition. Growth Booster is a balanced biostimulant promoting vigorous vegetative growth, branching, and canopy development. Nutri Power (1 kg) is a 100% water-soluble fertilizer delivering essential macro and micro nutrients via drip, foliar, or fertigation. Together they form a complete nutrition program trusted by farmers across 50+ districts of Maharashtra. Premium Crop Solutions for Every Season — Empowering Farmers, Enriching Lives.',
    image: '/products/growth-booster-nutri-power.jpg',
    packSizes: ['250 gm', '500 gm', '1 kg'],
    specifications: [
      'Form: 100% Water Soluble Powder',
      'Application: Drip / Foliar / Fertigation',
      'Nutrients: Complete Macro + Micro',
      'Category: Plant Growth Promoter',
      'Trusted by Farmers Across India',
    ],
    benefits: [
      'Higher Crop Yield',
      'Better Water Use Efficiency',
      'Smart Technology-Backed Formula',
      'Sustainable Farming Compatible',
      'Works Across All Crop Stages',
    ],
    crops: 'All crops — grapes, sugarcane, cotton, soybean, onion, tomato, wheat',
    dosage: 'Foliar: 1–2 gm/litre | Drip: 500 gm–1 kg/acre | As recommended by agronomist',
    price: 'Contact for Price',
    priceNote: 'Multiple pack sizes available',
  },

  // ── 7. B2B Bulk Supply Partnership ────────────────────────────────────────
  {
    id: 7,
    name: 'Premium B2B Bulk Supply Partnership',
    nameShort: 'B2B Bulk Supply',
    category: 'B2B / Bulk Supply',
    badge: '🤝 Partner Program',
    badgeType: 'b2b',
    origin: 'Nashik, Maharashtra',
    tagline: 'Your Growth is Our Mission. Let\'s Grow Together.',
    description:
      'Agri-Gen Innovation is your trusted B2B bulk supply partner — offering White Label Manufacturing, Contract Manufacturing, Private Label Packaging, and Co-Marketing Models.',
    fullDescription:
      'Agri-Gen Innovation is a premium B2B bulk supply partner for distributors, retailers, agri-input companies, and exporters across India and globally. We supply the complete range of organic fertilizers, biostimulants, micronutrients, NPK granules, and bio-fertilizers in bulk quantities with consistent quality, timely delivery, and competitive pricing. Our B2B services include: Bulk Supply with reliable & timely deliveries, White Label Manufacturing (Your Brand, Our Quality), Contract Manufacturing with customized solutions, Private Label Packaging (Stand Out with Your Brand), and Co-Marketing Models (Grow Together, Win Together). Our advanced manufacturing facility, large warehouse capacity, quality assurance labs, and global export capability make us the ideal partner for your agri-input business.',
    image: '/products/b2b-bulk-supply-partner.jpg',
    packSizes: ['Bulk / Custom Packing'],
    specifications: [
      'Bulk Supply: Reliable & Timely Deliveries',
      'White Label Manufacturing Available',
      'Contract Manufacturing: Custom Solutions',
      'Private Label Packaging',
      'Co-Marketing Models',
      'Global Export Capability',
      'Advanced Manufacturing Facility',
      'ISO 9001:2015 Certified',
    ],
    benefits: [
      'Premium Quality Assurance',
      'Consistent Supply Chain',
      'Trusted Partner Network',
      'Global Reach & Export',
      'Technology-Driven Solutions',
      'Custom Formulations Available',
    ],
    crops: 'For distributors, retailers, exporters, agri-input companies',
    dosage: 'N/A — Contact for bulk enquiry and custom packaging',
    price: 'Contact for Quote',
    priceNote: 'Custom pricing for bulk orders',
  },
];
