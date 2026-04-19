import React from 'react';

const MissionAndVision = () => {
  return (
    <section id="mission-vision" className="relative py-24 sm:py-8 overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] opacity-10 bg-primary rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] opacity-10 bg-secondary rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">Our Purpose</h2>
          <h1 className="font-headline text-5xl sm:text-6xl font-black text-on-surface leading-tight">
            Advancing Agriculture for a <span className="text-primary italic">Better Tomorrow</span>
          </h1>
          <div className="w-24 h-1.5 bg-primary mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          {/* Mission Card */}
          <div className="group relative flex flex-col p-8 sm:p-14 rounded-[48px] bg-white border border-gray-100 shadow-xl hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500 hover:translate-y-[-8px]">
            <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
              <span className="material-symbols-outlined text-[140px] text-primary">rocket_launch</span>
            </div>
            
            <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
              <span className="material-symbols-outlined text-4xl">rocket_launch</span>
            </div>
            
            <h3 className="font-display font-black text-4xl text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-500 text-lg leading-relaxed mb-10 flex-grow">
              To drive next-generation agriculture through advanced agri-tech solutions, delivering innovative and high-quality products that address real field challenges. We are committed to ethical business practices, continuous research, and farmer-focused services.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Advanced Tech', 'Ethical Growth', 'Farmer First'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-slate-50 px-4 py-3 rounded-2xl border border-slate-100">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-bold text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative flex flex-col p-8 sm:p-14 rounded-[48px] bg-white border border-gray-100 shadow-xl hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500 hover:translate-y-[-8px]">
            <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
              <span className="material-symbols-outlined text-[140px] text-primary">visibility</span>
            </div>

            <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
              <span className="material-symbols-outlined text-4xl">visibility</span>
            </div>
            
            <h3 className="font-display font-black text-4xl text-gray-900 mb-6">Our Vision</h3>
            <p className="text-gray-500 text-lg leading-relaxed mb-10 flex-grow">
              To transform nature’s intelligence into sustainable and resilient agriculture through science-driven innovation. We empower farmers with advanced solutions that enhance productivity, restore ecosystems, and ensure long-term soil health.
            </p>

            <div className="p-6 rounded-[32px] bg-ag-green/5 border border-ag-green/10">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-primary text-xl">eco</span>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Future Impact</span>
              </div>
              <p className="text-gray-700 font-medium">Restoring ecosystems and ensuring agricultural resilience for generations.</p>
            </div>
          </div>
        </div>

        {/* Core Values / Conclusion */}
        <div className="mt-24 text-center max-w-4xl mx-auto bg-primary-container/20 p-12 rounded-[60px] border border-primary/10">
          <span className="material-symbols-outlined text-primary text-5xl mb-6">psychology</span>
          <h4 className="font-headline text-2xl font-bold text-on-surface mb-4">Driving Sustainable Growth</h4>
          <p className="text-on-surface-variant text-lg">
            We believe in transforming complex science into simple, effective field solutions. Our commitment to farmers is unwavering, as we aim to pave the way for a more food-secure and greener future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionAndVision;