import Navbar from '@/components/Navbar';
import NewHomeContent from '@/components/NewHomeContent';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <NewHomeContent />
      <Footer />
    </main>
  );
}
