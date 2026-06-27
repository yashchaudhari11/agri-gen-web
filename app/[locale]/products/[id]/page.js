import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { products } from '@/lib/products-data';
import { notFound } from 'next/navigation';

const CATEGORY_COLORS = {
  'Biostimulants':          '#3DAA35',
  'Soil Conditioners':      '#E8A320',
  'Micronutrients':         '#1A56B4',
  'Plant Growth Promoters': '#8B5CF6',
  'B2B / Bulk Supply':      '#0F2414',
};

export function generateStaticParams() {
  return products.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }) {
  const product = products.find((p) => String(p.id) === params.id);
  if (!product) return { title: 'Product Not Found' };
  return {
    title: `${product.nameShort || product.name} | Agri-Gen Innovation`,
    description: product.description,
  };
}

export default function ProductDetailPage({ params }) {
  const product = products.find((p) => String(p.id) === params.id);
  if (!product) notFound();

  const accent = CATEGORY_COLORS[product.category] || '#3DAA35';
  const whatsappMsg = encodeURIComponent(
    `Hello Agri-Gen, I am interested in ${product.nameShort || product.name}. Please share more details.`
  );

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20">

        {/* ── Breadcrumb ── */}
        <div className="border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-4 flex items-center gap-2 text-xs text-gray-400">
            <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-gray-600 transition-colors">Products</Link>
            <span>/</span>
            <span className="text-gray-700 font-medium truncate max-w-[200px]">
              {product.nameShort || product.name}
            </span>
          </div>
        </div>

        {/* ── Main Content ── */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12 sm:py-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left — Image */}
            <div className="lg:sticky lg:top-28">
              <div className="relative rounded-2xl overflow-hidden bg-gray-50 aspect-[4/3]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6"
                  unoptimized
                  priority
                />
                {/* Origin tag */}
                {product.origin && (
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-black/60 text-white backdrop-blur-sm">
                      📍 {product.origin}
                    </span>
                  </div>
                )}
              </div>

              {/* Pack sizes */}
              {product.packSizes?.length > 0 && (
                <div className="mt-4">
                  <p className="text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Available Pack Sizes</p>
                  <div className="flex flex-wrap gap-2">
                    {product.packSizes.map((ps, i) => (
                      <span key={i} className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-600">
                        {ps}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right — Info */}
            <div className="flex flex-col gap-8">

              {/* Header */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider"
                    style={{ backgroundColor: accent + '18', color: accent }}
                  >
                    {product.category}
                  </span>
                  {product.badge && (
                    <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-[#E8A320]/15 text-[#E8A320] border border-[#E8A320]/30">
                      {product.badge}
                    </span>
                  )}
                </div>

                <h1 className="font-headline font-extrabold text-2xl sm:text-3xl lg:text-4xl text-gray-900 leading-tight mb-3">
                  {product.name}
                </h1>

                {product.tagline && (
                  <p className="text-gray-400 text-sm italic leading-relaxed">
                    &ldquo;{product.tagline}&rdquo;
                  </p>
                )}
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-100" />

              {/* Description */}
              <div>
                <p className="text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-3">About This Product</p>
                <p className="text-gray-600 text-base leading-relaxed">
                  {product.fullDescription || product.description}
                </p>
              </div>

              {/* Specifications */}
              {product.specifications?.length > 0 && (
                <div>
                  <p className="text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Specifications</p>
                  <div className="grid grid-cols-1 gap-2">
                    {product.specifications.map((spec, i) => {
                      const [key, ...rest] = spec.split(':');
                      const val = rest.join(':').trim();
                      return (
                        <div key={i} className="flex items-start gap-3 py-2.5 border-b border-gray-50 last:border-0">
                          <span className="text-gray-400 text-xs font-semibold flex-shrink-0 min-w-[140px]">{key}</span>
                          <span className="text-gray-700 text-xs font-bold">{val || spec}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Benefits */}
              {product.benefits?.length > 0 && (
                <div>
                  <p className="text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Key Benefits</p>
                  <div className="flex flex-col gap-2">
                    {product.benefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: accent + '20' }}
                        >
                          <span className="material-symbols-outlined text-[12px]" style={{ color: accent, fontVariationSettings: "'FILL' 1" }}>
                            check
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">{b}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Crops + Dosage */}
              <div className="grid sm:grid-cols-2 gap-4">
                {product.crops && (
                  <div className="rounded-xl border border-gray-100 p-4">
                    <p className="text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Suitable Crops</p>
                    <p className="text-gray-600 text-xs leading-relaxed">{product.crops}</p>
                  </div>
                )}
                {product.dosage && (
                  <div className="rounded-xl border border-gray-100 p-4">
                    <p className="text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Dosage Guide</p>
                    <p className="text-gray-600 text-xs leading-relaxed">{product.dosage}</p>
                  </div>
                )}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`https://wa.me/917385266728?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm transition-all duration-200 text-white"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Enquiry
                </a>
                <a
                  href="tel:7385266728"
                  className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm border transition-all duration-200"
                  style={{ borderColor: accent, color: accent }}
                >
                  <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                  Call: 73852 66728
                </a>
              </div>

              {/* Back link */}
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-gray-400 hover:text-gray-600 text-xs font-medium transition-colors duration-200"
              >
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                Back to all products
              </Link>

            </div>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
