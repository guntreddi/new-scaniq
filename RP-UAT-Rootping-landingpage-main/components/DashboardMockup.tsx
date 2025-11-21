
import React from 'react';
import { InteractiveThreatMap } from './InteractiveThreatMap';

export const DashboardMockup: React.FC = () => {
  return (
    <section id="dashboard" className="py-24 px-6 md:px-10 lg:px-24">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-lightest-slate">Clarity in Complexity</h2>
          <p className="text-lg text-brand-slate mt-4 max-w-2xl mx-auto">Visualize your entire attack surface and prioritize with intelligence.</p>
        </div>
        <div className="animate-fade-in-up" style={{animationDelay: '300ms'}}>
          <InteractiveThreatMap />
        </div>
      </div>
    </section>
  );
};
