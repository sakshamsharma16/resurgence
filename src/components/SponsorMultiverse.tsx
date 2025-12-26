import { motion, AnimatePresence } from "framer-motion";
import { X, Target, Shield, FileText, Eye } from "lucide-react";
import { useState } from "react";

// Avenger logo imports
import doctorStrangeLogo from "@/assets/doctor-strange-logo.png";
import spiderManLogo from "@/assets/spider-man-logo.png";
import thorLogo from "@/assets/thor-logo.png";
import blackWidowLogo from "@/assets/black-widow-logo.png";
import ironManLogo from "@/assets/iron-man-logo.png";
import captainAmericaLogo from "@/assets/captain-america-logo.png";

interface DeploymentZone {
  name: string;
  dimension: string;
  format: string;
  impact: string;
  icon: string;
}

const deploymentZones: DeploymentZone[] = [
  { name: "Titan Billboard", dimension: "18' x 12'", format: "4K Vinyl/LED", impact: "100% Campus Saturation", icon: doctorStrangeLogo },
  { name: "Guardian Pylons", dimension: "10' x 20'", format: "Portrait", impact: "First Contact Entry Point", icon: spiderManLogo },
  { name: "Grid A1", dimension: "24\" x 36\"", format: "High-Gloss", impact: "Hub Lobby Dominance", icon: thorLogo },
  { name: "Grid A2", dimension: "18\" x 24\"", format: "Matte Finish", impact: "Food Court & Social Hubs", icon: blackWidowLogo },
  { name: "The Intel Packet", dimension: "4\" x 6\"", format: "Cardstock", impact: "Direct Personal Interaction", icon: ironManLogo },
];

const avengerLogos = [
  { src: doctorStrangeLogo, name: "Doctor Strange", position: { top: '15%', left: '10%' } },
  { src: spiderManLogo, name: "Spider-Man", position: { top: '25%', right: '15%' } },
  { src: thorLogo, name: "Thor", position: { top: '55%', left: '8%' } },
  { src: blackWidowLogo, name: "Black Widow", position: { bottom: '20%', right: '10%' } },
  { src: ironManLogo, name: "Iron Man", position: { top: '40%', left: '45%' } },
  { src: captainAmericaLogo, name: "Captain America", position: { bottom: '15%', left: '25%' } },
];

