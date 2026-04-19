import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full rounded-t-[50px] sm:rounded-t-[80px] lg:rounded-t-[120px] mt-16 sm:mt-20 bg-slate-900 overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div>
          <div className="text-2xl font-black text-white mb-4 font-headline uppercase">Agri-Gen</div>
          <p className="text-slate-400 text-sm leading-relaxed mb-8">
            Pioneering the future of organic agriculture through precision biotechnology and industrial excellence.
          </p>

          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-xl">share</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-xl">public</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-xl">groups</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-lime-400 font-semibold mb-6 sm:mb-8 uppercase tracking-widest text-xs">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link className="text-slate-400 hover:text-white transition-colors inline-block text-sm" href="/">Home</Link></li>
            <li><Link className="text-slate-400 hover:text-white transition-colors inline-block text-sm" href="/about">About Us</Link></li>
            <li><Link className="text-slate-400 hover:text-white transition-colors inline-block text-sm" href="/products">Products</Link></li>
            <li><Link className="text-slate-400 hover:text-white transition-colors inline-block text-sm" href="/contact">Partner Network</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lime-400 font-semibold mb-6 sm:mb-8 uppercase tracking-widest text-xs">Legal</h4>
          <ul className="space-y-4">
            <li><Link className="text-slate-400 hover:text-white transition-colors inline-block text-sm" href="#">Privacy Policy</Link></li>
            <li><Link className="text-slate-400 hover:text-white transition-colors inline-block text-sm" href="#">Terms of Service</Link></li>
            <li><Link className="text-slate-400 hover:text-white transition-colors inline-block text-sm" href="#">Quality Certifications</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lime-400 font-semibold mb-6 sm:mb-8 uppercase tracking-widest text-xs">Newsletter</h4>
          <p className="text-slate-400 text-xs mb-6">Stay updated with our latest organic innovations.</p>
          <div className="flex gap-2">
            <input className="bg-white/5 border-none rounded-lg p-3 text-white text-sm w-full focus:ring-1 focus:ring-primary" placeholder="Email" type="email" />
            <button className="bg-primary text-white p-3 rounded-lg hover:bg-primary-container transition-all">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 text-center px-4">
        <p className="text-slate-500 text-xs">
          © {new Date().getFullYear()} Agri-Gen Innovation. Precision in Nature. GAT No.306, Nashik 422207.
        </p>
      </div>
    </footer>
  );
}
