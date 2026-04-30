import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  disabled = false,
  loading = false,
  onClick,
  href,
  target,
  rel,
  className = ''
}: ButtonProps) {
  const sizeClasses = {
    sm: 'px-5 py-2.5 text-xs gap-2',
    md: 'px-7 py-3.5 text-sm gap-2.5',
    lg: 'px-10 py-4 text-base gap-3'
  };

  const content = (
    <span className="relative z-10 flex items-center gap-2">
      {icon && iconPosition === 'left' && (
        <span className="opacity-70 group-hover:opacity-100 group-hover:-translate-x-0.5 transition-all duration-200">{icon}</span>
      )}
      {loading ? (
        <span className="flex items-center gap-2">
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          Loading
        </span>
      ) : (
        <span className="font-medium">{children}</span>
      )}
      {icon && iconPosition === 'right' && !loading && (
        <span className="opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200">{icon}</span>
      )}
    </span>
  );

  const primaryClasses = `
    ${sizeClasses[size]}
    relative inline-flex items-center justify-center
    font-medium rounded-full
    bg-gradient-to-br from-green-500/20 to-green-600/10
    backdrop-blur-md
    border border-green-500/30
    text-green-400
    shadow-[0_8px_32px_rgba(34,197,94,0.15)]
    hover:from-green-500/30 hover:to-green-600/20
    hover:border-green-500/50 hover:text-green-300
    hover:shadow-[0_8px_48px_rgba(34,197,94,0.25)]
    active:shadow-[0_4px_16px_rgba(34,197,94,0.2)]
    transition-all duration-300 ease-out
    disabled:opacity-50 disabled:cursor-not-allowed
    overflow-hidden
  `;

  const secondaryClasses = `
    ${sizeClasses[size]}
    relative inline-flex items-center justify-center
    font-medium rounded-full
    bg-white/[0.03] backdrop-blur-md
    border border-white/[0.08]
    text-gray-300
    hover:from-white/[0.06] hover:border-white/[0.15] hover:text-white
    active:scale-[0.98]
    transition-all duration-300 ease-out
    disabled:opacity-50 disabled:cursor-not-allowed
    overflow-hidden
  `;

  const outlineClasses = `
    ${sizeClasses[size]}
    relative inline-flex items-center justify-center
    font-medium rounded-full
    bg-transparent
    border border-green-500/40
    text-green-500
    hover:bg-green-500/10 hover:border-green-500/60 hover:text-green-400
    active:scale-[0.98]
    transition-all duration-300 ease-out
    disabled:opacity-50 disabled:cursor-not-allowed
    overflow-hidden
  `;

  const classes = {
    primary: primaryClasses,
    secondary: secondaryClasses,
    outline: outlineClasses
  };

  if (href) {
    return (
      <motion.a
        href={disabled ? undefined : href}
        target={target}
        rel={rel}
        className={`${classes[variant]} ${className} group`}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled || loading}
      className={`${classes[variant]} ${className} group`}
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
    >
      {content}
    </motion.button>
  );
}

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function Card({ children, className = '', hover = false, onClick }: CardProps) {
  const Component = onClick ? motion.div : 'div';
  const props = onClick 
    ? { whileHover: { scale: 1.01 }, whileTap: { scale: 0.99 } }
    : {};

  return (
    <Component
      className={`card-terminal p-5 ${hover ? 'cursor-pointer hover:border-green-primary/50' : ''} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'outline';
  className?: string;
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-terminal-bg text-gray-400 border-green-dim/20',
    primary: 'bg-green-primary/10 text-green-primary border-green-primary/20',
    outline: 'bg-transparent text-green-muted border-green-dim hover:border-green-primary'
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-display border ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}

interface TechPillProps {
  name: string;
}

export function TechPill({ name }: TechPillProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="px-3 py-1 bg-terminal-bg rounded-full text-sm text-gray-400 
                 border border-green-dim/20 hover:border-green-primary/50 
                 hover:text-green-primary transition-colors cursor-default"
    >
      {name}
    </motion.span>
  );
}