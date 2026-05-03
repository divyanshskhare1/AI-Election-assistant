import React from 'react';
import { cn } from '../lib/utils';
import { SectionHeaderProps } from './types';

/**
 * SectionHeader component.
 * Displays a section title with an optional icon and description.
 * Supports different title sizes (sm, md, lg).
 * 
 * @param {SectionHeaderProps} props - Component props
 */
export const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  description, 
  icon,
  className,
  size = 'lg'
}) => {
  const sizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl'
  };

  return (
    <div className={cn('space-y-4', className)}>
      <div className="flex items-center gap-3">
        {icon && <div className="text-secondary">{icon}</div>}
        <h1 className={cn('font-display font-extrabold text-primary', sizes[size])}>
          {title}
        </h1>
      </div>
      {description && (
        <p className="text-on-surface-variant text-lg max-w-3xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
