import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-background/70" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-crest-red/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-crest-blue/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-crest-yellow/15 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute bottom-40 right-1/4 w-64 h-64 bg-crest-green/20 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>

      {/* Scanline overlay */}
      <div className="absolute inset-0 scanline-effect pointer-events-none" />

      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Floating CREST Logo */}
          <motion.div
            className="mb-8 inline-block"
            initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.div
              className="relative w-32 h-32 md:w-48 md:h-48 mx-auto"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* CREST Logo representation */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-crest-red via-crest-yellow to-crest-blue p-1">
                <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                  <span className="font-display text-5xl md:text-7xl font-black bg-gradient-to-br from-crest-red via-crest-yellow to-crest-blue bg-clip-text text-transparent">
                    C
                  </span>
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-crest-red/30 via-crest-yellow/30 to-crest-blue/30 blur-xl -z-10 animate-pulse-glow" />
            </motion.div>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-wider mb-6 leading-tight">
              <span className="block text-crest-red">24-HOUR</span>
              <span className="block bg-gradient-to-r from-crest-yellow via-crest-green to-crest-blue bg-clip-text text-transparent">
                AVENGERS: ENDGAME
              </span>
              <span className="block text-foreground">TECHNICAL SHOWDOWN</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="font-display text-lg md:text-2xl text-muted-foreground tracking-widest mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            FEBRUARY 2025 | LPU CAMPUS | ASSEMBLE YOUR SQUAD
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-crest-red to-crest-yellow font-display font-bold text-lg tracking-wider rounded-lg glow-red transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px hsl(0 100% 50% / 0.6)" }}
              whileTap={{ scale: 0.98 }}
            >
              REGISTER NOW
            </motion.button>
            <motion.button
              className="px-8 py-4 glass-card font-display font-bold text-lg tracking-wider text-foreground hover:bg-glass-border transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              LEARN MORE
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
