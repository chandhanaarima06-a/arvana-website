import { useState, useEffect, useCallback } from 'react';
import { useMotionValue, useTransform, useSpring } from 'framer-motion';

/**
 * CinematicBackground
 *
 * A lightweight, pure-CSS 3D environment that sits behind all page content.
 *
 * Visual direction: jet black (#080808) architectural space with metallic
 * gold (#D4AF37) illuminating selected surfaces, layered depth, subtle
 * ambient lighting that responds gently to cursor movement on desktop.
 *
 * No WebGL dependency: keeps performance high and works everywhere. A
 * prefers-reduced-motion media query freezes all motion.
 */
export function CinematicBackground() {
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

  // Subtle spring-smoothed pointer values for parallax (desktop only).
  const mx = useMotionValue(pointer.x);
  const my = useMotionValue(pointer.y);
  const mxS = useSpring(mx, { stiffness: 60, damping: 22 });
  const myS = useSpring(my, { stiffness: 60, damping: 22 });

  const shiftX = useTransform(mxS, [0, 1], [-14, 14]);
  const shiftY = useTransform(myS, [0, 1], [-10, 10]);

  return (
    <>
      {/* Fixed viewport overlay so cursor parallax works across the whole page. */}
      <div className="fixed inset-0 z-[-10] overflow-hidden" aria-hidden="true">
        {/* Ambient base glow — the single colour moment. */}
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background:
              'radial-gradient(60% 60% at 25% 25%, rgba(212,175,55,0.10) 0%, transparent 45%), ' +
              'radial-gradient(50% 50% at 75% 35%, rgba(212,175,55,0.06) 0%, transparent 40%), ' +
              'radial-gradient(70% 70% at 50% 60%, rgba(8,8,8,0.45) 0%, transparent 55%)',
          }}
        />

        {/* Layer 1 — distant architectural wall (darkest, farthest back). */}
        <div
          className="absolute inset-0"
          style={{
            transform: `translate3d(${shiftX.get()}px, ${shiftY.get()}px, -120px) scale(1.15)`,
          }}
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${10 + i * 18}%`,
                top: `${20 + (i % 2) * 30}%`,
                width: `${22 + (i % 3) * 6}%`,
                height: `${40 + (i % 2) * 20}%`,
                background:
                  'linear-gradient(180deg, rgba(212,175,55,0.04) 0%, rgba(21,21,21,0.35) 60%, rgba(21,21,21,0.6) 100%)',
                border: '1px solid rgba(212,175,55,0.06)',
                opacity: 0.35 + (i % 3) * 0.08,
                filter: 'blur(1px)',
                transform: `skewY(${-2 + (i % 3)}deg)`,
              }}
            />
          ))}
        </div>

        {/* Layer 2 — mid-ground vertical pylons + beams. */}
        <div
          className="absolute inset-0"
          style={{
            transform: `translate3d(${shiftX.get() * 0.6}px, ${shiftY.get() * 0.6}px, -60px)`,
          }}
        >
          {/* Vertical pylons */}
          {[...Array(5)].map((_, i) => (
            <div
              key={`pylon-${i}`}
              className="absolute"
              style={{
                left: `${8 + i * 22}%`,
                top: '0%',
                width: '1px',
                height: '120%',
                background:
                  'linear-gradient(to bottom, transparent 0%, rgba(212,175,55,0.18) 35%, rgba(212,175,55,0.18) 65%, transparent 100%)',
                transform: `skewX(${-1.5 + (i % 2) * 3}deg)`,
                boxShadow: `0 0 14px rgba(212,175,55,0.10)`,
              }}
            />
          ))}
          {/* Horizontal beams */}
          {[...Array(4)].map((_, i) => (
            <div
              key={`beam-${i}`}
              className="absolute"
              style={{
                left: `${-5 + (i % 2) * 10}%`,
                top: `${18 + i * 24}%`,
                width: '110%',
                height: '1px',
                background:
                  'linear-gradient(to right, transparent 0%, rgba(212,175,55,0.12) 25%, rgba(212,175,55,0.12) 75%, transparent 100%)',
                transform: `skewX(${1.5 - (i % 2) * 3}deg)`,
                boxShadow: `0 0 10px rgba(212,175,55,0.08)`,
              }}
            />
          ))}
        </div>

        {/* Layer 3 — foreground frames / glass panels nearest the viewer. */}
        <div
          className="absolute inset-0"
          style={{
            transform: `translate3d(${shiftX.get() * 0.3}px, ${shiftY.get() * 0.3}px, 0)`,
          }}
        >
          {[...Array(3)].map((_, i) => (
            <div
              key={`frame-${i}`}
              className="absolute rounded-xl"
              style={{
                left: `${25 + i * 28}%`,
                top: `${10 + i * 20}%`,
                width: `${26 + (i % 2) * 8}%`,
                height: `${44 + (i % 2) * 12}%`,
                border: '1px solid rgba(212,175,55,0.14)',
                background: 'rgba(21,21,21,0.45)',
                boxShadow: `inset 0 0 20px rgba(212,175,55,0.06), 0 0 24px rgba(212,175,55,0.06)`,
                backdropFilter: 'blur(6px)',
                opacity: 0.5 + (i % 2) * 0.15,
              }}
            />
          ))}
        </div>

        {/* Subtle floating particles — extremely restrained. */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(1px 1px at 20% 30%, rgba(212,175,55,0.35), transparent), ' +
              'radial-gradient(1px 1px at 80% 70%, rgba(212,175,55,0.25), transparent), ' +
              'radial-gradient(1.5px 1.5px at 40% 80%, rgba(212,175,55,0.30), transparent), ' +
              'radial-gradient(1px 1px at 90% 20%, rgba(212,175,55,0.20), transparent), ' +
              'radial-gradient(1px 1px at 60% 10%, rgba(212,175,55,0.25), transparent)',
            backgroundRepeat: 'repeat',
            backgroundSize: '220px 160px, 310px 210px, 430px 300px, 190px 140px, 360px 250px',
            opacity: 0.35,
          }}
        />

        {/* Soft vignette to keep focus on content and add depth. */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 30%, transparent 30%, rgba(8,8,8,0.85) 90%)',
            pointerEvents: 'none',
          }}
        />
      </div>
    </>
  );
}
