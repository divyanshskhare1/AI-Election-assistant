import React from 'react';
import { motion } from 'motion/react';
import { User, Info, Search, ArrowRight } from 'lucide-react';
import { type Screen } from '../../App';
import { Card } from '../../components/Card';
import { cn } from '../../lib/utils';

interface QuickNavProps {
  onNavigate: (screen: Screen) => void;
}

export const QuickNav: React.FC<QuickNavProps> = ({ onNavigate }) => {
  const cards = [
    {
      title: "Voter Registration",
      desc: "Check your enrollment status and apply for your Voter ID card online.",
      icon: User,
      color: "text-blue-600 bg-blue-50",
      action: () => onNavigate('guide')
    },
    {
      title: "Election Schedule",
      desc: "Find out when your constituency goes to polls with our interactive timeline.",
      icon: Info,
      color: "text-orange-600 bg-orange-50",
      action: () => onNavigate('timeline')
    },
    {
      title: "Candidate Insights",
      desc: "Explore details about candidates contesting in your area.",
      icon: Search,
      color: "text-green-600 bg-green-50",
      action: () => onNavigate('candidates')
    }
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto w-full lg:pt-[88px] lg:px-2 lg:pb-2">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl font-display font-bold text-primary">Election Essentials</h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">Everything you need to be an informed voter this election season.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className="h-full"
          >
            <Card className="group cursor-pointer p-8 h-full flex flex-col" onClick={card.action}>
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110", card.color)}>
                <card.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-3">{card.title}</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">{card.desc}</p>
              <div className="mt-auto flex items-center gap-2 text-primary font-bold text-sm">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
