import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import AvengersGrid from "@/components/AvengersGrid";
import SagaTimeline from "@/components/SagaTimeline";
import SponsorMultiverse from "@/components/SponsorMultiverse";
import ShieldCommand from "@/components/ShieldCommand";
import MissionBrief from "@/components/MissionBrief";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import PhaseNavigation from "@/components/PhaseNavigation";

const phases = [
  { id: "hero", name: "Mission Overview", label: "PHASE 1" },
  { id: "avengers", name: "The Gauntlet Protocol", label: "PHASE 2" },
  { id: "saga", name: "The Three Rounds", label: "PHASE 3" },
  { id: "sponsors", name: "Alliance Dossier", label: "PHASE 4" },
  { id: "command", name: "S.H.I.E.L.D. Command", label: "PHASE 5" },
];

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activePhase, setActivePhase] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = phases.map(phase => document.getElementById(phase.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActivePhase(phases[index].id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePhaseChange = (phaseId: string) => {
    const section = document.getElementById(phaseId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <LoadingScreen onComplete={() => setIsLoading(false)} />
      
      <AnimatePresence>
        {!isLoading && (
          <motion.main
            className="min-h-screen bg-background overflow-x-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <PhaseNavigation
              phases={phases}
              activePhase={activePhase}
              onPhaseChange={handlePhaseChange}
            />
            
            <div id="hero">
              <HeroSection />
            </div>
            <div id="avengers">
              <AvengersGrid />
            </div>
            <div id="saga">
              <SagaTimeline />
            </div>
            <div id="sponsors">
              <SponsorMultiverse />
            </div>
            <div id="command">
              <ShieldCommand />
            </div>
            <MissionBrief />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;
