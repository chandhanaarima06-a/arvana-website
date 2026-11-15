import { motion } from 'framer-motion';
import { useState } from 'react';

/**
 * LeadConversionPipeline
 *
 * ARVANA's signature lead-conversion workflow visualization.
 *
 * Central animated pipeline:
 *   Customer Message → Instant AI Response → Automatic Detail Extraction
 *   → Intelligent Lead Qualification → Automatic CRM Update
 *   → branches into HOT / WARM / COLD → conversion opportunity.
 *
 * Every node is clickable and reveals a compact explanation panel.
 * HOT = green path → sales notification → human call → conversion.
 * WARM = amber path → AI follow-ups → re-engagement → conversion opportunity.
 * COLD = blue path → nurture sequence → re-engagement → conversion opportunity.
 *
 * Built with framer-motion + CSS 3D (no WebGL dependency).
 * Responsive: vertical stack on mobile, branching tree on desktop.
 */
const PIPELINE_STAGES = [
  {
    id: 'message',
    label: 'Customer Message',
    desc: 'A customer messages you on WhatsApp or Instagram.',
    automates: 'ARVANA receives every inquiry instantly — day or night.',
    benefit: 'No inquiry ever goes unanswered.',
    color: 'text-arvana-white',
  },
  {
    id: 'response',
    label: 'Instant AI Response',
    desc: 'The AI assistant replies within seconds.',
    automates: 'ARVANA drafts and sends the first reply automatically.',
    benefit: 'Customers stay engaged instead of moving on.',
    color: 'text-arvana-white',
  },
  {
    id: 'extraction',
    label: 'Detail Extraction',
    desc: 'Name, location, budget, requirements are pulled from the chat.',
    automates: 'ARVANA extracts structured details from unstructured conversation.',
    benefit: 'Your team starts with qualified context, not blank notes.',
    color: 'text-arvana-white',
  },
  {
    id: 'qualification',
    label: 'Lead Qualification',
    desc: 'The lead is scored HOT, WARM, or COLD.',
    automates: 'ARVANA classifies each lead by readiness to buy.',
    benefit: 'Your sales team knows who to call first.',
    color: 'text-arvana-white',
  },
  {
    id: 'crm',
    label: 'CRM Update',
    desc: 'Every detail and status is written to your CRM.',
    automates: 'ARVANA creates/updates the lead record automatically.',
    benefit: 'One organized place for every lead and conversation.',
    color: 'text-arvana-white',
  },
] as const;

const BRANCHES = [
  {
    id: 'hot',
    label: 'HOT',
    color: 'text-arvana-emerald',
    glow: 'shadow-[0_0_20px_rgba(34,197,94,0.45)]',
    border: 'border-emerald-500/30',
    desc: 'Sales team notification → human call → conversion.',
    path: 'M10 20v-6m0 0l6-6-6-6',
  },
  {
    id: 'warm',
    label: 'WARM',
    color: 'text-arvana-amber',
    glow: 'shadow-[0_0_20px_rgba(245,158,11,0.45)]',
    border: 'border-amber-500/30',
    desc: 'Personalized AI follow-ups → re-engagement → conversion opportunity.',
    path: 'M10 20v-6m0 0l6-6-6-6',
  },
  {
    id: 'cold',
    label: 'COLD',
    color: 'text-arvana-cerulean',
    glow: 'shadow-[0_0_20px_rgba(22,139,255,0.45)]',
    border: 'border-arvana-cerulean/30',
    desc: 'Intelligent nurture sequence → re-engagement → conversion opportunity.',
    path: 'M10 20v-6m0 0l6-6-6-6',
  },
] as const;

interface NodeExplanation {
  title: string;
  whatHappens: string;
  automates: string;
  benefit: string;
}

const EXPLANATIONS: Record<string, NodeExplanation> = {
  message: {
    title: 'Customer Message',
    whatHappens: 'A prospect sends a message on WhatsApp or Instagram asking about your services.',
    automates: 'ARVANA captures the message the moment it arrives — no delay, no missed enquiry.',
    benefit: 'You never lose a lead to slow response.',
  },
  response: {
    title: 'Instant AI Response',
    whatHappens: 'ARVANA replies within seconds with a friendly, business-aware first message.',
    automates: 'First response is drafted and sent automatically, 24/7.',
    benefit: 'Prospects stay warm while your team sleeps.',
  },
  extraction: {
    title: 'Automatic Detail Extraction',
    whatHappens: 'ARVANA pulls name, location, budget, and requirements out of the conversation.',
    automates: 'Unstructured chat becomes structured lead data.',
    benefit: 'Your team starts with context, not blank fields.',
  },
  qualification: {
    title: 'Intelligent Lead Qualification',
    whatHappens: 'ARVANA scores the lead HOT, WARM, or COLD based on intent and fit.',
    automates: 'Lead scoring happens inside every conversation.',
    benefit: 'Your sales team calls the hottest leads first.',
  },
  crm: {
    title: 'Automatic CRM Update',
    whatHappens: 'Every detail, status, and branch is written to your CRM record.',
    automates: 'No manual data entry — the CRM stays current automatically.',
    benefit: 'One source of truth for every lead.',
  },
  hot: {
    title: 'HOT Lead Path',
    whatHappens: 'Qualified hot leads go straight to your sales team with a notification.',
    automates: 'Instant sales-team alert plus a click-to-call action.',
    benefit: 'Your team focuses on closing, not chasing.',
  },
  warm: {
    title: 'WARM Lead Path',
    whatHappens: 'Warm leads enter a personalized AI follow-up sequence to re-engage them.',
    automates: 'Timely, contextual follow-up messages until the prospect replies.',
    benefit: 'More conversations convert into real opportunities.',
  },
  cold: {
    title: 'COLD Lead Path',
    whatHappens: 'Cold leads enter a longer-term intelligent nurture sequence.',
    automates: 'Periodic contextual check-ins keep the door open.',
    benefit: 'Nurture creates future conversion opportunities — without promising every cold lead will buy.',
  },
};

