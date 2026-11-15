import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { HeroBrandMark } from '@/components/hero/HeroBrandMark';

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="section-dark min-h-screen relative flex items-center overflow-hidden pt-[72px]">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-25%] left-[-15%] w-[700px] h-[700px] rounded-full bg-white/10 blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-12%] w-[600px] h-[600px] rounded-full bg-white/6 blur-[120px]" />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* ─── Left: Text ─── */}
          <div className="flex-1 max-w-xl">
            <motion.h1
              className="text-[clamp(2rem,5vw,3.4rem)] font-[600] leading-[1.15] tracking-tight text-white mb-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              Turn Every Conversation Into <span className="text-arvana-cerulean">Business Growth</span>
            </motion.h1>

            <motion.p
              className="text-arvana-grey text-[17px] leading-relaxed mb-10 max-w-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.1 }}
            >
              AI-powered conversations, smarter lead management and automated workflows that keep your business moving.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.2 }}
            >
              <Button variant="primary" className="px-8 py-3.5 text-base" onClick={() => {}}>
                Book a Strategy Call
              </Button>
              <Button variant="outline" className="px-8 py-3.5 text-base" onClick={() => {}}>
                Explore What We Automate
              </Button>
            </motion.div>
          </div>

          {/* ─── Right: 3D brand mark ─── */}
          <div className="flex-1 flex items-center justify-center lg:justify-end relative z-10">
            <motion.div
              className="relative w-full max-w-md"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.3 }}
            >
              <HeroBrandMark />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
