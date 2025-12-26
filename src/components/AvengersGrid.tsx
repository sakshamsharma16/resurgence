import { motion } from "framer-motion";
import DataStreamBackground from "./DataStreamBackground";

// Import Avenger logos
import captainAmericaLogo from "@/assets/captain-america-logo.png";
import ironManLogo from "@/assets/iron-man-logo.png";
import thorLogo from "@/assets/thor-logo.png";
import blackWidowLogo from "@/assets/black-widow-logo.png";
import spiderManLogo from "@/assets/spider-man-logo.png";
import doctorStrangeLogo from "@/assets/doctor-strange-logo.png";

interface Avenger {
  name: string;
  role: string;
  catchphrase: string;
  colorClass: string;
  bgClass: string;
  glowClass: string;
  borderClass: string;
  description: string;
  logo: string;
  serialCode: string;
  powerLevel: number;
}

const avengers: Avenger[] = [
  {
    name: "Scrum Master",
    role: "Captain America",
    catchphrase: '"I can code this all day."',
    colorClass: "text-crest-blue",
    bgClass: "bg-crest-blue/20",
    glowClass: "glow-blue",
    borderClass: "hover:border-crest-blue",
    description: "The strategic leader who keeps the team aligned and on track.",
    logo: captainAmericaLogo,
    serialCode: "SHIELD-OS v.7.04 // ID-1941",
    powerLevel: 85,
  },
  {
    name: "Lead Architect",
    role: "Iron Man",
    catchphrase: '"I am... the architect."',
    colorClass: "text-crest-red",
    bgClass: "bg-crest-red/20",
    glowClass: "glow-red",
    borderClass: "hover:border-crest-red",
    description: "The genius who designs the system's core infrastructure.",
    logo: ironManLogo,
    serialCode: "STARK-OS v.4.02 // ID-8829",
    powerLevel: 95,
  },
  {
    name: "The Pitcher",
    role: "Thor",
    catchphrase: '"Bring me... the investors!"',
    colorClass: "text-crest-yellow",
    bgClass: "bg-crest-yellow/20",
    glowClass: "glow-yellow",
    borderClass: "hover:border-crest-yellow",
    description: "The powerhouse who delivers electrifying presentations.",
    logo: thorLogo,
    serialCode: "ASGARD-NET v.9.63 // ID-0000",
    powerLevel: 100,
  },
  {
    name: "UI/UX Design",
    role: "Black Widow",
    catchphrase: '"I see through every user flow."',
    colorClass: "text-muted-foreground",
    bgClass: "bg-muted/30",
    glowClass: "glow-blue",
    borderClass: "hover:border-muted-foreground",
    description: "The craftsman who shapes beautiful user experiences.",
    logo: blackWidowLogo,
    serialCode: "WIDOW-SYS v.2.18 // ID-1984",
    powerLevel: 80,
  },
  {
    name: "Web Dev",
    role: "Spider-Man",
    catchphrase: '"With great code comes great responsibility."',
    colorClass: "text-crest-red",
    bgClass: "bg-crest-red/20",
    glowClass: "glow-red",
    borderClass: "hover:border-crest-red",
    description: "The agile developer who crafts pixel-perfect interfaces.",
    logo: spiderManLogo,
    serialCode: "WEBWARE v.3.16 // ID-2001",
    powerLevel: 88,
  },
  {
    name: "Data / AI",
    role: "Doctor Strange",
    catchphrase: '"I have seen 14 million possibilities."',
    colorClass: "text-crest-green",
    bgClass: "bg-crest-green/20",
    glowClass: "glow-green",
    borderClass: "hover:border-crest-green",
    description: "The visionary who harnesses the power of machine learning.",
    logo: doctorStrangeLogo,
    serialCode: "MYSTIC-AI v.14.00 // ID-0001",
    powerLevel: 92,
  },
];

