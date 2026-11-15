import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useState, useCallback, useEffect } from 'react';

/**
 * GoldenNeuralCore
 *
 * ARVANA's signature 3D visual: a metallic gold central sphere with an
 * ARVANA "A" symbol, orbital rings, and subtle golden particles. Rotates
 * slowly and responds gently to cursor movement on desktop.
 *
 * Built with CSS 3D transforms — no WebGL dependency.
 */
export function GoldenNeuralCore({ className }: { className?: string }) {
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.5 });

  const handleMove = useCallback(
    (e: MouseEvent) => {
      setPointer({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    },
    []
  );

  useEffect(() => {
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [handleMove]);

  const mx = useMotionValue(pointer.x);
  const my = useMotionValue(pointer.y);
  const mxS = useSpring(mx, { stiffness: 60, damping: 22 });
  const myS = useSpring(my, { stiffness: 60, damping: 22 });

  const rotateY = useTransform(mxS, [0, 1], [-18, 18]);
  const rotateX = useTransform(myS, [0, 1], [-12, 12]);

  return (
    <motion.div
      className={cn(
        'relative w-full max-w-[340px] aspect-square mx-auto flex items-center justify-center',
        className
      )}
      style={{ rotateX, rotateY }}
      animate={{ rotateZ: [0, 360] }}
      transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
    >
      {/* Central metallic gold sphere */}
      <div className="relative z-10 w-full h-full rounded-full flex items-center justify-center border-2 border-gold/60 bg-black/40 shadow-[0_0_40px_rgba(212,175,55,0.35)]">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            boxShadow: 'inset 0 0 30px rgba(255,255,255,0.25), inset 0 -8px 20px rgba(0,0,0,0.6)',
          }}
        />
        {/* ARVANA "A" symbol */}
        <div
          className="text-gold text-[clamp(2rem,8vw,5rem)] font-bold leading-none select-none"
          style={{ filter: 'drop-shadow(0 0 6px rgba(212,175,55,0.5))' }}
        >
          A
        </div>
      </div>

      {/* Orbital rings */}
      {[2.2, 3.4, 4.6].map((scale, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border border-gold/20"
          style={{
            transform: `scale(${scale})`,
            opacity: i % 2 === 0 ? 0.5 : 0.35,
          }}
          animate={{ rotate: [0, 360] }}
          transition={{
            duration: 20 + i * 8,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Golden particles orbiting the core */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      >
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(212,175,55,0.8)]"
            style={{
              left: `calc(50% + ${Math.cos((i / 6) * Math.PI * 2) * 70}px)`,
              top: `calc(50% + ${Math.sin((i / 6) * Math.PI * 2) * 70}px)`,
              opacity: 0.6 + (i % 3) * 0.15,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.4,
              ease: 'linear',
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(' ');
}
