import { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * ProductExperience
 *
 * Interactive previews of ARVANA's product: a WhatsApp conversation and a CRM
 * dashboard. Click to explore, hover to reveal — feels like a real product
 * demo, clearly labeled illustrative.
 */
const PREVIEWS = [
  {
    id: 'whatsapp',
    title: 'WhatsApp AI Assistant',
    subtitle: 'Instant replies, 24/7',
    description: (
      <>
        A customer messages after hours. ARVANA replies instantly, qualifies the
        lead, and books the appointment — all within WhatsApp.
      </>
    ),
    preview: 'Conversation',
  },
  {
    id: 'crm',
    title: 'CRM Command Center',
    subtitle: 'Every lead in one place',
    description: (
      <>
        Every conversation and lead is captured in your CRM automatically — no
        manual data entry, nothing forgotten.
      </>
    ),
    preview: 'Dashboard',
  },
];

export function ProductExperience() {
  const [active, setActive] = useState<string | null>('whatsapp');

  return (
    <section id="product-experience" className="section-dark py-24 lg:py-32 overflow-hidden relative">
      {/* Subtle ambient glow behind product cards */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-arvana-cerulean/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center mb-20 lg:mb-28">
          <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-[600] leading-[1.2] tracking-tight text-white mb-6">
            Experience the product
          </h2>
          <p className="text-arvana-grey text-[16px] leading-relaxed max-w-2xl mx-auto">
            Click through to see how ARVANA handles conversations and leads.
          </p>
        </div>

        {/* Preview selector */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mb-16 lg:mb-24">
          {PREVIEWS.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`px-6 py-3 rounded-xl font-[500] text-[14px] transition-all duration-300 border ${
                active === p.id
                  ? 'bg-arvana-cerulean text-arvana-black border-arvana-cerulean shadow-[0_0_20px_rgba(22,139,255,0.35)]'
                  : 'bg-white/[0.03] border-white/10 text-arvana-grey hover:text-white hover:border-white/30'
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* Interactive preview panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="rounded-[30px] border border-white/10 bg-arvana-surface p-1 lg:p-0 shadow-2xl"
        >
          {active === 'whatsapp' ? <WhatsAppPreview /> : <CRMPreview />}
        </motion.div>

        <p className="mt-12 text-[12px] text-arvana-grey/50 italic max-w-lg mx-auto">
          Illustrative demo — not live customer data or a real integration.
        </p>
      </div>
    </section>
  );
}

/*──────────────────────────────────────────────
  WhatsApp conversation preview
  ─────────────────────────────────────────────*/
function WhatsAppPreview() {
  const bubble = (text: string, mine: boolean) => (
    <div
      className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
        mine
          ? 'bg-arvana-cerulean text-arvana-black rounded-tr-none self-end'
          : 'bg-white/[0.06] border border-white/10 text-arvana-offwhite rounded-tl-none self-start'
      }`}
    >
      {text}
    </div>
  );

  const mineMsg = (text: string, time: string) => (
    <div className="flex justify-end items-end gap-2">
      {bubble(text, true)}
      <span className="text-[10px] text-arvana-grey/60">{time}</span>
    </div>
  );
  const theirMsg = (text: string, time: string) => (
    <div className="flex justify-start items-end gap-2">
      <span className="text-[10px] text-arvana-grey/60">{time}</span>
      {bubble(text, false)}
    </div>
  );

  return (
    <div className="w-full max-w-md mx-auto bg-black rounded-[28px] border border-white/10 overflow-hidden shadow-[0_24px_48px_rgba(0,0,0,0.7)]">
      {/* Header */}
      <div className="bg-arvana-charcoal px-5 py-4 border-b border-white/10 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-arvana-surface flex items-center justify-center overflow-hidden border border-white/10">
          <img
            src="https://ui-avatars.com/api/?name=Samira+Patel&background=168BFF&color=fff"
            alt="Samira Patel"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="text-white font-[600] text-sm">Samira Patel</div>
          <div className="text-arvana-grey text-[11px]">Online • 2m ago</div>
        </div>
        <div className="text-arvana-grey text-[11px]">9:14 PM</div>
      </div>

      {/* Messages */}
      <div className="p-4 space-y-4 min-h-[300px]">
        {theirMsg("Hi, I'm looking for a 3BHK apartment in Whitefield.", '9:14 PM')}
        {mineMsg('Absolutely! Which location are you interested in?', '9:15 PM')}
        {theirMsg('Whitefield, near the tech park.', '9:16 PM')}
        {mineMsg(
          'Great! Do you have a preferred budget range?',
          '9:17 PM'
        )}
        {theirMsg('Around ₹80 lakhs to ₹1.1 crore.', '9:18 PM')}
        {mineMsg(
          'Perfect — I’ve saved your requirements: 3BHK, Whitefield, ₹80L–1.1Cr. Our sales team will share matching listings shortly.',
          '9:19 PM'
        )}
      </div>

      {/* Footer */}
      <div className="bg-arvana-charcoal px-5 py-4 border-t border-white/10">
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Type a message…"
            className="flex-1 bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-arvana-grey/50 focus:outline-none focus:ring-2 focus:ring-arvana-cerulean"
            readOnly
          />
          <button className="w-10 h-10 rounded-xl bg-arvana-cerulean text-arvana-black flex items-center justify-center hover:bg-arvana-cerulean/90 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2 11 13" />
              <path d="M22 2l-7 20" />
              <path d="M22 2l-5 7L8 22" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

/*──────────────────────────────────────────────
  CRM dashboard preview
  ─────────────────────────────────────────────*/
function CRMPreview() {
  return (
    <div className="w-full max-w-4xl mx-auto bg-black rounded-[28px] border border-white/10 overflow-hidden shadow-[0_24px_48px_rgba(0,0,0,0.7)]">
      {/* Header */}
      <div className="bg-arvana-charcoal px-6 py-4 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-arvana-surface flex items-center justify-center border border-white/10">
            <svg className="w-5 h-5 text-arvana-cerulean" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </div>
          <div>
            <div className="text-white font-[600] text-sm">CRM Command Center</div>
            <div className="text-arvana-grey text-[11px]">12 leads • 3 hot • 8 warm</div>
          </div>
        </div>
        <div className="text-arvana-grey text-[11px] text-right">Live demo</div>
      </div>

      {/* Body */}
      <div className="p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Lead list */}
        <div className="lg:col-span-1 space-y-3">
          <div className="text-arvana-grey text-[11px] font-semibold uppercase tracking-wider mb-2">Leads</div>
          {[
            { name: 'Samira Patel', status: 'Hot', time: '2m ago' },
            { name: 'Rahul Mehta', status: 'Warm', time: '14m ago' },
            { name: 'Anita Desai', status: 'Cold', time: '3h ago' },
          ].map((l) => (
            <div key={l.name} className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-arvana-surface cursor-pointer hover:border-white/30 transition-colors">
              <div className="w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center text-arvana-grey text-[10px]">
                {l.name.charAt(0)}
              </div>
              <div className="flex-1">
                <div className="text-white text-[13px] font-[500]">{l.name}</div>
                <div className="flex items-center gap-1">
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    l.status === 'Hot'
                      ? 'bg-emerald-500'
                      : l.status === 'Warm'
                      ? 'bg-amber-500'
                      : 'bg-arvana-grey'
                  }`} />
                  <span className="text-arvana-grey text-[10px]">{l.status}</span>
                </div>
              </div>
              <span className="text-arvana-grey/50 text-[10px]">{l.time}</span>
            </div>
          ))}
        </div>

        {/* Lead detail */}
        <div className="lg:col-span-3 border-l border-white/10 pl-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-white font-[600] text-lg">Samira Patel</div>
              <div className="text-arvana-grey text-sm">3BHK • Whitefield • ₹80L–1.1Cr</div>
            </div>
            <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 text-[11px] font-bold border border-emerald-500/20">
              Hot lead
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-xl border border-white/10 bg-arvana-surface">
              <div className="text-arvana-grey text-[11px] uppercase tracking-wider font-semibold mb-2">Status</div>
              <div className="text-white text-lg font-[600]">Qualified</div>
            </div>
            <div className="p-4 rounded-xl border border-white/10 bg-arvana-surface">
              <div className="text-arvana-grey text-[11px] uppercase tracking-wider font-semibold mb-2">Next action</div>
              <div className="text-white text-lg font-[600]">Sales call today</div>
            </div>
            <div className="p-4 rounded-xl border border-white/10 bg-arvana-surface">
              <div className="text-arvana-grey text-[11px] uppercase tracking-wider font-semibold mb-2">Source</div>
              <div className="text-white text-lg font-[600]">WhatsApp</div>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-white/10 bg-arvana-surface">
            <div className="text-arvana-grey text-[11px] uppercase tracking-wider font-semibold mb-3">Conversation</div>
            <div className="space-y-3">
              {[
                'Customer: Hi, I am looking for a 3BHK apartment in Whitefield.',
                'ARVANA: Absolutely! Which location are you interested in?',
                'Customer: Whitefield, near the tech park.',
                'ARVANA: Do you have a preferred budget range?',
                'Customer: Around ₹80 lakhs to ₹1.1 crore.',
              ].map((msg, i) => (
                <div key={i} className="flex gap-3">
                  <span className={`w-1 h-1 rounded-full mt-2 ${i % 2 === 0 ? 'bg-arvana-grey' : 'bg-arvana-cerulean'}`} />
                  <p className="text-arvana-offwhite text-[13px] leading-relaxed">
                    {msg}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
