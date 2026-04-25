'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ShieldCheck, Factory, Zap } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { products } from '@/lib/products-data';

const bestsellerIds = [1, 3, 6, 8];
const highYieldIds = [4, 7, 10];

export default function ProductDetails() {
  const { id } = useParams();
  const t = useTranslations('products');
  const locale = useLocale();
  const prefix = locale === 'en' ? '' : `/${locale}`;
  const product = products.find((p) => p.id === parseInt(id));

  const isBestseller = product && bestsellerIds.includes(product.id);
  const isHighYield = product && highYieldIds.includes(product.id);

  if (!product) {
    return (
      <main className="min-h-screen bg-warm-white">
        <Navbar />
        <div className="pt-28 pb-20 text-center">
          <h1 className="text-2xl font-bold text-pure-black">
            Product not found
          </h1>
          <Link
            href={`${prefix}/products`}
            className="text-kisan-green hover:underline mt-4 inline-block font-bold"
          >
            ← Back to Products
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-warm-white">
      <Navbar />

      <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Back Link */}
        <Link
          href={`${prefix}/products`}
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-kisan-green transition-colors mb-8 group font-bold touch-target"
        >
          <ChevronLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Product Image */}
          <div className="relative aspect-square sm:aspect-video lg:aspect-square rounded-kisan-xl overflow-hidden bg-cream border-2 border-kisan-green/10 shadow-kisan-lg">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute top-6 left-6 flex flex-col gap-2">
              <span className="bg-kisan-green/90 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
                {product.category}
              </span>
              {isBestseller && (
                <span className="badge-bestseller text-sm px-4 py-2">
                  ⭐ {t('bestseller')}
                </span>
              )}
              {isHighYield && (
                <span className="badge-highyield text-sm px-4 py-2">
                  📈 {t('highYield')}
                </span>
              )}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="font-headline font-extrabold text-3xl sm:text-4xl lg:text-5xl text-pure-black leading-tight mb-3">
                {product.name}
              </h1>
              <div className="text-2xl sm:text-3xl font-black text-kisan-green">
                {product.price}
              </div>
            </div>

            <div>
              <p className="text-lg text-text-secondary leading-relaxed italic mb-4">
                {product.description}
              </p>
              <div className="h-px bg-kisan-green/10 w-full my-6" />
              <p className="text-text-primary leading-relaxed font-medium text-base">
                {product.fullDescription}
              </p>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-xs font-bold text-pure-black uppercase tracking-widest mb-4">
                📋 Technical Specifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.specifications.map((spec, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-kisan-green/5 border border-kisan-green/10 p-3 rounded-2xl"
                  >
                    <span className="material-symbols-outlined text-kisan-green text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                      check_circle
                    </span>
                    <span className="text-sm text-text-primary font-medium">
                      {spec}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 py-4">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-14 h-14 rounded-2xl bg-kisan-green flex items-center justify-center text-white shadow-3d">
                  <ShieldCheck size={22} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted">
                  प्रमाणित सेंद्रिय
                </span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-14 h-14 rounded-2xl bg-harvest-gold flex items-center justify-center text-earth-brown shadow-3d-gold">
                  <Factory size={22} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted">
                  Quality Tested
                </span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-14 h-14 rounded-2xl bg-field-green flex items-center justify-center text-white shadow-lg">
                  <Zap size={22} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted">
                  Direct Sourcing
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 pt-2 mt-auto">
              <Link
                href={`${prefix}/contact`}
                className="flex-1 min-w-[200px] flex items-center justify-center gap-3 bg-kisan-green text-white font-bold text-base px-8 py-4 rounded-2xl btn-3d shadow-3d hover:shadow-3d-hover transition-all duration-200 touch-target"
              >
                📞 {t('enquire')}
              </Link>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[200px] flex items-center justify-center gap-3 bg-whatsapp text-white font-bold text-base px-8 py-4 rounded-2xl hover:bg-whatsapp-dark transition-all duration-200 shadow-lg touch-target"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
