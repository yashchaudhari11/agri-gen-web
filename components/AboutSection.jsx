import Image from 'next/image';

const features = [
  {
    icon: '🏛️',
    title: 'Headquartered in Nashik',
    desc: 'Based in Nashik, Maharashtra — one of India’s most renowned spiritual and agricultural hubs.',
  },
  {
    icon: '🚀',
    title: 'Established in 2026',
    desc: 'Rapidly emerging as a diversified business group with a strong focus on agricultural manufacturing.',
  },
  {
    icon: '🧪',
    title: 'Science-Based Innovation',
    desc: 'Transforming modern agriculture through sustainable practices and advanced agri-tech solutions.',
  },
];

const images = [
  {
    src: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&q=80',
    alt: 'Organic spice farm',
  },
  {
    src: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&q=80',
    alt: 'Farmer working in field',
  },
  {
    src: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=800&q=80',
    alt: 'Wide organic farm landscape',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left: Image Grid */}
        <div className="grid grid-cols-2 gap-4 lg:sticky lg:top-32">
          {/* Top row - 2 small images */}
          <div className="relative h-48 sm:h-56 rounded-3xl overflow-hidden border border-gray-100 shadow-sm group">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          <div className="relative h-48 sm:h-56 rounded-3xl overflow-hidden border border-gray-100 shadow-sm group">
            <Image
              src={images[1].src}
              alt={images[1].alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          {/* Bottom row - wide image spanning full width */}
          <div className="col-span-2 relative h-52 sm:h-72 rounded-3xl overflow-hidden border border-gray-100 shadow-md group">
            <Image
              src={images[2].src}
              alt={images[2].alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
            <div className="absolute bottom-4 left-4 bg-ag-green/90 text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full">
              Certified Organic ✓
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex flex-col gap-8">
          {/* Label */}
          <div className="inline-flex items-center gap-2 bg-ag-green/10 w-fit px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-ag-green animate-pulse" />
            <span className="text-ag-green text-xs font-bold tracking-widest uppercase">
              About Agri-Gen Innovation
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-tight text-gray-900">
            Transforming Agriculture through{' '}
            <span className="text-gradient">Innovation</span>
          </h2>

          {/* Body Content */}
          <div className="flex flex-col gap-6 text-gray-600 leading-relaxed text-base sm:text-lg">
            <p>
              Agri-Gen Innovation is a forward-thinking agricultural company headquartered in <strong>Nashik, Maharashtra</strong> — one of India’s renowned spiritual and agricultural hubs.
            </p>
            <p>
              Established in 2026, the company is rapidly emerging as a diversified business group with a strong focus on agricultural manufacturing and supply. We specialize in a wide range of high-quality agricultural inputs, including organic plant protectors, microbial solutions, mycorrhizae products, and plant growth promoters.
            </p>
            <p>
              At Agri-Gen Innovation, we act as a bridge that empowers farmers with smarter, more efficient, and environmentally responsible solutions. By integrating research, field expertise, and a farmer-centric approach, we strive to create sustainable agricultural systems that support global food security.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex flex-col gap-3 bg-ag-card border border-gray-100 rounded-2xl p-6 hover:border-ag-green/20 hover:shadow-xl hover:shadow-ag-green/5 transition-all duration-300 group"
              >
                <div className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {f.icon}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm mb-1">{f.title}</div>
                  <div className="text-gray-500 text-xs leading-relaxed">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Final Statement */}
          <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden group">
            <div className="relative z-10">
              <h4 className="text-lg font-bold mb-2">Our Commitment</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                To deliver verified, effective, and result-oriented solutions that help farmers maximize crop productivity and ensure better crop protection across the globe.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-ag-green/10 rounded-full -mr-10 -mt-10 blur-3xl group-hover:bg-ag-green/20 transition-all" />
          </div>
        </div>
      </div>
    </section>
  );
}
