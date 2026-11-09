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
  const base = 'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'px-7 py-3 rounded-full bg-gradient-to-r from-arvana-blue to-arvana-purple text-white shadow-lg shadow-arvana-blue/25 hover:shadow-arvana-blue/45 hover:brightness-105 hover:scale-[1.02] active:scale-[0.98]',
    ghost:
      'px-7 py-3 rounded-full border border-white/15 text-white hover:bg-white/5 hover:border-white/30',
    outline:
      'px-5 py-2 rounded-full border border-arvana-blue/40 text-arvana-blue hover:bg-arvana-blue/10 text-sm',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(base, variants[variant], className)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}
