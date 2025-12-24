import { motion } from "framer-motion";
import { Users, Palette, Shield, Globe, LucideIcon } from "lucide-react";

interface CommandUnit {
  title: string;
  role: string;
  description: string;
  icon: LucideIcon;
  count: string;
  colorClass: string;
  bgClass: string;
  dotClass: string;
}

const commandStructure: CommandUnit[] = [
  {
    title: "The Directors",
    role: "Founders",
    description: "The masterminds behind CREST, bringing together technology and innovation to create extraordinary experiences.",
    icon: Shield,
    count: "Core Team",
    colorClass: "text-crest-red",
    bgClass: "bg-crest-red/10",
    dotClass: "bg-crest-red",
  },
  {
    title: "The Intel Division",
    role: "Creatives",
    description: "Visual architects crafting the aesthetic universe. Every pixel, every frame, designed to perfection.",
    icon: Palette,
    count: "Design Squad",
    colorClass: "text-crest-yellow",
    bgClass: "bg-crest-yellow/10",
    dotClass: "bg-crest-yellow",
  },
  {
    title: "The Strike Team",
    role: "Volunteers",
    description: "LPU's finest boots on the ground. The force multiplier that makes every event legendary.",
    icon: Users,
    count: "500+ Members",
    colorClass: "text-crest-blue",
    bgClass: "bg-crest-blue/10",
    dotClass: "bg-crest-blue",
  },
  {
    title: "World Council",
    role: "Students",
    description: "The lifeblood of our mission. 80,000+ agents ready to participate, compete, and dominate.",
    icon: Globe,
    count: "80,000+ Agents",
    colorClass: "text-crest-green",
    bgClass: "bg-crest-green/10",
    dotClass: "bg-crest-green",
  },
];

const stats = [
  { value: "24", label: "HOURS", colorClass: "text-crest-red" },
  { value: "80K+", label: "STUDENTS", colorClass: "text-crest-yellow" },
  { value: "600", label: "ACRE CAMPUS", colorClass: "text-crest-blue" },
  { value: "∞", label: "POSSIBILITIES", colorClass: "text-crest-green" },
];

const ShieldCommand = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Scanline overlay */}
      <div className="absolute inset-0 scanline-effect pointer-events-none opacity-50" />
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="container mx-auto relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block px-6 py-2 glass-card mb-6"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="font-display text-sm tracking-widest text-crest-green">
              [ ACCESS GRANTED ]
            </span>
          </motion.div>
          
          <h2 className="font-display text-3xl md:text-5xl font-black tracking-wider mb-4">
            <span className="text-foreground">S.H.I.E.L.D.</span>{" "}
            <span className="text-crest-blue">COMMAND</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The organizational structure behind the ultimate technical showdown
          </p>
        </motion.div>

        {/* Command Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {commandStructure.map((unit, index) => {
            const Icon = unit.icon;
            return (
              <motion.div
                key={unit.title}
                className="glass-card p-8 relative overflow-hidden group"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Dossier corner */}
                <div className="absolute top-0 right-0 w-24 h-24">
                  <div className={`absolute top-2 right-2 px-3 py-1 ${unit.bgClass} rounded-sm`}>
                    <span className={`font-display text-[10px] tracking-widest ${unit.colorClass}`}>
                      {unit.role.toUpperCase()}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  {/* Icon container with scanline effect */}
                  <div className={`relative w-20 h-20 rounded-lg ${unit.bgClass} flex items-center justify-center shrink-0 overflow-hidden`}>
                    <div className="absolute inset-0 scanline-effect opacity-30" />
                    <Icon className={`w-10 h-10 ${unit.colorClass}`} />
                  </div>

                  <div className="flex-1">
                    <h3 className={`font-display text-xl font-bold ${unit.colorClass} mb-2`}>
                      {unit.title}
                    </h3>
                    <p className="text-foreground/80 text-sm mb-4">
                      {unit.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${unit.dotClass} animate-pulse`} />
                      <span className="font-display text-sm tracking-wider text-muted-foreground">
                        {unit.count}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Counter */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card p-6 text-center">
              <span className={`font-display text-4xl md:text-5xl font-black ${stat.colorClass}`}>
                {stat.value}
              </span>
              <p className="font-display text-xs tracking-widest text-muted-foreground mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ShieldCommand;
