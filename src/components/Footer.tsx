import { motion } from "framer-motion";
import { Mail, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-4 relative overflow-hidden border-t border-border">
      <div className="absolute inset-0 topographic-overlay" />
      
      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-crest-red via-crest-yellow to-crest-blue p-0.5">
                <div className="w-full h-full rounded-lg bg-background flex items-center justify-center">
                  <span className="font-display text-2xl font-black bg-gradient-to-br from-crest-red to-crest-blue bg-clip-text text-transparent">
                    C
                  </span>
                </div>
              </div>
              <span className="font-display text-xl font-bold tracking-wider text-foreground">
                CREST
              </span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              The ultimate technical showdown. Assemble your squad and prove your worth in the Endgame.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm tracking-widest text-foreground mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2">
              {["Register", "Rules", "Sponsors", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm tracking-widest text-foreground mb-4">
              CONNECT
            </h4>
            <div className="flex gap-4 mb-4">
              {[Instagram, Twitter, Linkedin, Mail].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-10 h-10 glass-card flex items-center justify-center rounded-lg hover:bg-glass-border transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5 text-muted-foreground" />
                </motion.a>
              ))}
            </div>
            <p className="text-muted-foreground text-sm">
              crest@lpu.edu
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-display text-xs tracking-wider text-muted-foreground">
            © 2025 CREST | LPU CAMPUS
          </p>
          <p className="font-display text-xs tracking-wider text-muted-foreground">
            WHATEVER IT TAKES
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
