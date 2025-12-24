import { motion } from "framer-motion";
import { Shield, Cpu, Bug, Target, Sparkles, Zap, LucideIcon } from "lucide-react";

interface Avenger {
  name: string;
  role: string;
  catchphrase: string;
  colorClass: string;
  bgClass: string;
  glowClass: string;
  borderClass: string;
  icon: LucideIcon;
  description: string;
}

const avengers: Avenger[] = [
  {
    name: "Captain America",
    role: "Scrum Master",
    catchphrase: '"I can code this all day."',
    colorClass: "text-crest-blue",
    bgClass: "bg-crest-blue/20",
    glowClass: "glow-blue",
    borderClass: "hover:border-crest-blue",
    icon: Shield,
    description: "The strategic leader who keeps the team aligned and on track.",
  },
  {
    name: "Iron Man",
    role: "Lead Architect",
    catchphrase: '"I am... the architect."',
    colorClass: "text-crest-red",
    bgClass: "bg-crest-red/20",
    glowClass: "glow-red",
    borderClass: "hover:border-crest-red",
    icon: Cpu,
    description: "The genius who designs the system's core infrastructure.",
  },
  {
    name: "Spider-Man",
    role: "Frontend Ninja",
    catchphrase: '"With great code comes great responsibility."',
    colorClass: "text-crest-red",
    bgClass: "bg-crest-red/20",
    glowClass: "glow-red",
    borderClass: "hover:border-crest-red",
    icon: Bug,
    description: "The agile developer who crafts pixel-perfect interfaces.",
  },
  {
    name: "Black Widow",
    role: "Security Expert",
    catchphrase: '"I have zero vulnerabilities."',
    colorClass: "text-crest-green",
    bgClass: "bg-crest-green/20",
    glowClass: "glow-green",
    borderClass: "hover:border-crest-green",
    icon: Target,
    description: "The specialist who fortifies systems against all threats.",
  },
  {
    name: "Dr. Strange",
    role: "AI/ML Wizard",
    catchphrase: '"I have seen 14 million algorithms."',
    colorClass: "text-crest-yellow",
    bgClass: "bg-crest-yellow/20",
    glowClass: "glow-yellow",
    borderClass: "hover:border-crest-yellow",
    icon: Sparkles,
    description: "The visionary who harnesses the power of machine learning.",
  },
  {
    name: "Thor",
    role: "Backend Warrior",
    catchphrase: '"Bring me... the API!"',
    colorClass: "text-crest-blue",
    bgClass: "bg-crest-blue/20",
    glowClass: "glow-blue",
    borderClass: "hover:border-crest-blue",
    icon: Zap,
    description: "The powerhouse who commands server-side operations.",
  },
];

const AvengersGrid = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden topographic-overlay">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
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
          {avengers.map((avenger, index) => {
            const Icon = avenger.icon;
            return (
              <motion.div
                key={avenger.name}
                className={`group relative glass-card p-6 cursor-pointer transition-all duration-500 border-2 border-transparent ${avenger.borderClass}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${avenger.glowClass} blur-xl -z-10`} />
                
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${avenger.bgClass} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${avenger.colorClass}`} />
                </div>

                {/* Content */}
                <h3 className={`font-display text-xl font-bold mb-1 ${avenger.colorClass}`}>
                  {avenger.name}
                </h3>
                <p className="font-display text-sm tracking-wider text-muted-foreground mb-3">
                  {avenger.role}
                </p>
                <p className="text-sm text-foreground/80 mb-4">
                  {avenger.description}
                </p>
                <p className="text-sm italic text-muted-foreground">
                  {avenger.catchphrase}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AvengersGrid;
