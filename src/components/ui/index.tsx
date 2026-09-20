import type { ReactNode, ButtonHTMLAttributes, CSSProperties } from 'react';
import { CheckCircle2, Circle, Star, Lock, Flame } from 'lucide-react';
import { getSubjectColor } from '@/data/subject-colors';

export function LoadingSpinner({ label = 'Loading…' }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 text-center" role="status" aria-live="polite">
      <div className="w-8 h-8 border-2 border-slate-200 border-t-sky-500 rounded-full animate-spin mb-3" />
      <p className="text-slate-500 text-sm">{label}</p>
    </div>
  );
}

/** Lightweight skeleton blocks for loading placeholders */
export function Skeleton({
  className = '',
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`rounded-lg bg-slate-100 animate-pulse ${className}`}
      style={style}
      aria-hidden
    />
  );
}

export function PageContainer({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`px-4 sm:px-6 py-5 sm:py-6 max-w-5xl mx-auto ${className}`}>
      {children}
    </div>
  );
}

/** Consistent screen title + optional subtitle / purpose line */
export function ScreenHeader({
  title,
  subtitle,
  purpose,
  className = '',
}: {
  title: string;
  subtitle?: string;
  purpose?: string;
  className?: string;
}) {
  return (
    <div className={`mb-5 sm:mb-6 ${className}`}>
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">{title}</h1>
      {subtitle && <p className="text-slate-500 mt-1 text-sm sm:text-base">{subtitle}</p>}
      {purpose && (
        <p className="text-sm text-slate-500 italic max-w-2xl mt-2 leading-relaxed">{purpose}</p>
      )}
    </div>
  );
}

/** Uppercase section label used above card groups */
export function SectionLabel({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2 ${className}`}>
      {children}
    </p>
  );
}

export function Card({
  children,
  className = '',
  style,
  interactive = false,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Soft lift + border change on hover (for clickable cards) */
  interactive?: boolean;
  onClick?: () => void;
}) {
  const interactiveClasses = interactive
    ? 'cursor-pointer transition-all duration-200 hover:border-slate-300 hover:shadow-md active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2'
    : '';
  const Comp = onClick ? 'button' : 'div';
  return (
    <Comp
      type={onClick ? 'button' : undefined}
      onClick={onClick}
      className={[
        'bg-white rounded-2xl border border-slate-200 shadow-sm text-left w-full',
        interactiveClasses,
        className,
      ].join(' ')}
      style={style}
    >
      {children}
    </Comp>
  );
}

/** Consistent clickable list row for topics, weak areas, review items */
export function ListRow({
  children,
  onClick,
  className = '',
  disabled = false,
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={[
        'w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left',
        'transition-colors duration-150',
        'hover:bg-slate-50 active:bg-slate-100',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-1',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent',
        'min-h-[44px]',
        className,
      ].join(' ')}
    >
      {children}
    </button>
  );
}

export function ProgressBar({
  value,
  max = 100,
  color = 'sky',
  colorClass,
  size = 'md',
}: {
  value: number;
  max?: number;
  color?: 'sky' | 'green' | 'amber' | 'red';
  colorClass?: string;
  size?: 'sm' | 'md' | 'lg';
}) {
  const pct = max > 0 ? Math.min(100, Math.round((value / max) * 100)) : 0;
  const colors = {
    sky: 'bg-sky-500',
    green: 'bg-emerald-500',
    amber: 'bg-amber-500',
    red: 'bg-red-500',
  };
  const fillClass = colorClass ?? colors[color];
  const height = size === 'sm' ? 'h-1.5' : size === 'lg' ? 'h-3' : 'h-2';
  return (
    <div
      className={`${height} bg-slate-100 rounded-full overflow-hidden`}
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`${pct}% complete`}
    >
      <div
        className={`h-full ${fillClass} rounded-full transition-all duration-500 ease-out`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export function StatusIcon({ status }: { status: 'not_started' | 'studied' | 'mastered' }) {
  if (status === 'mastered') {
    return <span className="text-emerald-600 font-bold text-sm">✓</span>;
  }
  if (status === 'studied') {
    return <span className="text-sky-500 font-bold text-sm">●</span>;
  }
  return <span className="text-slate-400 font-bold text-sm">→</span>;
}

export function EmptyState({
  title,
  message,
  icon,
  action,
}: {
  title: string;
  message: string;
  icon?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-12 sm:py-16 px-6 text-center">
      {icon && (
        <div className="mb-4 text-slate-300 flex items-center justify-center w-14 h-14 rounded-2xl bg-slate-50 ring-1 ring-slate-100">
          {icon}
        </div>
      )}
      <h3 className="text-slate-800 font-semibold text-lg mb-1.5 tracking-tight">{title}</h3>
      <p className="text-slate-500 text-sm max-w-sm leading-relaxed">{message}</p>
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}

export function Badge({
  children,
  color = 'slate',
}: {
  children: ReactNode;
  color?: 'slate' | 'sky' | 'green' | 'amber' | 'red';
}) {
  const colors = {
    slate: 'bg-slate-100 text-slate-600',
    sky: 'bg-sky-100 text-sky-700',
    green: 'bg-emerald-100 text-emerald-700',
    amber: 'bg-amber-100 text-amber-700',
    red: 'bg-red-100 text-red-700',
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[color]}`}>
      {children}
    </span>
  );
}

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

