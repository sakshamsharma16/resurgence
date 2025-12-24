import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

const TechHUD = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseX.set(x);
      mouseY.set(y);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);
  
  const hud1X = useTransform(mouseX, [-1, 1], [-20, 20]);
  const hud1Y = useTransform(mouseY, [-1, 1], [-15, 15]);
  const hud2X = useTransform(mouseX, [-1, 1], [15, -15]);
  const hud2Y = useTransform(mouseY, [-1, 1], [10, -10]);
  const hud3X = useTransform(mouseX, [-1, 1], [-10, 10]);
  const hud3Y = useTransform(mouseY, [-1, 1], [-20, 20]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top-left HUD panel */}
      <motion.div
        className="absolute top-20 left-8 md:left-16"
        style={{ x: hud1X, y: hud1Y }}
      >
        <svg width="120" height="80" viewBox="0 0 120 80" className="text-crest-blue/40">
          <rect x="0" y="0" width="120" height="80" fill="none" stroke="currentColor" strokeWidth="1" />
          <line x1="0" y1="20" x2="30" y2="20" stroke="currentColor" strokeWidth="1" />
          <line x1="0" y1="40" x2="50" y2="40" stroke="currentColor" strokeWidth="1" />
          <line x1="0" y1="60" x2="35" y2="60" stroke="currentColor" strokeWidth="1" />
          <circle cx="100" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="100" cy="40" r="8" fill="currentColor" opacity="0.3" />
        </svg>
        <motion.div 
          className="absolute top-2 left-2 font-display text-[8px] text-crest-blue/60 tracking-widest"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          STARK INDUSTRIES
        </motion.div>
      </motion.div>
      
      {/* Top-right HUD panel */}
      <motion.div
        className="absolute top-32 right-8 md:right-16"
        style={{ x: hud2X, y: hud2Y }}
      >
        <svg width="100" height="100" viewBox="0 0 100 100" className="text-crest-red/40">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 3" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
          <motion.circle 
            cx="50" cy="50" r="20" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <line x1="50" y1="5" x2="50" y2="25" stroke="currentColor" strokeWidth="1" />
          <line x1="50" y1="75" x2="50" y2="95" stroke="currentColor" strokeWidth="1" />
          <line x1="5" y1="50" x2="25" y2="50" stroke="currentColor" strokeWidth="1" />
          <line x1="75" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="1" />
        </svg>
      </motion.div>
      
      {/* Bottom-left HUD with data */}
      <motion.div
        className="absolute bottom-32 left-8 md:left-16"
        style={{ x: hud3X, y: hud3Y }}
      >
        <svg width="150" height="60" viewBox="0 0 150 60" className="text-crest-yellow/40">
          <rect x="0" y="0" width="150" height="60" fill="none" stroke="currentColor" strokeWidth="1" />
          <rect x="5" y="5" width="140" height="50" fill="currentColor" opacity="0.05" />
          {/* Bar graph animation */}
          {[10, 30, 50, 70, 90, 110, 130].map((x, i) => (
            <motion.rect
              key={i}
              x={x}
              y={45}
              width="8"
              height="10"
              fill="currentColor"
              opacity="0.6"
              animate={{ 
                height: [10, 15 + Math.random() * 25, 10],
                y: [45, 35 - Math.random() * 15, 45]
              }}
              transition={{ duration: 1 + Math.random(), repeat: Infinity, delay: i * 0.1 }}
            />
          ))}
        </svg>
        <div className="font-display text-[8px] text-crest-yellow/60 tracking-widest mt-1">
          SYSTEM ANALYSIS
        </div>
      </motion.div>
      
      {/* Corner brackets */}
      <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-crest-blue/30" />
      <div className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-crest-blue/30" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-crest-blue/30" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-crest-blue/30" />
    </div>
  );
};

export default TechHUD;
