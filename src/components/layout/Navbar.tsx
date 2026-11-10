import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/cn';

const NAV_LINKS = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#services' },
  { name: 'Industries', href: '#industries' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'About', href: '#about' },
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

  const bg = useTransform(scrollY, [0, 80], ['rgba(16,20,25,0)', 'rgba(16,20,25,0.9)']);
  const blur = useTransform(scrollY, [0, 80], ['blur(0px)', 'blur(14px)']);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <motion.nav
        style={{ backgroundColor: bg, backdropFilter: blur }}
        className="fixed top-0 inset-x-0 z-50 border-b border-white/[0.06]"
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
            <div className="w-9 h-9 rounded-lg bg-arvana-charcoal flex items-center justify-center border border-white/10">
              <span className="text-base font-[600] text-white leading-none">A</span>
            </div>
            <span className="text-[20px] font-[600] tracking-tight text-white">
              ARVANA
            </span>
          </motion.a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-3">
            {NAV_LINKS.map((l, i) => (
              <motion.a
                key={l.name}
                href={l.href}
                onClick={() => setActive(l.name)}
                className={cn(
                  'px-4 py-2 rounded-lg text-[14px] font-[500] transition-colors',
                  active === l.name
                    ? 'bg-arvana-card text-white border border-white/10'
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
              Book a Consultation
            </Button>
          </motion.div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <div className="flex flex-col gap-1.5">
              <motion.span className="block w-6 h-0.5 bg-arvana-offwhite rounded" animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} />
              <motion.span className="block w-6 h-0.5 bg-arvana-offwhite rounded" animate={open ? { opacity: 0 } : { opacity: 1 }} />
              <motion.span className="block w-6 h-0.5 bg-arvana-offwhite rounded" animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} />
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
                className="text-3xl font-[500] text-white hover:text-white transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => { setActive(l.name); setOpen(false); }}
              >
                {l.name}
              </motion.a>
            ))}
            <Button variant="primary" className="mt-4 text-lg px-10 py-4" onClick={() => { setOpen(false); setContactOpen(true); }}>
              Book a Consultation
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
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-51 w-full max-w-md rounded-2xl bg-arvana-charcoal border border-white/10 p-8"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex justify-between items-center mb-8"
            >
              <h3 className="text-xl font-[600] text-white">How would you like to reach us?</h3>
              <button
                onClick={() => setContactOpen(false)}
                className="w-9 h-9 rounded-lg bg-arvana-surface flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>

            <div className="space-y-4">
              <button
                onClick={() => { setContactOpen(false); window.open('mailto:arvanahq@gmail.com', '_blank'); }}
                className="w-full flex items-center justify-between px-6 py-4 rounded-xl bg-arvana-black/40 border border-white/10 text-left hover:border-white/30 hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center text-arvana-grey group-hover:bg-white/10 group-hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22-2L11 8a2 2 0 014 0l5.11 3.47a2 2 0 002.22-2L13 8a2 2 0 00-4-4L5 8a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-arvana-muted text-[12px] font-medium mb-0.5">Email us</div>
                    <div className="text-white font-[500]">arvanahq@gmail.com</div>
                  </div>
                </div>
                <svg className="w-4 h-4 text-arvana-grey/40 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <button
                onClick={() => setShowCallOptions(true)}
                className={`
                  w-full flex items-center justify-between px-6 py-4 rounded-xl
                  bg-arvana-black/40 border border-white/10 text-left
                  hover:border-white/30 hover:bg-white/5 transition-colors
                  ${showCallOptions ? 'border-white/30 bg-white/5' : ''}
                `}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center text-arvana-grey group-hover:bg-white/10 group-hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-arvana-muted text-[12px] font-medium mb-0.5">Call us</div>
                    <div className="text-white font-[500]">+91 7708431829</div>
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
                  className="mt-4 space-y-3"
                >
                  <button
                    onClick={() => { setContactOpen(false); window.location.href = 'tel:+917708431829'; }}
                    className="w-full flex items-center justify-between px-6 py-4 rounded-xl bg-arvana-black/40 border border-white/20 text-left hover:border-white/30 hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center text-arvana-grey">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-arvana-muted text-[12px] font-medium mb-0.5">Phone call</div>
                        <div className="text-white font-[500]">Normal call</div>
                      </div>
                    </div>
                    <svg className="w-4 h-4 text-arvana-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  <button
                    onClick={() => { setContactOpen(false); window.open('https://wa.me/917708431829?call', '_blank'); }}
                    className="w-full flex items-center justify-between px-6 py-4 rounded-xl bg-arvana-black/40 border border-white/20 text-left hover:border-white/30 hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center text-arvana-grey">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2a10 10 0 11-10 10 10 10 0 0110-10zm0-2a12 12 0 10-12 12 12 12 0 0012-12zM11 10l2 2m0 0 2 2m-2-2l-2-2m14 8h-2l-3-3m0 0-3 3m3 3h-2" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-arvana-muted text-[12px] font-medium mb-0.5">WhatsApp call</div>
                        <div className="text-white font-[500]">WhatsApp voice call</div>
                      </div>
                    </div>
                    <svg className="w-4 h-4 text-arvana-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </motion.div>
              )}

              <button
                onClick={() => { setContactOpen(false); window.open('https://wa.me/917708431829?text=Hi%20ARVANA%2C%20I%20am%20interested%20in%20your%20AI%20automation%20services.%20Can%20you%20share%20more%20information%3F', '_blank'); }}
                className="w-full flex items-center justify-between px-6 py-4 rounded-xl bg-arvana-black/40 border border-white/10 text-left hover:border-white/30 hover:bg-white/5 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center text-arvana-grey group-hover:bg-white/10 group-hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2a10 10 0 11-10 10 10 10 0 0110-10zm0-2a12 12 0 10-12 12 12 12 0 0012-12zM11 10l2 2m0 0 2 2m-2-2l-2-2m14 8h-2l-3-3m0 0-3 3m3 3h-2" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-arvana-muted text-[12px] font-medium mb-0.5">WhatsApp chat</div>
                    <div className="text-white font-[500]">+91 7708431829</div>
                  </div>
                </div>
                <svg className="w-4 h-4 text-arvana-grey/40 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
