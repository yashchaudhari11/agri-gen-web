'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactSection() {
  const t = useTranslations('contact');

  const [form, setForm] = useState({ name: '', phone: '', email: '', inquiryType: 'Farmer Support', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm({ name: '', phone: '', email: '', inquiryType: 'Farmer Support', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong. Please call us directly.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please call us directly at 73852 66728.');
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white border-t border-gray-100" id="contact">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <p className="text-gray-400 text-[10px] font-bold tracking-[0.35em] uppercase mb-5">
            {t('advisoryService')}
          </p>
          <h2 className="font-headline font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight mb-3">
            {t('title')}
          </h2>
          <p className="font-devanagari text-gray-400 text-lg">{t('titleLocal')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left: Contact Info */}
          <div className="flex flex-col gap-6">

            {/* Address */}
            <div className="flex gap-4 items-start p-5 rounded-2xl border border-gray-100">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#3DAA3515' }}
              >
                <span className="material-symbols-outlined text-xl" style={{ color: '#3DAA35', fontVariationSettings: "'FILL' 1" }}>
                  location_on
                </span>
              </div>
              <div>
                <h4 className="font-headline font-bold text-sm text-gray-900 mb-1">{t('hq')}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  GAT No.306, Old Janori Road,<br />
                  Near Hanuman Mandir, Jaulke,<br />
                  Tal. Dindori, Dist. Nashik 422207
                </p>
                <p className="font-devanagari text-xs mt-1" style={{ color: '#3DAA35' }}>
                  {t('addressLocal')}
                </p>
              </div>
            </div>

            {/* Primary Phone */}
            <div className="flex gap-4 items-start p-5 rounded-2xl border border-gray-100">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#E8A32015' }}
              >
                <span className="material-symbols-outlined text-xl" style={{ color: '#E8A320', fontVariationSettings: "'FILL' 1" }}>
                  call
                </span>
              </div>
              <div>
                <h4 className="font-headline font-bold text-sm text-gray-900 mb-2">{t('phone')}</h4>
                <a
                  href="tel:7385266728"
                  className="block text-2xl font-extrabold mb-1 transition-colors"
                  style={{ color: '#3DAA35' }}
                >
                  73852 66728
                </a>
                <a
                  href="tel:9921616828"
                  className="block text-base font-bold text-gray-400 hover:text-gray-600 transition-colors"
                >
                  99216 16828
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/917385266728?text=Hello%20Agri-Gen%2C%20I%20need%20information"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 items-center p-5 rounded-2xl border border-[#25D366]/25 bg-[#25D366]/5 hover:bg-[#25D366]/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#25D366' }}>
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <h4 className="font-headline font-bold text-sm text-gray-900 group-hover:text-[#25D366] transition-colors">
                  {t('whatsapp')}
                </h4>
                <p className="text-gray-400 text-xs">Tap to chat — 73852 66728</p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:agrigeninnovation@gmail.com"
              className="flex gap-4 items-center p-5 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#1A56B415' }}
              >
                <span className="material-symbols-outlined text-xl" style={{ color: '#1A56B4', fontVariationSettings: "'FILL' 1" }}>
                  mail
                </span>
              </div>
              <div>
                <h4 className="font-headline font-bold text-sm text-gray-900 mb-0.5">Email Us</h4>
                <p className="text-gray-400 text-sm">agrigeninnovation@gmail.com</p>
              </div>
            </a>

          </div>

          {/* Right: Form */}
          <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 sm:p-8 lg:p-10">

            {status === 'success' ? (
              <div className="text-center py-16 flex flex-col items-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: '#3DAA3515' }}
                >
                  <span className="material-symbols-outlined text-3xl" style={{ color: '#3DAA35', fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                </div>
                <h3 className="font-headline text-xl font-bold text-gray-900 mb-2">
                  Thank You! / धन्यवाद!
                </h3>
                <p className="text-gray-500 text-sm">
                  We will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 px-6 py-2 text-xs font-bold rounded-xl border transition-colors"
                  style={{ borderColor: '#3DAA35', color: '#3DAA35' }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                    {t('formName')} *
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-xl p-3.5 text-gray-800 text-sm placeholder-gray-300 focus:outline-none focus:border-[#3DAA35] transition-colors"
                    type="text"
                    placeholder="Your full name"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                    {t('formPhone')} *
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-xl p-3.5 text-gray-800 text-sm placeholder-gray-300 focus:outline-none focus:border-[#3DAA35] transition-colors"
                    type="tel"
                    placeholder="10-digit mobile number"
                    required
                  />
                </div>

                {/* Email (optional) */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                    Email <span className="text-gray-300 normal-case font-normal">(optional — for auto-reply)</span>
                  </label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-xl p-3.5 text-gray-800 text-sm placeholder-gray-300 focus:outline-none focus:border-[#3DAA35] transition-colors"
                    type="email"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Inquiry Type */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                    {t('formInquiry')}
                  </label>
                  <select
                    name="inquiryType"
                    value={form.inquiryType}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-xl p-3.5 text-gray-800 text-sm focus:outline-none focus:border-[#3DAA35] transition-colors"
                  >
                    <option>Farmer Support</option>
                    <option>B2B Bulk Supply</option>
                    <option>Distributorship Inquiry</option>
                    <option>Export Inquiry</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                    {t('formMessage')}
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-xl p-3.5 text-gray-800 text-sm placeholder-gray-300 focus:outline-none focus:border-[#3DAA35] transition-colors resize-none"
                    rows="3"
                    placeholder="Tell us about your crop, land size, or product interest..."
                  />
                </div>

                {/* Error */}
                {status === 'error' && (
                  <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-50 border border-red-100 text-red-600 text-xs">
                    <span className="material-symbols-outlined text-sm">error</span>
                    {errorMsg}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 rounded-xl font-bold text-base text-white transition-all duration-200 disabled:opacity-70 flex items-center justify-center gap-2"
                  style={{ backgroundColor: '#3DAA35' }}
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>📩 {t('formSubmit')}</>
                  )}
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
