import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBanner from '@/components/TrustBanner';
import CostCalculator from '@/components/CostCalculator';
import Services from '@/components/Services';
import Neighborhoods from '@/components/Neighborhoods';
import Footer from '@/components/Footer';
import MobileConversionBar from '@/components/MobileConversionBar';
import ServiceDetailPage from '@/components/ServiceDetailPage';
import PhotoBanner from '@/components/PhotoBanner';
import { SERVICE_TIERS, LUXURY_BANNERS } from '@/data/services';
import { getCurrentServiceSlug } from '@/lib/navigation';

export default function App() {
  const [activeSlug, setActiveSlug] = useState<string | null>(getCurrentServiceSlug());

  useEffect(() => {
    const onPop = () => setActiveSlug(getCurrentServiceSlug());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const activeTier = activeSlug
    ? SERVICE_TIERS.find((t) => t.slug === activeSlug) ?? null
    : null;

  const topBanner = LUXURY_BANNERS.find((b) => b.position === 'top')!;
  const middleBanner = LUXURY_BANNERS.find((b) => b.position === 'middle')!;
  const lowerBanner = LUXURY_BANNERS.find((b) => b.position === 'lower')!;

  return (
    <div className="min-h-screen bg-ink-950 text-white antialiased pb-16 sm:pb-0">
      <Header />

      {activeTier ? (
        <ServiceDetailPage tier={activeTier} />
      ) : (
        <main>
          <Hero />
          <TrustBanner />
          <PhotoBanner banner={topBanner} />
          <Services />
          <PhotoBanner banner={middleBanner} />
          <CostCalculator />
          <Neighborhoods />
          <PhotoBanner banner={lowerBanner} />
          <Footer />
        </main>
      )}

      <MobileConversionBar />
    </div>
  );
}
