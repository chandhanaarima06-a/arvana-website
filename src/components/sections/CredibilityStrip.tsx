import { motion } from 'framer-motion';

const PROBLEMS = [
  {
    title: 'Missed customer enquiries',
    desc: 'Messages on WhatsApp and Instagram go unanswered after hours, and potential customers move on to the next business.',
    solve: 'Automation answers every enquiry instantly — day or night — so no lead slips through the cracks.',
  },
  {
    title: 'Slow response times',
    desc: 'Customers expect replies in minutes, not hours. Manual replies mean lost bookings and closed deals.',
    solve: 'AI assistants reply in seconds, qualify the lead, and book appointments without human back-and-forth.',
  },
  {
    title: 'Repetitive manual work',
    desc: 'Teams spend hours answering the same questions — pricing, availability, follow-ups — instead of closing customers.',
    solve: 'Routine conversations are handled automatically, freeing your team for high-value work.',
  },
  {
    title: 'Disorganized customer information',
    desc: 'Leads live in scattered chats, notes, and spreadsheets, making follow-up inconsistent and easy to forget.',
    solve: 'Every conversation and lead is captured and synced to your CRM in one organized place.',
  },
  {
    title: 'Inconsistent follow-ups',
    desc: 'Without a system, promising leads go cold because nobody remembers to follow up at the right time.',
    solve: 'Automated follow-ups keep conversations warm and move leads toward booking and purchase.',
  },
  {
    title: 'Disconnected business tools',
    desc: 'WhatsApp, Instagram, and your CRM don’t talk to each other, so data has to be copied by hand.',
    solve: 'We connect your channels and tools so information flows automatically — no manual data entry.',
  },
];

export function BusinessProblems() {
  return (
    <section id="problems" className="section-light py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 lg:mb-20">
          <motion.h2
            className="text-[clamp(1.8rem,4vw,2.6rem)] font-[600] leading-[1.2] tracking-tight mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            The problems that slow growing businesses down
          </motion.h2>
          <motion.p
            className="text-arvana-grey text-[16px] leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            Most businesses lose customers not because of their product, but because of how they handle operations. Here’s where automation helps.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEMS.map((p) => (
            <motion.div
              key={p.title}
              className="card p-7"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-white text-base font-[600] mb-3">{p.title}</h3>
              <p className="text-arvana-grey text-[14px] leading-relaxed mb-4">{p.desc}</p>
              <div className="flex items-center gap-2 text-arvana-grey text-[13px] font-[500]">
                <span className="w-1 h-1 rounded-full bg-arvana-grey" />
                {p.solve}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
