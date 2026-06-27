'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

const localeConfig = [
  { code: 'en', label: 'English', flag: '🌐' },
  { code: 'hi', label: 'हिंदी', flag: '🇮🇳' },
  { code: 'mr', label: 'मराठी', flag: '🇮🇳' },
];

export default function LanguageSwitcher({ variant = 'default', isTransparent = false }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale) => {
    // Remove current locale prefix and add new one
    const segments = pathname.split('/');
    const locales = ['en', 'hi', 'mr'];
    if (locales.includes(segments[1])) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    const newPath = segments.join('/') || '/';
    router.push(newPath);
  };

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-1 ${isTransparent ? 'bg-white/10 p-1 rounded-2xl backdrop-blur-sm' : ''}`} id="language-switcher-compact">
        {localeConfig.map((l) => {
          let btnClass = 'bg-cream text-gray-500 hover:bg-cream-dark'; // default inactive
          
          if (isTransparent) {
            btnClass = locale === l.code 
              ? 'bg-white text-gray-900 shadow-sm' 
              : 'bg-transparent text-white/90 hover:text-white hover:bg-white/20';
          } else {
            btnClass = locale === l.code
              ? 'bg-kisan-green text-white shadow-md'
              : 'bg-transparent text-gray-500 hover:bg-gray-100 hover:text-gray-900';
          }

          return (
            <button
              key={l.code}
              onClick={() => switchLocale(l.code)}
              className={`px-3 py-2 rounded-xl text-[13px] font-semibold transition-all duration-200 touch-target ${btnClass}`}
              aria-label={`Switch to ${l.label}`}
            >
              {l.label}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div
      className="flex items-center gap-2 bg-cream rounded-2xl p-1.5"
      id="language-switcher"
    >
      {localeConfig.map((l) => (
        <button
          key={l.code}
          onClick={() => switchLocale(l.code)}
          className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 touch-target ${
            locale === l.code
              ? 'bg-kisan-green text-white shadow-lg shadow-kisan-green/25'
              : 'text-text-secondary hover:bg-cream-dark hover:text-text-primary'
          }`}
          aria-label={`Switch to ${l.label}`}
        >
          <span className="text-base">{l.flag}</span>
          <span>{l.label}</span>
        </button>
      ))}
    </div>
  );
}
