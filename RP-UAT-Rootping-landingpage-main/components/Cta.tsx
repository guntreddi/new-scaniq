
import React from 'react';

export const Cta: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-10 lg:px-24">
      <div className="container mx-auto max-w-4xl text-center bg-brand-navy p-12 rounded-lg border border-slate-700/50 shadow-2xl animate-fade-in-up">
        <h2 className="text-4xl font-bold text-brand-lightest-slate mb-4">
          Start Your Free Trial Today
        </h2>
        <p className="text-lg text-brand-slate mb-8 max-w-2xl mx-auto">
          Explore exposures affecting your organization and see why global leaders rely on Rootping to safeguard their data.
        </p>
        <div className="flex justify-center items-center gap-6 flex-wrap">
          <a
            href="#free-trial"
            className="inline-block px-8 py-4 bg-brand-cyan text-brand-deep-blue font-bold rounded-md hover:bg-opacity-90 transition-all duration-300 shadow-lg shadow-brand-cyan/20"
          >
            Start a Free Trial
          </a>
          <a
            href="#free-trial"
            className="px-8 py-4 border border-brand-cyan text-brand-cyan rounded-md hover:bg-brand-cyan-tint transition-colors duration-300 font-medium"
          >
            Request a Demo
          </a>
        </div>
      </div>
    </section>
  );
};
