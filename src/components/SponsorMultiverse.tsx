import { motion, useMotionValue } from "framer-motion";
import { MapPin, Gift, Rocket, Globe, LucideIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";

interface SponsorPerk {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  stats: string;
}

const sponsorPerks: SponsorPerk[] = [
  {
    title: "Mega-Exposure",
    subtitle: "Campus Domination",
    description: "18x12 ft Billboard placement at prime LPU locations. Your brand, impossible to miss across the 600-acre campus.",
    icon: MapPin,
    stats: "600+ Acres",
  },
  {
    title: "Quantum Spawning",
    subtitle: "Mystery Baskets",
    description: "Premium product placements in themed mystery baskets. Create buzz with branded surprise elements throughout the event.",
    icon: Gift,
    stats: "1000+ Baskets",
  },
  {
    title: "High-Octane Activation",
    subtitle: "Live Experiences",
    description: "Drone shows, bike parades, and live activations featuring your brand. Create unforgettable moments that go viral.",
    icon: Rocket,
    stats: "50K+ Views",
  },
  {
    title: "360° Omnichannel",
    subtitle: "Digital + Ground",
    description: "Complete coverage across social media, campus ground force, and digital siege reaching 80,000+ LPU students.",
    icon: Globe,
    stats: "80K+ Reach",
  },
];

const SponsorMultiverse = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % sponsorPerks.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + sponsorPerks.length) % sponsorPerks.length);
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden snap-section">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/10 via-background to-muted/10" />
      
      <div className="container mx-auto relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-display text-sm tracking-widest text-crest-blue mb-4 block">
            SECTION 2
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-black tracking-wider mb-4">
            <span className="text-foreground">THE SPONSOR'S</span>{" "}
            <span className="text-crest-yellow">MULTIVERSE</span>
          </h2>
          <p className="font-display text-lg tracking-wider text-muted-foreground">
            BRAND DOMINATION AWAITS
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative mb-16">
          {/* Navigation buttons */}
          <motion.button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:translate-x-0 z-10 w-12 h-12 glass-card flex items-center justify-center rounded-full hover:bg-glass-border transition-colors"
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </motion.button>
          
          <motion.button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-0 z-10 w-12 h-12 glass-card flex items-center justify-center rounded-full hover:bg-glass-border transition-colors"
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </motion.button>
          
          {/* Cards carousel */}
          <div 
            ref={containerRef}
            className="overflow-hidden mx-8 md:mx-16"
          >
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {sponsorPerks.map((perk, index) => {
                const Icon = perk.icon;
                const colors = [
                  { text: "text-crest-red", bg: "bg-crest-red/20", glow: "glow-red" },
                  { text: "text-crest-yellow", bg: "bg-crest-yellow/20", glow: "glow-yellow" },
                  { text: "text-crest-blue", bg: "bg-crest-blue/20", glow: "glow-blue" },
                  { text: "text-crest-green", bg: "bg-crest-green/20", glow: "glow-green" },
                ];
                const color = colors[index % colors.length];
                
                return (
                  <motion.div
                    key={perk.title}
                    className="min-w-full md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)]"
                  >
                    <div className="glass-card p-8 h-full relative overflow-hidden group hover:border-white/20 transition-all duration-500">
                      {/* Glowing border on hover */}
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${color.glow}`} style={{ filter: "blur(40px)" }} />
                      
                      <div className="relative">
                        {/* Icon */}
                        <div className={`w-16 h-16 rounded-xl ${color.bg} flex items-center justify-center mb-6`}>
                          <Icon className={`w-8 h-8 ${color.text}`} />
                        </div>

                        {/* Content */}
                        <span className={`font-display text-xs tracking-widest ${color.text}`}>
                          {perk.subtitle}
                        </span>
                        <h3 className="font-display text-xl font-bold text-foreground mt-1 mb-3">
                          {perk.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-6">
                          {perk.description}
                        </p>
                        <div className={`inline-block px-4 py-2 ${color.bg} rounded-full`}>
                          <span className={`font-display text-sm tracking-wider ${color.text}`}>
                            {perk.stats}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
          
          {/* Carousel indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {sponsorPerks.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "w-8 bg-crest-yellow" 
                    : "bg-muted-foreground/50 hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-lg tracking-wider text-muted-foreground mb-6">
            BE THE HERO OF THE STORY
          </p>
          <motion.button
            className="px-10 py-4 bg-gradient-to-r from-crest-yellow to-crest-green font-display font-bold text-lg tracking-wider text-background rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(48 96% 53% / 0.5)" }}
            whileTap={{ scale: 0.98 }}
          >
            BECOME A SPONSOR
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorMultiverse;
