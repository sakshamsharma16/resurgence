import { motion } from "framer-motion";
import { Users, Palette, Shield, Globe, LucideIcon, Activity, Signal, Wifi } from "lucide-react";
import { useEffect, useState } from "react";

interface CommandUnit {
  title: string;
  role: string;
  description: string;
  icon: LucideIcon;
  count: string;
}

const commandStructure: CommandUnit[] = [
  {
    title: "The Directors",
    role: "Founders",
    description: "The masterminds behind CREST, bringing together technology and innovation to create extraordinary experiences.",
    icon: Shield,
    count: "Core Team",
  },
  {
    title: "The Intel Division",
    role: "Creatives",
    description: "Visual architects crafting the aesthetic universe. Every pixel, every frame, designed to perfection.",
    icon: Palette,
    count: "Design Squad",
  },
  {
    title: "The Strike Team",
    role: "Volunteers",
    description: "LPU's finest boots on the ground. The force multiplier that makes every event legendary.",
    icon: Users,
    count: "500+ Members",
  },
  {
    title: "World Council",
    role: "Students",
    description: "The lifeblood of our mission. 80,000+ agents ready to participate, compete, and dominate.",
    icon: Globe,
    count: "80,000+ Agents",
  },
];

const stats = [
  { value: "24", label: "HOURS", target: 24 },
  { value: "80K+", label: "STUDENTS", target: 80000 },
  { value: "600", label: "ACRE CAMPUS", target: 600 },
  { value: "∞", label: "POSSIBILITIES", target: 999 },
];

// Animated counter component
const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [target]);
  
  if (target === 999) return <span>∞</span>;
  if (target >= 1000) return <span>{Math.floor(count / 1000)}K+</span>;
  return <span>{count}{suffix}</span>;
};

// Data ticker component
const DataTicker = () => {
  const data = [
    "SYSTEM ONLINE",
    "AGENTS: 80,247",
    "MISSION STATUS: ACTIVE",
    "THREAT LEVEL: MINIMAL",
    "COORDINATES: LPU CAMPUS",
    "ENCRYPTION: AES-256",
    "UPLINK: STABLE",
  ];
  
  return (
    <div className="overflow-hidden bg-tactical-blue/10 border-y border-tactical-blue/30 py-2">
      <div className="data-ticker flex gap-8 whitespace-nowrap">
        {[...data, ...data].map((item, i) => (
          <span key={i} className="font-display text-xs tracking-widest text-tactical-blue/80 flex items-center gap-2">
            <Signal className="w-3 h-3" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const ShieldCommand = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden snap-section">
      {/* Tactical grid background */}
      <div className="absolute inset-0 tactical-grid" />
      
      {/* Scanline overlay */}
      <div className="absolute inset-0 scanline-effect pointer-events-none opacity-50" />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container mx-auto relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block px-6 py-2 glass-card border-tactical-blue/50 mb-6"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="font-display text-sm tracking-widest text-tactical-blue flex items-center gap-2">
              <Wifi className="w-4 h-4 animate-pulse" />
              [ ACCESS GRANTED ]
            </span>
          </motion.div>
          
          <h2 className="font-display text-3xl md:text-5xl font-black tracking-wider mb-4">
            <span className="text-foreground">S.H.I.E.L.D.</span>{" "}
            <span className="text-tactical-blue">COMMAND</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The organizational structure behind the ultimate technical showdown
          </p>
        </motion.div>
        
        {/* Data Ticker */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <DataTicker />
        </motion.div>

        {/* Command Grid - Tactical Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {commandStructure.map((unit, index) => {
            const Icon = unit.icon;
            return (
              <motion.div
                key={unit.title}
                className="glass-card p-6 relative overflow-hidden group border-tactical-blue/20 hover:border-tactical-blue/50 transition-colors"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Corner indicators */}
                <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-tactical-blue/50" />
                <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-tactical-blue/50" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-tactical-blue/50" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-tactical-blue/50" />
                
                {/* Dossier corner */}
                <div className="absolute top-0 right-0 w-24 h-24">
                  <div className="absolute top-2 right-2 px-3 py-1 bg-tactical-blue/20 rounded-sm">
                    <span className="font-display text-[10px] tracking-widest text-tactical-blue">
                      {unit.role.toUpperCase()}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  {/* Icon container */}
                  <div className="relative w-16 h-16 rounded-lg bg-tactical-blue/10 flex items-center justify-center shrink-0 overflow-hidden border border-tactical-blue/30">
                    <div className="absolute inset-0 scanline-effect opacity-30" />
                    <Icon className="w-8 h-8 text-tactical-blue" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-display text-lg font-bold text-tactical-blue mb-2">
                      {unit.title}
                    </h3>
                    <p className="text-foreground/70 text-sm mb-3">
                      {unit.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <Activity className="w-3 h-3 text-tactical-green animate-pulse" />
                      <span className="font-display text-sm tracking-wider text-tactical-green">
                        {unit.count}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Counter - Control Panel Style */}
        <motion.div
          className="glass-card p-6 border-tactical-blue/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-tactical-blue/20">
            <span className="font-display text-xs tracking-widest text-tactical-blue">
              MISSION PARAMETERS
            </span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-tactical-green animate-pulse" />
              <span className="font-display text-xs tracking-wider text-tactical-green">
                OPERATIONAL
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-4 bg-tactical-blue/5 rounded-lg border border-tactical-blue/20">
                <span className="font-display text-3xl md:text-4xl font-black text-tactical-blue">
                  <AnimatedCounter target={stat.target} />
                </span>
                <p className="font-display text-xs tracking-widest text-muted-foreground mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShieldCommand;
