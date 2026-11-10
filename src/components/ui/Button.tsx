import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';

interface ButtonProps {
  variant?: 'primary' | 'ghost' | 'outline';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({
  variant = 'primary',
  children,
  className,
  onClick,
  disabled,
  type = 'button',
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-arvana-black disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'px-7 py-3 rounded-lg bg-arvana-lime text-arvana-black hover:bg-arvana-lime/90 active:scale-98',
    ghost:
      'px-7 py-3 rounded-lg border border-white/10 text-white hover:bg-white/5 active:scale-98',
    outline:
      'px-5 py-2 rounded-lg border border-white/30 text-white hover:bg-white/10 text-sm active:scale-98',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(base, variants[variant], className)}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
