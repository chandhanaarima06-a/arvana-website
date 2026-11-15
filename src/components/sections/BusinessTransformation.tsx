import { motion } from 'framer-motion';

/**
 * BusinessTransformation — 3D Human Transformation
 *
 * Visual story: overwhelmed character → golden ARVANA arrow → confident character.
 * Same character identity across all three stages (clay/cotton-like material).
 * Built with CSS 3D + Framer Motion — no WebGL dependency.
 */
const PROBLEM_INDICATORS = [
  { label: 'Unanswered messages', count: '12+' },
  { label: 'Pending follow-ups', count: '8' },
  { label: 'Repetitive tasks', count: '20+/day' },
  { label: 'Missed opportunities', count: '5/week' },
];

const SUCCESS_INDICATORS = [
  { label: 'Growth bars', desc: 'Rising revenue trend' },
  { label: 'Completed tasks', desc: 'Handled automatically' },
  { label: 'Customer engagement', desc: '24/7 responsive' },
  { label: 'Success metrics', desc: 'Bookings up' },
];

export function BusinessTransformation() {
  return (
    <section id="business-transformation" className="section-dark py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center mb-16 lg:mb-20">
          <motion.h2
            className="text-[clamp(1.8rem,4vw,2.6rem)] font-[600] leading-[1.2] tracking-tight text-warm-white mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            From overwhelmed to in control
          </motion.h2>
          <motion.p
            className="text-arvana-grey text-[16px] leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            The same business, transformed — from juggling everything manually to running on autopilot.
          </motion.p>
        </div>

        {/* Three-stage visual story: Sad → ARVANA → Happy */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-stretch">
          {/* Stage 1 — Business Problem (Sad) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="text-arvana-grey/50 text-[12px] font-semibold uppercase tracking-wider mb-2">
              Stage 1 — The Problem
            </div>
            <ClayCharacter mood="sad" />
            <div className="flex flex-col gap-2 text-center max-w-xs">
              {PROBLEM_INDICATORS.map((p) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center justify-center gap-2 text-[12px] text-arvana-grey/70"
                >
                  <div className="w-2 h-2 rounded-full bg-arvana-grey/40" />
                  <span>{p.label}</span>
                  <span className="text-gold font-[500]">{p.count}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stage 2 — Transformation (ARVANA arrow) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="text-arvana-grey/50 text-[12px] font-semibold uppercase tracking-wider mb-2">
              Stage 2 — Transformation
            </div>
            <GoldenArrow />
            <div className="text-[12px] text-arvana-grey/60 text-center tracking-wide uppercase font-semibold">
              ARVANA automation
            </div>
          </motion.div>

          {/* Stage 3 — Business Success (Happy) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="text-arvana-grey/50 text-[12px] font-semibold uppercase tracking-wider mb-2">
              Stage 3 — Success
            </div>
            <ClayCharacter mood="happy" />
            <div className="flex flex-col gap-2 text-center max-w-xs">
              {SUCCESS_INDICATORS.map((s) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center justify-center gap-2 text-[12px] text-arvana-grey/70"
                >
                  <div className="w-2 h-2 rounded-full bg-gold/30" />
                  <span>{s.label}</span>
                  <span className="text-gold/70 font-[500] text-xs">{s.desc}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-16 lg:mt-24 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-arvana-grey text-[15px] leading-relaxed max-w-2xl mx-auto italic"
          >
            ‘Same character. Same business. Completely different feeling.’
          </motion.p>
        </div>
      </div>
    </section>
  );
}

/*──────────────────────────────────────────────
  Clay/Cotton-like 3D human character
  ─────────────────────────────────────────────*/
function ClayCharacter({ mood }: { mood: 'sad' | 'happy' }) {
  const skin = '#E8E4DA';

  return (
    <motion.div
      className="relative w-[220px] h-[260px] flex items-end justify-center"
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
    >
      {/* Shadow beneath character */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-2 bg-black/20 rounded-full blur-sm"
        style={mood === 'happy' ? { transform: 'scaleX(0.8)', opacity: 0.5 } : { transform: 'scaleX(1)', opacity: 0.35 }}
      />

      {/* Body */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-14 rounded-full"
        style={{
          background: mood === 'happy' ? '#D4AF37' : skin,
          boxShadow: `inset 0 -6px 12px ${mood === 'happy' ? 'rgba(0,0,0,0.25)' : 'rgba(199,178,154,0.4)'}`,
        }}
      />

      {/* Head */}
      <motion.div
        className="absolute bottom-[14px] left-1/2 -translate-x-1/2 w-14 h-14 rounded-full flex items-center justify-center"
        style={{
          background: skin,
          boxShadow: 'inset 0 -4px 8px rgba(199,178,154,0.4)',
          transform: mood === 'happy' ? 'translateY(-4px)' : 'translateY(0)',
        }}
        animate={mood === 'happy' ? { y: [0, -4, 0] } : { y: 0 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Eyes */}
        <div className="flex gap-2">
          {mood === 'sad' ? (
            <>
              <Eye state="sad" />
              <Eye state="sad" />
            </>
          ) : (
            <>
              <Eye state="happy" />
              <Eye state="happy" />
            </>
          )}
        </div>
        {/* Mouth */}
        <div
          className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-1.5 rounded-full"
          style={{
            background: '#B5942B',
            transform: mood === 'sad' ? 'scaleY(-1)' : 'scaleY(1)',
          }}
        />
      </motion.div>
    </motion.div>
  );
}

function Eye({ state }: { state: 'sad' | 'happy' }) {
  return (
    <motion.div
      className="w-3 h-3 rounded-full bg-arvana-grey/60 relative"
      animate={
        state === 'sad'
          ? { scaleY: [1, 0.6, 1] }
          : { scale: [1, 1.15, 1], rotate: [0, 5, 0] }
      }
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

/*──────────────────────────────────────────────
  Golden Arrow — ARVANA transformation connector
  ─────────────────────────────────────────────*/
function GoldenArrow() {
  return (
    <motion.div
      className="relative w-[200px] h-[200px] flex items-center justify-center"
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 200 200"
        style={{ filter: 'drop-shadow(0 0 10px rgba(212,175,55,0.6))' }}
      >
        <defs>
          <linearGradient id="arrowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#B5942B" />
          </linearGradient>
        </defs>
        <path
          d="M40 100 Q 100 20 160 100 Q 100 180 40 100 Z"
          fill="none"
          stroke="url(#arrowGrad)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-[dash_2s_linear_infinite]"
          style={{ strokeDashoffset: '20' }}
        />
        <polygon points="150,95 170,100 150,105" fill="#D4AF37" />
        <text x="155" y="115" fontSize="16" fontWeight="700" fill="#D4AF37" textAnchor="middle" letterSpacing="-1">
          A
        </text>
        {[0, 1, 2, 3].map((i) => (
          <circle
            key={i}
            cx={60 + i * 30}
            cy={100}
            r="2.5"
            fill="#D4AF37"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}
      </svg>
    </motion.div>
  );
}
