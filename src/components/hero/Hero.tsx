import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { HeroOrb } from './HeroOrb';

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-[72px]">
      {/* Background glows */}
      <div className="hero-bg" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* ─── Left: Text ─── */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-arvana-blue/8 border border-arvana-blue/20 mb-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              <span className="text-arvana-blue text-sm">✦</span>
              <span className="text-[12px] font-medium text-arvana-grey">AI Automation Agency</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight text-white mb-5"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.15 }}
            >
              Turn Every Conversation Into{' '}
              <span
                className="bg-gradient-to-r from-arvana-blue via-arvana-purple to-arvana-rose bg-clip-text text-transparent"
                style={{ fontStyle: 'italic' }}
              >
                Opportunity.
              </span>
            </motion.h1>

            {/* Sub text */}
            <motion.p
              className="text-arvana-grey text-[15px] leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.35 }}
            >
              AI-powered WhatsApp & Instagram automation. Intelligent lead management for your business.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.55 }}
            >
              <Button variant="primary">
                Let's Build Something Intelligent
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button variant="ghost">
                Explore Our Solutions
              </Button>
            </motion.div>
          </div>

          {/* ─── Right: 3D Sculpture ─── */}
          <div className="flex-1 flex items-center justify-center lg:justify-end">
            <HeroOrb />
          </div>
        </div>
      </div>
    </section>
  );
}
