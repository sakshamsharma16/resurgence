import HeroSection from "@/components/HeroSection";
import AvengersGrid from "@/components/AvengersGrid";
import SagaTimeline from "@/components/SagaTimeline";
import SponsorMultiverse from "@/components/SponsorMultiverse";
import ShieldCommand from "@/components/ShieldCommand";
import MissionBrief from "@/components/MissionBrief";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <AvengersGrid />
      <SagaTimeline />
      <SponsorMultiverse />
      <ShieldCommand />
      <MissionBrief />
      <Footer />
    </main>
  );
};

export default Index;
