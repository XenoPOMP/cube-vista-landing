import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import AboutServerSection from '@/src/sections/mainPage/AboutServerSection/AboutServerSection';
import CallToPlaySection from '@/src/sections/mainPage/CallToPlaySection/CallToPlaySection';
import PromoGallery from '@/src/sections/mainPage/PromoGallery/PromoGallery';

export default function Home() {
  return (
    <main>
      <PromoGallery />

      <AboutServerSection />

      {/* KeyFeaturesSection */}

      <CallToPlaySection />
    </main>
  );
}
