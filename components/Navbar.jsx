'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('nav');
  const locale = useLocale();

  const prefix = locale === 'en' ? '' : `/${locale}`;

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-xl shadow-lg shadow-earth-brown/5'
          : 'bg-cream/90 backdrop-blur-md'
      } border-b border-kisan-green/10`}
      id="main-nav"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`${prefix}/`} className="flex items-center gap-3 group">
            <img
              src="/images/nav_logo.png"
              alt="AGRI-GEN Innovation Logo"
              className="h-auto w-36 sm:w-40 object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== `${prefix}/` &&
                  pathname.startsWith(link.href));
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-bold transition-colors duration-200 relative group touch-target flex items-center ${
                    isActive
                      ? 'text-kisan-green'
                      : 'text-text-secondary hover:text-kisan-green'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-kisan-green transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Right side: Language Toggle + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher variant="compact" />
            <Link
              href={`${prefix}/contact`}
              className="inline-flex items-center gap-2 bg-kisan-green text-white font-bold text-sm px-5 py-3 rounded-2xl btn-3d shadow-3d hover:shadow-3d-hover transition-all"
              id="nav-enquire-btn"
            >
              <span className="material-symbols-outlined text-lg">
                call
              </span>
              {t('enquire')}
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 rounded-xl text-text-secondary hover:text-kisan-green hover:bg-cream transition-all duration-200 touch-target"
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
            className="mt-2 bg-kisan-green text-white font-bold text-sm px-5 py-3.5 rounded-2xl text-center btn-3d shadow-3d transition-all duration-200 touch-target"
          >
            📞 {t('enquire')}
          </Link>
        </div>
      </div>
    </nav>
  );
}
