import Navbar from '@/components/Navbar';
import NewHomeContent from '@/components/NewHomeContent';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-warm-white">
      <Navbar />
      <NewHomeContent />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
