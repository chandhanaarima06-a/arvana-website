import { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * CircularWorkflowCarousel
 *
 * A premium 3D interactive carousel showcasing ARVANA's automation workflows.
 * Items are arranged in a circle around a central point and rotate as the
 * active index changes. Clicking an item opens its detail panel.
 *
 * Visual direction: deep black background, cerulean (#168BFF) lighting,
 * realistic depth and perspective, elegant transitions, hover/click states.
 *
 * Fully responsive: on mobile the circle collapses to a vertical stack.
 *
 * Built with framer-motion + CSS 3D transforms (no external 3D dependency).
 */
const WORKFLOWS = [
  {
    id: 'whatsapp-ai',
    title: 'WhatsApp AI Assistant',
    benefit: 'Every inquiry gets an instant response — 24/7.',
    preview: 'Illustrative WhatsApp conversation preview',
  },
  {
    id: 'lead-qualification',
    title: 'Smart Lead Qualification',
    benefit: 'Know which leads deserve attention — HOT, WARM, COLD.',
    preview: 'Lead qualification flow preview',
  },
  {
    id: 'follow-ups',
    title: 'Automated Follow-ups',
    benefit: 'Stay connected without chasing every customer.',
    preview: 'Follow-up sequence preview',
  },
  {
    id: 'crm-command',
    title: 'CRM Command Center',
    benefit: 'Every lead. Every conversation. One place.',
    preview: 'CRM dashboard preview',
  },
  {
    id: 'multi-industry',
    title: 'Multi-Industry Automation',
    benefit: 'One intelligent system. Different business needs.',
    preview: 'Industry examples preview',
  },
];

const ITEM_COUNT = WORKFLOWS.length;
const RADIUS = 320; // px, desktop

interface CircularWorkflowCarouselProps {
  onWorkflowSelect?: (id: string) => void;
}

export function CircularWorkflowCarousel({ onWorkflowSelect }: CircularWorkflowCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <section
      id="workflow-explorer"
      className="relative section-dark py-24 lg:py-32 overflow-hidden"
      aria-label="Interactive workflow explorer"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section heading */}
        <div className="text-center mb-20 lg:mb-28">
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-[600] leading-tight tracking-tight text-white mb-4">
            See your business run smarter
          </h2>
          <p className="text-arvana-grey text-[16px] leading-relaxed max-w-2xl mx-auto">
            Explore each automation workflow. Click any node to step inside.
          </p>
        </div>

        {/* Carousel stage */}
        <div
          className="relative"
          style={{
            height: isMobile ? 520 : 560,
            perspective: isMobile ? 600 : 1200,
          }}
        >
          {/* Rotating container holding all items in a circle. */}
          <motion.div
            className="relative w-full h-full flex items-center justify-center"
            animate={{ rotateY: -(360 / ITEM_COUNT) * activeIndex }}
            transition={{ type: 'spring', stiffness: 90, damping: 20 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {WORKFLOWS.map((workflow, i) => {
              const angle = (360 / ITEM_COUNT) * i;
              const isActive = i === activeIndex;

              return (
                <motion.div
                  key={workflow.id}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer group transition-all duration-300"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${isMobile ? 60 : RADIUS}px)`,
                    opacity: isActive ? 1 : 0.45,
                    filter: isActive ? 'none' : 'grayscale(0.35)',
                  }}
                  whileHover={{
                    scale: isMobile ? 1 : 1.05,
                    opacity: 1,
                    zIndex: 10,
                  }}
                  whileTap={{ scale: isMobile ? 0.96 : 0.94 }}
                  onClick={() => {
                    setActiveIndex(i);
                    onWorkflowSelect?.(workflow.id);
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveIndex(i);
                      onWorkflowSelect?.(workflow.id);
                    }
                  }}
                >
                  {/* Node ring — glows cerulean when active. */}
                  <div
                    className={`relative w-20 h-20 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                      isActive
                        ? 'ring-4 ring-arvana-cerulean/35 bg-white/[0.06] border border-arvana-cerulean/30 shadow-[0_0_24px_rgba(22,139,255,0.45)]'
                        : 'bg-white/[0.04] border border-white/10 shadow-[0_0_16px_rgba(0,0,0,0.6)]'
                    }`}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 bg-arvana-black"
                      style={{
                        boxShadow: isActive
                          ? 'inset 0 0 16px rgba(22,139,255,0.55)'
                          : 'inset 0 0 12px rgba(255,255,255,0.06)',
                      }}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        style={{
                          color: isActive ? '#168BFF' : 'rgba(255,255,255,0.55)',
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={getIconPath(workflow.id)}
                        />
                      </svg>
                    </div>
                  </div>
                  <h3
                    className={`text-base font-[600] leading-tight text-center min-w-[150px] transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-arvana-grey'
                    } group-hover:text-white`}
                  >
                    {workflow.title}
                  </h3>
                  <p className="text-[12px] text-arvana-grey/70 text-center mt-2 max-w-[140px] leading-relaxed">
                    {workflow.benefit}
                  </p>
                  {isActive && (
                    <div className="mt-4 flex items-center gap-1 text-[11px] text-arvana-cerulean font-medium tracking-wider uppercase">
                      <span className="w-1 h-1 rounded-full bg-arvana-cerulean animate-pulse" />
                      Active workflow
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Navigation hints (desktop only). */}
          {!isMobile && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 text-arvana-grey/50 text-[11px] tracking-wider uppercase font-medium">
              <span>← drag / click to explore →</span>
            </div>
          )}
        </div>

        {/* Active workflow detail panel */}
        <ActiveWorkflowDetail workflow={WORKFLOWS[activeIndex]} />
      </div>
    </section>
  );
}

/**
 * ActiveWorkflowDetail — compact panel shown below the carousel for the
 * currently active workflow. Click-reveal style, keeps the page on one URL.
 */
function ActiveWorkflowDetail({ workflow }: { workflow: (typeof WORKFLOWS)[number] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
      className="mt-16 lg:mt-20 rounded-2xl border border-white/10 bg-arvana-surface p-8 lg:p-12 relative overflow-hidden"
    >
      {/* Decorative cerulean accent edge. */}
      <div
        className="absolute top-0 left-0 w-full h-1 bg-arvana-cerulean opacity-60"
        style={{ transform: 'scaleX(0.7)', transformOrigin: 'center' }}
      />
      <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
        <div className="flex-shrink-0">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/[0.04] border border-arvana-cerulean/20 mb-0"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="#168BFF"
              viewBox="0 0 24 24"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {getIconPath(workflow.id)}
            </svg>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-[clamp(1.5rem,2.5vw,1.75rem)] font-[600] tracking-tight text-white mb-3">
            {workflow.title}
          </h3>
          <p className="text-arvana-offwhite text-[15px] leading-relaxed mb-6 max-w-lg">
            {workflow.benefit}
          </p>
          <div className="flex gap-3">
            <button
              className="px-6 py-2.5 rounded-lg bg-arvana-cerulean text-arvana-black font-semibold text-[14px] hover:bg-arvana-cerulean/90 transition-colors"
            >
              Explore {workflow.title}
            </button>
            <button
              className="px-6 py-2.5 rounded-lg border border-white/10 text-white text-[14px] hover:bg-white/5 transition-colors"
            >
              See demo
            </button>
          </div>
        </div>
      </div>
      <p className="mt-8 text-[12px] text-arvana-grey/50 italic max-w-lg">
        Illustrative demo — not live customer data or a real integration.
      </p>
    </motion.div>
  );
}

function getIconPath(id: string): string {
  switch (id) {
    case 'whatsapp-ai':
      return 'M12 2a10 10 0 11-10 10 10 10 0 0110-10zm0-2a12 12 0 10-12 12 12 12 0 0012-12zM11 10l2 2m0 0 2 2m-2-2l-2-2m14 8h-2l-3-3m0 0-3 3m3 3h-2';
    case 'lead-qualification':
      return 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z';
    case 'follow-ups':
      return 'M13 10V3L4 14h7v7l9-11h-7z';
    case 'crm-command':
      return 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5';
    case 'multi-industry':
      return 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z';
    default:
      return 'M12 2L2 7l10 5 10-5-10-5z';
  }
}
