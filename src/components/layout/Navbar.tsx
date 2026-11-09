import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';

const NAV_LINKS = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#solutions' },
  { name: 'Solutions', href: '#industries' },
  { name: 'Why Us', href: '#why' },
  { name: 'FAQ', href: '#faq' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('Home');
  const [contactOpen, setContactOpen] = useState(false);
  const [showCallOptions, setShowCallOptions] = useState(false);
  const { scrollY } = useScroll();

  const handleContact = () => {
    setContactOpen(true);
  };

  const bg = useTransform(scrollY, [0, 80], ['rgba(5,5,16,0)', 'rgba(5,5,16,0.85)']);
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
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-arvana-blue to-arvana-purple flex items-center justify-center shadow-lg shadow-arvana-blue/30">
              <span className="text-base font-extrabold text-white leading-none">A</span>
            </div>
            <span className="text-[22px] font-extrabold tracking-tight text-white">
              ARVANA
            </span>
          </motion.a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((l, i) => (
              <motion.a
                key={l.name}
                href={l.href}
                onClick={() => setActive(l.name)}
                className={cn(
                  'px-4 py-2 rounded-full text-[14px] font-medium transition-colors',
                  active === l.name
                    ? 'text-arvana-blue'
                    : 'text-arvana-grey hover:text-white'
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
            <Button variant="primary" className="text-[14px] px-6 py-2.5" onClick={handleContact}>
              Let's Talk
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </motion.div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <div className="flex flex-col gap-1.5">
              <motion.span className="block w-6 h-0.5 bg-white rounded" animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} />
              <motion.span className="block w-6 h-0.5 bg-white rounded" animate={open ? { opacity: 0 } : { opacity: 1 }} />
              <motion.span className="block w-6 h-0.5 bg-white rounded" animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} />
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
            className="fixed inset-0 z-40 bg-arvana-black/95 backdrop-blur-xl lg:hidden flex flex-col items-center justify-center gap-8"
          >
            {NAV_LINKS.map((l, i) => (
              <motion.a
                key={l.name}
                href={l.href}
                className="text-3xl font-bold text-white hover:text-arvana-blue transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => { setActive(l.name); setOpen(false); }}
              >
                {l.name}
              </motion.a>
            ))}
            <Button variant="primary" className="mt-4 text-lg px-10 py-4" onClick={() => { setOpen(false); setContactOpen(true); }}>
              Let's Talk →
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Options Modal */}
      {contactOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            onClick={() => setContactOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-51 w-full max-w-md rounded-3xl bg-arvana-charcoal border border-arvana-blue/20 p-8 shadow-2xl shadow-arvana-blue/15"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex justify-between items-center mb-8"
            >
              <h3 className="text-xl font-bold text-white">How would you like to reach us?</h3>
              <button
                onClick={() => setContactOpen(false)}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>

            <div className="space-y-4">
              <button
                onClick={() => { setContactOpen(false); window.open('mailto:arvanahq@gmail.com', '_blank'); }}
                className="w-full flex items-center justify-between px-6 py-4 rounded-2xl bg-arvana-black/40 border border-white/10 text-left hover:border-arvana-blue/40 hover:bg-white/5 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-arvana-blue/20 flex items-center justify-center text-arvana-blue group-hover:bg-arvana-blue group-hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22-2L11 8a2 2 0 014 0l5.11 3.47a2 2 0 002.22-2L13 8a2 2 0 00-4-4L5 8a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-arvana-grey text-xs uppercase tracking-wider mb-0.5">Email Us</div>
                    <div className="text-white font-medium">arvanahq@gmail.com</div>
                  </div>
                </div>
                <svg className="w-4 h-4 text-arvana-grey/40 group-hover:text-arvana-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <button
                onClick={() => setShowCallOptions(true)}
                className={`
                  w-full flex items-center justify-between px-6 py-4 rounded-2xl
                  bg-arvana-black/40 border border-white/10 text-left
                  hover:border-arvana-blue/40 hover:bg-white/5 transition-all duration-300 group
                  ${showCallOptions ? 'border-arvana-blue/50 bg-white/5' : ''}
                `}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-arvana-purple/20 flex items-center justify-center text-arvana-purple group-hover:bg-arvana-purple group-hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-arvana-grey text-xs uppercase tracking-wider mb-0.5">Call Us</div>
                    <div className="text-white font-medium">+91 7708431829</div>
                  </div>
                </div>
                <svg className={`w-4 h-4 text-arvana-grey/40 transition-transform duration-300 ${showCallOptions ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {showCallOptions && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 space-y-3 animate-in"
                >
                  <button
                    onClick={() => { setContactOpen(false); window.location.href = 'tel:+917708431829'; }}
                    className="w-full flex items-center justify-between px-6 py-4 rounded-2xl bg-arvana-black/40 border border-arvana-blue/30 text-left hover:border-arvana-blue/40 hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-arvana-purple/20 flex items-center justify-center text-arvana-purple">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-arvana-grey text-xs uppercase tracking-wider mb-0.5">Phone Call</div>
                        <div className="text-white font-medium">Normal call</div>
                      </div>
                    </div>
                    <svg className="w-4 h-4 text-arvana-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  <button
                    onClick={() => { setContactOpen(false); window.open('https://wa.me/917708431829?call', '_blank'); }}
                    className="w-full flex items-center justify-between px-6 py-4 rounded-2xl bg-arvana-black/40 border border-arvana-blue/30 text-left hover:border-arvana-blue/40 hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2a10 10 0 11-10 10 10 10 0 0110-10zm0-2a12 12 0 10-12 12 12 12 0 0012-12zM11 10l2 2m0 0 2 2m-2-2l-2-2m14 8h-2l-3-3m0 0-3 3m3 3h-2" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-arvana-grey text-xs uppercase tracking-wider mb-0.5">WhatsApp Call</div>
                        <div className="text-white font-medium">WhatsApp voice call</div>
                      </div>
                    </div>
                    <svg className="w-4 h-4 text-arvana-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </motion.div>
              )}

              <button
                onClick={() => { setContactOpen(false); window.open('https://wa.me/917708431829', '_blank'); }}
                className="w-full flex items-center justify-between px-6 py-4 rounded-2xl bg-arvana-black/40 border border-white/10 text-left hover:border-arvana-blue/40 hover:bg-white/5 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2a10 10 0 11-10 10 10 10 0 0110-10zm0-2a12 12 0 10-12 12 12 12 0 0012-12zM11 10l2 2m0 0 2 2m-2-2l-2-2m14 8h-2l-3-3m0 0-3 3m3 3h-2" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-arvana-grey text-xs uppercase tracking-wider mb-0.5">WhatsApp Chat</div>
                    <div className="text-white font-medium">+91 7708431829</div>
                  </div>
                </div>
                <svg className="w-4 h-4 text-arvana-grey/40 group-hover:text-arvana-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
}

function cn(...args: (string | false | undefined)[]) {
  return args.filter(Boolean).join(' ');
}