export function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled,
  type = 'button',
  ...rest
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  disabled?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick' | 'disabled' | 'className'>) {
  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-sky-500 text-white hover:bg-sky-600 active:bg-sky-700 shadow-sm shadow-sky-500/20',
    secondary: 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 active:bg-slate-100',
    ghost: 'text-slate-600 hover:bg-slate-100 active:bg-slate-200',
    danger: 'bg-red-500 text-white hover:bg-red-600 active:bg-red-700 shadow-sm shadow-red-500/20',
  };
  const sizes: Record<ButtonSize, string> = {
    sm: 'px-3 py-1.5 text-xs rounded-lg min-h-[32px]',
    md: 'px-4 py-2.5 text-sm rounded-xl min-h-[40px]',
    lg: 'px-5 py-3 text-sm rounded-xl min-h-[44px]',
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={[
        'inline-flex items-center justify-center gap-1.5 font-medium transition-all duration-150 touch-manipulation',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none',
        variants[variant],
        sizes[size],
        className,
      ].join(' ')}
      {...rest}
    >
      {children}
    </button>
  );
}

export function ActionCard({
  children,
  className = '',
  borderColorClass = 'border-l-sky-500',
  style,
}: {
  children: ReactNode;
  className?: string;
  borderColorClass?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`bg-white rounded-2xl border border-slate-200 border-l-4 ${borderColorClass} shadow-sm p-5 sm:p-6 ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

export function PurposeLine({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-sm text-slate-500 italic max-w-2xl mb-5 sm:mb-6 leading-relaxed ${className}`}>{children}</p>
  );
}

export function TopicStatusIcon({ status }: { status: 'not_started' | 'studied' | 'mastered' }) {
  if (status === 'mastered') return <Star className="w-4 h-4 text-sky-500 fill-sky-500 shrink-0" aria-label="Mastered" />;
  if (status === 'studied') return <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" aria-label="Studied" />;
  return <Circle className="w-4 h-4 text-slate-300 shrink-0" aria-label="Not started" />;
}

export function StreakIndicator({ streak, atRisk = false }: { streak: number; atRisk?: boolean }) {
  if (streak === 0) {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 text-slate-600 text-sm font-medium ring-1 ring-slate-100">
        Study today to start a streak!
      </span>
    );
  }
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium ${
        atRisk
          ? 'bg-amber-50 text-amber-700 ring-1 ring-amber-200/60'
          : 'bg-orange-50 text-orange-600 ring-1 ring-orange-100'
      }`}
    >
      <Flame className="w-4 h-4" />
      {streak}-day streak{atRisk ? ' (at risk)' : ''}
    </span>
  );
}

export function AchievementBadge({
  title,
  description,
  unlocked,
  unlockDate,
  subjectId,
}: {
  title: string;
  description: string;
  unlocked: boolean;
  unlockDate?: string;
  subjectId?: string;
}) {
  const color = subjectId ? getSubjectColor(subjectId) : null;
  if (unlocked) {
    return (
      <div
        className={`rounded-2xl border p-4 text-center transition-shadow hover:shadow-sm ${
          color ? `${color.tint} border-transparent` : 'bg-emerald-50 border-emerald-200'
        }`}
      >
        <div
          className={`w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center ${
            color ? color.bar : 'bg-emerald-500'
          }`}
        >
          <CheckCircle2 className="w-5 h-5 text-white" />
        </div>
        <p className="font-semibold text-slate-900 text-sm">{title}</p>
        <p className="text-slate-500 text-xs mt-1">{description}</p>
        {unlockDate && <p className="text-slate-400 text-xs mt-1.5">Unlocked {unlockDate}</p>}
      </div>
    );
  }
  return (
    <div className="rounded-2xl border border-slate-200 p-4 text-center bg-slate-50/80">
      <div className="w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center bg-slate-200">
        <Lock className="w-5 h-5 text-slate-400" />
      </div>
      <p className="font-semibold text-slate-500 text-sm">{title}</p>
      <p className="text-slate-400 text-xs mt-1">Locked — {description}</p>
    </div>
  );
}

/** Icon button with consistent 44px touch target for header / toolbars */
export function IconButton({
  children,
  onClick,
  label,
  className = '',
}: {
  children: ReactNode;
  onClick?: () => void;
  label: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={[
        'flex items-center justify-center w-11 h-11 rounded-xl',
        'text-slate-600 hover:bg-slate-100 hover:text-slate-900 active:bg-slate-200',
        'transition-colors touch-manipulation',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-1',
        className,
      ].join(' ')}
    >
      {children}
    </button>
  );
}
