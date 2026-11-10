import { motion } from 'framer-motion';

const INDUSTRIES = [
  {
    name: 'Real Estate',
    description: 'Automate property enquiries, qualify buyers, schedule site visits, and follow up with leads — so no viewing opportunity is missed.',
    examples: ['Property enquiries', 'Buyer qualification', 'Site visit scheduling', 'Lead follow-up'],
  },
  {
    name: 'Textile & Fashion',
    description: 'Handle order enquiries, fabric and design consultations, and delivery updates automatically across WhatsApp and Instagram.',
    examples: ['Order enquiries', 'Design consultations', 'Delivery updates', 'Stock availability'],
  },
  {
    name: 'E-commerce & D2C',
    description: 'Turn conversations into sales with instant replies, order tracking, abandoned-cart recovery, and post-purchase support.',
    examples: ['Instant replies', 'Order tracking', 'Abandoned-cart recovery', 'Post-purchase support'],
  },
  {
    name: 'Retail',
    description: 'Automate inventory enquiries, store hours, booking for in-store visits, and promotional follow-ups across locations.',
    examples: ['Inventory enquiries', 'In-store visit booking', 'Promotional follow-ups', 'Location hours'],
  },
  {
    name: 'Hospitality',
    description: 'Manage reservation enquiries, booking confirmations, guest questions, and check-in details without manual effort.',
    examples: ['Reservation enquiries', 'Booking confirmations', 'Guest questions', 'Check-in details'],
  },
  {
    name: 'Professional Services',
    description: 'Capture and qualify consultation enquiries, schedule appointments, and keep client communications organized and responsive.',
    examples: ['Consultation enquiries', 'Appointment scheduling', 'Client follow-ups', 'Document requests'],
  },
];

export function IndustrySolutions() {
  return (
    <section id="industries" className="section-light py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 lg:mb-20">
          <motion.h2
            className="text-[clamp(1.8rem,4vw,2.6rem)] font-[600] leading-[1.2] tracking-tight mb-6 text-arvana-white"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Built for the way your industry works
          </motion.h2>
          <motion.p
            className="text-arvana-grey text-[16px] leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
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
          {INDUSTRIES.map((industry) => (
            <motion.div
              key={industry.name}
              className="card p-7 border border-white/10 shadow-sm"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-arvana-white text-base font-[600] mb-3">{industry.name}</h3>
              <p className="text-arvana-grey text-[14px] leading-relaxed mb-4">{industry.description}</p>
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
          ))}
        </motion.div>
      </div>
    </section>
  );
}