// Power meter component
const PowerMeter = ({ level, color }: { level: number; color: string }) => {
  const segments = 3;
  const filledSegments = Math.ceil((level / 100) * segments);
  
  return (
    <div className="flex items-center gap-1 mt-3">
      <span className="font-mono text-[10px] text-muted-foreground mr-2">PWR</span>
      {[...Array(segments)].map((_, i) => (
        <motion.div
          key={i}
          className={`h-2 w-6 rounded-sm ${i < filledSegments ? color : 'bg-muted/30'}`}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        />
      ))}
      <span className="font-mono text-[10px] text-muted-foreground ml-2">{level}%</span>
    </div>
  );
};

const AvengersGrid = () => {
  return (
    <section id="avengers" className="relative min-h-screen py-24 px-4 overflow-hidden">
      {/* Data Stream Background */}
      <DataStreamBackground />
      
      {/* SHIELD Grid Background */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: `
            linear-gradient(hsl(var(--tactical-blue)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--tactical-blue)) 1px, transparent 1px)
          `, 
          backgroundSize: '50px 50px' 
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
      <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-tactical-blue/60" />
      <div className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-tactical-blue/60" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-tactical-blue/60" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-tactical-blue/60" />

      <div className="container mx-auto relative z-10">
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
            PHASE 2: THE GAUNTLET PROTOCOL
          </motion.span>
          <h2 className="font-display text-3xl md:text-5xl font-black tracking-wider mb-4">
            <span className="text-crest-yellow">THE</span>{" "}
            <span className="text-foreground">AVENGERS</span>{" "}
            <span className="text-crest-red">ROLES</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Assemble your dream team. Each role brings unique powers to the showdown.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {avengers.map((avenger, index) => (
            <motion.div
              key={avenger.name}
              className={`group relative glass-card p-6 cursor-pointer transition-all duration-500 border-2 border-transparent ${avenger.borderClass} backdrop-blur-2xl bg-background/5`}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${avenger.glowClass} blur-xl -z-10`} />
              
              {/* Status Indicator */}
              <div className="absolute top-3 right-3 flex items-center gap-2">
                <motion.div
                  className="w-2 h-2 rounded-full bg-tactical-green"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="font-mono text-[8px] tracking-widest text-tactical-green">
                  OPERATIONAL
                </span>
              </div>
              
              {/* Avenger Logo */}
              <motion.div 
                className="relative w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src={avenger.logo} 
                  alt={avenger.role}
                  className="w-full h-full object-contain"
                />
                {/* Glowing ring */}
                <motion.div
                  className={`absolute inset-0 rounded-full border-2 ${avenger.borderClass.replace('hover:', '')} opacity-0 group-hover:opacity-100`}
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                {/* Scan line */}
                <motion.div
                  className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-tactical-blue to-transparent opacity-0 group-hover:opacity-100"
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* Content */}
              <h3 className={`font-display text-xl font-bold mb-1 text-center ${avenger.colorClass}`}>
                {avenger.name}
              </h3>
              <p className="font-display text-sm tracking-wider text-muted-foreground mb-3 text-center">
                {avenger.role}
              </p>
              <p className="text-sm text-foreground/80 mb-4 text-center">
                {avenger.description}
              </p>
              <p className="text-sm italic text-muted-foreground text-center mb-3">
                {avenger.catchphrase}
              </p>
              
              {/* Power Meter */}
              <div className="flex justify-center">
                <PowerMeter 
                  level={avenger.powerLevel} 
                  color={avenger.bgClass.replace('/20', '')} 
                />
              </div>
              
              {/* Digital Signature / Serial */}
              <div className="mt-4 pt-3 border-t border-muted/20 text-center">
                <motion.div
                  className="font-mono text-[9px] tracking-widest text-muted-foreground/60 flex items-center justify-center gap-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-3 flex gap-[1px]">
                    {[...Array(8)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`flex-1 ${Math.random() > 0.5 ? 'bg-muted-foreground/40' : 'bg-transparent'}`}
                      />
                    ))}
                  </div>
                  {avenger.serialCode}
                </motion.div>
              </div>

              {/* Corner accents */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-tactical-blue/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-tactical-blue/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-tactical-blue/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-tactical-blue/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvengersGrid;