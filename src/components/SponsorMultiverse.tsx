import { motion } from "framer-motion";
import { MapPin, Gift, Rocket, Globe, LucideIcon } from "lucide-react";

interface SponsorPerk {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  colorClass: string;
  bgClass: string;
  stats: string;
}

const sponsorPerks: SponsorPerk[] = [
  {
    title: "Mega-Exposure",
    subtitle: "Campus Domination",
    description: "18x12 ft Billboard placement at prime LPU locations. Your brand, impossible to miss across the 600-acre campus.",
    icon: MapPin,
    colorClass: "text-crest-red",
    bgClass: "bg-crest-red/20",
    stats: "600+ Acres",
  },
  {
    title: "Quantum Spawning",
    subtitle: "Mystery Baskets",
    description: "Premium product placements in themed mystery baskets. Create buzz with branded surprise elements throughout the event.",
    icon: Gift,
    colorClass: "text-crest-yellow",
    bgClass: "bg-crest-yellow/20",
    stats: "1000+ Baskets",
  },
  {
    title: "High-Octane Activation",
    subtitle: "Live Experiences",
    description: "Drone shows, bike parades, and live activations featuring your brand. Create unforgettable moments that go viral.",
    icon: Rocket,
    colorClass: "text-crest-blue",
    bgClass: "bg-crest-blue/20",
    stats: "50K+ Views",
  },
  {
    title: "360° Omnichannel",
    subtitle: "Digital + Ground",
    description: "Complete coverage across social media, campus ground force, and digital siege reaching 80,000+ LPU students.",
    icon: Globe,
    colorClass: "text-crest-green",
    bgClass: "bg-crest-green/20",
    stats: "80K+ Reach",
  },
];

const SponsorMultiverse = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/20" />
      
      <div className="container mx-auto relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-display text-sm tracking-widest text-crest-blue mb-4 block">
            SECTION 2
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-black tracking-wider mb-4">
            <span className="text-foreground">THE SPONSOR'S</span>{" "}
            <span className="text-crest-yellow">MULTIVERSE</span>
          </h2>
          <p className="font-display text-lg tracking-wider text-muted-foreground">
            BRAND DOMINATION AWAITS
          </p>
        </motion.div>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {sponsorPerks.map((perk, index) => {
            const Icon = perk.icon;
            return (
              <motion.div
                key={perk.title}
                className="glass-card p-8 relative overflow-hidden group hover:border-white/20 transition-colors duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="relative flex gap-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl ${perk.bgClass} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-8 h-8 ${perk.colorClass}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <span className={`font-display text-xs tracking-widest ${perk.colorClass}`}>
                      {perk.subtitle}
                    </span>
                    <h3 className="font-display text-xl font-bold text-foreground mt-1 mb-2">
                      {perk.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {perk.description}
                    </p>
                    <div className={`inline-block px-3 py-1 ${perk.bgClass} rounded-full`}>
                      <span className={`font-display text-sm tracking-wider ${perk.colorClass}`}>
                        {perk.stats}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-lg tracking-wider text-muted-foreground mb-6">
            BE THE HERO OF THE STORY
          </p>
          <motion.button
            className="px-10 py-4 bg-gradient-to-r from-crest-yellow to-crest-green font-display font-bold text-lg tracking-wider text-background rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(48 96% 53% / 0.5)" }}
            whileTap={{ scale: 0.98 }}
          >
            BECOME A SPONSOR
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorMultiverse;
