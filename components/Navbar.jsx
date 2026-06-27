'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Menu, X, Phone } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('nav');
  const locale = useLocale();

  const prefix = locale === 'en' ? '' : `/${locale}`;
  const isHome = pathname === '/' || pathname === '/en' || pathname === '/hi' || pathname === '/mr';
  const isTransparent = isHome && !scrolled;

  const navLinks = [
    { label: t('home'), href: `${prefix}/` },
    { label: t('about'), href: `${prefix}/about` },
    { label: t('mission'), href: `${prefix}/mission-vision` },
    { label: t('products'), href: `${prefix}/products` },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100'
          : isHome 
            ? 'bg-gradient-to-b from-black/60 to-transparent border-transparent'
            : 'bg-white/50 backdrop-blur-sm border-b border-transparent'
      }`}
      id="main-nav"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-20' : 'h-24'}`}>
          {/* Logo */}
          <Link href={`${prefix}/`} className="flex items-center gap-3 group">
            <img
              src="/images/nav_logo.png"
              alt="AGRI-GEN Innovation Logo"
              className={`h-auto w-36 sm:w-40 object-contain transition-all duration-500 group-hover:scale-105`}
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== `${prefix}/` &&
                  pathname.startsWith(link.href));
              
              // Text color logic based on transparent mode
              let textColorClass = 'text-gray-600 hover:text-kisan-green';
              if (isTransparent) textColorClass = 'text-white/90 hover:text-white';
              if (isActive && !isTransparent) textColorClass = 'text-kisan-green';
              if (isActive && isTransparent) textColorClass = 'text-white';

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-[13px] uppercase tracking-wider font-semibold transition-all duration-300 relative group flex items-center px-1 py-1 ${textColorClass}`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-[2px] rounded-t-md transition-all duration-300 ${isTransparent ? 'bg-white' : 'bg-kisan-green'} ${
                      isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Right side: Language Toggle + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher variant="compact" isTransparent={isTransparent} />
            <Link
              href={`${prefix}/contact`}
              className="inline-flex items-center gap-2 bg-kisan-green hover:bg-[#328f2c] text-white font-semibold text-[14px] px-6 py-2.5 rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ml-2"
              id="nav-enquire-btn"
            >
              <Phone size={16} />
              {t('enquire')}
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2.5 rounded-xl transition-all duration-200 touch-target ${isTransparent ? 'text-white hover:bg-white/10' : 'text-gray-600 hover:text-kisan-green hover:bg-gray-50'}`}
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-kisan-green/10 bg-cream px-4 py-4 flex flex-col gap-1">
          {/* Language Switcher — First item in mobile menu */}
          <div className="mb-3 pb-3 border-b border-kisan-green/10">
            <LanguageSwitcher variant="compact" />
          </div>

          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== `${prefix}/` &&
                pathname.startsWith(link.href));
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className={`px-4 py-3.5 rounded-xl text-sm font-bold transition-all duration-200 touch-target ${
                  isActive
                    ? 'text-kisan-green bg-kisan-green/5'
                    : 'text-text-secondary hover:text-kisan-green hover:bg-cream-dark'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href={`${prefix}/contact`}
            onClick={handleLinkClick}
            className="mt-2 flex items-center justify-center gap-2 bg-kisan-green hover:bg-[#328f2c] text-white font-semibold text-[14px] px-6 py-3 rounded-full shadow-sm transition-all duration-300"
          >
            <Phone size={16} />
            {t('enquire')}
          </Link>
        </div>
      </div>
    </nav>
  );
}
