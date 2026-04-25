'use client';

import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal';

export default function NashikPride() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-earth-brown relative overflow-hidden" id="nashik-pride">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase bg-harvest-gold/20 text-harvest-gold rounded-full border border-harvest-gold/30">
              📍 Made in Nashik
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3">
              From the Heart of Nashik to Your Field
            </h2>
            <p className="font-devanagari text-harvest-gold text-lg mb-2">
              नाशिकच्या हृदयातून तुमच्या शेतापर्यंत
            </p>
            <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto">
              Our roots run deep in Maharashtra&apos;s agricultural heartland. Visit our facility, meet our team, and see where your products are made.
            </p>
          </div>
        </ScrollReveal>

        {/* Photo Grid — 3 Cards with Z-layer overlapping */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12" staggerDelay={0.15}>
          {/* Facility */}
          <StaggerItem>
            <div className="group relative rounded-kisan-lg overflow-hidden h-72 sm:h-80 shadow-2xl hover:-translate-y-3 transition-all duration-500">
              <img
                src="/images/facility.png"
                alt="Agri-Gen manufacturing facility in Jaulke, Nashik"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <span className="inline-block px-3 py-1 bg-harvest-gold text-earth-brown text-[10px] font-extrabold rounded-full mb-2 uppercase tracking-wider">
                  🏭 Manufacturing HQ
                </span>
                <h3 className="text-white font-headline font-bold text-lg sm:text-xl">
                  Jaulke, Dindori Facility
                </h3>
                <p className="text-white/60 text-xs mt-1">
                  GAT No.306, Old Janori Road, Nashik 422207
                </p>
              </div>
            </div>
          </StaggerItem>

          {/* Team */}
          <StaggerItem>
            <div className="group relative rounded-kisan-lg overflow-hidden h-72 sm:h-80 shadow-2xl md:-mt-6 hover:-translate-y-3 transition-all duration-500">
              <img
                src="/images/team.png"
                alt="Agri-Gen Innovation team members"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <span className="inline-block px-3 py-1 bg-kisan-green text-white text-[10px] font-extrabold rounded-full mb-2 uppercase tracking-wider">
                  👥 Our Team
                </span>
                <h3 className="text-white font-headline font-bold text-lg sm:text-xl">
                  50+ Dedicated Experts
                </h3>
                <p className="text-white/60 text-xs mt-1">
                  Agronomists, scientists, and field support specialists
                </p>
              </div>
            </div>
          </StaggerItem>

          {/* Field Visit */}
          <StaggerItem>
            <div className="group relative rounded-kisan-lg overflow-hidden h-72 sm:h-80 shadow-2xl hover:-translate-y-3 transition-all duration-500">
              <img
                src="/images/field_wide.png"
                alt="Agricultural fields near Nashik"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <span className="inline-block px-3 py-1 bg-field-green text-white text-[10px] font-extrabold rounded-full mb-2 uppercase tracking-wider">
                  🌿 Field Trials
                </span>
                <h3 className="text-white font-headline font-bold text-lg sm:text-xl">
                  Active in 50+ Districts
                </h3>
                <p className="text-white/60 text-xs mt-1">
                  Hands-on field support across Maharashtra and beyond
                </p>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Google Maps Embed */}
        <ScrollReveal delay={0.2}>
          <div className="rounded-kisan-xl overflow-hidden shadow-2xl border-4 border-white/10">
            <div className="bg-white/5 backdrop-blur-md p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span
                  className="material-symbols-outlined text-harvest-gold text-2xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  location_on
                </span>
                <div>
                  <h4 className="text-white font-bold text-sm sm:text-base">
                    Visit Our Facility
                  </h4>
                  <p className="text-white/50 text-xs">
                    GAT No.306, Old Janori Road, Jaulke, Nashik 422207
                  </p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=20.0665,73.8421"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-harvest-gold text-earth-brown font-bold text-xs px-5 py-2.5 rounded-xl hover:bg-harvest-gold-light transition-all touch-target"
              >
                <span className="material-symbols-outlined text-sm">directions</span>
                Get Directions
              </a>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.5!2d73.8421!3d20.0665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDA0JzAwLjAiTiA3M8KwNTAnMzEuNiJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="Agri-Gen Innovation Facility Location"
            />
          </div>
        </ScrollReveal>

        {/* Stats Bar */}
        <ScrollReveal delay={0.3}>
          <div className="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { number: '2026', label: 'Established', icon: 'calendar_today' },
              { number: '50+', label: 'Team Members', icon: 'groups' },
              { number: '500+', label: 'Product SKUs', icon: 'inventory_2' },
              { number: '50+', label: 'Districts Served', icon: 'map' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 backdrop-blur-md rounded-kisan p-4 sm:p-5 text-center border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <span
                  className="material-symbols-outlined text-harvest-gold text-2xl mb-2"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {stat.icon}
                </span>
                <p className="text-2xl sm:text-3xl font-black text-white">
                  {stat.number}
                </p>
                <p className="text-white/50 text-xs font-bold uppercase tracking-wider mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
