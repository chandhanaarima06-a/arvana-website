import { motion } from 'framer-motion';

const BENEFITS = [
  {
    title: '24/7 Availability',
    desc: 'Never miss a lead again. Your AI assistant answers every enquiry — day or night, weekend or holiday.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 6v6m0 0v6m-3-3h6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Instant Response',
    desc: 'Reply to customers in seconds, not hours. Fast responses mean more bookings and closed deals.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'CRM Integration',
    desc: 'Connects directly with your WhatsApp, Instagram, and CRM — no complex setup or disruption.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="14 2 14 8 20 8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Intelligent Conversations',
    desc: 'AI qualifies leads, books appointments, and follows up automatically — turning chats into customers.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const containerV = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardV = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export function WhyArvana() {
  return (
    <section id="about" className="section-light py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-18"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-[600] leading-tight tracking-tight text-arvana-white">
            Why ARVANA
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {BENEFITS.map((b) => (
            <motion.div
              key={b.title}
              variants={cardV}
              className="card p-7 flex flex-col gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-white/[0.06] text-arvana-grey">
                {b.icon}
              </div>
              <h3 className="text-arvana-white text-base font-[600]">{b.title}</h3>
              <p className="text-arvana-grey text-[14px] leading-relaxed flex-1">{b.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="section-divider" />
      </div>
    </section>
  );
}
