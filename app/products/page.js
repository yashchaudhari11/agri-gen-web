import Navbar from '@/components/Navbar';
import ProductsSection from '@/components/ProductsSection';
import Footer from '@/components/Footer';

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-8">
        <ProductsSection />
      </div>
      <Footer />
    </main>
  );
}
