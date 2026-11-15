import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { GoldenNeuralCore } from '@/components/hero/GoldenNeuralCore';

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="section-dark min-h-screen relative flex items-center overflow-hidden pt-[72px]">
      {/* Continuous Golden Neural Core — visible throughout scroll */}
      <div className="absolute inset-0 z-[-10] pointer-events-none">
        <GoldenNeuralCore />
      </div>

      {/* Dark overlay so text keeps contrast */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Left: Text */}
          <div className="flex-1 max-w-3xl">
            <motion.h2
              className="text-[clamp(2rem,5vw,3.2rem)] font-[600] leading-[1.15] tracking-tight text-warm-white mb-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              Less Busywork. More Life.
            </motion.h2>

            <motion.p
              className="text-arvana-grey text-[16px] leading-relaxed mb-10 max-w-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.1 }}
            >
              Your trusted AI partner to automate, streamline, and grow your business effortlessly.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.2 }}
            >
              <Button variant="primary" className="px-8 py-3.5 text-base" onClick={() => {}}>
                Explore Solutions
              </Button>
              <Button variant="outline" className="px-8 py-3.5 text-base" onClick={() => {}}>
                See How It Works
              </Button>
            </motion.div>
          </div>

          {/* Right: Golden Neural Core (foreground focal point) */}
          <div className="flex-1 flex items-center justify-center lg:justify-end relative z-10">
            <motion.div
              className="relative w-full max-w-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.3 }}
            >
              <GoldenNeuralCore className="w-full max-w-[360px] aspect-square mx-auto" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
