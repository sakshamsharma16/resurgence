import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Swords, Infinity, Hand, LucideIcon } from "lucide-react";

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
    id: 1,
    title: "CIVIL WAR",
    subtitle: "ROUND 1",
    theme: "The Flex Protocol",
    description: "Internal rivalry begins. Teams compete head-to-head in rapid-fire coding challenges. Only the strongest will advance to face the greater threat.",
    gradientClass: "from-crest-red to-crest-blue",
    icon: Swords,
    accentColorClass: "text-crest-red",
    accentBgClass: "bg-crest-red/20",
    features: ["1v1 Code Battles", "Algorithm Showdown", "Speed Debugging"],
  },
  {
    id: 2,
    title: "INFINITY WAR",
    subtitle: "ROUND 2",
    theme: "The Manifestation",
    description: "The stakes are raised. Build something extraordinary as teams race to manifest their vision before the snap erases half the competition.",
    gradientClass: "from-purple-600 to-crest-yellow",
    icon: Infinity,
    accentColorClass: "text-crest-yellow",
    accentBgClass: "bg-crest-yellow/20",
    features: ["Full Stack Sprint", "Integration Challenge", "The Snap Elimination"],
  },
  {
    id: 3,
    title: "ENDGAME",
    subtitle: "ROUND 3",
    theme: "The Ultimate Clutch",
    description: "Whatever it takes. The final survivors face the ultimate challenge. Only one team will wield the Nano-Gauntlet of victory.",
    gradientClass: "from-slate-700 to-teal-500",
    icon: Hand,
    accentColorClass: "text-crest-green",
    accentBgClass: "bg-crest-green/20",
    features: ["24-Hour Grand Finale", "Industry Jury", "The Gauntlet Award"],
  },
];

const SagaTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-24 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-black tracking-wider mb-4">
            <span className="text-foreground">THE THREE-STAGE</span>{" "}
            <span className="text-crest-yellow">SAGA</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Journey through three epic rounds. Each battle brings you closer to legendary status.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-muted">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-crest-red via-crest-yellow to-crest-green"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Timeline items */}
          <div className="space-y-24">
            {rounds.map((round, index) => {
              const Icon = round.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={round.id}
                  className={`relative flex items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${round.gradientClass} flex items-center justify-center`}
                      whileInView={{ scale: [0.8, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-6 h-6 text-foreground" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? "md:pr-16" : "md:pl-16"}`}>
                    <div className="glass-card p-8 relative overflow-hidden group">
                      {/* Background gradient on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${round.gradientClass} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                      
                      {/* Round number */}
                      <span className={`font-display text-sm tracking-widest ${round.accentColorClass}`}>
                        {round.subtitle}
                      </span>
                      
                      {/* Title */}
                      <h3 className={`font-display text-3xl md:text-4xl font-black bg-gradient-to-r ${round.gradientClass} bg-clip-text text-transparent mt-2 mb-1`}>
                        {round.title}
                      </h3>
                      
                      {/* Theme */}
                      <p className="font-display text-sm tracking-wider text-muted-foreground mb-4">
                        {round.theme}
                      </p>
                      
                      {/* Description */}
                      <p className="text-foreground/80 mb-6">
                        {round.description}
                      </p>
                      
                      {/* Features */}
                      <div className="flex flex-wrap gap-2">
                        {round.features.map((feature) => (
                          <span
                            key={feature}
                            className={`px-3 py-1 text-xs font-display tracking-wider ${round.accentBgClass} ${round.accentColorClass} rounded-full`}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SagaTimeline;
