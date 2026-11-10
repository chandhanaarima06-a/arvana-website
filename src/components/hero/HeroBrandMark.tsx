import { motion } from 'framer-motion';

const LAYERS = 28;

export function HeroBrandMark() {
  return (
    <div className="relative w-[210px] h-[210px] lg:w-[320px] lg:h-[320px] flex items-center justify-center">
      {/* Lime ambient glow behind the mark — the one colour moment */}
      <motion.div
        className="absolute inset-0 rounded-full bg-arvana-lime/30 blur-[110px]"
        animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-0 rounded-full bg-arvana-lime/16 blur-[80px]"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* 3D extruded "A" brand mark — dark front, lime extrusion */}
      <motion.div
        className="relative z-10 preserve-3d"
        animate={{
          rotateY: [0, 12, 0],
          y: [0, -12, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        whileHover={{ rotateY: 20 }}
      >
        {/* Extrusion sides — back to front */}
        {[...Array(LAYERS)].map((_, i) => {
          const z = -(LAYERS - i);
          const isFront = i === LAYERS - 1;
          return (
            <div key={i} className="absolute inset-0 flex items-center justify-center">
              <svg
                viewBox="0 0 32 32"
                className="w-full h-full"
                style={{ transform: `translate3d(0, 0, ${z}px)` }}
              >
                <path
                  d="M16 2 L5 30 H8 L10 18 H11 L16 26 H14 L20 18 H21 L23 30 H26 Z"
                  fill={isFront ? "#0B0B0C" : "#FFFFFF"}
                  fillOpacity={isFront ? 1 : 0.55}
                />
              </svg>
            </div>
          );
        })}
      </motion.div>

      {/* Orbiting connection nodes — lime detail */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: [0, 360, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-arvana-offwhite/70"
            style={{
              left: `calc(50% + ${Math.cos((i / 4) * Math.PI * 2) * 58}px)`,
              top: `calc(50% + ${Math.sin((i / 4) * Math.PI * 2) * 58}px)`,
            }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.35,
              ease: "linear",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
