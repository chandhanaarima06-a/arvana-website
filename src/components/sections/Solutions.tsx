import { motion } from 'framer-motion';

const SERVICES = [
  {
    title: 'WhatsApp Automation',
    desc: 'Automate customer conversations on WhatsApp — answer enquiries, qualify leads, and book appointments 24/7 without adding headcount.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <path d="M12 2a10 10 0 11-10 10 10 10 0 0110-10zm0-2a12 12 0 10-12 12 12 12 0 0012-12zM11 10l2 2m0 0 2 2m-2-2l-2-2m14 8h-2l-3-3m0 0-3 3m3 3h-2" />
      </svg>
    ),
  },
  {
    title: 'Instagram Automation',
    desc: 'Respond to Instagram DMs and story replies instantly, nurture followers into customers, and keep every conversation organized.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <rect x="2" y="2" width="20" height="20" rx="5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="18" cy="6" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'AI Customer Assistants',
    desc: 'AI assistants that understand your business, answer questions accurately, and hand off to your team when a human touch is needed.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2m0 18v2m-9-11h2m18 0h2m-4.22-6.78l-1.42 1.42M6.64 17.36l-1.42 1.42m0-14.14l1.42 1.42m10.72 10.72l1.42 1.42" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Lead Management',
    desc: 'Capture every lead from WhatsApp, Instagram, and your website in one place — qualify, assign, and track them to closure.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'CRM Integration',
    desc: 'Connect WhatsApp, Instagram, and your existing CRM so leads flow directly into your pipeline — no manual data entry.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2m0 18v2m-9-11h2m18 0h2m-4.22-6.78l-1.42 1.42M6.64 17.36l-1.42 1.42m0-14.14l1.42 1.42m10.72 10.72l1.42 1.42" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Business Workflow Automation',
    desc: 'Build custom automation for quoting, job scheduling, follow-ups, and handoffs — so standard software never falls short.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 16l4-8 4 4 5-10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const containerV = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardV = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export function Solutions() {
  return (
    <section id="services" className="section-dark py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 lg:mb-20">
          <motion.h2
            className="text-[clamp(1.8rem,4vw,2.6rem)] font-[600] leading-[1.2] tracking-tight mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Core services
          </motion.h2>
          <motion.p
            className="text-arvana-grey text-[16px] leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            Practical automation for the operations that run your business — from first conversation to closed customer.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {SERVICES.map((s) => (
            <motion.div
              key={s.title}
              variants={cardV}
              className="card p-7"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-white/[0.06] text-arvana-grey mb-5">
                {s.icon}
              </div>
              <h3 className="text-white text-base font-[600] mb-3">{s.title}</h3>
              <p className="text-arvana-grey text-[14px] leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