const SponsorMultiverse = () => {
  const [selectedZone, setSelectedZone] = useState<number | null>(null);
  const [showClassified, setShowClassified] = useState(false);

  return (
    <section className="py-24 px-4 relative overflow-hidden min-h-screen">
      {/* SHIELD/TOP SECRET Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[hsl(220,30%,6%)] to-background" />
      
      {/* Classified Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: `
            linear-gradient(hsl(var(--tactical-blue)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--tactical-blue)) 1px, transparent 1px)
          `, 
          backgroundSize: '60px 60px' 
        }} 
      />
      
      {/* Radar sweep effect */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          background: 'conic-gradient(from 0deg, transparent 0deg, hsl(var(--tactical-blue) / 0.1) 30deg, transparent 60deg)',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Floating Avenger Logos */}
      {avengerLogos.map((logo, i) => (
        <motion.div
          key={logo.name}
          className="absolute w-16 h-16 md:w-24 md:h-24 opacity-20 pointer-events-none hidden md:block"
          style={logo.position as React.CSSProperties}
          animate={{ 
            y: [-10, 10, -10],
            opacity: [0.1, 0.25, 0.1],
            rotate: [-5, 5, -5]
          }}
          transition={{ 
            duration: 4 + i, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: i * 0.5 
          }}
        >
          <img src={logo.src} alt={logo.name} className="w-full h-full object-contain filter grayscale" />
        </motion.div>
      ))}
      
      {/* Scanlines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)'
        }}
      />
      
      <div className="container mx-auto relative z-10">
        {/* TOP SECRET Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Classified stamp */}
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0, rotate: -20 }}
            whileInView={{ scale: 1, rotate: -3 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.3 }}
          >
            <div className="border-4 border-crest-red px-6 py-2 font-mono text-crest-red text-xl md:text-2xl font-bold tracking-widest transform">
              TOP SECRET // SHIELD EYES ONLY
            </div>
          </motion.div>
          
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
            <span className="text-foreground">CAMPUS</span>{" "}
            <span className="text-crest-yellow">DOMINATION</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Strategic deployment zones for maximum brand visibility across the 600-acre LPU campus.
          </p>
        </motion.div>

        {/* Deployment Zones Table */}
        <motion.div
          className="max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card overflow-hidden border border-tactical-blue/30">
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 p-4 bg-tactical-blue/10 border-b border-tactical-blue/30">
              <div className="font-mono text-xs md:text-sm text-tactical-blue tracking-wider flex items-center gap-2">
                <Target className="w-4 h-4" /> DEPLOYMENT ZONE
              </div>
              <div className="font-mono text-xs md:text-sm text-tactical-blue tracking-wider hidden md:flex items-center gap-2">
                <Shield className="w-4 h-4" /> DIMENSION
              </div>
              <div className="font-mono text-xs md:text-sm text-tactical-blue tracking-wider hidden md:flex items-center gap-2">
                <FileText className="w-4 h-4" /> FORMAT
              </div>
              <div className="font-mono text-xs md:text-sm text-tactical-blue tracking-wider flex items-center gap-2">
                <Eye className="w-4 h-4" /> STRATEGIC IMPACT
              </div>
            </div>
            
            {/* Table Rows */}
            {deploymentZones.map((zone, index) => (
              <motion.div
                key={zone.name}
                className={`grid grid-cols-4 gap-4 p-4 border-b border-tactical-blue/10 cursor-pointer transition-all duration-300 ${
                  selectedZone === index ? 'bg-tactical-blue/20' : 'hover:bg-tactical-blue/5'
                }`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedZone(selectedZone === index ? null : index)}
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    className="w-10 h-10 rounded-full bg-background/50 flex items-center justify-center overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                  >
                    <img src={zone.icon} alt="" className="w-8 h-8 object-contain" />
                  </motion.div>
                  <span className="font-display text-sm md:text-base text-foreground font-semibold">
                    {zone.name}
                  </span>
                </div>
                <div className="font-mono text-sm text-muted-foreground hidden md:flex items-center">
                  {zone.dimension}
                </div>
                <div className="font-mono text-sm text-muted-foreground hidden md:flex items-center">
                  {zone.format}
                </div>
                <div className="font-display text-sm text-crest-yellow flex items-center">
                  {zone.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Classified Intel Section */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="w-full glass-card p-6 border border-crest-red/30 flex items-center justify-between group"
            onClick={() => setShowClassified(!showClassified)}
            whileHover={{ borderColor: 'hsl(0 100% 50% / 0.5)' }}
          >
            <div className="flex items-center gap-4">
              <motion.div
                className="w-12 h-12 rounded-full bg-crest-red/20 flex items-center justify-center"
                animate={{ 
                  scale: showClassified ? 1 : [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: showClassified ? 0 : Infinity }}
              >
                <Shield className="w-6 h-6 text-crest-red" />
              </motion.div>
              <div className="text-left">
                <div className="font-mono text-xs text-crest-red tracking-widest mb-1">
                  CLASSIFIED INTEL
                </div>
                <div className="font-display text-lg text-foreground">
                  Strategic Partnership Benefits
                </div>
              </div>
            </div>
            <motion.div
              animate={{ rotate: showClassified ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <X className={`w-6 h-6 ${showClassified ? 'text-crest-red' : 'text-muted-foreground'} transform rotate-45`} />
            </motion.div>
          </motion.button>
          
          <AnimatePresence>
            {showClassified && (
              <motion.div
                className="glass-card mt-2 p-8 border border-crest-red/20"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-display text-crest-yellow text-lg mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-crest-yellow rounded-full animate-pulse" />
                      REACH METRICS
                    </h4>
                    <ul className="space-y-3 font-mono text-sm text-muted-foreground">
                      <li className="flex justify-between">
                        <span>Daily Footfall:</span>
                        <span className="text-foreground">30,000+ Views</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Campus Coverage:</span>
                        <span className="text-foreground">600+ Acres</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Student Population:</span>
                        <span className="text-foreground">80,000+ Reach</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Event Duration:</span>
                        <span className="text-foreground">24 Hours</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-display text-crest-blue text-lg mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-crest-blue rounded-full animate-pulse" />
                      ACTIVATION ZONES
                    </h4>
                    <ul className="space-y-3 font-mono text-sm text-muted-foreground">
                      <li>• Unimall Prime Location</li>
                      <li>• Central Lawn Activations</li>
                      <li>• Digital Siege (Social Media)</li>
                      <li>• Mystery Basket Distribution</li>
                      <li>• Drone Show Branding</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            BECOME A STRATEGIC ALLY
          </motion.button>
          <p className="mt-4 text-sm italic text-muted-foreground">
            Join the alliance. Dominate the campus.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorMultiverse;
