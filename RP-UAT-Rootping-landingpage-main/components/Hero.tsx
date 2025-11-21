
import React from 'react';
import { PlatformIllustration } from './PlatformIllustration';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-[80vh] flex items-center py-20 px-6 md:px-10 lg:px-24">
      <div className="container mx-auto w-full grid md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left">
            <h1 className="text-brand-cyan font-syne font-bold mb-4 animate-fade-in-up tracking-wide" style={{ animationDelay: '100ms' }}>
              ROOTPING SECURITY PLATFORM
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brand-lightest-slate mb-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Illuminate Your Attack Surface.
            </h2>
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brand-slate mb-8 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              Extinguish Threats, Instantly.
            </h3>
            <p className="max-w-xl mx-auto md:mx-0 text-lg text-brand-slate leading-relaxed mb-12 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              Rootping is the first platform to unify threat exposure management and real-time threat intelligence. Proactively secure your entire digital footprint before attackers can strike.
            </p>
            <div className="animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              <a href="#free-trial" className="inline-block px-8 py-4 bg-brand-cyan text-brand-deep-blue font-bold rounded-md hover:bg-opacity-90 transition-all duration-300 shadow-lg shadow-brand-cyan/20">
                Get a Personalized Demo
              </a>
            </div>
        </div>
        <div className="hidden md:flex items-center justify-center animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <PlatformIllustration showTitle={false} />
        </div>
      </div>
    </section>
  );
};
