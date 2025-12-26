import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Gift, Rocket, Globe, LucideIcon, X } from "lucide-react";
import { useState, useMemo } from "react";

interface SponsorPerk {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  stats: string;
  mapPosition: { x: number; y: number };
}

const sponsorPerks: SponsorPerk[] = [
  {
    title: "Mega-Exposure",
    subtitle: "Campus Domination",
    description: "18x12 ft Billboard placement at prime LPU locations. Your brand, impossible to miss across the 600-acre campus. Located at Unimall with 30,000+ daily views.",
    icon: MapPin,
    stats: "600+ Acres",
    mapPosition: { x: 25, y: 35 },
  },
  {
    title: "Quantum Spawning",
    subtitle: "Mystery Baskets",
    description: "Premium product placements in themed mystery baskets. Create buzz with branded surprise elements distributed across multiple campus hotspots.",
    icon: Gift,
    stats: "1000+ Baskets",
    mapPosition: { x: 65, y: 25 },
  },
  {
    title: "High-Octane Activation",
    subtitle: "Live Experiences",
    description: "Drone shows, bike parades, and live activations featuring your brand at the central lawn. Create unforgettable moments that go viral.",
    icon: Rocket,
    stats: "50K+ Views",
    mapPosition: { x: 45, y: 55 },
  },
  {
    title: "360° Omnichannel",
    subtitle: "Digital + Ground",
    description: "Complete coverage across social media, campus ground force, and digital siege reaching 80,000+ LPU students through all channels.",
    icon: Globe,
    stats: "80K+ Reach",
    mapPosition: { x: 75, y: 65 },
  },
];

