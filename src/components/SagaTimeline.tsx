import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Swords, Infinity as InfinityIcon, Hand, AlertTriangle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Round {
  id: number;
  title: string;
  subtitle: string;
  theme: string;
  description: string;
  gradientClass: string;
  icon: LucideIcon;
  accentColorClass: string;
  accentBgClass: string;
  features: string[];
}

const rounds: Round[] = [
  {
    id: 0,
    title: "CIVIL WAR",
    subtitle: "ROUND 1: STABLE",
    theme: "The Flex Protocol",
    description: "Internal rivalry begins. Teams compete head-to-head in rapid-fire coding challenges. Only the strongest will advance to face the greater threat.",
    gradientClass: "from-crest-red to-crest-blue",
    icon: Swords,
    accentColorClass: "text-crest-red",
    accentBgClass: "bg-crest-red/20",
    features: ["1v1 Code Battles", "Algorithm Showdown", "Speed Debugging"],
  },
  {
    id: 1,
    title: "INFINITY WAR",
    subtitle: "ROUND 2: BRANCHING",
    theme: "The Manifestation",
    description: "The stakes are raised. Build something extraordinary as teams race to manifest their vision before the snap erases half the competition.",
    gradientClass: "from-purple-600 to-crest-yellow",
    icon: InfinityIcon,
    accentColorClass: "text-crest-yellow",
    accentBgClass: "bg-crest-yellow/20",
    features: ["Full Stack Sprint", "Integration Challenge", "The Snap Elimination"],
  },
  {
    id: 2,
    title: "ENDGAME",
    subtitle: "ROUND 3: NEXUS POINT",
    theme: "The Ultimate Clutch",
    description: "Whatever it takes. The final survivors face the ultimate challenge. Only one team will wield the Nano-Gauntlet of victory.",
    gradientClass: "from-slate-700 to-teal-500",
    icon: Hand,
    accentColorClass: "text-crest-green",
    accentBgClass: "bg-crest-green/20",
    features: ["24-Hour Grand Finale", "Industry Jury", "The Gauntlet Award"],
  },
];

// TVA TemPad style ticker with Timeline Purity
const TVATicker = ({ activeStep }: { activeStep: number }) => {
  const [tickerValue, setTickerValue] = useState("0000.0000.0000");
  const [purity, setPurity] = useState(98.4);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const newValue = Array(3)
        .fill(0)
        .map(() => Math.floor(Math.random() * 10000).toString().padStart(4, '0'))
        .join('.');
      setTickerValue(newValue);
      // Purity decreases as we approach Nexus
      setPurity(98.4 - (activeStep * 15) + (Math.random() * 2 - 1));
    }, 100);
    
    return () => clearInterval(interval);
  }, [activeStep]);
  
  return (
    <motion.div
      className="absolute top-4 right-4 font-mono text-[10px] flex flex-col items-end gap-1"
      animate={{ opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 0.3, repeat: Infinity }}
    >
      <div className="flex items-center gap-2 text-crest-yellow/80">
        <AlertTriangle className="w-3 h-3" />
        <span className="tracking-widest">TVA-{tickerValue}</span>
      </div>
      <div className={`tracking-widest ${purity > 80 ? 'text-tactical-green' : purity > 50 ? 'text-crest-yellow' : 'text-crest-red'}`}>
        TIMELINE PURITY: {purity.toFixed(1)}%
      </div>
    </motion.div>
  );
};

