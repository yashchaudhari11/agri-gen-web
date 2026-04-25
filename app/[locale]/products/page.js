import Navbar from '@/components/Navbar';
import ProductsSection from '@/components/ProductsSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-warm-white">
      <Navbar />
      <div className="pt-20">
        <ProductsSection />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
