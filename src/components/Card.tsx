import React from 'react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';
import { CardProps } from './types';

/**
 * Card component.
 * A flexible container with standard styling variants (default, elevated, glass).
 * Supports motion animations and standard HTML attributes.
 * 
 * @param {CardProps} props - Component props
 */
export const Card: React.FC<CardProps> = ({ 
  children, 
  variant = 'default', 
  className,
  ...props 
}) => {
  const variants = {
    default: 'bg-white border border-outline-variant rounded-[2.5rem]',
    elevated: 'bg-white border border-outline-variant shadow-lg rounded-[2.5rem]',
    glass: 'bg-white/10 backdrop-blur-md border border-white/20 rounded-[2.5rem] shadow-2xl',
  };

  return (
    <motion.div 
      className={cn(variants[variant], 'p-8', className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};