const SponsorMultiverse = () => {
  const [activePin, setActivePin] = useState<number | null>(null);

  // Generate grid lines
  const gridLines = useMemo(() => {
    const lines = [];
    for (let i = 0; i <= 10; i++) {
      lines.push({ type: "h", pos: i * 10 });
      lines.push({ type: "v", pos: i * 10 });
    }
    return lines;
  }, []);

  return (
    <section className="py-24 px-4 relative overflow-hidden min-h-screen">
      {/* Background - Satellite/Map style */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[hsl(220,30%,8%)] to-background" />
      
      {/* Cybernetic grid overlay */}
      <div className="absolute inset-0 overflow-hidden">
        {gridLines.map((line, i) => (
          <motion.div
            key={i}
            className={`absolute bg-tactical-blue/10 ${
              line.type === "h" ? "left-0 right-0 h-px" : "top-0 bottom-0 w-px"
            }`}
            style={line.type === "h" ? { top: `${line.pos}%` } : { left: `${line.pos}%` }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.02 }}
          />
        ))}
        {/* Animated pulse on grid */}
        <motion.div
          className="absolute w-full h-full"
          style={{
            background: "radial-gradient(circle at 50% 50%, hsl(var(--tactical-blue) / 0.1) 0%, transparent 50%)",
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>
      
      <div className="container mx-auto relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="font-display text-xs tracking-[0.4em] text-tactical-blue mb-4 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            PHASE 4: ALLIANCE DOSSIER
          </motion.span>
          <h2 className="font-display text-3xl md:text-5xl font-black tracking-wider mb-4">
            <span className="text-foreground">THE SPONSOR'S</span>{" "}
            <span className="text-crest-yellow">MULTIVERSE</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-2">
            Interactive LPU Campus Tactical Map — Click pins to explore activation zones.
          </p>
        </motion.div>

        {/* Tactical Map Container */}
        <div className="relative max-w-4xl mx-auto aspect-video glass-card p-4 mb-12 overflow-hidden">
          {/* Map background with campus silhouette */}
          <div 
            className="absolute inset-4 rounded-lg"
            style={{
              background: "linear-gradient(135deg, hsl(220, 30%, 10%) 0%, hsl(220, 30%, 15%) 100%)",
            }}
          >
            {/* Campus outline shapes (stylized) */}
            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M10,20 L30,15 L50,25 L70,18 L90,30 L85,50 L90,70 L70,80 L50,75 L30,85 L10,70 Z" 
                fill="none" stroke="hsl(var(--tactical-blue))" strokeWidth="0.5" />
              <path d="M20,30 L40,35 L60,30 L80,40 L75,55 L80,70 L60,65 L40,70 L20,60 Z" 
                fill="hsl(var(--tactical-blue) / 0.05)" stroke="hsl(var(--tactical-blue))" strokeWidth="0.3" />
            </svg>

            {/* Scanning effect */}
            <motion.div
              className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-tactical-blue/50 to-transparent"
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Interactive pins */}
          {sponsorPerks.map((perk, index) => {
            const Icon = perk.icon;
            const colors = [
              { text: "text-crest-red", bg: "bg-crest-red", glow: "shadow-[0_0_20px_hsl(var(--crest-red))]" },
              { text: "text-crest-yellow", bg: "bg-crest-yellow", glow: "shadow-[0_0_20px_hsl(var(--crest-yellow))]" },
              { text: "text-crest-blue", bg: "bg-crest-blue", glow: "shadow-[0_0_20px_hsl(var(--crest-blue))]" },
              { text: "text-crest-green", bg: "bg-crest-green", glow: "shadow-[0_0_20px_hsl(var(--crest-green))]" },
            ];
            const color = colors[index % colors.length];
            
            return (
              <motion.button
                key={perk.title}
                className={`absolute z-20 w-10 h-10 rounded-full ${color.bg} flex items-center justify-center cursor-pointer ${activePin === index ? color.glow : ''}`}
                style={{
                  left: `${perk.mapPosition.x}%`,
                  top: `${perk.mapPosition.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.15, type: "spring" }}
                whileHover={{ scale: 1.2 }}
                onClick={() => setActivePin(activePin === index ? null : index)}
              >
                <Icon className="w-5 h-5 text-background" />
                
                {/* Pulse ring */}
                <motion.div
                  className={`absolute inset-0 rounded-full ${color.bg}`}
                  animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.button>
            );
          })}

          {/* Info panel overlay */}
          <AnimatePresence>
            {activePin !== null && (
              <motion.div
                className="absolute right-4 top-4 bottom-4 w-72 glass-card p-6 z-30 overflow-hidden"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
              >
                <button
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                  onClick={() => setActivePin(null)}
                >
                  <X className="w-5 h-5" />
                </button>
                
                {(() => {
                  const perk = sponsorPerks[activePin];
                  const Icon = perk.icon;
                  const colors = [
                    { text: "text-crest-red", bg: "bg-crest-red/20" },
                    { text: "text-crest-yellow", bg: "bg-crest-yellow/20" },
                    { text: "text-crest-blue", bg: "bg-crest-blue/20" },
                    { text: "text-crest-green", bg: "bg-crest-green/20" },
                  ];
                  const color = colors[activePin % colors.length];
                  
                  return (
                    <>
                      <div className={`w-12 h-12 rounded-lg ${color.bg} flex items-center justify-center mb-4`}>
                        <Icon className={`w-6 h-6 ${color.text}`} />
                      </div>
                      <span className={`font-display text-xs tracking-widest ${color.text}`}>
                        {perk.subtitle}
                      </span>
                      <h3 className="font-display text-lg font-bold text-foreground mt-1 mb-3">
                        {perk.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {perk.description}
                      </p>
                      <div className={`inline-block px-4 py-2 ${color.bg} rounded-full`}>
                        <span className={`font-display text-sm tracking-wider ${color.text}`}>
                          {perk.stats}
                        </span>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.button
            className="group px-10 py-4 bg-gradient-to-r from-crest-yellow to-crest-green font-display font-bold text-lg tracking-wider text-background rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(48 96% 53% / 0.5)" }}
            whileTap={{ scale: 0.98 }}
          >
            BE THE HERO OF THE STORY
          </motion.button>
          <p className="mt-4 text-sm italic text-muted-foreground">
            Click pins to explore activation zones.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorMultiverse;
