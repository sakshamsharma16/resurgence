import { motion, AnimatePresence } from "framer-motion";
import { X, Target, Shield, FileText, Eye, MapPin, Radar } from "lucide-react";
import { useState } from "react";

// Avenger logo imports
import doctorStrangeLogo from "@/assets/doctor-strange-logo.png";
import spiderManLogo from "@/assets/spider-man-logo.png";
import thorLogo from "@/assets/thor-logo.png";
import blackWidowLogo from "@/assets/black-widow-logo.png";
import ironManLogo from "@/assets/iron-man-logo.png";
import captainAmericaLogo from "@/assets/captain-america-logo.png";
import campusBlueprint from "@/assets/campus-blueprint.png";

interface DeploymentZone {
  name: string;
  dimension: string;
  format: string;
  impact: string;
  icon: string;
  coords: string;
}

interface MapNode {
  id: string;
  name: string;
  position: { x: number; y: number };
  sizes: string[];
}

const deploymentZones: DeploymentZone[] = [
  { name: "Titan Billboard", dimension: "18' x 12'", format: "4K Vinyl/LED", impact: "100% Campus Saturation", icon: doctorStrangeLogo, coords: "31.2548° N" },
  { name: "Guardian Pylons", dimension: "10' x 20'", format: "Portrait", impact: "First Contact Entry Point", icon: spiderManLogo, coords: "75.7051° E" },
  { name: "Grid A1", dimension: "24\" x 36\"", format: "High-Gloss", impact: "Hub Lobby Dominance", icon: thorLogo, coords: "31.2552° N" },
  { name: "Grid A2", dimension: "18\" x 24\"", format: "Matte Finish", impact: "Food Court & Social Hubs", icon: blackWidowLogo, coords: "75.7057° E" },
  { name: "The Intel Packet", dimension: "4\" x 6\"", format: "Cardstock", impact: "Direct Personal Interaction", icon: ironManLogo, coords: "31.2560° N" },
];

