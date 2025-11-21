
import React from 'react';
import { NetworkIcon, BrainCircuitIcon, MagnifyingGlassIcon } from './icons/FeatureIcons';

const featuresData = [
  {
    icon: <NetworkIcon />,
    title: "Unified Exposure View",
    description: "See your entire digital footprint—from cloud to code—in a single, queryable platform. Discover shadow IT and unknown assets automatically."
  },
  {
    icon: <BrainCircuitIcon />,
    title: "AI-Driven Prioritization",
    description: "Our engine analyzes trillions of threat signals to tell you exactly what to fix first, cutting through the noise of vulnerability alerts."
  },
  {
    icon: <MagnifyingGlassIcon />,
    title: "Actionable Intel",
    description: "Go beyond alerts. Get contextual intelligence on threat actors, their TTPs, and proactive defense strategies tailored to your environment."
  }
];

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; delay: number }> = ({ icon, title, description, delay }) => {
  return (
    <div className="bg-brand-navy p-8 rounded-lg shadow-xl border border-slate-700/50 hover:border-brand-cyan/50 hover:-translate-y-2 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${delay}ms`}}>
      <div className="mb-6 text-brand-cyan">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-brand-lightest-slate mb-4">{title}</h3>
      <p className="text-brand-slate leading-relaxed">{description}</p>
    </div>
  );
}

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-brand-lightest-slate">An Integrated Approach to Security</h2>
        <p className="text-lg text-brand-slate mt-4 max-w-2xl mx-auto">Stop chasing vulnerabilities. Start managing exposure.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {featuresData.map((feature, index) => (
          <FeatureCard key={feature.title} {...feature} delay={(index + 1) * 200} />
        ))}
      </div>
    </section>
  );
};
