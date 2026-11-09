import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export function HeroOrb() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!sceneRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;
      sceneRef.current.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <motion.div
      className="orbital-scene"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
    >
      <div ref={sceneRef} className="orbital-core" style={{ transition: 'transform 0.15s ease-out' }}>
        {/* Rings */}
        <div className="orbital-ring orbital-ring--1" />
        <div className="orbital-ring orbital-ring--2" />
        <div className="orbital-ring orbital-ring--3" />
        <div className="orbital-ring orbital-ring--4" />

        {/* Center sphere */}
        <div className="orbital-sphere" />

        {/* Floating dot particles */}
        <div className="orbital-dot" style={{ top: '10%', left: '50%' }} />
        <div className="orbital-dot orbital-dot--2" style={{ top: '70%', right: '15%' }} />
        <div className="orbital-dot orbital-dot--3" style={{ bottom: '20%', left: '20%' }} />
      </div>
    </motion.div>
  );
}
