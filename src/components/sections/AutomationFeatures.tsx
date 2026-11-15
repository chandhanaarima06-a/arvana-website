import { motion } from 'framer-motion';

/**
 * AutomationFeatures
 *
 * Actual automation capabilities — not "why choose us" fluff. Each feature
 * shows what ARVANA can do, clearly positioned as a capability (not an
 * already-deployed guarantee).
 */
const FEATURES = [
  {
    title: 'WhatsApp Automation',
    desc: 'Automate customer conversations on WhatsApp — answer enquiries, qualify leads, and book appointments around the clock.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <path d="M12 2a10 10 0 11-10 10 10 10 0 0110-10zm0-2a12 12 0 10-12 12 12 12 0 0012-12zM11 10l2 2m0 0 2 2m-2-2l-2-2m14 8h-2l-3-3m0 0-3 3m3 3h-2" />
      </svg>
    ),
  },
  {
    title: '24/7 Customer Enquiry Handling',
    desc: 'Every message gets an instant reply — day or night, weekend or holiday — so no enquiry is ever left waiting.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <circle cx="12" cy="12" r="7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 1v6m0 6v6m-6-3h6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Automated Follow-ups',
    desc: 'Timely, contextual follow-up messages keep conversations warm and move leads toward booking and purchase.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Lead Capture and Qualification',
    desc: 'Capture leads from every chat, score them HOT / WARM / COLD, and route the right ones to your team first.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Appointment Scheduling',
    desc: 'Customers book site visits, consultations, or calls directly through chat — no back-and-forth phone tag.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    title: 'CRM Automation',
    desc: 'Every conversation and lead is written to your CRM automatically — no manual data entry, one source of truth.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="14 2 14 8 20 8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Customer Communication',
    desc: 'Unified inbox for WhatsApp and Instagram — every message, reply, and follow-up in one place.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <path d="M3 8l7.89 5.26a2 2 0 002.22-2L11 8a2 2 0 014 0l5.11 3.47a2 2 0 002.22-2L13 8a2 2 0 00-4-4L5 8a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Business Workflow Automation',
    desc: 'Custom automation for quoting, job scheduling, follow-ups, and handoffs — so standard software never falls short.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 16l4-8 4 4 5-10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function AutomationFeatures() {
  return (
    <section id="features" className="section-light py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center mb-16 lg:mb-20">
          <motion.h2
            className="text-[clamp(1.8rem,4vw,2.6rem)] font-[600] leading-[1.2] tracking-tight text-warm-white mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            What ARVANA automates for you
          </motion.h2>
          <motion.p
            className="text-arvana-grey text-[16px] leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Configurable automation capabilities for the work that repeats every day in your business.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} feature={f} />
          ))}
        </motion.div>

        <p className="mt-12 text-center text-[12px] text-arvana-grey/50 italic max-w-lg mx-auto">
          Capabilities shown are configurable — ARVANA sets them up around your business, not a one-size-fits-all product.
        </p>
      </div>
    </section>
  );
}

function FeatureCard({ feature }: { feature: (typeof FEATURES)[number] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="card p-7 group relative"
    >
      <div className="w-10 h-10 rounded-xl bg-gold/5 flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors">
        {feature.icon}
      </div>
      <h3 className="text-warm-white text-base font-[600] mb-3 group-hover:text-gold transition-colors">
        {feature.title}
      </h3>
      <p className="text-arvana-grey text-[14px] leading-relaxed">{feature.desc}</p>
    </motion.div>
  );
}
