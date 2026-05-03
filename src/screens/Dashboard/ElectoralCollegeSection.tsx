import React from 'react';
import { Card } from '../../components/Card';

export const ElectoralCollegeSection: React.FC = () => {
  return (
    <section className="bg-surface-container py-20 rounded-[3rem] px-8 md:px-16 text-center space-y-8">
       <h2 className="text-4xl font-display font-extrabold text-primary">Electoral College</h2>
       <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
         Did you know the President of India is elected by an Electoral College consisting of elected members of both houses and state legislatures?
       </p>
       <div className="flex flex-wrap justify-center gap-6">
          <Card className="p-6 bg-white min-w-[200px]">
             <div className="text-primary font-bold text-xl">MPs</div>
             <p className="text-xs text-outline font-medium">Members of Parliament</p>
          </Card>
          <div className="text-3xl font-display font-bold text-primary self-center">+</div>
          <Card className="p-6 bg-white min-w-[200px]">
             <div className="text-primary font-bold text-xl">MLAs</div>
             <p className="text-xs text-outline font-medium">Members of Legislative Assemblies</p>
          </Card>
       </div>
    </section>
  );
};
