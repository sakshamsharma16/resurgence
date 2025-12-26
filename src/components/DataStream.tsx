import { motion } from "framer-motion";
import { useMemo } from "react";

const generateHexData = () => {
  const lines = [];
  for (let i = 0; i < 50; i++) {
    const line = Array(8)
      .fill(0)
      .map(() => Math.floor(Math.random() * 256).toString(16).padStart(2, '0').toUpperCase())
      .join(' ');
    lines.push(line);
  }
  return lines;
};

interface DataStreamProps {
  side: 'left' | 'right';
}

const DataStream = ({ side }: DataStreamProps) => {
  const data = useMemo(() => generateHexData(), []);
  
  return (
    <div 
      className={`fixed ${side === 'left' ? 'left-2' : 'right-2'} top-12 bottom-0 w-24 overflow-hidden pointer-events-none z-10 hidden lg:block`}
    >
      <motion.div
        className="space-y-1"
        animate={{ y: [0, -1000] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...data, ...data].map((line, i) => (
          <div 
            key={i} 
            className={`font-mono text-[8px] text-tactical-blue/20 ${side === 'right' ? 'text-right' : ''}`}
          >
            {line}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default DataStream;
