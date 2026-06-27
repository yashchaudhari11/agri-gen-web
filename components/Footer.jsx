'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';

const WA_ICON = (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Footer() {
  const locale = useLocale();
  const prefix = locale === 'en' ? '' : `/${locale}`;

  return (
    <footer className="w-full rounded-t-[40px] sm:rounded-t-[60px] mt-8 sm:mt-12 bg-[#0F1F12] overflow-hidden" id="footer">

      {/* ── Top separator line ── */}
      <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #3DAA35, #1A56B4, #E8A320)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">

        {/* ── 4-column grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-12">

          {/* ── Column 1: Brand Logo + Address ── */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="mb-4">
              <Image
                src="/images/nav_logo.png"
                alt="Agri-Gen Innovation"
                width={180}
                height={60}
                className="h-12 w-auto object-contain brightness-[1.1]"
                unoptimized
              />
            </div>
            <p className="text-white/50 text-xs italic mb-1">"Quality in Every Drop."</p>
            <p className="text-white/40 text-[11px] mb-5">Advance Biosolution for Sustainable Farming</p>

            {/* Address */}
            <div className="flex gap-2.5 items-start">
              <span className="material-symbols-outlined text-[#3DAA35] text-lg flex-shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              <p className="text-white/60 text-xs leading-relaxed">
                GAT No.306, Old Janori Road,<br />
                Near Hanuman Mandir, Jaulke,<br />
                Tal. Dindori, Dist. Nashik 422207
                <span className="block font-devanagari text-white/35 text-[11px] mt-1">ता. दिंडोरी, जि. नाशिक</span>
              </p>
            </div>

            {/* Social icons */}
            <div className="flex gap-3 mt-5">
              {[
                { label: 'YouTube', icon: 'M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.53V6.78a4.85 4.85 0 01-1.02-.09z', href: '#' },
                { label: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z', href: '#' },
                { label: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', href: '#' },
              ].map(s => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  className="w-8 h-8 rounded-full bg-white/8 hover:bg-[#3DAA35]/30 flex items-center justify-center transition-colors duration-200">
                  <svg className="w-3.5 h-3.5 text-white/60 hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* ── Column 2: Quick Links ── */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#3DAA35] rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: `${prefix}/` },
                { label: 'About Us', href: `${prefix}/about` },
                { label: 'Mission & Vision', href: `${prefix}/mission-vision` },
                { label: 'Our Products', href: `${prefix}/products` },
                { label: 'Contact Us', href: `${prefix}/contact` },
              ].map(l => (
                <li key={l.label}>
                  <Link href={l.href}
                    className="text-white/55 hover:text-[#3DAA35] text-sm transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#3DAA35] transition-colors flex-shrink-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Downloads & Resources ── */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#1A56B4] rounded-full" />
              Resources
            </h4>
            <ul className="space-y-3 mb-6">
              {[
                { label: 'Product Brochure', file: '/documents/Brochure.pdf', icon: 'description' },
                { label: 'B2B Marketing Kit', file: '/documents/B2B Marketing.pdf', icon: 'business_center' },
              ].map(d => (
                <li key={d.label}>
                  <a
                    href={d.file}
                    download
                    className="flex items-center gap-2.5 text-white/55 hover:text-[#1A56B4] text-sm transition-colors duration-200 group"
                  >
                    <span className="material-symbols-outlined text-[#1A56B4]/70 text-base group-hover:text-[#1A56B4] transition-colors flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {d.icon}
                    </span>
                    <span>{d.label}</span>
                    <span className="material-symbols-outlined text-xs opacity-40 group-hover:opacity-100 transition-opacity ml-auto">download</span>
                  </a>
                </li>
              ))}
            </ul>

            <h5 className="text-white/40 text-[10px] uppercase tracking-widest mb-3">Legal</h5>
            <ul className="space-y-2">
              {[
                { label: 'Privacy Policy', href: '#' },
                { label: 'Terms of Use', href: '#' },
                { label: 'Disclaimer', href: '#' },
              ].map(l => (
                <li key={l.label}>
                  <Link href={l.href}
                    className="text-white/40 hover:text-white/70 text-xs transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 4: Contact ── */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#E8A320] rounded-full" />
              Contact Us
            </h4>

            {/* Primary SPOC */}
            <p className="text-white/35 text-[9px] uppercase tracking-widest mb-1">Primary (SPOC)</p>
            <a href="tel:7385266728"
              className="flex items-center gap-2 text-white hover:text-[#E8A320] transition-colors group mb-4">
              <span className="material-symbols-outlined text-[#E8A320] text-lg flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
              <span className="text-xl font-black tracking-wide">73852 66728</span>
            </a>

            {/* Secondary */}
            <p className="text-white/35 text-[9px] uppercase tracking-widest mb-1">Secondary</p>
            <a href="tel:9921616828"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group mb-5">
              <span className="material-symbols-outlined text-white/40 text-lg flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
              <span className="text-lg font-bold tracking-wide">99216 16828</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/917385266728?text=Hello%20Agri-Gen%20Innovation%2C%20I%20want%20to%20know%20more%20about%20your%20products"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/25 text-[#25D366] px-4 py-2.5 rounded-xl transition-all duration-200 text-sm font-bold"
            >
              {WA_ICON}
              WhatsApp: 73852 66728
            </a>

            {/* Email */}
            <div className="mt-4">
              <a href="mailto:agrigeninnovation@gmail.com"
                className="flex items-center gap-2 text-white/45 hover:text-white text-xs transition-colors">
                <span className="material-symbols-outlined text-sm text-white/40" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                agrigeninnovation@gmail.com
              </a>
            </div>
          </div>

        </div>

        {/* ── Bottom Bar ── */}
        <div className="pt-6 border-t border-white/8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">

            {/* Left — ISO badge + copyright */}
            <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A56B4]/15 border border-[#1A56B4]/25 text-[#1A56B4]/80 text-[10px] font-bold">
                <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                ISO 9001:2015 Certified
              </span>
              <p className="text-white/30 text-xs">
                © {new Date().getFullYear()} Agri-Gen Innovation. All rights reserved.
              </p>
            </div>

            {/* Right — Legal links */}
            <div className="flex items-center gap-4">
              {['Privacy Policy', 'Terms', 'Disclaimer'].map((l, i) => (
                <a key={l} href="#" className="text-white/30 hover:text-white/60 text-[11px] transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
