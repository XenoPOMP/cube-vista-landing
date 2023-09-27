import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import CallToPlaySection from '@/src/sections/mainPage/CallToPlaySection/CallToPlaySection';
import PromoGallery from '@/src/sections/mainPage/PromoGallery/PromoGallery';

export default function Home() {
  return (
    <main>
      <PromoGallery />

      <CallToPlaySection />
    </main>
  );
}
