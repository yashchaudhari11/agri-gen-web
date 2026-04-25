import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import FounderMessage from '@/components/FounderMessage';
import CompanyTimeline from '@/components/CompanyTimeline';
import CertificationRibbon from '@/components/CertificationRibbon';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-warm-white">
      <Navbar />
      <div className="pt-20">
        <AboutSection />
        <FounderMessage />
        <CompanyTimeline />
        <CertificationRibbon />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
