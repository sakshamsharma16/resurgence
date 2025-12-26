import { motion } from "framer-motion";
import avengersRoles from "@/assets/avengers-roles.png";
import DataStreamBackground from "./DataStreamBackground";

interface Avenger {
  name: string;
  role: string;
  catchphrase: string;
  colorClass: string;
  bgClass: string;
  glowClass: string;
  borderClass: string;
  description: string;
  imagePosition: { x: number; y: number; size: number };
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
    imagePosition: { x: 0, y: 0, size: 50 },
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
    imagePosition: { x: 50, y: 0, size: 50 },
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
    imagePosition: { x: 0, y: 33.33, size: 50 },
  },
  {
    name: "UI/UX Design",
    role: "Mjolnir",
    catchphrase: '"Only the worthy can design this."',
    colorClass: "text-muted-foreground",
    bgClass: "bg-muted/30",
    glowClass: "glow-blue",
    borderClass: "hover:border-muted-foreground",
    description: "The craftsman who shapes beautiful user experiences.",
    imagePosition: { x: 50, y: 33.33, size: 50 },
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
    imagePosition: { x: 0, y: 66.66, size: 50 },
  },
  {
    name: "Data / AI",
    role: "Vision",
    catchphrase: '"I have analyzed 14 million datasets."',
    colorClass: "text-crest-green",
    bgClass: "bg-crest-green/20",
    glowClass: "glow-green",
    borderClass: "hover:border-crest-green",
    description: "The visionary who harnesses the power of machine learning.",
    imagePosition: { x: 50, y: 66.66, size: 50 },
  },
];

const AvengersGrid = () => {
  return (
    <section id="avengers" className="relative min-h-screen py-24 px-4 overflow-hidden">
      {/* Data Stream Background */}
      <DataStreamBackground />

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
              className={`group relative glass-card p-6 cursor-pointer transition-all duration-500 border-2 border-transparent ${avenger.borderClass}`}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${avenger.glowClass} blur-xl -z-10`} />
              
              {/* Badge Image from sprite */}
              <div className="relative w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full">
                <div 
                  className="w-[200%] h-[300%] bg-contain bg-no-repeat"
                  style={{ 
                    backgroundImage: `url(${avengersRoles})`,
                    backgroundPosition: `${avenger.imagePosition.x}% ${avenger.imagePosition.y}%`,
                    transform: 'scale(1.2)',
                  }}
                />
                {/* Glowing ring */}
                <motion.div
                  className={`absolute inset-0 rounded-full border-2 ${avenger.borderClass.replace('hover:', '')} opacity-0 group-hover:opacity-100`}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

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
              <p className="text-sm italic text-muted-foreground text-center">
                {avenger.catchphrase}
              </p>

              {/* Scanning line effect on hover */}
              <motion.div
                className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-tactical-blue to-transparent opacity-0 group-hover:opacity-100"
                initial={{ top: "0%" }}
                whileHover={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvengersGrid;
