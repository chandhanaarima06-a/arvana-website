import { motion } from 'framer-motion';

/**
 * Workflow — Automate. Simplify. Grow.
 *
 * Connected four-stage circular 3D workflow:
 *   1. Customer Connects
 *   2. ARVANA Understands
 *   3. Automation Takes Over
 *   4. Business Grows
 *
 * Central Golden Neural Core with four orbiting nodes, golden connecting paths,
 * smooth circular motion.
 */
const STAGES = [
  { id: 'connect', label: 'Customer Connects', desc: 'A customer messages you on WhatsApp or Instagram.' },
  { id: 'understands', label: 'ARVANA Understands', desc: 'AI reads intent, qualifies the lead, and extracts details.' },
  { id: 'automates', label: 'Automation Takes Over', desc: 'Follow-ups, booking, and CRM updates happen automatically.' },
  { id: 'grows', label: 'Business Grows', desc: 'You focus on strategy while conversations convert.' },
];

export function Workflow() {
  return (
    <section id="workflow" className="section-dark py-20 lg:py-32 relative overflow-hidden">
      {/* Central Golden Neural Core — continuous brand element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
        <div
          className="w-40 h-40 rounded-full border-2 border-gold/30 flex items-center justify-center bg-black/40 shadow-[0_0_50px_rgba(212,175,55,0.25)]"
        >
          <span className="text-gold text-3xl font-bold">A</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center mb-20 lg:mb-28">
          <motion.h2
            className="text-[clamp(1.8rem,4vw,2.6rem)] font-[600] leading-[1.2] tracking-tight text-warm-white mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Automate. Simplify. Grow.
          </motion.h2>
          <motion.p
            className="text-arvana-grey text-[16px] leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Let intelligent automation handle repetitive work while you focus on growing your business.
          </motion.p>
        </div>

        {/* Circular workflow stage */}
        <div className="relative w-full max-w-md mx-auto h-[420px] lg:h-[560px] flex items-center justify-center">
          {/* Four orbiting nodes */}
          {STAGES.map((stage, i) => {
            const angle = (i * 90) * (Math.PI / 180);
            return (
              <WorkflowNode key={stage.id} stage={stage} angle={angle} index={i} />
            );
          })}
          {/* Connecting golden ring */}
          <motion.div
            className="absolute inset-0 rounded-full border border-gold/15"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        {/* Stage labels around the circle (desktop) */}
        <div className="hidden lg:flex justify-between items-center mt-20 max-w-xl mx-auto px-10 relative">
          {STAGES.map((stage, i) => (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-8 h-8 rounded-full border border-gold/30 bg-black flex items-center justify-center text-gold font-bold text-xs">
                {i + 1}
              </div>
              <span className="text-warm-white text-[13px] font-[500] text-center leading-tight">
                {stage.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowNode({
  stage,
  angle,
  index,
}: {
  stage: (typeof STAGES)[number];
  angle: number;
  index: number;
}) {
  const radius = 110;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <motion.div
      className="absolute top-1/2 left-1/2 flex flex-col items-center gap-2"
      style={{ transform: `translate(${x}px, ${y}px) translate(-50%, -50%)` }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.1 }}
    >
      <div className="w-14 h-14 rounded-full border-2 border-gold/40 bg-black flex items-center justify-center relative group">
        <span className="text-gold text-lg font-bold">{stage.label.charAt(0)}</span>
        {/* Subtle node illumination pulse */}
        <motion.div
          className="absolute inset-0 rounded-full border border-gold/40"
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
      </div>
      <span className="text-warm-white text-[12px] font-[500] text-center leading-tight w-[90px]">
        {stage.label}
      </span>
    </motion.div>
  );
}
