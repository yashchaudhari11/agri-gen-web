import React from 'react';
import Link from 'next/link';

export default function NewHomeContent() {
  return (
    <div className="bg-surface font-body text-on-surface">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 sm:pt-2 overflow-hidden dna-pattern" id="home">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-20 right-[-10%] w-[300px] sm:w-[450px] lg:w-[600px] h-[300px] sm:h-[450px] lg:h-[600px] bg-primary-container rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[250px] sm:w-[350px] lg:w-[500px] h-[250px] sm:h-[350px] lg:h-[500px] bg-secondary-container rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10 py-10">
          <div className="text-center md:text-left">
            <span className="inline-block px-4 py-1.5 mb-6 text-[10px] sm:text-xs font-bold tracking-widest uppercase bg-tertiary-container/20 text-tertiary rounded-full border border-tertiary/10">
              Precision Agricultural Manufacturing
            </span>

            <h1 className="font-headline text-4xl sm:text-5xl lg:text-7xl font-extrabold text-on-surface leading-[1.1] tracking-tight mb-6 sm:mb-8">
              A House of <br /><span className="text-primary italic">Organic Products</span>
            </h1>

            <div className="flex items-center gap-2 mb-8 justify-center md:justify-start">
              <span className="bg-primary/10 text-primary text-[10px] font-extrabold px-3 py-1 rounded-full border border-primary/20 tracking-tighter">ISO 9001:2015 CERTIFIED</span>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-on-surface-variant leading-relaxed mb-8 sm:mb-10 max-w-xl mx-auto md:mx-0">
              At Agri-Gen Innovation, we bring together agriculture and advanced science—integrating genetics, technology, and smart farming practices to develop innovative solutions for sustainable agriculture.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="w-full sm:w-auto px-6 sm:px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-xl font-bold hover:scale-105 transition-all duration-200 shadow-xl shadow-primary/25">
                B2B Manufacturing
              </button>
              <button className="w-full sm:w-auto px-6 sm:px-8 py-4 bg-white/10 border border-outline-variant/30 backdrop-blur-md text-on-surface rounded-xl font-bold hover:bg-surface-container-low transition-all duration-200">
                Retail & Farmer Solutions
              </button>
            </div>
          </div>

          <div className="relative group max-w-md mx-auto md:max-w-none">
            <div className="group relative perspective-[1200px]">
              
              {/* Glow Background */}
              <div className="absolute -inset-4 bg-primary/10 rounded-[80px] sm:rounded-[120px] blur-3xl 
                group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-700">
              </div>

              {/* Card */}
              <div className="relative aspect-[5/5] leaf-clip overflow-hidden shadow-2xl border-4 border-white/50 
                transition-all duration-700 transform-gpu 
                group-hover:rotate-x-6 group-hover:-rotate-y-6 group-hover:scale-105
                group-hover:shadow-primary/30 group-hover:border-primary/40">

                {/* Image */}
                <img
                  className="w-full h-full object-cover transition-all duration-1000 ease-out 
                  group-hover:scale-110 group-hover:brightness-110"
                  src="/images/lab.jpeg"
                  alt="Agriculture laboratory"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-white/10 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                </div>

                {/* ✨ Light Sweep Effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-0 -left-1/2 w-1/2 h-full bg-white/20 
                    skew-x-[-25deg] blur-md opacity-0 
                    group-hover:opacity-100 group-hover:animate-[shine_1.2s_ease-in-out]">
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 left-4 sm:-bottom-8 sm:-left-8 glass-card p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-xl border border-white/40 max-w-[200px] sm:max-w-[240px]">
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>biotech</span>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-primary leading-none">100%</p>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-on-surface-variant">Certified Bio-Organic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Highlights Banner */}
      <section className="bg-surface-container-low py-10 sm:py-12 border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center lg:text-left">
            <div className="flex flex-col lg:flex-row items-center lg:items-center gap-3">
              <span className="material-symbols-outlined text-primary text-3xl">verified</span>
              <div>
                <p className="font-headline font-black text-xs tracking-widest uppercase">Certified Organic</p>
                <p className="text-[10px] text-on-surface-variant uppercase font-medium">Agro Inputs Mastery</p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-center gap-3">
              <span className="material-symbols-outlined text-primary text-3xl">grid_view</span>
              <div>
                <p className="font-headline font-black text-xs tracking-widest uppercase">Multi-Channel Presence</p>
                <p className="text-[10px] text-on-surface-variant uppercase font-medium">Retail, Wholesale & Bulk</p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-center gap-3">
              <span className="material-symbols-outlined text-primary text-3xl">public</span>
              <div>
                <p className="font-headline font-black text-xs tracking-widest uppercase">Global Accessibility</p>
                <p className="text-[10px] text-on-surface-variant uppercase font-medium">Exports & B2B Distribution</p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-center gap-3">
              <span className="material-symbols-outlined text-primary text-3xl">high_quality</span>
              <div>
                <p className="font-headline font-black text-xs tracking-widest uppercase">Quality & Reliability</p>
                <p className="text-[10px] text-on-surface-variant uppercase font-medium">ISO 9001:2015 Certified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-20 sm:py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-4 sm:space-y-6">
                  <div className="aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:translate-y-[-10px] transition-transform duration-300">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7GoKofCS9RDxbx2HrQfpykE7Cuco-my8nQhfb-rU7RwF8aqL4Ath_1B6trw-qT5t6de4DbJFqhn0R5tx0YT04kkqnscLNzD4rS0QyYYd1AA2U5855GoQGtLpSrPowCCEUC3Fpnx4nioTJvygL0sT6rbm8QtppUKgI-zBGgbG24Di21eKp80cCA2C7iYZI-LmySdCMMCpQ6bGoKxfpNWnLRzqufv0PXhUzzNAxEw_c8L-Z-YfxEHf097Qpsz77JASjF95QfggT1DoU" alt="Lab cultures" />
                  </div>

                  <div className="aspect-square sm:aspect-[3/4] bg-secondary-container/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col justify-end">
                    <span className="material-symbols-outlined text-secondary text-4xl sm:text-5xl mb-4">factory</span>
                    <h4 className="font-headline text-lg sm:text-2xl font-bold">Raw Material <br />B2B Supply</h4>
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-6 pt-8 sm:pt-12">
                  <div className="aspect-square sm:aspect-[3/4] bg-primary-container/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col justify-end">
                    <span className="material-symbols-outlined text-primary text-4xl sm:text-5xl mb-4">label</span>
                    <h4 className="font-headline text-lg sm:text-2xl font-bold">Custom Label <br />B2C Products</h4>
                  </div>

                  <div className="aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:translate-y-[-10px] transition-transform duration-300">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqSXijTl6aQqTN-Uby_POtn6Txf1opkq6FPbZf3oG1-ouMgxA3GP65frwutyOhxCr4qspen6mAej_qfZmXFwdMvhXoBxZdTsYJI-15q7LZMaaYrMRNJoRSy7bhL6wZIH3vsLowOoSmE866j-51fe_N-UExYg2REUgge16LU1q21X_9Fx0Lc25jyydOIt9d8ctuo0FHmxaRrLYWd3vFJoVpLKJq8uJsQZOfJEWacR429TgCDJHRvpRnbeliLwHgmehD32eAp4q3aITg" alt="Warehouse" />
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 sm:mb-8 leading-tight">
                Dual-Engine <br />Business Ecosystem
              </h2>

              <p className="text-base sm:text-lg lg:text-xl text-on-surface-variant mb-10 sm:mb-12 leading-relaxed">
                As a leading agricultural manufacturing and marketing company, we specialize in certified organic inputs while dedicated to supporting farmers with products that enhance soil health and contribute to healthier, more sustainable food systems.
              </p>

              <div className="space-y-8 sm:space-y-10">
                <div className="flex gap-4 sm:gap-6 items-start text-left">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-secondary flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="font-headline text-lg sm:text-xl font-bold mb-2">B2B Raw Material Supply</h3>
                    <p className="text-on-surface-variant text-sm sm:text-base">
                      Strategic partners for manufacturers. We provide high-purity raw materials and formulations for industrial agro-chemical and bio-input production.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 sm:gap-6 items-start text-left">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="font-headline text-lg sm:text-xl font-bold mb-2">B2C & Farmer Focused</h3>
                    <p className="text-on-surface-variant text-sm sm:text-base">
                      Direct solutions for the land. Custom-labeled, branded finished products designed specifically for regional farmer needs and high-yield results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-surface-container-low rounded-t-[120px]" id="about">
        <div className="max-w-7xl mx-auto px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="font-headline text-5xl font-extrabold mb-6">Our Core Values</h2>
                <p className="text-on-surface-variant text-lg">The fundamental principles that guide every action we take and every innovation we deliver for the global farming community.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="bg-white p-8 rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 group shadow-sm flex flex-col items-center text-center">
                    <span className="material-symbols-outlined text-4xl mb-4 text-primary group-hover:text-white">workspace_premium</span>
                    <h4 className="font-headline font-bold uppercase tracking-tight text-xs sm:text-sm">Quality Without Compromise</h4>
                </div>
                <div className="bg-white p-8 rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 group shadow-sm flex flex-col items-center text-center">
                    <span className="material-symbols-outlined text-4xl mb-4 text-primary group-hover:text-white">handshake</span>
                    <h4 className="font-headline font-bold uppercase tracking-tight text-xs sm:text-sm">Trust</h4>
                </div>
                <div className="bg-white p-8 rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 group shadow-sm flex flex-col items-center text-center">
                    <span className="material-symbols-outlined text-4xl mb-4 text-primary group-hover:text-white">verified_user</span>
                    <h4 className="font-headline font-bold uppercase tracking-tight text-xs sm:text-sm">Accountability</h4>
                </div>
                <div className="bg-white p-8 rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 group shadow-sm flex flex-col items-center text-center">
                    <span className="material-symbols-outlined text-4xl mb-4 text-primary group-hover:text-white">groups</span>
                    <h4 className="font-headline font-bold uppercase tracking-tight text-xs sm:text-sm">Honouring Everyone</h4>
                </div>
                <div className="bg-white p-8 rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 group shadow-sm flex flex-col items-center text-center col-span-1 sm:col-span-2 lg:col-span-1">
                    <span className="material-symbols-outlined text-4xl mb-4 text-primary group-hover:text-white">eco</span>
                    <h4 className="font-headline font-bold uppercase tracking-tight text-xs sm:text-sm">Environmental & Social Responsibility</h4>
                </div>
            </div>
        </div>
      </section>

      {/* Core Purpose Section */}
      <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden" id="purpose">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZPoDFotWUryo-kNgbcoLD8hlhvxGq7pYVKcAinywgFThqZMkgH6gx-LNaD1OvuYifhgYy5kqW59L3PZexg6wtGUrlWjNWc8oZ21DbWV3-uJfE1uQ_y_f9Ha18t-0VFOmOUxCW8To0GA0_jPxvqthkjtHprfmRFiEMw-sgLjGSP24vHHeJQBf-5S4sfcKxHwoNg4-32myHtnsxCu_wh14shQyHh3Yc66vFSABr2Pl0vevdMdH48pn1o8KGtoZDyJzI7Q4PVWTHQ3jc" alt="Farmer smiling" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-container/60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="mb-8 sm:mb-12 inline-block p-3 sm:p-4 bg-white/20 backdrop-blur-xl rounded-full">
            <span className="material-symbols-outlined text-white text-4xl sm:text-5xl">sentiment_very_satisfied</span>
          </div>

          <h2 className="font-headline text-3xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-8 sm:mb-10 max-w-5xl mx-auto">
            Delivering Excellence that Brings Smiles to Farmers
          </h2>

          <div className="w-20 sm:w-24 h-1 bg-white/50 mx-auto mb-8 sm:mb-12"></div>

          <p className="text-white/80 text-lg sm:text-xl lg:text-2xl italic max-w-2xl mx-auto px-2">
            "Our true success isn't measured in revenue, but in the prosperity of the hands that feed the world."
          </p>
        </div>
      </section>

    </div>
  );
}
