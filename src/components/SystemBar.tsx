import { motion } from "framer-motion";
import { Shield, Lock, Activity, Wifi } from "lucide-react";
import { useState, useEffect } from "react";

const SystemBar = () => {
  const [uptime, setUptime] = useState("99.9");
  
  useEffect(() => {
    const interval = setInterval(() => {
      setUptime((99.5 + Math.random() * 0.5).toFixed(1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-8 bg-background/90 backdrop-blur-md border-b border-tactical-blue/20 flex items-center justify-between px-4"
      initial={{ y: -40 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Shield className="w-3 h-3 text-crest-yellow" />
          <span className="font-mono text-[10px] tracking-widest text-crest-yellow">
            CLEARANCE: OMEGA
          </span>
        </div>
        <div className="w-[1px] h-4 bg-tactical-blue/30" />
        <div className="flex items-center gap-2">
          <Activity className="w-3 h-3 text-tactical-green" />
          <span className="font-mono text-[10px] tracking-widest text-tactical-green">
            UPTIME: {uptime}%
          </span>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Lock className="w-3 h-3 text-tactical-blue" />
          </motion.div>
          <span className="font-mono text-[10px] tracking-widest text-tactical-blue">
            ENCRYPTION: ACTIVE
          </span>
        </div>
        <div className="w-[1px] h-4 bg-tactical-blue/30" />
        <div className="flex items-center gap-2">
          <Wifi className="w-3 h-3 text-tactical-green" />
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
            CREST-NET v2.0
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default SystemBar;