const TimelineNode = ({ 
  round, 
  isActive, 
  onClick 
}: { 
  round: Round; 
  isActive: boolean; 
  onClick: () => void;
}) => {
  const Icon = round.icon;
  
  return (
    <div 
      className="relative flex flex-col items-center cursor-pointer group z-10"
      onClick={onClick}
    >
      {/* The Node Dot */}
      <motion.div
        animate={{
          scale: isActive ? 1.3 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`relative w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
          isActive 
            ? 'bg-crest-yellow border-foreground shadow-[0_0_20px_5px_rgba(255,215,0,0.8)]' 
            : 'bg-background border-crest-yellow/50 group-hover:border-crest-yellow'
        }`}
      >
        <Icon className={`w-6 h-6 transition-colors ${isActive ? 'text-background' : 'text-crest-yellow'}`} />
        
        {/* Pulsing ring when active */}
        {isActive && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-crest-yellow"
            animate={{ scale: [1, 1.5], opacity: [0.8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}
      </motion.div>
      
      {/* Label */}
      <motion.span 
        className={`absolute top-20 whitespace-nowrap font-mono text-xs tracking-widest transition-all duration-300 ${
          isActive ? 'text-crest-yellow' : 'text-muted-foreground group-hover:text-foreground'
        }`}
        animate={{ opacity: isActive ? 1 : 0.6 }}
        transition={{ type: "tween" }}
      >
        {round.subtitle}
      </motion.span>
    </div>
  );
};

const SagaTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 px-4 relative overflow-hidden min-h-screen">
      {/* SHIELD-style Background Grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div 
        className="absolute inset-0 opacity-20" 
        style={{ 
          backgroundImage: 'linear-gradient(hsl(48 96% 53%) 1px, transparent 1px), linear-gradient(90deg, hsl(48 96% 53%) 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />
      
      {/* CRT Scanline Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-30 opacity-[0.03]"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)'
        }}
      />
      
      {/* Corner Targeting Brackets */}
      <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-crest-yellow/60" />
      <div className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-crest-yellow/60" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-crest-yellow/60" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-crest-yellow/60" />
      
      <div className="container mx-auto relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
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
            PHASE 3: THE THREE ROUNDS
          </motion.span>
          <h2 className="font-display text-3xl md:text-5xl font-black tracking-wider mb-4">
            <span className="text-foreground">THE SACRED</span>{" "}
            <span className="text-crest-yellow">TIMELINE</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Journey through three epic rounds. Each battle brings you closer to legendary status.
          </p>
        </motion.div>

        {/* Sacred Timeline SVG with Nodes */}
        <div className="relative w-full max-w-5xl mx-auto mb-12">
          <div className="relative h-40 flex justify-between items-center px-8 md:px-16">
            
            {/* TVA Ticker */}
            <TVATicker activeStep={activeStep} />
            
            {/* The Base Timeline SVG */}
            <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
              {/* Main Golden Path */}
              <motion.path
                d="M 50 80 Q 250 80, 400 80 T 750 80"
                fill="transparent"
                stroke="hsl(48 96% 53%)"
                strokeWidth="3"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
              
              {/* Glowing effect path */}
              <motion.path
                d="M 50 80 Q 250 80, 400 80 T 750 80"
                fill="transparent"
                stroke="hsl(48 96% 53% / 0.3)"
                strokeWidth="8"
                filter="blur(4px)"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
              
              {/* Branching filaments (visible on Round 2+) */}
              <AnimatePresence>
                {activeStep >= 1 && (
                  <>
                    {/* Main branch */}
                    <motion.path
                      initial={{ opacity: 0, pathLength: 0 }}
                      animate={{ opacity: 0.6, pathLength: 1 }}
                      exit={{ opacity: 0, pathLength: 0 }}
                      transition={{ duration: 0.8 }}
                      d="M 400 80 Q 500 20, 700 10"
                      fill="transparent"
                      stroke="hsl(0 100% 50%)"
                      strokeWidth="2"
                      strokeDasharray="8,4"
                    />
                    {/* Smaller filaments */}
                    {[...Array(3)].map((_, i) => (
                      <motion.path
                        key={`filament-${i}`}
                        initial={{ opacity: 0, pathLength: 0 }}
                        animate={{ opacity: 0.3, pathLength: 1 }}
                        exit={{ opacity: 0, pathLength: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        d={`M 400 80 Q ${450 + i * 30} ${40 - i * 10}, ${550 + i * 50} ${30 - i * 15}`}
                        fill="transparent"
                        stroke="hsl(0 100% 50%)"
                        strokeWidth="1"
                        strokeDasharray="4,4"
                      />
                    ))}
                  </>
                )}
              </AnimatePresence>
              
              {/* Nexus branches (visible on Round 3) */}
              <AnimatePresence>
                {activeStep >= 2 && (
                  <>
                    <motion.path
                      initial={{ opacity: 0, pathLength: 0 }}
                      animate={{ opacity: 0.7, pathLength: 1 }}
                      exit={{ opacity: 0, pathLength: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      d="M 400 80 Q 550 140, 720 160"
                      fill="transparent"
                      stroke="hsl(180 100% 50%)"
                      strokeWidth="2"
                    />
                    {/* More filaments */}
                    {[...Array(4)].map((_, i) => (
                      <motion.path
                        key={`nexus-${i}`}
                        initial={{ opacity: 0, pathLength: 0 }}
                        animate={{ opacity: 0.4, pathLength: 1 }}
                        exit={{ opacity: 0, pathLength: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                        d={`M 400 80 Q ${480 + i * 25} ${110 + i * 10}, ${600 + i * 40} ${130 + i * 15}`}
                        fill="transparent"
                        stroke="hsl(180 100% 50%)"
                        strokeWidth="1"
                        strokeDasharray="3,3"
                      />
                    ))}
                    {/* Nexus pulse at intersection */}
                    <motion.circle
                      cx="400"
                      cy="80"
                      r="8"
                      fill="hsl(48 96% 53%)"
                      animate={{ 
                        r: [8, 15, 8],
                        opacity: [1, 0.3, 1]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </>
                )}
              </AnimatePresence>
            </svg>

            {/* Timeline Nodes */}
            <div className="relative z-10 flex justify-between w-full">
              {rounds.map((round) => (
                <TimelineNode 
                  key={round.id}
                  round={round}
                  isActive={activeStep === round.id}
                  onClick={() => setActiveStep(round.id)}
                />
              ))}
            </div>
          </div>
          
          {/* TVA Status Indicator */}
          <motion.div 
            className="absolute bottom-0 left-4 font-mono text-[10px] text-crest-yellow/80 uppercase tracking-[0.2em]"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Status: {activeStep === 2 ? "⚠ NEXUS EVENT DETECTED" : activeStep === 1 ? "⚡ VARIANCE BRANCHING" : "✓ TIMELINE STABLE"}
          </motion.div>
        </div>

        {/* Round Details Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          >
            {(() => {
              const round = rounds[activeStep];
              const Icon = round.icon;
              
              return (
                <div className="glass-card p-8 md:p-12 relative overflow-hidden border border-crest-yellow/20 backdrop-blur-2xl bg-background/5">
                  {/* Animated border glow */}
                  <motion.div
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, transparent 40%, hsl(48 96% 53% / 0.1) 50%, transparent 60%)`,
                      backgroundSize: '200% 200%',
                    }}
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                  
                  <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                    {/* Icon */}
                    <motion.div
                      className={`w-24 h-24 rounded-full bg-gradient-to-br ${round.gradientClass} flex items-center justify-center shrink-0`}
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Icon className="w-12 h-12 text-foreground" />
                    </motion.div>
                    
                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                      <span className={`font-display text-sm tracking-widest ${round.accentColorClass}`}>
                        {round.subtitle}
                      </span>
                      <h3 className={`font-display text-4xl md:text-5xl font-black bg-gradient-to-r ${round.gradientClass} bg-clip-text text-transparent mt-2 mb-2`}>
                        {round.title}
                      </h3>
                      <p className="font-display text-sm tracking-wider text-muted-foreground mb-4">
                        {round.theme}
                      </p>
                      <p className="text-foreground/80 mb-6 max-w-xl">
                        {round.description}
                      </p>
                      
                      {/* Features */}
                      <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                        {round.features.map((feature, i) => (
                          <motion.span
                            key={feature}
                            className={`px-4 py-2 text-sm font-display tracking-wider ${round.accentBgClass} ${round.accentColorClass} rounded-full border border-current/20`}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            {feature}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SagaTimeline;