import { motion } from 'framer-motion';

/**
 * StillHandlingManually
 *
 * Four problem cards preserved as its own section, immediately after the
 * human transformation. Dark cards with subtle gold accents.
 */
const PROBLEMS = [
  {
    title: 'Missed Inquiries',
    desc: 'Customer messages on WhatsApp and Instagram go unanswered after hours, and potential buyers move on.',
  },
  {
    title: 'Time-Consuming Follow-ups',
    desc: 'Teams spend hours chasing the same leads instead of closing real opportunities.',
  },
  {
    title: 'Repetitive Work',
    desc: 'The same questions — pricing, availability, timing — are answered manually again and again.',
  },
  {
    title: 'Slower Business Growth',
    desc: 'Without automation, enquiries pile up and conversions slip through the cracks.',
  },
];

export function StillHandlingManually() {
  return (
    <section id="problems" className="section-light py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center mb-16 lg:mb-20">
          <motion.h2
            className="text-[clamp(1.8rem,4vw,2.6rem)] font-[600] leading-[1.2] tracking-tight text-warm-white mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Still Handling Everything Manually?
          </motion.h2>
          <motion.p
            className="text-arvana-grey text-[16px] leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Missed customer messages, repetitive tasks, and endless follow-ups can slow down your business.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {PROBLEMS.map((p) => (
            <ProblemCard key={p.title} problem={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProblemCard({ problem }: { problem: (typeof PROBLEMS)[number] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="card p-7 group relative overflow-hidden"
    >
      {/* Top-left gold accent corner */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gold/20" />
      <div className="absolute top-0 left-0 h-1 w-full bg-gold/20" />

      <div className="w-10 h-10 rounded-xl bg-gold/5 flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors">
        <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={problemIcon(problem.title)}
          />
        </svg>
      </div>

      <h3 className="text-warm-white text-base font-[600] mb-3 group-hover:text-gold transition-colors">
        {problem.title}
      </h3>
      <p className="text-arvana-grey text-[14px] leading-relaxed">{problem.desc}</p>

      <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-arvana-grey/50 text-[12px] font-[500] uppercase tracking-wider">
        <span className="w-1.5 h-1.5 rounded-full bg-gold/40" />
        Solvable with automation
      </div>
    </motion.div>
  );
}

function problemIcon(title: string): string {
  switch (title) {
    case 'Missed Inquiries':
      return 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z';
    case 'Time-Consuming Follow-ups':
      return 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z';
    case 'Repetitive Work':
      return 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4';
    default:
      return 'M13 10V3L4 14h7v7l9-11h-7z';
  }
}
