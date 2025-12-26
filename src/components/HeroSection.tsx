import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import crestDarkLogo from "@/assets/crest-logo-dark.png";
import GlitchText from "./GlitchText";
import TechHUD from "./TechHUD";
import CosmicBackground from "./CosmicBackground";
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden snap-section">
      {/* Cosmic Background */}
      <CosmicBackground />
      
      {/* Background image with dark overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-background/60" />
      <div className="absolute inset-0 bg-radial-gradient" />
      
      {/* Tech HUD elements */}
      <TechHUD />
      
      {/* Animated background orbs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-crest-red/15 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-crest-blue/15 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-crest-yellow/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Corner Targeting Brackets */}
      <div className="absolute top-16 left-4 w-16 h-16 border-l-2 border-t-2 border-crest-blue/40 z-20" />
      <div className="absolute top-16 right-4 w-16 h-16 border-r-2 border-t-2 border-crest-blue/40 z-20" />
      <div className="absolute bottom-16 left-4 w-16 h-16 border-l-2 border-b-2 border-crest-blue/40 z-20" />
      <div className="absolute bottom-16 right-4 w-16 h-16 border-r-2 border-b-2 border-crest-blue/40 z-20" />

      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Innovation Studio Branding */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-display text-sm md:text-base tracking-[0.4em] text-crest-blue">
              INNOVATION STUDIO PRESENTS
            </span>
          </motion.div>

          {/* Dark CREST Logo with 3D effect */}
          <motion.div
            className="mb-8 inline-block perspective-1000"
            initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.div
              className="relative w-40 h-40 md:w-56 md:h-56 mx-auto preserve-3d"
              animate={{ 
                y: [-10, 10, -10],
                rotateY: [0, 5, 0, -5, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* CREST Dark Logo Image */}
              <img 
                src={crestDarkLogo} 
                alt="CREST Logo" 
                className="w-full h-full object-contain drop-shadow-[0_0_40px_hsl(var(--crest-blue)/0.6)]"
              />
              {/* Glow effect */}
              <motion.div 
                className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-crest-red/30 via-crest-yellow/20 to-crest-blue/30 blur-2xl -z-10"
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              {/* Rotating ring */}
              <motion.div
                className="absolute -inset-4 border-2 border-crest-blue/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </motion.div>

          {/* Main Title with Glitch Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-wider mb-4 leading-tight">
              <span className="block text-muted-foreground text-lg md:text-2xl mb-2">FROM</span>
              <GlitchText 
                fromText="RECESSION" 
                toText="RESURGENCE" 
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black"
              />
            </h1>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black tracking-wider mb-6">
              <span className="block bg-gradient-to-r from-crest-red via-crest-yellow to-crest-blue bg-clip-text text-transparent">
                AVENGERS ASSEMBLE
              </span>
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="font-display text-sm md:text-lg text-muted-foreground tracking-widest mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Beyond the Blip. Reclaim the Timeline, Secure Your Legacy.
          </motion.p>

          <motion.p
            className="font-display text-xs md:text-sm text-tactical-blue tracking-[0.3em] mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            FEBRUARY 2025 | 24-HOUR TECHNICAL SHOWDOWN | LPU CAMPUS
          </motion.p>

          {/* Single CTA Button */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              className="px-10 py-4 glass-card font-display font-bold text-base md:text-lg tracking-wider text-foreground hover:bg-glass-border transition-all duration-300 border border-tactical-blue/30 hover:border-tactical-blue"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              PROCEED TO BRIEFING
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
