
import React from 'react';
import {
  AccountTakeoverIcon,
  DarkWebMonitorIcon,
  InvestigationIcon,
  VipProtectionIcon,
  IdentityIcon,
  FinanceIcon,
  TechIcon,
  RetailIcon,
  GovernmentIcon
} from './icons/SolutionIcons';

const UseCaseCard: React.FC<{ icon: React.ReactNode; title: string; description: string; delay: number }> = ({ icon, title, description, delay }) => (
  <div 
    className="group relative bg-brand-navy/50 p-8 rounded-xl border border-slate-700/50 hover:border-brand-cyan/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden animate-fade-in-up"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="mb-6 text-brand-cyan group-hover:scale-110 transition-transform duration-300 origin-left">
      <div className="w-12 h-12 flex items-center justify-center bg-brand-deep-blue rounded-lg border border-slate-700 group-hover:border-brand-cyan/30">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold text-brand-lightest-slate mb-3 font-syne group-hover:text-brand-cyan transition-colors">{title}</h3>
    <p className="text-brand-slate leading-relaxed text-sm">{description}</p>
  </div>
);

const IndustryCard: React.FC<{ icon: React.ReactNode; title: string; description: string; delay: number }> = ({ icon, title, description, delay }) => (
  <div 
    className="flex gap-6 items-start p-6 rounded-lg bg-gradient-to-r from-brand-navy to-transparent border-l-2 border-brand-cyan/20 hover:border-brand-cyan transition-all duration-300 animate-fade-in-up"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex-shrink-0 text-brand-cyan mt-1">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-bold text-brand-lightest-slate mb-2 font-syne">{title}</h3>
      <p className="text-brand-slate text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

export const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="py-24 relative">
      {/* Section 1: Use Cases */}
      <div className="container mx-auto px-6 md:px-10 lg:px-24 mb-24">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-brand-cyan font-mono text-sm tracking-wider uppercase">Use Cases</span>
          <h2 className="text-4xl font-bold text-brand-lightest-slate mt-2 font-syne">Defend Every Angle</h2>
          <p className="text-lg text-brand-slate mt-4 max-w-2xl mx-auto">
            Rootping’s platform adapts to the specific threats targeting your assets, people, and data.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <UseCaseCard 
            icon={<AccountTakeoverIcon />}
            title="Prevent Account Takeover"
            description="Stop credential stuffing attacks before they start. We monitor billions of leaked credentials to flag compromised employee and customer accounts instantly."
            delay={100}
          />
          <UseCaseCard 
            icon={<DarkWebMonitorIcon />}
            title="Dark Web Threat & Fraud"
            description="Gain visibility into the unseen. Rootping infiltrates invite-only forums and marketplaces to detect fraud schemes, abusive tools, and threats against your brand."
            delay={200}
          />
          <UseCaseCard 
            icon={<InvestigationIcon />}
            title="Threat Investigations"
            description="Accelerate analysis with forensic-grade data. Correlate disparate data points into a cohesive attack timeline for faster incident response and attribution."
            delay={300}
          />
          <UseCaseCard 
            icon={<VipProtectionIcon />}
            title="VIP & Executive Protection"
            description="Safeguard your leadership. Monitor for doxxing, physical threats, and impersonation attempts targeting your high-risk executives and their families."
            delay={400}
          />
          <UseCaseCard 
            icon={<IdentityIcon />}
            title="Identity Exposure Management"
            description="Protect your digital identity. Comprehensive monitoring for Personally Identifiable Information (PII), exposed secrets, and unauthorized access attempts."
            delay={500}
          />
             <div className="group relative bg-brand-cyan/10 p-8 rounded-xl border border-brand-cyan/50 hover:bg-brand-cyan/20 transition-all duration-300 flex flex-col justify-center items-center text-center animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <h3 className="text-xl font-bold text-brand-cyan mb-2 font-syne">Explore All Use Cases</h3>
                <p className="text-brand-lightest-slate text-sm mb-6">Discover how Rootping fits your unique security needs.</p>
                <a href="#free-trial" className="px-6 py-2 bg-brand-cyan text-brand-deep-blue font-bold rounded hover:bg-opacity-90 transition-colors text-sm">
                    Get a Demo
                </a>
            </div>
        </div>
      </div>

      {/* Section 2: Industries */}
      <div className="bg-brand-navy/30 py-24 border-y border-slate-800">
        <div className="container mx-auto px-6 md:px-10 lg:px-24">
            <div className="text-center mb-16 animate-fade-in-up">
                <span className="text-brand-cyan font-mono text-sm tracking-wider uppercase">Industries</span>
                <h2 className="text-4xl font-bold text-brand-lightest-slate mt-2 font-syne">Tailored Intelligence</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <IndustryCard 
                    icon={<FinanceIcon />}
                    title="Finance, Banking & Fintech"
                    description="Protect customer assets and ensure compliance. Detect compromised banking credentials, payment fraud schemes, and money laundering tactics on the deep web."
                    delay={100}
                />
                <IndustryCard 
                    icon={<TechIcon />}
                    title="Technology & SaaS"
                    description="Secure your code and infrastructure. Identify leaked API keys, exposed repositories, and insider threats before they compromise your intellectual property."
                    delay={200}
                />
                <IndustryCard 
                    icon={<RetailIcon />}
                    title="E-Commerce & Retail"
                    description="Defend your brand reputation. Monitor for counterfeit goods, gift card fraud, and customer database leaks across underground marketplaces."
                    delay={300}
                />
                <IndustryCard 
                    icon={<GovernmentIcon />}
                    title="Government & Defense"
                    description="National-grade situational awareness. Track geopolitical threats, hacktivist campaigns, and critical infrastructure targeting by state-sponsored actors."
                    delay={400}
                />
            </div>
        </div>
      </div>
    </section>
  );
};
