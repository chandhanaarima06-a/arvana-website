import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

interface CTASectionProps {
  onViewFaqs: () => void;
}

export function CTASection({ onViewFaqs }: CTASectionProps) {
  return (
    <section id="contact" className="section-dark relative overflow-hidden py-20 lg:py-28">
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <motion.div
          className="card p-8 sm:p-12 lg:p-16 rounded-[24px] relative mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h2
            className="text-[clamp(1.8rem,5vw,2.6rem)] font-[600] leading-[1.15] tracking-tight text-white mb-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            Ready to automate your customer conversations?
          </motion.h2>

          <motion.p
            className="text-arvana-grey text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            Let's build intelligent automation for your business. Get your system up and running today.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            <Button variant="primary" className="px-10 py-4 text-base" onClick={() => window.open('https://wa.me/917708431829?text=Hi%20ARVANA%2C%20I%20am%20interested%20in%20your%20AI%20automation%20services.%20Can%20you%20share%20more%20information%3F', '_blank')}>
              Book a Consultation
            </Button>
            <Button variant="outline" className="px-10 py-4 text-base" onClick={onViewFaqs}>
              View FAQs
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
