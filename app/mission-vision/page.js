import Navbar from '@/components/Navbar';
import MissionAndVision from '@/components/MissionAndVision';
import Footer from '@/components/Footer';

export default function MissionVisionPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20">
        <MissionAndVision />
      </div>
      <Footer />
    </main>
  );
}