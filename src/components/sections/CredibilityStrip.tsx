import { motion } from 'framer-motion';

const INDUSTRIES = [
  { icon: '🏠', label: 'Real Estate' },
  { icon: '🛒', label: 'D2C Ecommerce' },
  { icon: '⚡', label: '& More' },
];

export function CredibilityStrip() {
  return (
    <div className="section-divider mb-14 lg:mb-20" >
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-wrap items-center justify-center gap-4 lg:gap-6 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-arvana-grey font-medium">Trusted by forward-thinking businesses</span>

        <span className="hidden sm:block text-arvana-grey/30">✦</span>

        {INDUSTRIES.map((item) => (
          <span key={item.label} className="inline-flex items-center gap-2 text-arvana-grey">
            <span>{item.icon}</span>
            <span className="font-medium text-white/80">{item.label}</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
