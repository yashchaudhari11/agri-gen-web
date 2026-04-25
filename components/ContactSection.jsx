'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const t = useTranslations('contact');
  const locale = useLocale();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-warm-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase bg-kisan-green/10 text-kisan-green rounded-full border border-kisan-green/20">
            📞 {t('advisoryService')}
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-pure-black mb-3">
            {t('title')}
          </h2>
          <p className="font-devanagari text-kisan-green text-lg">{t('titleLocal')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Contact Info */}
          <div>
            <p className="text-text-secondary text-base sm:text-lg mb-10">
              {t('subtitle')}
            </p>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4 sm:gap-6 items-start bg-cream rounded-kisan p-5 border-2 border-kisan-green/10">
                <div className="w-14 h-14 rounded-2xl bg-kisan-green flex items-center justify-center flex-shrink-0 shadow-3d">
                  <span className="material-symbols-outlined text-white text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    location_on
                  </span>
                </div>
                <div>
                  <h4 className="font-headline font-bold text-base sm:text-lg mb-1 text-pure-black">
                    {t('hq')}
                  </h4>
                  <p className="text-text-secondary leading-relaxed text-sm sm:text-base font-medium">
                    GAT No.306, Old Janori Road,<br />
                    Near Hanuman Mandir, Jaulke,<br />
                    Tal. Dindori, Dist. Nashik 422207
                  </p>
                  <p className="font-devanagari text-kisan-green text-xs mt-2">
                    {t('addressLocal')}
                  </p>
                </div>
              </div>

              {/* Phone Numbers — Large & Prominent */}
              <div className="flex gap-4 sm:gap-6 items-start bg-cream rounded-kisan p-5 border-2 border-kisan-green/10">
                <div className="w-14 h-14 rounded-2xl bg-harvest-gold flex items-center justify-center flex-shrink-0 shadow-3d-gold">
                  <span className="material-symbols-outlined text-earth-brown text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    call
                  </span>
                </div>
                <div>
                  <h4 className="font-headline font-bold text-base sm:text-lg mb-2 text-pure-black">
                    {t('phone')}
                  </h4>
                  <a href="tel:+919876543210" className="block text-xl sm:text-2xl font-black text-kisan-green hover:text-kisan-green-dark transition-colors mb-1">
                    +91 98765 43210
                  </a>
                  <a href="tel:+912532304500" className="block text-lg sm:text-xl font-bold text-text-secondary hover:text-kisan-green transition-colors">
                    +91 253 230 4500
                  </a>
                </div>
              </div>

              {/* WhatsApp — Most Prominent */}
              <a
                href="https://wa.me/919876543210?text=Hello%20Agri-Gen%2C%20I%20need%20information"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 items-center bg-whatsapp/10 rounded-kisan p-5 border-2 border-whatsapp/20 hover:bg-whatsapp/20 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-whatsapp flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-headline font-bold text-lg text-pure-black group-hover:text-whatsapp-dark transition-colors">
                    {t('whatsapp')}
                  </h4>
                  <p className="text-text-muted text-sm">Tap to chat instantly</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Simple Form */}
          <div className="bg-cream p-6 sm:p-8 lg:p-10 rounded-kisan-xl shadow-warm border-2 border-kisan-green/5">
            {submitted ? (
              <div className="text-center py-16">
                <span className="material-symbols-outlined text-kisan-green text-6xl mb-4">
                  check_circle
                </span>
                <h3 className="font-headline text-2xl font-bold text-pure-black mb-2">
                  Thank you! / धन्यवाद!
                </h3>
                <p className="text-text-secondary">We will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-muted">
                    {t('formName')}
                  </label>
                  <input
                    className="w-full bg-white border-2 border-kisan-green/10 rounded-2xl p-4 text-text-primary focus:ring-2 focus:ring-kisan-green/30 focus:border-kisan-green/30 transition-all text-base touch-target"
                    type="text"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-muted">
                    {t('formPhone')}
                  </label>
                  <input
                    className="w-full bg-white border-2 border-kisan-green/10 rounded-2xl p-4 text-text-primary focus:ring-2 focus:ring-kisan-green/30 focus:border-kisan-green/30 transition-all text-base touch-target"
                    type="tel"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-muted">
                    {t('formInquiry')}
                  </label>
                  <select className="w-full bg-white border-2 border-kisan-green/10 rounded-2xl p-4 text-text-primary focus:ring-2 focus:ring-kisan-green/30 transition-all text-base touch-target">
                    <option>B2B Bulk Supply</option>
                    <option>Distributorship Inquiry</option>
                    <option>Farmer Support</option>
                    <option>Export Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-muted">
                    {t('formMessage')}
                  </label>
                  <textarea
                    className="w-full bg-white border-2 border-kisan-green/10 rounded-2xl p-4 text-text-primary focus:ring-2 focus:ring-kisan-green/30 transition-all text-base touch-target"
                    rows="3"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 sm:py-5 bg-kisan-green text-white rounded-2xl font-headline font-bold text-base sm:text-lg btn-3d shadow-3d hover:shadow-3d-hover transition-all touch-target"
                >
                  📩 {t('formSubmit')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
