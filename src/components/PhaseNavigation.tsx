import { motion } from "framer-motion";

interface Phase {
  id: string;
  name: string;
  label: string;
}

interface PhaseNavigationProps {
  phases: Phase[];
  activePhase: string;
  onPhaseChange: (phaseId: string) => void;
}

const PhaseNavigation = ({ phases, activePhase, onPhaseChange }: PhaseNavigationProps) => {
  const activeIndex = phases.findIndex(p => p.id === activePhase);
  
  return (
    <motion.nav
      className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.3 }}
    >
      <div className="flex flex-col gap-4 relative">
        {/* Glow Trail connecting dots */}
        <div className="absolute left-[7px] top-0 w-0.5 h-full">
          {/* Base line */}
          <div className="absolute inset-0 bg-muted-foreground/10" />
          {/* Active glow trail */}
          <motion.div
            className="absolute left-0 w-full bg-tactical-blue"
            style={{ 
              top: 0,
              boxShadow: '0 0 10px hsl(var(--tactical-blue)), 0 0 20px hsl(var(--tactical-blue))'
            }}
            animate={{ 
              height: `${(activeIndex / (phases.length - 1)) * 100}%`
            }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          />
        </div>
        
        {phases.map((phase, index) => {
          const isActive = activePhase === phase.id;
          const isPassed = index <= activeIndex;
          
          return (
            <button
              key={phase.id}
              onClick={() => onPhaseChange(phase.id)}
              className="group relative flex items-center gap-3"
            >
              {/* Dot indicator */}
              <motion.div
                className={`relative w-4 h-4 rounded-full border-2 transition-all duration-300 z-10 ${
                  isActive
                    ? "border-tactical-blue bg-tactical-blue shadow-[0_0_15px_hsl(var(--tactical-blue))]"
                    : isPassed
                    ? "border-tactical-blue/70 bg-tactical-blue/50"
                    : "border-muted-foreground/50 bg-background group-hover:border-tactical-blue/50"
                }`}
                animate={isActive ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 1.5, repeat: isActive ? Infinity : 0 }}
              >
                {/* Inner pulse for active */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-tactical-blue"
                    animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                )}
              </motion.div>

              {/* Label */}
              <span
                className={`font-display text-xs tracking-wider transition-all duration-300 ${
                  isActive
                    ? "text-tactical-blue"
                    : isPassed
                    ? "text-tactical-blue/60"
                    : "text-muted-foreground/50 group-hover:text-muted-foreground"
                }`}
              >
                {phase.label}
              </span>

              {/* Active glow background */}
              {isActive && (
                <motion.div
                  className="absolute -inset-2 rounded-lg bg-tactical-blue/10"
                  layoutId="phase-active"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default PhaseNavigation;
