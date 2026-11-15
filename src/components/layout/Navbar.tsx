import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/cn';

const NAV_LINKS = [
  { name: 'Home', href: '#' },
  { name: 'Solutions', href: '#features' },
  { name: 'About', href: '#business-transformation' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('Home');
  const { scrollY } = useScroll();

  const bg = useTransform(scrollY, [0, 80], ['rgba(8,8,8,0)', 'rgba(8,8,8,0.92)']);
  const blur = useTransform(scrollY, [0, 80], ['blur(0px)', 'blur(14px)']);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <motion.nav
        style={{ backgroundColor: bg, backdropFilter: blur }}
        className="fixed top-0 inset-x-0 z-50 border-b border-white/[0.04]"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-[72px] px-6 lg:px-10">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2.5"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-9 h-9 rounded-lg bg-gold flex items-center justify-center border border-white/10">
              <span className="text-base font-[600] text-black leading-none">A</span>
            </div>
            <span className="text-[20px] font-[600] tracking-tight text-warm-white">
              ARVANA
            </span>
          </motion.a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-3">
            {NAV_LINKS.map((l, i) => (
              <motion.a
                key={l.name}
                href={l.href}
                onClick={() => { setActive(l.name); setOpen(false); }}
                className={cn(
                  'px-4 py-2 rounded-lg text-[13px] font-[500] transition-colors',
                  active === l.name
                    ? 'bg-gold text-black border border-white/10'
                    : 'text-arvana-grey hover:text-warm-white'
                )}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                {l.name}
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
          >
            <Button variant="primary" className="text-[13px] px-6 py-2.5" onClick={() => setOpen(false)}>
              Get Started
            </Button>
          </motion.div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <div className="flex flex-col gap-1.5">
              <motion.span className="block w-6 h-0.5 bg-warm-white rounded" animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} />
              <motion.span className="block w-6 h-0.5 bg-warm-white rounded" animate={open ? { opacity: 0 } : { opacity: 1 }} />
              <motion.span className="block w-6 h-0.5 bg-warm-white rounded" animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-arvana-black/98 backdrop-blur-xl lg:hidden flex flex-col items-center justify-center gap-8"
          >
            {NAV_LINKS.map((l, i) => (
              <motion.a
                key={l.name}
                href={l.href}
                className="text-3xl font-[500] text-warm-white hover:text-gold transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => { setActive(l.name); setOpen(false); }}
              >
                {l.name}
              </motion.a>
            ))}
            <Button variant="primary" className="mt-4 text-lg px-10 py-4" onClick={() => { setOpen(false); }}>
              Get Started
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
