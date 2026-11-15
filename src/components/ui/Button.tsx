import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';

interface ButtonProps {
  variant?: 'primary' | 'ghost' | 'outline';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
}

export function Button({
  variant = 'primary',
  children,
  className,
  onClick,
  disabled,
  type = 'button',
  loading,
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 font-[500] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-arvana-black disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'px-7 py-3 rounded-lg bg-gold text-black hover:bg-gold-dim active:scale-98',
    ghost:
      'px-7 py-3 rounded-lg border border-white/10 text-warm-white hover:bg-white/5 active:scale-98',
    outline:
      'px-5 py-2 rounded-lg border border-white/30 text-warm-white hover:bg-white/10 text-sm active:scale-98',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(base, variants[variant], className)}
      whileTap={{ scale: 0.98 }}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <svg
            className="w-4 h-4 animate-spin"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Loading…
        </span>
      ) : (
        children
      )}
    </motion.button>
  );
}
