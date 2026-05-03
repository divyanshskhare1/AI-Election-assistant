import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { PortalLinkProps } from './types';

export const PortalLink: React.FC<PortalLinkProps> = ({ label, url }) => {
  return (
    <motion.a 
      layout
      href={url}
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-between p-4 bg-white border border-outline-variant rounded-2xl hover:border-primary hover:bg-primary/5 transition-all group"
    >
      <div className="flex flex-col">
          <span className="text-sm font-bold text-on-surface-variant group-hover:text-primary">{label}</span>
          <span className="text-[10px] text-outline group-hover:text-primary/70">.gov.in / .nic.in</span>
      </div>
      <ExternalLink className="w-4 h-4 text-outline group-hover:text-primary transition-colors" />
    </motion.a>
  );
};
