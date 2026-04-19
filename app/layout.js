import './globals.css';

export const metadata = {
  title: 'AGRI-GEN | House of Organic Agri-Products',
  description:
    'AGRI-GEN is a premier organic agri-products business connecting 1200+ farmers across 50+ districts with 500+ certified organic products.',
  keywords: 'organic, agri-products, farmers, spices, nutraceuticals, green formulation, agro-commodities',
  openGraph: {
    title: 'AGRI-GEN | House of Organic Agri-Products',
    description: 'Connecting farmers, delivering organic excellence.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;600;700&family=Manrope:wght@400;600;700;800&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-ag-dark text-gray-900 font-display antialiased">{children}</body>
    </html>
  );
}
