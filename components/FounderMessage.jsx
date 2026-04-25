'use client';

import ScrollReveal from './ScrollReveal';

export default function FounderMessage() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-warm-white" id="founder-message">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative bg-white rounded-kisan-xl shadow-kisan-lg overflow-hidden border-2 border-kisan-green/10">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-kisan-green/5 rounded-full -mr-36 -mt-36 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-harvest-gold/5 rounded-full -ml-24 -mb-24 blur-3xl" />

            <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-0 relative z-10">
              {/* Founder Photo */}
              <div className="relative h-72 sm:h-80 lg:h-full min-h-[320px]">
                <img
                  src="/images/founder.png"
                  alt="Founder of Agri-Gen Innovation"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-transparent" />
                <div className="absolute bottom-4 left-4 lg:hidden">
                  <h3 className="text-white font-headline font-bold text-lg">
                    Message from the Founder
                  </h3>
                </div>
              </div>

              {/* Message Content */}
              <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                {/* Header */}
                <div className="hidden lg:block mb-6">
                  <span className="inline-block px-4 py-1.5 mb-3 text-xs font-bold tracking-widest uppercase bg-kisan-green/10 text-kisan-green rounded-full border border-kisan-green/20">
                    💬 Message from the Founder
                  </span>
                </div>

                {/* Quote Mark */}
                <div className="text-6xl sm:text-7xl text-kisan-green/15 font-serif leading-none mb-2">
                  &ldquo;
                </div>

                {/* Message */}
                <blockquote className="text-text-primary text-base sm:text-lg lg:text-xl leading-relaxed mb-6 -mt-6 sm:-mt-8 pl-2">
                  When I started Agri-Gen Innovation, my vision was simple — to give every farmer access to the same quality organic inputs that were previously reserved for large-scale operations. Agriculture is not just our business; it is our{' '}
                  <em className="text-kisan-green font-bold not-italic">dharma</em>.
                </blockquote>

                <blockquote className="text-text-secondary text-sm sm:text-base leading-relaxed mb-8 pl-2">
                  We believe that the future of Indian agriculture lies in the perfect balance of traditional wisdom and modern science. Every product we develop is field-tested by real farmers before it reaches your hands. That&apos;s our promise — verified results, not empty promises.
                </blockquote>

                {/* Marathi */}
                <p className="font-devanagari text-kisan-green text-sm leading-relaxed mb-8 pl-2 border-l-4 border-kisan-green/20 py-2">
                  &ldquo;प्रत्येक शेतकऱ्याला दर्जेदार सेंद्रिय उत्पादने मिळाली पाहिजेत — हे आमचे ध्येय आहे. शेती हा आमचा व्यवसाय नाही, हा आमचा धर्म आहे.&rdquo;
                </p>

                {/* Signature */}
                <div className="flex items-center gap-4 pt-4 border-t border-kisan-green/10">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-kisan-green/20 flex-shrink-0">
                    <img
                      src="/images/founder.png"
                      alt="Founder"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <p className="font-headline font-bold text-pure-black text-sm sm:text-base">
                      Director & Founder
                    </p>
                    <p className="text-text-muted text-xs font-medium">
                      AGRI-GEN Innovation Pvt. Ltd., Nashik
                    </p>
                  </div>
                  <div className="ml-auto hidden sm:block">
                    <div className="iso-seal">
                      <span className="text-[7px]">ISO<br/>9001<br/>2015</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