export function LeadConversionPipeline() {
  const [selected] = useState<string | null>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <section
      id="lead-conversion"
      className="section-dark py-24 lg:py-32 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-20 lg:mb-28">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-arvana-cerulean text-[12px] font-semibold tracking-wider uppercase mb-6">
            Signature workflow
          </span>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-[600] leading-tight tracking-tight text-white mb-6">
            How ARVANA turns every inquiry into a deal
          </h2>
          <p className="text-arvana-grey text-[16px] leading-relaxed max-w-2xl mx-auto">
            ARVANA handles every inquiry. Your team focuses on closing deals.
          </p>
        </div>

        {/* Desktop: branching tree */}
        {!isMobile ? (
          <DesktopPipeline />
        ) : (
          <MobilePipeline />
        )}

        {/* Compact explanation panel for the selected node */}
        {selected && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mt-16 lg:mt-20 rounded-2xl border border-white/10 bg-arvana-surface p-8 lg:p-12"
          >
            <motion.h3
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl font-[600] text-white mb-3 flex items-center gap-3"
            >
              <span className="w-2 h-2 rounded-full bg-arvana-cerulean" />
              {EXPLANATIONS[selected as keyof typeof EXPLANATIONS]?.title || selected}
            </motion.h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div>
                <p className="text-[12px] text-arvana-grey/60 uppercase tracking-wider font-semibold mb-2">
                  What happens
                </p>
                <p className="text-arvana-offwhite text-[14px] leading-relaxed">
                  {EXPLANATIONS[selected as keyof typeof EXPLANATIONS]?.whatHappens}
                </p>
              </div>
              <div>
                <p className="text-[12px] text-arvana-grey/60 uppercase tracking-wider font-semibold mb-2">
                  What ARVANA automates
                </p>
                <p className="text-arvana-offwhite text-[14px] leading-relaxed">
                  {EXPLANATIONS[selected as keyof typeof EXPLANATIONS]?.automates}
                </p>
              </div>
              <div>
                <p className="text-[12px] text-arvana-grey/60 uppercase tracking-wider font-semibold mb-2">
                  What you get
                </p>
                <p className="text-arvana-offwhite text-[14px] leading-relaxed">
                  {EXPLANATIONS[selected as keyof typeof EXPLANATIONS]?.benefit}
                </p>
              </div>
            </div>
            <p className="mt-6 text-[12px] text-arvana-grey/50 italic">
              Illustrative workflow — not live customer data or a real integration.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function DesktopPipeline() {
  return (
    <div className="relative h-[520px] flex items-center justify-center">
      {/* Main pipeline line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-white/[0.08]" />

      {/* Stage nodes */}
      {PIPELINE_STAGES.map((stage, i) => {
        const x = 10 + (i * 22);
        return (
          <PipelineNode
            key={stage.id}
            stage={stage}
            x={`${x}%`}
            y="22%"
            isMain
          />
        );
      })}

      {/* Branch connectors from qualification to CRM (trunk continues down then splits) */}
      {/* Draw a trunk line down from qualification, then three branches */}
      <svg
        className="absolute left-1/2 -translate-x-1/2 top-[28%] left-[calc(10%+4*22%)] w-[1px] h-[34%]"
        style={{ pointerEvents: 'none' }}
      >
        <line
          x1="0"
          y1="0"
          x2="0"
          y2="100%"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />
      </svg>

      {/* Three branch paths */}
      {BRANCHES.map((branch) => {
        const angle = BRANCHES.indexOf(branch) * 40 - 40; // spread: -40, 0, 40 deg
        const rad = (angle * Math.PI) / 180;
        const len = 110;
        const endX = Math.sin(rad) * len;
        const endY = Math.cos(rad) * len;
        return (
          <BranchPath
            key={branch.id}
            branch={branch}
            x1="0"
            y1="0"
            x2={endX}
            y2={endY}
            labelX={endX > 0 ? endX + 12 : endX - 80}
            labelY={endY - 14}
          />
        );
      })}

      {/* Branch terminal nodes (HOT/WARM/COLD outcomes) */}
      {BRANCHES.map((branch) => {
        const angle = BRANCHES.indexOf(branch) * 40 - 40;
        const rad = (angle * Math.PI) / 180;
        const len = 110;
        const endX = Math.sin(rad) * len;
        const endY = Math.cos(rad) * len;
        return (
          <motion.div
            key={branch.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + BRANCHES.indexOf(branch) * 0.1 }}
            className="absolute"
            style={{
              left: `calc(10% + 4 * 22% + ${endX}px - 28px)`,
              top: `calc(28% + 34% + ${endY}px - 28px)`,
            }}
          >
            <BranchNode branch={branch} />
          </motion.div>
        );
      })}
    </div>
  );
}

function MobilePipeline() {
  return (
    <div className="space-y-6">
      {PIPELINE_STAGES.map((stage) => (
        <PipelineNode key={stage.id} stage={stage} x="50%" y="auto" isMain />
      ))}
      <div className="text-center py-8">
        <span className="text-arvana-grey/50 text-[12px]">Branches into three paths</span>
      </div>
      {BRANCHES.map((branch) => (
        <BranchNode key={branch.id} branch={branch} />
      ))}
    </div>
  );
}

interface PipelineNodeProps {
  stage: (typeof PIPELINE_STAGES)[number];
  x: string;
  y?: string;
  isMain?: boolean;
}

function PipelineNode({ stage, x, y = '22%', isMain = false }: PipelineNodeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.1 + PIPELINE_STAGES.indexOf(stage) * 0.08 }}
      className="absolute"
      style={{
        left: x,
        top: y,
        transform: 'translate(-50%, -50%)',
      }}
      onClick={() => {}}
    >
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center border-2 text-[10px] font-bold uppercase shadow-lg ${
          isMain
            ? 'bg-arvana-black border-white text-white shadow-[0_0_20px_rgba(255,255,255,0.25)]'
            : 'bg-arvana-surface border-white/10 text-arvana-grey'
        }`}
      >
        {stage.label.charAt(0)}
      </div>
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[180px] text-center text-[12px] font-[500] text-white whitespace-nowrap">
        {stage.label}
      </div>
    </motion.div>
  );
}

interface BranchPathProps {
  branch: (typeof BRANCHES)[number];
  x1: number | string;
  y1: number | string;
  x2: number | string;
  y2: number | string;
  labelX: number | string;
  labelY: number | string;
}

function BranchPath({
  branch,
  x1,
  y1,
  x2,
  y2,
  labelX,
  labelY,
}: BranchPathProps) {
  return (
    <svg
      className="absolute"
      style={{
        left: `calc(10% + 4 * 22%)`,
        top: `calc(28% + 34%)`,
        width: '220px',
        height: '160px',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
      }}
    >
      <path
        d={`M ${x1} ${y1} L ${x2} ${y2}`}
        fill="none"
        stroke={
          branch.id === 'hot'
            ? '#10B981'
            : branch.id === 'warm'
            ? '#F59E0B'
            : '#168BFF'
        }
        strokeWidth="2"
        strokeDasharray="10 6"
        className="animate-[dash_2s_linear_infinite]"
        style={{
          strokeDashoffset: '20',
        }}
      />
      <text
        x={labelX}
        y={labelY}
        fill={branch.id === 'hot' ? '#10B981' : branch.id === 'warm' ? '#F59E0B' : '#168BFF'}
        fontSize="11"
        fontWeight="600"
        letterSpacing="0.05em"
        textAnchor={branch.id === 'hot' ? 'start' : branch.id === 'cold' ? 'end' : 'middle'}
        className="drop-shadow-[0_0_6px_rgba(0,0,0,0.6)]"
      >
        {branch.label}
      </text>
    </svg>
  );
}

interface BranchNodeProps {
  branch: (typeof BRANCHES)[number];
}

function BranchNode({ branch }: BranchNodeProps) {
  const colorMap: Record<string, string> = {
    hot: '#10B981',
    warm: '#F59E0B',
    cold: '#168BFF',
  };
  const color = colorMap[branch.id];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9 }}
      className="flex items-center gap-3 rounded-xl border px-4 py-3 bg-arvana-surface text-left cursor-pointer group"
      style={{
        borderColor: `${color}40`,
        background: `${color}10`,
      }}
      whileHover={{ borderColor: color }}
    >
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold"
        style={{
          background: color,
          color: branch.id === 'warm' ? '#000' : '#fff',
        }}
      >
        {branch.label.charAt(0)}
      </div>
      <div>
        <div className={`text-xs font-bold uppercase ${branch.color} `}>{branch.label}</div>
        <div className="text-[12px] text-arvana-offwhite leading-relaxed">
          {branch.desc}
        </div>
      </div>
    </motion.div>
  );
}
