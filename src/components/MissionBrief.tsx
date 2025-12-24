import { motion } from "framer-motion";

const MissionBrief = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Top Secret watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <span className="font-display text-[120px] md:text-[200px] font-black tracking-widest text-foreground rotate-[-15deg]">
          TOP SECRET
        </span>
      </div>
      
      <div className="container mx-auto relative">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Classification header */}
          <motion.div
            className="inline-block px-4 py-1 border border-muted/50 mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="font-display text-xs tracking-[0.3em] text-muted-foreground">
              S.H.I.E.L.D. MISSION BRIEF
            </span>
          </motion.div>
          
          {/* The quote */}
          <motion.blockquote
            className="text-sm md:text-base italic text-muted-foreground leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="text-2xl text-muted-foreground/50">"</span>
            In an era defined by the great market dislocation, we do not merely observe the fallout; we engineer the response. The recession was the snap that stalled the timeline, but innovation is the surge that restores it. To our sponsors: you are the vibranium in this shield, the arc reactors powering the next generation. Together, at the Innovation Studio, we are not just hosting a hackathon—we are assembling a legacy that outlasts the downturn. Secure the timeline. Reclaim the victory.
            <span className="text-2xl text-muted-foreground/50">"</span>
          </motion.blockquote>
          
          {/* Signature */}
          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="h-px w-12 bg-muted" />
            <span className="font-display text-xs tracking-widest text-muted-foreground/80">
              — Directives from CREST Command
            </span>
            <div className="h-px w-12 bg-muted" />
          </motion.div>
          
          {/* Classification footer */}
          <motion.div
            className="mt-8 pt-8 border-t border-muted/30"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <span className="font-display text-[10px] tracking-[0.2em] text-muted-foreground/50">
              CLEARANCE LEVEL: OMEGA • DOCUMENT CLASS: CONFIDENTIAL
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionBrief;
