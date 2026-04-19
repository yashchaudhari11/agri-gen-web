'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@agrigen.in',
    href: 'mailto:info@agrigen.in',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Plot 14, Agri Export Zone, Coimbatore, Tamil Nadu — 641 001',
    href: null,
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon – Sat: 9:00 AM – 6:30 PM IST',
    href: null,
  },
];

const initialForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  product: '',
  message: '',
};

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setForm(initialForm);
      setSubmitted(false);
    }, 4000);
  };

  const inputClass =
    'w-full bg-ag-dark border border-gray-200 text-gray-900 placeholder-gray-400 text-sm px-4 py-3.5 rounded-xl focus:outline-none focus:border-ag-green/60 focus:shadow-lg focus:shadow-ag-green/10 transition-all duration-200';

  return (
    <section id="contact"className="py-20 sm:py-24 lg:py-32 bg-white" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 sm:mb-8">Get In Touch</h2>
              <p className="text-base sm:text-lg lg:text-xl text-on-surface-variant mb-10 sm:mb-12">
                Connect with our experts for bulk inquiries, distribution partnerships, or technical product support.
              </p>

              <div className="space-y-6 sm:space-y-8">
                <div className="flex gap-4 sm:gap-6 items-start">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-surface-container flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-base sm:text-lg mb-1">Corporate Headquarters</h4>
                    <p className="text-on-surface-variant leading-relaxed text-sm sm:text-base">
                      GAT No.306, Old Janori Road, Jaulke,<br />
                      Dist. Nashik 422207, Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 sm:gap-6 items-start">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-surface-container flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">mail</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-base sm:text-lg mb-1">Email Inquiry</h4>
                    <p className="text-on-surface-variant text-sm sm:text-base break-words">
                      info@agri-gen.innovation.com<br />
                      support@agri-gen.innovation.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 sm:gap-6 items-start">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-surface-container flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">phone_in_talk</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-base sm:text-lg mb-1">Contact Numbers</h4>
                    <p className="text-on-surface-variant text-sm sm:text-base">
                      +91 253 230 4500<br />
                      +91 98220 00000
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 sm:p-8 lg:p-10 rounded-[28px] sm:rounded-[40px] shadow-2xl shadow-primary/5 border border-outline-variant/10">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-bold uppercase tracking-widest text-on-surface-variant">Full Name</label>
                    <input className="w-full bg-surface-variant/50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all" type="text" />
                  </div>

                  <div class="space-y-2">
                    <label className="text-xs sm:text-sm font-bold uppercase tracking-widest text-on-surface-variant">Phone Number</label>
                    <input className="w-full bg-surface-variant/50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all" type="tel" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-bold uppercase tracking-widest text-on-surface-variant">Email Address</label>
                  <input className="w-full bg-surface-variant/50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all" type="email" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-bold uppercase tracking-widest text-on-surface-variant">Inquiry Type</label>
                  <select className="w-full bg-surface-variant/50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all">
                    <option>B2B Bulk Supply</option>
                    <option>Distributorship Inquiry</option>
                    <option>Farmer Support</option>
                    <option>Export Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-bold uppercase tracking-widest text-on-surface-variant">Message</label>
                  <textarea className="w-full bg-surface-variant/50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all" rows="4"></textarea>
                </div>

                <button className="w-full py-4 sm:py-5 bg-primary text-on-primary rounded-2xl font-headline font-bold text-base sm:text-lg shadow-lg shadow-primary/25 hover:bg-primary-container transition-all">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

  );
}
