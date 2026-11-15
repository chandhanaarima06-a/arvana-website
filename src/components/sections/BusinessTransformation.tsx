import { motion } from 'framer-motion';

/**
 * BusinessTransformation
 *
 * Before / after business-impact comparison.
 * No invented statistics, percentages, or guaranteed outcomes — just a clear
 * visual contrast of how the business operates before and after ARVANA.
 */
const BEFORE = [
  'Missed customer enquiries after hours',
  'Delayed replies that lose bookings',
  'Manual lead tracking in scattered chats',
  'Forgotten follow-ups that go cold',
  'Customer conversations spread across tools',
];

const AFTER = [
  'Instant automated responses, 24/7',
  'Qualified leads routed to your team',
  'Every conversation captured in one CRM',
  'Follow-ups that happen on time',
  'One place for every lead and message',
];

export function BusinessTransformation() {
  return (
    <section id="business-transformation" className="section-light py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-[600] leading-[1.2] tracking-tight text-arvana-white mb-6">
            What changes when conversations run themselves
          </h2>
          <p className="text-arvana-grey text-[16px] leading-relaxed max-w-2xl mx-auto">
            ARVANA doesn’t replace your team — it removes the manual work that
            slows them down.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Before */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-arvana-grey/50" />
              <span className="text-arvana-grey/60 text-[12px] font-semibold uppercase tracking-wider">
                Before ARVANA
              </span>
            </div>
            <div className="space-y-4">
              {BEFORE.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-arvana-card"
                >
                  <div className="mt-2 flex-shrink-0 w-2 h-2 rounded-full bg-arvana-grey/40" />
                  <p className="text-arvana-offwhite text-[14px] leading-relaxed">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Divider arrow */}
          <div className="hidden lg:flex flex-col items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-arvana-cerulean flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(22,139,255,0.45)]">
              <svg className="w-5 h-5 text-arvana-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            <span className="text-arvana-cerulean text-[11px] font-bold tracking-wider uppercase">
              Automation
            </span>
          </div>

          {/* After */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-arvana-cerulean/40" />
              <span className="text-arvana-cerulean text-[12px] font-semibold uppercase tracking-wider">
                After ARVANA
              </span>
            </div>
            <div className="space-y-4">
              {AFTER.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-start gap-4 p-4 rounded-xl border border-arvana-cerulean/20 bg-arvana-surface"
                >
                  <div className="mt-2 flex-shrink-0 w-2 h-2 rounded-full bg-arvana-cerulean" />
                  <p className="text-white text-[14px] leading-relaxed">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
