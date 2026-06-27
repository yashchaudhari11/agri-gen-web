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
  // ── 1. Vitamix+ ──────────────────────────────
  {
    id: 1,
    name: 'Vitamix+ (High Concentrated liquid)',
    nameShort: 'Vitamix+',
    category: 'Biostimulants',
    badge: '⭐ Bestseller',
    badgeType: 'bestseller',
    origin: 'India',
    tagline: 'Quality in Every Drop',
    description:
      'A powerful blend of stimulants, plant hormones, vitamins, and proteins designed to promote healthy crop growth and maximize productivity.',
    fullDescription:
      'Vitamix+ is a powerful blend of stimulants, plant hormones, vitamins, and proteins designed to promote healthy crop growth and maximize productivity. It promotes vigorous branching and vegetative growth, stimulates new flowering and enhances flower development. It improves fruit quality, size, color, and marketability, helps plants remain stress-free under adverse conditions, reduces flower and fruit dropping, enhances flower-to-fruit conversion (fruit setting), improves fruit retention and yield potential, supports healthy plant metabolism and growth, and is suitable for all crops during critical growth and reproductive stages.',
    image: '/products/vitamix-super.jpg', // Using vitamix super image as fallback since Vitamix+ liquid image wasn't provided
    packSizes: ['25ml', '50ml', '100ml'],
    specifications: [
      'Form: High Concentrated Liquid',
      'Suitability: All crops during critical growth and reproductive stages',
    ],
    benefits: [
      'Promotes vigorous branching and vegetative growth',
      'Stimulates new flowering and enhances flower development',
      'Improves fruit quality, size, color, and marketability',
      'Helps plants remain stress-free under adverse conditions',
      'Reduces flower and fruit dropping',
      'Enhances flower-to-fruit conversion (fruit setting)',
      'Improves fruit retention and yield potential',
      'Supports healthy plant metabolism and growth',
    ],
    crops: 'All crops during critical growth and reproductive stages',
    dosage: '5 ml, Per 30 Liter of Water.',
    price: 'Contact for Price',
    priceNote: 'Available in 25ml, 50ml, 100ml packing',
  },

  // ── 2. Vitamix Super ─────────────────────────────────────────────────
  {
    id: 2,
    name: 'Vitamix Super (High Concentrated Powder)',
    nameShort: 'Vitamix Super',
    category: 'Biostimulants',
    badge: '🌿 High Concentrated',
    badgeType: 'eco',
    origin: 'India',
    tagline: 'Quality in Every Drop',
    description:
      'A powerful blend of stimulants, plant hormones, and vitamins, designed to promote healthy crop growth and maximize productivity.',
    fullDescription:
      'Vitamix Super is a highly concentrated powder featuring a powerful blend of stimulants, plant hormones, and vitamins. It is designed to promote healthy crop growth and maximize productivity. It supports healthy plant metabolism and growth, is suitable for all crops during critical growth and reproductive stages, promotes vigorous branching and vegetative growth, stimulates new flowering and enhances flower development, helps plants remain stress-free under adverse conditions, reduces flower and fruit dropping, and enhances flower-to-fruit conversion.',
    image: '/products/vitamix-super.jpg',
    packSizes: ['20gm', '40gm', '100gm'],
    specifications: [
      'Form: High Concentrated Powder',
      'Suitability: All crops during critical growth and reproductive stages',
    ],
    benefits: [
      'Supports healthy plant metabolism and growth',
      'Suitable for all crops during critical growth and reproductive stages',
      'Promotes vigorous branching and vegetative growth',
      'Stimulates new flowering and enhances flower development',
      'Helps plants remain stress-free under adverse conditions',
      'Reduces flower and fruit dropping',
      'Enhances flower-to-fruit conversion (fruit setting)',
    ],
    crops: 'All crops during critical growth and reproductive stages',
    dosage: '40 gm, per Acre.',
    price: 'Contact for Price',
    priceNote: 'Available in 20gm, 40gm, 100gm packing',
  },

  // ── 3. Leonex ───────────────────────────────────────────────────
  {
    id: 3,
    name: 'Leonex (Potassium Humate 49% Powder)',
    nameShort: 'Leonex',
    category: 'Soil Conditioners',
    badge: '📦 Premium Grade',
    badgeType: 'imported',
    origin: 'India',
    tagline: 'Improves Soil Health & Root Development',
    description:
      'Leonex is a highly concentrated, water-soluble, organic soil conditioner and plant growth bio stimulant derived from premium-grade Leonardite.',
    fullDescription:
      'Leonex is a highly concentrated, water-soluble, organic soil conditioner and plant growth bio stimulant derived from premium-grade Leonardite. It improves soil aeration, texture, and water-holding capacity, making it ideal for restoring degraded or compacted soils. It chelates nutrients, making essential minerals (N, P, K, Fe, Zn, etc.) more bioavailable to plants and reducing fertilizer leaching. It stimulates strong root system development, early germination, and vigorous plant growth. It strengthens crops against environmental stressors like drought, salinity, and high temperatures, and improves flowering, fruiting, and overall crop quality, often resulting in higher yields.',
    image: '/products/leonex.jpg',
    packSizes: ['100gm', '250gm', '500gm', '1000gm'],
    specifications: [
      'Active Ingredient: Potassium Humate 49%',
      'Form: Water-soluble Powder',
      'Source: Premium-grade Leonardite',
      'Solubility: 100% Water Soluble',
      'Organic Source: Yes',
      'Suitability: For All Crops & Soil Types',
    ],
    benefits: [
      'Improves soil aeration, texture, and water-holding capacity',
      'Chelates nutrients, making essential minerals more bioavailable',
      'Stimulates strong root system development and early germination',
      'Strengthens crops against drought, salinity, and high temperatures',
      'Improves flowering, fruiting, and overall crop quality',
    ],
    crops: 'All Crops & Soil Types',
    dosage: 'Spray - 1/2 gm, Drip - 250gm per Acre.',
    price: 'Contact for Price',
    priceNote: 'Available in 100gm, 250gm, 500gm, 1000gm packing',
  },

  // ── 4. Nutrigen Micro GR ───────────────────────────────────────────
  {
    id: 4,
    name: 'Nutrigen Micro GR (Humic Acid and Fulvic Acid 85%)',
    nameShort: 'Nutrigen Micro GR',
    category: 'Biostimulants',
    badge: '📈 High Yield',
    badgeType: 'highyield',
    origin: 'India',
    tagline: 'Improves Soil Health & Enhances Nutrient Uptake',
    description:
      'A high-quality organic soil amendment enriched with Humic Acid, Fulvic Acid, and Potassium. Manufactured using advanced international processing standards.',
    fullDescription:
      'Nutrigen Micro GR is a high-quality organic soil amendment enriched with Humic Acid, Fulvic Acid, and Potassium (Humic Acid and Fulvic Acid 85% Powder). Manufactured using advanced international processing standards, it improves soil health, enhances nutrient absorption, promotes stronger root development, and supports higher crop productivity. Fulvic acid enhances the absorption of nutrients by plant roots, improving nutrient utilization efficiency and reducing nutrient leaching. It promotes vigorous root development, increased shoot growth, and improved crop yield and quality. It also enhances plant tolerance to abiotic stressors such as drought, salinity, and temperature extremes, improves soil structure, aeration, and water retention capacity, reducing soil compaction and erosion, and stimulates the activity of beneficial soil microorganisms.',
    image: '/products/nutrigen-micro.jpg',
    packSizes: ['250gm', '500gm', '1000gm'],
    specifications: [
      'Active Ingredients: Humic Acid and Fulvic Acid 85%',
      'Form: Powder',
      'Category: Biostimulant Fertilizer',
    ],
    benefits: [
      'Nutrient Uptake: Enhances nutrient absorption and reduces leaching',
      'Plant Growth: Promotes vigorous root development and increased shoot growth',
      'Stress Tolerance: Enhances tolerance to drought, salinity, and extreme temperatures',
      'Soil Health: Improves soil structure, aeration, and water retention capacity',
      'Bio stimulation: Stimulates activity of beneficial soil microorganisms',
    ],
    crops: 'All crops',
    dosage: '250gm, per Acre.',
    price: 'Contact for Price',
    priceNote: 'Available in 250gm, 500gm, 1000gm packing',
  },

  // ── 5. Root Rise ─────────────────────────────────────
  {
    id: 5,
    name: 'Root Rise (Humic Acid & Fulvic Acid 45.1%)',
    nameShort: 'Root Rise',
    category: 'Soil Conditioners',
    badge: '🌿 Natural Organic',
    badgeType: 'eco',
    origin: 'India',
    tagline: 'Enhanced Root Mass & Development',
    description:
      'Humic acid crystals are a highly purified and concentrated form of humic acid, a natural organic compound derived from decomposed plant and animal matter.',
    fullDescription:
      'Root Rise consists of humic acid crystals which are a highly purified and concentrated form of humic acid (Humic Acid & Fulvic Acid 45.1% w/w), a natural organic compound derived from decomposed plant and animal matter in soil, peat, and other organic deposits. It enhances soil fertility and plant growth, improves soil structure by increasing water retention and aeration. It stimulates root development and nutrient uptake in plants, acts as a natural chelate, helping plants absorb vital minerals like nitrogen, phosphorus, and potassium more efficiently. It supports beneficial soil microorganisms, promoting a healthy ecosystem for plant growth, and enhances decomposition of organic matter, releasing more nutrients into the soil.',
    image: '/products/root-rise.jpg',
    packSizes: ['250gm', '500gm', '1000gm'],
    specifications: [
      'Active Ingredients: Humic Acid & Fulvic Acid 45.1% (w/w)',
      'Form: Water Soluble Crystalline',
      'Suitability: Suitable for all crops',
    ],
    benefits: [
      'Enhances Soil Fertility & Plant Growth',
      'Improves soil structure by increasing water retention and aeration',
      'Stimulates root development and nutrient uptake in plants',
      'Acts as a natural chelate for efficient mineral absorption',
      'Supports beneficial soil microorganisms',
      'Enhances decomposition of organic matter, releasing nutrients',
    ],
    crops: 'Suitable for all crops',
    dosage: '250gm, Per Acre.',
    price: 'Contact for Price',
    priceNote: 'Available in 250gm, 500gm, 1000gm packing',
  },

  // ── 6. Fulvic+ ───────────────────────────────────────
  {
    id: 6,
    name: 'Fulvic+ (Humalite 82%)',
    nameShort: 'Fulvic+',
    category: 'Biostimulants',
    badge: '⭐ Bestseller',
    badgeType: 'bestseller',
    origin: 'India',
    tagline: 'Water-Soluble Powder',
    description:
      'Humalite is a naturally occurring humic substance derived from high-quality organic deposits. It\'s rich in humic acids and organic carbon.',
    fullDescription:
      'Fulvic+ contains Humalite 82% (Water-Soluble Powder). Humalite is a naturally occurring humic substance derived from high-quality organic deposits (usually weathered coal / humic ore). It’s rich in humic acids and organic carbon, and is used as a bio-stimulant and soil amendment for crops, gardens, turf, and agricultural soils. It improves soil structure and makes soil more friable, enhances water-holding capacity to help soil retain moisture, increases organic carbon content to improve long-term fertility, and promotes strong root development because stronger root systems mean better growth.',
    image: '/products/fulvic-plus.jpg',
    packSizes: ['250gm', '500gm', '1000gm'],
    specifications: [
      'Active Ingredient: Humalite 82%',
      'Form: Water-Soluble Powder',
      'Category: Biostimulant Fertilizer',
      'Net Weight: 25 KG (Bulk packaging available)',
    ],
    benefits: [
      'Improves soil structure and makes soil more friable.',
      'Enhances water-holding capacity—helps soil retain moisture.',
      'Increases organic carbon content, improving long-term fertility.',
      'Promotes strong root development—stronger root systems mean better growth.',
    ],
    crops: 'Crops, gardens, turf, and agricultural soils',
    dosage: '1875 gm, per Acre.',
    price: 'Contact for Price',
    priceNote: 'Available in 250gm, 500gm, 1000gm packing',
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
