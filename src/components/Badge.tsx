import React from 'react';
import { cn } from '../lib/utils';
import { BadgeProps } from './types';

/**
 * Badge component.
 * Displays a small label with different color variants (orange, blue, green, red, default).
 * Used for status, party tags, or small alerts.
 * 
 * @param {BadgeProps} props - Component props
 */
export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'default', 
  className 
}) => {
  const variants = {
    orange: 'bg-orange-100 text-orange-700',
    blue: 'bg-blue-100 text-blue-700',
    green: 'bg-green-100 text-green-700',
    red: 'bg-red-100 text-red-700',
    default: 'bg-surface-container text-on-surface-variant'
  };

  return (
    <span className={cn('px-2 py-0.5 rounded-md text-[10px] uppercase font-bold tracking-widest', variants[variant], className)}>
      {children}
    </span>
  );
};
