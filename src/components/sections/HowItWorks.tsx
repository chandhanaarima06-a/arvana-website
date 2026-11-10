import { motion } from 'framer-motion';

const STEPS = [
  {
    num: '01',
    title: 'Connect',
    desc: 'Link your WhatsApp, Instagram, and CRM in minutes.',
  },
  {
    num: '02',
    title: 'Configure',
    desc: 'Set up conversation flows tailored to your business.',
  },
  {
    num: '03',
    title: 'Automate',
    desc: 'AI handles every enquiry — qualifying leads and replying instantly, 24/7.',
  },
  {
    num: '04',
    title: 'Convert',
    desc: 'Watch qualified conversations turn into real customers.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-dark py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-[600] leading-tight tracking-tight text-white">
            How it works
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              className="card p-7 relative group"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Step number */}
              <span className="text-[34px] font-[600] text-arvana-grey/20 absolute top-4 right-5 select-none">
                {step.num}
              </span>

              {/* Accent dot */}
              <div className="w-2.5 h-2.5 rounded-full bg-arvana-grey mb-5" />

              <h3 className="text-white text-base font-[600] mb-2">{step.title}</h3>
              <p className="text-arvana-grey text-[14px] leading-relaxed">{step.desc}</p>

              {/* Connector line to next - desktop only */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 border-t border-dashed border-white/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
