import React from 'react';
import { Landmark, Award, Users, FileText, Shield, Vote } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { SeatDistributionChart } from './Dashboard/SeatDistributionChart';
import { LegislativeHouseCard } from './Dashboard/LegislativeHouseCard';
import { ElectoralCollegeSection } from './Dashboard/ElectoralCollegeSection';
import { LegislativeHouse } from './types';

const LOK_SABHA: LegislativeHouse = {
  name: "Lok Sabha",
  type: "House of the People (Lower House)",
  icon: Vote,
  accentIcon: Landmark,
  colorClass: "bg-blue-600",
  bgClass: "bg-blue-50/50",
  borderClass: "border-blue-100",
  textClass: "text-blue-900",
  shadowClass: "shadow-blue-200",
  description: "Members are directly elected by the public across 543 constituencies. It's where the Prime Minister is usually appointed from and where the government is formed.",
  maxSeats: 550,
  tenure: "5 Years",
  features: [
    { icon: Users, label: 'Directly elected by citizens' },
    { icon: FileText, label: 'Power to pass Budget and Money Bills' },
    { icon: Shield, label: 'Current Speaker: Shri Om Birla' }
  ]
};

const RAJYA_SABHA: LegislativeHouse = {
  name: "Rajya Sabha",
  type: "Council of States (Upper House)",
  icon: Landmark,
  accentIcon: Award,
  colorClass: "bg-red-600",
  bgClass: "bg-red-50/50",
  borderClass: "border-red-100",
  textClass: "text-red-900",
  shadowClass: "shadow-red-200",
  description: "A permanent house representing the states and union territories. Members are elected by the elected members of State Legislative Assemblies.",
  maxSeats: 250,
  tenure: "Permanent",
  features: [
    { icon: Users, label: 'Indirectly elected (MLA voting)' },
    { icon: Award, label: '12 members nominated by President' },
    { icon: Shield, label: 'Ex-officio Chairman: Vice President' }
  ]
};

/**
 * Parliamentary Structure Dashboard.
 * Explains the bicameral system (Lok Sabha & Rajya Sabha) with charts,
 * house cards, and information about the Electoral College.
 */
export default function Dashboard() {
  return (
    <div className="p-6 md:p-12 lg:pt-4 lg:px-2 lg:pb-2 max-w-7xl mx-auto space-y-16 mt-2">
      <SectionHeader 
        title="Parliamentary Structure"
        description="India follows a bicameral legislative system. Understanding the difference between the House of the People and the Council of States is key to understanding our democracy."
      />

      <SeatDistributionChart />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <LegislativeHouseCard house={LOK_SABHA} index={0} />
        <LegislativeHouseCard house={RAJYA_SABHA} index={1} />
      </div>

      <ElectoralCollegeSection />
    </div>
  );
}
