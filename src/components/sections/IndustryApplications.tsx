import { motion } from 'framer-motion';

/**
 * IndustryApplications
 *
 * How ARVANA helps different industries. Real estate highlighted first,
 * but the brand stays multi-industry (textiles, e-commerce/D2C, retail,
 * hospitality, professional services).
 */
const INDUSTRIES = [
  {
    name: 'Real Estate',
    highlight: 'First market',
    description:
      'Automate property enquiries, qualify buyers, schedule site visits, and follow up with leads — so no viewing opportunity is missed.',
    examples: ['Property enquiries', 'Buyer qualification', 'Site visit scheduling', 'Lead follow-up'],
  },
  {
    name: 'Textiles & Fashion',
    description:
      'Handle order enquiries, fabric and design consultations, and delivery updates automatically across WhatsApp and Instagram.',
    examples: ['Order enquiries', 'Design consultations', 'Delivery updates', 'Stock availability'],
  },
  {
    name: 'E-commerce & D2C',
    description:
      'Turn conversations into sales with instant replies, order tracking, abandoned-cart recovery, and post-purchase support.',
    examples: ['Instant replies', 'Order tracking', 'Abandoned-cart recovery', 'Post-purchase support'],
  },
  {
    name: 'Retail',
    description:
      'Automate inventory enquiries, store hours, booking for in-store visits, and promotional follow-ups across locations.',
    examples: ['Inventory enquiries', 'In-store visit booking', 'Promotional follow-ups', 'Location hours'],
  },
  {
    name: 'Hospitality',
    description:
      'Manage reservation enquiries, booking confirmations, guest questions, and check-in details without manual effort.',
    examples: ['Reservation enquiries', 'Booking confirmations', 'Guest questions', 'Check-in details'],
  },
  {
    name: 'Professional Services',
    description:
      'Capture and qualify consultation enquiries, schedule appointments, and keep client communications organized and responsive.',
    examples: ['Consultation enquiries', 'Appointment scheduling', 'Client follow-ups', 'Document requests'],
  },
];

export function IndustryApplications() {
  return (
    <section id="industries" className="section-dark py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center mb-16 lg:mb-20">
          <motion.h2
            className="text-[clamp(1.8rem,4vw,2.6rem)] font-[600] leading-[1.2] tracking-tight text-warm-white mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Built for the way your industry works
          </motion.h2>
          <motion.p
            className="text-arvana-grey text-[16px] leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Real estate is our first market, but our automation works for any business that handles customer conversations at scale.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {INDUSTRIES.map((industry, i) => (
            <IndustryCard key={industry.name} industry={industry} isFirst={i === 0} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function IndustryCard({
  industry,
  isFirst,
}: {
  industry: (typeof INDUSTRIES)[number];
  isFirst: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={`card p-7 relative group ${
        isFirst ? 'border-gold/30' : ''
      }`}
    >
      {isFirst && (
        <div className="absolute -top-3 left-4 flex items-center gap-1 px-2 py-0.5 rounded-full bg-gold text-black text-[10px] font-bold uppercase tracking-wider z-10">
          First market
        </div>
      )}

      <h3 className="text-warm-white text-base font-[600] mb-3 group-hover:text-gold transition-colors">
        {industry.name}
      </h3>
      <p className="text-arvana-grey text-[14px] leading-relaxed mb-5">
        {industry.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {industry.examples.map((ex) => (
          <span
            key={ex}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-arvana-surface text-[11px] font-medium text-arvana-offwhite border border-white/10"
          >
            {ex}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
