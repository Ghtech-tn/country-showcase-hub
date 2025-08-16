import { VideoIntroSection } from "@/components/VideoIntroSection";
import { CountryIntroSection } from "@/components/CountryIntroSection";
import { EventsSection } from "@/components/EventsSection";
import { ArchiveSection } from "@/components/ArchiveSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <VideoIntroSection />
      <CountryIntroSection />
      <EventsSection />
      <ArchiveSection />
      <Footer />
    </div>
  );
};

export default Index;