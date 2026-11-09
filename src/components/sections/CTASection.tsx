import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

interface CTASectionProps {
  onViewFaqs: () => void;
}

export function CTASection({ onViewFaqs }: CTASectionProps) {
  return (
    <section id="contact" className="relative overflow-hidden py-20 lg:py-28">
      {/* Background glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-arvana-blue/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] rounded-full bg-arvana-purple/10 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 text-center">
        {/* Subtle noise texture overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.5%22/%3E%3C/svg%3E")',
        }} />

        <motion.div
          className="glass-card p-8 sm:p-12 lg:p-16 rounded-3xl relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2
            className="text-[clamp(1.8rem,5vw,3rem)] font-bold leading-[1.15] tracking-tight text-white mb-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Ready to Transform Your{' '}
            <span className="bg-gradient-to-r from-arvana-blue to-arvana-rose bg-clip-text text-transparent italic">
              Business?
            </span>
          </motion.h2>

          <motion.p
            className="text-arvana-grey text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Let's build something intelligent together. Get your AI automation system up and running today.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button variant="primary" className="px-10 py-4" onClick={() => window.open('https://wa.me/917708431829?text=Hi%20ARVANA%2C%20I%20am%20interested%20in%20your%20AI%20automation%20services.%20Can%20you%20share%20more%20information%3F', '_blank')}>
              Get Started Now →
            </Button>
            <Button variant="outline" className="px-10 py-4" onClick={onViewFaqs}>
              View FAQs
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