const mapNodes: MapNode[] = [
  { id: "unimall", name: "Unimall Megasite", position: { x: 35, y: 30 }, sizes: ["18' x 12' LED", "10' x 20' Vinyl", "6' x 4' Backlit"] },
  { id: "maingate", name: "Main Gate Pylons", position: { x: 15, y: 55 }, sizes: ["10' x 20' Portrait", "8' x 12' Standard"] },
  { id: "innovation", name: "Innovation Studio", position: { x: 60, y: 65 }, sizes: ["A4 Flyers", "A1 Posters", "Digital Screens"] },
  { id: "hostel", name: "Hostel Corridor", position: { x: 75, y: 40 }, sizes: ["A3 Strategic", "Table Tents"] },
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
  const [blueprintMode, setBlueprintMode] = useState(false);
  const [selectedNode, setSelectedNode] = useState<MapNode | null>(null);

  return (
    <section className={`py-24 px-4 relative overflow-hidden min-h-screen transition-all duration-500 ${blueprintMode ? 'bg-[#0a1628]' : ''}`}>
      {/* SHIELD/TOP SECRET Background */}
      <div className={`absolute inset-0 transition-all duration-500 ${blueprintMode ? 'bg-[#0a1628]' : 'bg-gradient-to-b from-background via-[hsl(220,30%,6%)] to-background'}`} />
      
      {/* Classified Grid Pattern */}
      <div 
        className={`absolute inset-0 transition-opacity duration-500 ${blueprintMode ? 'opacity-30' : 'opacity-10'}`}
        style={{ 
          backgroundImage: `
            linear-gradient(${blueprintMode ? '#daa520' : 'hsl(var(--tactical-blue))'} 1px, transparent 1px),
            linear-gradient(90deg, ${blueprintMode ? '#daa520' : 'hsl(var(--tactical-blue))'} 1px, transparent 1px)
          `, 
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
      <div className={`absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 ${blueprintMode ? 'border-[#daa520]/60' : 'border-tactical-blue/60'}`} />
      <div className={`absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 ${blueprintMode ? 'border-[#daa520]/60' : 'border-tactical-blue/60'}`} />
      <div className={`absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 ${blueprintMode ? 'border-[#daa520]/60' : 'border-tactical-blue/60'}`} />
      <div className={`absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 ${blueprintMode ? 'border-[#daa520]/60' : 'border-tactical-blue/60'}`} />
      
      {/* Radar sweep effect */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          background: `conic-gradient(from 0deg, transparent 0deg, ${blueprintMode ? 'rgba(218,165,32,0.15)' : 'hsl(var(--tactical-blue) / 0.1)'} 30deg, transparent 60deg)`,
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
      
      <div className="container mx-auto relative z-10">
        {/* Header with Blueprint Toggle */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className={`font-display text-xs tracking-[0.4em] mb-4 block transition-colors ${blueprintMode ? 'text-[#daa520]' : 'text-tactical-blue'}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            PHASE 4: ALLIANCE DOSSIER
          </motion.span>
          <h2 className="font-display text-3xl md:text-5xl font-black tracking-wider mb-4">
            <span className="text-foreground">CAMPUS</span>{" "}
            <span className={`transition-colors ${blueprintMode ? 'text-[#daa520]' : 'text-crest-yellow'}`}>DOMINATION</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            Strategic deployment zones for maximum brand visibility across the 600-acre LPU campus.
          </p>
          
          {/* Blueprint Mode Toggle */}
          <motion.button
            onClick={() => setBlueprintMode(!blueprintMode)}
            className={`inline-flex items-center gap-3 px-6 py-3 rounded-lg font-mono text-sm tracking-wider transition-all duration-300 border ${
              blueprintMode 
                ? 'bg-[#daa520]/20 border-[#daa520] text-[#daa520]' 
                : 'bg-tactical-blue/10 border-tactical-blue/50 text-tactical-blue hover:border-tactical-blue'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Radar className="w-4 h-4" />
            {blueprintMode ? 'EXIT BLUEPRINT MODE' : 'ACTIVATE BLUEPRINT MODE'}
            <motion.div
              className={`w-2 h-2 rounded-full ${blueprintMode ? 'bg-[#daa520]' : 'bg-tactical-blue'}`}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.button>
        </motion.div>

        {/* Interactive Blueprint Map - Reduced Size */}
        <motion.div
          className="max-w-2xl mx-auto mb-16 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={`relative p-4 glass-card overflow-hidden transition-all duration-500 ${
            blueprintMode ? 'border-[#daa520]/50 bg-[#0a1628]/80' : 'border-tactical-blue/30'
          }`}>
            {/* Scanning animation overlay */}
            <motion.div
              className="absolute inset-0 pointer-events-none z-10"
              style={{
                background: `linear-gradient(180deg, transparent 0%, ${blueprintMode ? 'rgba(218,165,32,0.1)' : 'hsl(var(--tactical-blue) / 0.1)'} 50%, transparent 100%)`,
                backgroundSize: '100% 200%',
              }}
              animate={{ backgroundPosition: ['0% 0%', '0% 200%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Locating pulse rings */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10"
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-20 h-20 rounded-full border ${blueprintMode ? 'border-[#daa520]' : 'border-tactical-blue'}`}
                  style={{ left: -40, top: -40 }}
                  animate={{ 
                    scale: [1, 3, 5],
                    opacity: [0.6, 0.3, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: i * 1,
                    ease: "easeOut"
                  }}
                />
              ))}
            </motion.div>
            
            {/* Blueprint Image with scanning effect */}
            <motion.div
              className="relative"
              animate={{ 
                filter: blueprintMode 
                  ? ['brightness(1)', 'brightness(1.1)', 'brightness(1)']
                  : ['brightness(0.9)', 'brightness(1)', 'brightness(0.9)'],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <img 
                src={campusBlueprint} 
                alt="LPU Campus Blueprint" 
                className="w-full h-auto object-contain"
                style={{
                  filter: blueprintMode 
                    ? 'sepia(100%) hue-rotate(10deg) saturate(200%) brightness(0.9)' 
                    : 'sepia(100%) hue-rotate(160deg) saturate(300%) brightness(0.8)',
                }}
              />
              
              {/* Interactive Map Nodes */}
              {mapNodes.map((node, i) => (
                <motion.div
                  key={node.id}
                  className="absolute cursor-pointer z-20"
                  style={{ left: `${node.position.x}%`, top: `${node.position.y}%` }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                <motion.div
                    className={`relative w-6 h-6 flex items-center justify-center`}
                    whileHover={{ scale: 1.3 }}
                    onClick={() => setSelectedNode(selectedNode?.id === node.id ? null : node)}
                  >
                    {/* Ping animation */}
                    <motion.div
                      className={`absolute inset-0 rounded-full ${blueprintMode ? 'bg-tactical-blue' : 'bg-[#daa520]'}`}
                      animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <MapPin className={`w-5 h-5 relative z-10 ${blueprintMode ? 'text-tactical-blue' : 'text-[#daa520]'} drop-shadow-lg`} />
                  </motion.div>
                  
                  {/* Tooltip */}
                  <AnimatePresence>
                    {selectedNode?.id === node.id && (
                      <motion.div
                        className={`absolute left-8 top-0 min-w-48 p-3 rounded-lg z-30 ${
                          blueprintMode ? 'bg-[#0a1628] border border-[#daa520]/50' : 'bg-background/95 border border-tactical-blue/50'
                        }`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                      >
                        <h4 className={`font-display text-xs tracking-wider mb-2 ${blueprintMode ? 'text-[#daa520]' : 'text-tactical-blue'}`}>
                          {node.name}
                        </h4>
                        <div className="space-y-1">
                          {node.sizes.map((size, si) => (
                            <div key={si} className="font-mono text-[10px] text-muted-foreground flex items-center gap-2">
                              <span className={`w-1 h-1 rounded-full ${blueprintMode ? 'bg-[#daa520]' : 'bg-tactical-blue'}`} />
                              {size}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
              
              {/* Scan line across image */}
              <motion.div
                className={`absolute left-0 right-0 h-[1px] ${blueprintMode ? 'bg-[#daa520]' : 'bg-tactical-blue'} opacity-60 z-10`}
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
            
            {/* Corner brackets */}
            <div className={`absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 ${blueprintMode ? 'border-[#daa520]' : 'border-tactical-blue'}`} />
            <div className={`absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 ${blueprintMode ? 'border-[#daa520]' : 'border-tactical-blue'}`} />
            <div className={`absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 ${blueprintMode ? 'border-[#daa520]' : 'border-tactical-blue'}`} />
            <div className={`absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 ${blueprintMode ? 'border-[#daa520]' : 'border-tactical-blue'}`} />
            
            {/* GPS Coordinates */}
            <motion.div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className={`font-mono text-[10px] tracking-widest px-3 py-1 rounded ${
                blueprintMode ? 'bg-[#0a1628]/90 text-[#daa520]' : 'bg-background/80 text-tactical-blue'
              }`}>
                31.2552° N, 75.7057° E // 600 ACRES
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Deployment Zones Table with Enhanced Impact */}
        <motion.div
          className="max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={`glass-card overflow-hidden transition-colors ${blueprintMode ? 'border-[#daa520]/30' : 'border-tactical-blue/30'}`}>
            {/* Table Header */}
            <div className={`grid grid-cols-4 gap-4 p-4 border-b transition-colors ${
              blueprintMode ? 'bg-[#daa520]/10 border-[#daa520]/30' : 'bg-tactical-blue/10 border-tactical-blue/30'
            }`}>
              <div className={`font-mono text-xs md:text-sm tracking-wider flex items-center gap-2 ${blueprintMode ? 'text-[#daa520]' : 'text-tactical-blue'}`}>
                <Target className="w-4 h-4" /> DEPLOYMENT ZONE
              </div>
              <div className={`font-mono text-xs md:text-sm tracking-wider hidden md:flex items-center gap-2 ${blueprintMode ? 'text-[#daa520]' : 'text-tactical-blue'}`}>
                <Shield className="w-4 h-4" /> DIMENSION
              </div>
              <div className={`font-mono text-xs md:text-sm tracking-wider hidden md:flex items-center gap-2 ${blueprintMode ? 'text-[#daa520]' : 'text-tactical-blue'}`}>
                <FileText className="w-4 h-4" /> FORMAT
              </div>
              <div className={`font-mono text-xs md:text-sm tracking-wider flex items-center gap-2 ${blueprintMode ? 'text-[#daa520]' : 'text-tactical-blue'}`}>
                <Eye className="w-4 h-4" /> STRATEGIC IMPACT
              </div>
            </div>
            
            {/* Table Rows */}
            {deploymentZones.map((zone, index) => (
              <motion.div
                key={zone.name}
                className={`grid grid-cols-4 gap-4 p-4 cursor-pointer transition-all duration-300 ${
                  blueprintMode ? 'border-b border-[#daa520]/10' : 'border-b border-tactical-blue/10'
                } ${
                  selectedZone === index 
                    ? (blueprintMode ? 'bg-[#daa520]/20' : 'bg-tactical-blue/20')
                    : (blueprintMode ? 'hover:bg-[#daa520]/5' : 'hover:bg-tactical-blue/5')
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
                  <div>
                    <span className="font-display text-sm md:text-base text-foreground font-semibold block">
                      {zone.name}
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground hidden md:block">
                      {zone.coords}
                    </span>
                  </div>
                </div>
                <div className="font-mono text-sm text-muted-foreground hidden md:flex items-center">
                  {zone.dimension}
                </div>
                <div className="font-mono text-sm text-muted-foreground hidden md:flex items-center">
                  {zone.format}
                </div>
                <div className="font-display text-sm text-amber-500 font-bold flex items-center">
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
            className={`w-full glass-card p-6 flex items-center justify-between group transition-colors ${
              blueprintMode ? 'border-[#daa520]/30' : 'border-crest-red/30'
            }`}
            onClick={() => setShowClassified(!showClassified)}
          >
            <div className="flex items-center gap-4">
              <motion.div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${blueprintMode ? 'bg-[#daa520]/20' : 'bg-crest-red/20'}`}
                animate={{ 
                  scale: showClassified ? 1 : [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: showClassified ? 0 : Infinity }}
              >
                <Shield className={`w-6 h-6 ${blueprintMode ? 'text-[#daa520]' : 'text-crest-red'}`} />
              </motion.div>
              <div className="text-left">
                <div className={`font-mono text-xs tracking-widest mb-1 ${blueprintMode ? 'text-[#daa520]' : 'text-crest-red'}`}>
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
              <X className={`w-6 h-6 ${showClassified ? (blueprintMode ? 'text-[#daa520]' : 'text-crest-red') : 'text-muted-foreground'} transform rotate-45`} />
            </motion.div>
          </motion.button>
          
          <AnimatePresence>
            {showClassified && (
              <motion.div
                className={`glass-card mt-2 p-8 ${blueprintMode ? 'border-[#daa520]/20' : 'border-crest-red/20'}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className={`font-display text-lg mb-4 flex items-center gap-2 ${blueprintMode ? 'text-[#daa520]' : 'text-crest-yellow'}`}>
                      <span className={`w-2 h-2 rounded-full animate-pulse ${blueprintMode ? 'bg-[#daa520]' : 'bg-crest-yellow'}`} />
                      REACH METRICS
                    </h4>
                    <ul className="space-y-3 font-mono text-sm text-muted-foreground">
                      <li className="flex justify-between">
                        <span>Daily Footfall:</span>
                        <span className="text-amber-500 font-bold">30,000+ Views</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Campus Coverage:</span>
                        <span className="text-amber-500 font-bold">600+ Acres</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Student Population:</span>
                        <span className="text-amber-500 font-bold">80,000+ Reach</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Event Duration:</span>
                        <span className="text-amber-500 font-bold">24 Hours</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className={`font-display text-lg mb-4 flex items-center gap-2 ${blueprintMode ? 'text-[#daa520]' : 'text-crest-blue'}`}>
                      <span className={`w-2 h-2 rounded-full animate-pulse ${blueprintMode ? 'bg-[#daa520]' : 'bg-crest-blue'}`} />
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

        {/* Arc Reactor CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSco9ETN7FLpt2og1G0oD0S-Um8JwC-yqtRdMpK_hai9K9HB6g/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block px-10 py-4 font-display font-bold text-lg tracking-wider text-background rounded-lg overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Arc reactor gradient background */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-crest-yellow via-amber-400 to-crest-yellow"
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ backgroundSize: '200% 100%' }}
            />
            {/* Pulsing outer glow */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-crest-yellow to-amber-500 rounded-lg blur-md opacity-60 group-hover:opacity-100 transition-opacity"
              animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            {/* Rotating ring effect */}
            <motion.div
              className="absolute inset-0 border-2 border-background/30 rounded-lg"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <span className="relative z-10">BECOME A STRATEGIC ALLY</span>
          </motion.a>
          <p className="mt-4 text-sm italic text-muted-foreground">
            Join the alliance. Dominate the campus.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorMultiverse;