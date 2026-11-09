import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const FAQS = [
  {
    q: 'What does ARVANA do exactly?',
    a: 'ARVANA builds AI-powered automation for WhatsApp and Instagram. We help businesses manage enquiries, qualify leads, and automate customer conversations 24/7 — turning more chats into paying customers.',
  },
  {
    q: 'Which businesses benefit most?',
    a: 'We primarily serve real estate businesses and D2C ecommerce brands, but any business that handles customer enquiries via WhatsApp or Instagram can benefit from our automation platform.',
  },
  {
    q: 'Do I need technical expertise to use it?',
    a: 'No. We handle the setup and integration with your existing WhatsApp, Instagram, and CRM. You just receive qualified leads and booked appointments — no technical work required on your end.',
  },
  {
    q: 'How long does setup take?',
    a: 'Most businesses are up and running within a few days. Our team configures your conversation flows, connects your tools, and tests everything before launch.',
  },
  {
    q: 'Can it integrate with my current CRM?',
    a: 'Yes. We integrate with popular CRMs so leads flow directly into your existing pipeline — no manual data entry needed.',
  },
  {
    q: 'Is there a long-term contract?',
    a: 'We offer flexible plans designed around your business needs. Contact us to discuss pricing and commitment options.',
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-arvana-blue text-sm font-medium tracking-wide uppercase mb-4">
            ✦ Frequently Asked
          </p>
          <h2 className="text-[clamp(1.6rem,3.5vw,2.5rem)] font-bold leading-tight tracking-tight text-white">
            Everything You Need to Know.
          </h2>
        </motion.div>

        <div className="space-y-3">
          {FAQS.map(({ q, a }) => (
            <FAQItem key={q} question={q} answer={a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="glass-card p-5 cursor-pointer border border-white/5 hover:border-arvana-blue/20 transition-all duration-300"
      whileHover={{ scale: 1.005 }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-start gap-4">
        <motion.span
          className="text-arvana-grey text-[15px] font-medium leading-relaxed flex-1"
          animate={{ opacity: open ? 1 : 0.8 }}
        >
          {question}
        </motion.span>
        <motion.svg
          className="w-5 h-5 text-arvana-blue transition-transform duration-300"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ maxHeight: 0, opacity: 0 }}
            animate={{ maxHeight: 200, opacity: 1 }}
            exit={{ maxHeight: 0, opacity: 0 }}
            className="mt-4 pt-4 border-t border-white/10 overflow-hidden"
          >
            <p className="text-arvana-grey text-[15px] leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
