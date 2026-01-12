import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'category' | 'license';
  className?: string;
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        variant === 'default' && 'bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200',
        variant === 'category' && 'bg-neutral-100 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200',
        variant === 'license' && 'bg-neutral-100 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200',
        className
      )}
    >
      {children}
    </span>
  );
}
