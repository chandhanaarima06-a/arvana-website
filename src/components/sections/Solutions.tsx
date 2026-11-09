import { motion } from 'framer-motion';

const SERVICES = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'WhatsApp Automation',
    desc: 'Smart chat. Higher conversions.',
    color: 'from-arvana-blue/20 to-arvana-blue/5',
    border: 'hover:border-arvana-blue/30',
    iconBg: 'bg-arvana-blue/10 text-arvana-blue',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <rect x="2" y="2" width="20" height="20" rx="5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="18" cy="6" r="1.5" fill="currentColor" />
      </svg>
    ),
    title: 'Instagram Automation',
    desc: 'Engage. Nurture. Grow.',
    color: 'from-arvana-rose/20 to-arvana-rose/5',
    border: 'hover:border-arvana-rose/30',
    iconBg: 'bg-arvana-rose/10 text-arvana-rose',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 16l4-8 4 4 5-10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Lead Management',
    desc: 'Capture. Qualify. Convert.',
    color: 'from-arvana-purple/20 to-arvana-purple/5',
    border: 'hover:border-arvana-purple/30',
    iconBg: 'bg-arvana-purple/10 text-arvana-purple',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2m0 18v2m-9-11h2m18 0h2m-4.22-6.78l-1.42 1.42M6.64 17.36l-1.42 1.42m0-14.14l1.42 1.42m10.72 10.72l1.42 1.42" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'CRM Integration',
    desc: 'Connect. Automate. Scale.',
    color: 'from-arvana-cyan/20 to-arvana-cyan/5',
    border: 'hover:border-arvana-cyan/30',
    iconBg: 'bg-arvana-cyan/10 text-arvana-cyan',
  },
];

const containerV = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardV = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export function Solutions() {
  return (
    <section id="industries" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">
          {/* Left text */}
          <motion.div
            className="lg:max-w-md flex-shrink-0 mb-6 lg:mb-0"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-arvana-blue text-sm font-medium tracking-wide uppercase mb-3">
              ✦ Our Solutions
            </p>
            <h2 className="text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold leading-[1.2] tracking-tight text-white mb-6">
              Smart Automation. Real Business{' '}
              <span className="bg-gradient-to-r from-arvana-blue to-arvana-rose bg-clip-text text-transparent italic">
                Impact.
              </span>
            </h2>
            <p className="text-arvana-grey text-[16px] leading-relaxed mb-8">
              From WhatsApp to Instagram, we help you turn conversations into customers with powerful AI automation.
            </p>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 text-arvana-blue text-[15px] font-medium hover:gap-3 transition-all"
            >
              Discover More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* Right: Cards */}
          <motion.div
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={containerV}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {SERVICES.map((s) => (
              <motion.div
                key={s.title}
                variants={cardV}
                className={`glass-card p-6 flex items-start gap-4 cursor-pointer group ${s.border}`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${s.iconBg}`}>
                  {s.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white text-[15px] font-semibold mb-1">{s.title}</h3>
                  <p className="text-arvana-grey text-[13px]">{s.desc}</p>
                </div>
                <svg
                  className="w-5 h-5 text-arvana-grey/40 group-hover:text-arvana-blue transition-colors flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
