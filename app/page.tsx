import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import AboutServerSection from '@/src/sections/mainPage/AboutServerSection/AboutServerSection';
import CallToPlaySection from '@/src/sections/mainPage/CallToPlaySection/CallToPlaySection';
import KeyFeaturesSection from '@/src/sections/mainPage/KeyFeaturesSection/KeyFeaturesSection';
import PromoGallery from '@/src/sections/mainPage/PromoGallery/PromoGallery';

export default function Home() {
  return (
    <main>
      <PromoGallery />

      <AboutServerSection />

      <KeyFeaturesSection />

      <CallToPlaySection />
    </main>
  );
}
