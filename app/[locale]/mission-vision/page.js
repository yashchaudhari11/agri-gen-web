import Navbar from '@/components/Navbar';
import MissionAndVision from '@/components/MissionAndVision';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function MissionVisionPage() {
  return (
    <main className="min-h-screen bg-warm-white">
      <Navbar />
      <div className="pt-20">
        <MissionAndVision />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
