'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ShoppingBag, CheckCircle2, Factory, ShieldCheck, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { products } from '@/lib/products-data';

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-16 pb-20 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
          <Link href="/products" className="text-ag-green hover:underline mt-4 inline-block">
            Back to Products
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Breadcrumb / Back Link */}
        <Link 
          href="/products" 
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-ag-green transition-colors mb-8 group"
        >
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Product Image */}
          <div className="relative aspect-square sm:aspect-video lg:aspect-square rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-xl shadow-gray-200/50">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute top-6 left-6">
              <span className="bg-white/90 backdrop-blur-md border border-ag-green/30 text-ag-green text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
                {product.category}
              </span>
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="font-display font-black text-4xl sm:text-5xl text-gray-900 leading-tight mb-4">
                {product.name}
              </h1>
              <div className="text-2xl font-bold text-ag-green">
                {product.price}
              </div>
            </div>

            <div className="prose prose-slate">
              <p className="text-lg text-gray-600 leading-relaxed italic">
                {product.description}
              </p>
              <div className="h-px bg-gray-200 w-full my-8" />
              <p className="text-gray-700 leading-relaxed font-medium">
                {product.fullDescription}
              </p>
            </div>

            {/* Specifications Grid */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">
                Technical Specifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.specifications.map((spec, i) => (
                  <div key={i} className="flex items-center gap-3 bg-ag-green/5 border border-ag-green/10 p-3 rounded-xl">
                    <CheckCircle2 size={16} className="text-ag-green flex-shrink-0" />
                    <span className="text-sm text-gray-700 font-medium">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 py-4">
                <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white">
                        <ShieldCheck size={20} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-tighter text-gray-500">Certified Organic</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white">
                        <Factory size={20} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-tighter text-gray-500">Quality Tested</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white">
                        <Zap size={20} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-tighter text-gray-500">Direct Sourcing</span>
                </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 pt-4 mt-auto">
              <Link
                href="/contact"
                className="flex-1 min-w-[200px] flex items-center justify-center gap-3 bg-ag-green text-gray-900 font-bold text-base px-8 py-4 rounded-2xl hover:bg-green-300 hover:shadow-2xl hover:shadow-ag-green/40 transition-all duration-300"
              >
                <ShoppingBag size={20} />
                Bulk Enquiry
              </Link>
              <button className="flex-1 min-w-[200px] border-2 border-slate-900 text-slate-900 font-bold text-base px-8 py-4 rounded-2xl hover:bg-slate-900 hover:text-white transition-all duration-300">
                Download Specs Sheet
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
