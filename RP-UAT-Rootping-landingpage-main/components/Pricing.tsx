
import React, { useState, useEffect } from 'react';
import { NetworkIcon } from './icons/FeatureIcons';
import { 
  ShieldCheckIcon, 
  ZapIcon, 
  UsersIcon 
} from './icons/PlatformIcons';

interface PricingTierProps {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  icon: React.ReactNode;
  delay: number;
}

const PricingCard: React.FC<PricingTierProps> = ({ name, tagline, description, features, isPopular, icon, delay }) => (
  <div 
    className={`relative flex flex-col bg-brand-navy/50 border ${isPopular ? 'border-brand-cyan shadow-[0_0_30px_rgba(100,255,218,0.15)]' : 'border-slate-700/50'} rounded-xl p-8 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl backdrop-blur-sm animate-fade-in-up h-full`}
    style={{ animationDelay: `${delay}ms` }}
  >
    {isPopular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-cyan text-brand-deep-blue text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full shadow-lg">
        Most Popular
      </div>
    )}
    
    <div className="mb-6">
      <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${isPopular ? 'bg-brand-cyan text-brand-deep-blue' : 'bg-brand-deep-blue text-brand-cyan border border-slate-700'}`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-brand-lightest-slate font-syne">{name}</h3>
      <p className="text-brand-cyan text-sm font-mono mt-2">{tagline}</p>
    </div>

    <p className="text-brand-slate text-sm mb-8 leading-relaxed min-h-[60px]">
      {description}
    </p>

    <div className="flex-grow">
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-sm text-brand-light-slate">
            <svg className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>

    <a 
      href="#free-trial"
      onClick={(e) => {
        e.preventDefault();
        window.location.hash = 'free-trial';
        window.scrollTo(0,0);
      }}
      className={`w-full py-3 px-6 rounded-md font-bold text-center transition-all duration-300 ${
        isPopular 
          ? 'bg-brand-cyan text-brand-deep-blue hover:bg-opacity-90 shadow-lg shadow-brand-cyan/20' 
          : 'border border-brand-cyan text-brand-cyan hover:bg-brand-cyan-tint'
      }`}
    >
      Select Package
    </a>
  </div>
);

const FAQItem: React.FC<{ question: string; answer: string; delay: number }> = ({ question, answer, delay }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="bg-brand-navy/30 rounded-lg border border-slate-700/50 hover:border-brand-cyan/30 transition-colors duration-300 animate-fade-in-up h-fit"
      style={{ animationDelay: `${delay}ms` }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-bold text-brand-cyan font-syne pr-4 group-hover:text-brand-lightest-slate transition-colors">{question}</h3>
        <div className={`relative flex-shrink-0 w-6 h-6 text-brand-cyan transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 pb-6 pt-0">
             <p className="text-brand-slate text-sm leading-relaxed border-t border-slate-700/50 pt-4">
                {answer}
            </p>
        </div>
      </div>
    </div>
  );
};

const faqs = [
  {
    question: "How do I choose the right Rootping plan?",
    answer: "Each plan is designed for different levels of organizational maturity and monitoring needs. Consider the number of assets you want to track, how often you need automated searches, and whether you require advanced features like takedowns, API access, or quarterly intelligence reviews. If you're unsure, our team can help evaluate your environment and recommend the best fit."
  },
  {
    question: "How much does each plan cost?",
    answer: "Pricing varies by plan, number of identifiers, and customization needs. Contact our sales team for a detailed quote tailored to your organization’s size, risk profile, and monitoring requirements."
  },
  {
    question: "What are identifiers?",
    answer: "Identifiers are the digital assets Rootping monitors on your behalf—such as domains, email addresses, personal names, IPs, or brand terms. These are used to detect leaked credentials, impersonation attempts, dark-web chatter, and other exposure indicators."
  },
  {
    question: "What is Threat Flow?",
    answer: "Threat Flow is Rootping’s intelligence pipeline that collects, analyzes, and prioritizes threat data from multiple sources. It transforms raw intelligence into actionable insights that help security teams understand exposure trends, emerging threats, and high-risk events affecting your organization."
  },
  {
    question: "What is the Global Search Bar?",
    answer: "The global search bar allows you to instantly search across all monitored sources, exposures, threat intelligence feeds, and historical findings. It acts as a unified search engine for your entire Rootping workspace."
  },
  {
    question: "What are Quarterly Intelligence Reviews?",
    answer: "Quarterly Intelligence Reviews provide an expert assessment of your threat landscape, exposure trends, and prioritized recommendations. Coverage Updates ensure your monitored identifiers, sources, and threat surfaces remain aligned with your evolving business, assets, and risk profile."
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes. You can adjust your plan at any time, and changes take effect on your next billing cycle."
  },
  {
    question: "Do you offer a free trial or demo?",
    answer: "Yes. Rootping offers live demos and trial access for qualified organizations. Contact us to get started."
  },
  {
    question: "How many users can access the platform?",
    answer: "All Rootping plans include unlimited users so your entire security team can collaborate without added cost."
  },
  {
    question: "What are takedown requests?",
    answer: "Takedowns are actions performed to remove malicious content—such as phishing sites, impersonation domains, leaked data, or harmful posts—through Rootping’s partner network and service channels."
  },
  {
    question: "Is technical support included with all plans?",
    answer: "Yes. All customers get access to email support, platform documentation, and onboarding. Higher-tier plans include priority support and a dedicated executive sponsor."
  },
  {
    question: "Do you offer API access?",
    answer: "Yes. API access is included in several plans, allowing organizations to integrate Rootping data into their SIEM, SOAR, ticketing platforms, or internal dashboards."
  },
  {
    question: "Can I customize the packages?",
    answer: "Absolutely. Enterprise plans can be tailored to your monitoring volume, takedown needs, API usage, and integration requirements."
  }
];

export const Pricing: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-24 px-6 md:px-10 lg:px-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-lightest-slate mb-6 font-syne">
            Scalable Defense for <span className="text-brand-cyan">Every Horizon</span>
          </h1>
          <p className="text-lg text-brand-slate max-w-3xl mx-auto leading-relaxed">
            Whether you are a lean security team or a global enterprise, Rootping delivers the intelligence and exposure management you need to stay ahead of adversaries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          <PricingCard 
            name="Rootping Basic"
            tagline="Essential Visibility"
            description="Establish a baseline of security with continuous external asset discovery and vulnerability monitoring."
            icon={<NetworkIcon />}
            delay={100}
            features={[
              "Continuous Asset Discovery",
              "Public Vulnerability Scanning",
              "Weekly Exposure Reports",
              "Email Alerting",
              "3 Users",
              "Standard Support"
            ]}
          />

          <PricingCard 
            name="Rootping Enhanced"
            tagline="Proactive Monitoring"
            description="Expand your perimeter defense with deep web monitoring and leaked credential detection."
            icon={<ShieldCheckIcon />}
            delay={200}
            isPopular={true}
            features={[
              "Everything in Basic",
              "Leaked Credential Monitoring",
              "Deep Web & Dark Web Scans",
              "Cloud Misconfiguration Alerts",
              "Daily Scan Frequency",
              "Slack & Teams Integration",
              "10 Users"
            ]}
          />

          <PricingCard 
            name="Rootping Advanced"
            tagline="Automated Defense"
            description="Empower your SOC with automated remediation playbooks and brand protection intelligence."
            icon={<ZapIcon />}
            delay={300}
            features={[
              "Everything in Enhanced",
              "Automated Remediation API",
              "Typosquatting & Brand Protection",
              "Attack Surface Reduction Playbooks",
              "1-Hour Scan Frequency",
              "Executive Risk Dashboards",
              "Unlimited Users"
            ]}
          />

          <PricingCard 
            name="Rootping Enterprise"
            tagline="Global Intelligence"
            description="Strategic partnership featuring human-led threat hunting and bespoke intelligence feeds."
            icon={<UsersIcon />}
            delay={400}
            features={[
              "Everything in Advanced",
              "Dedicated Human Threat Analyst",
              "Custom Intelligence Feeds",
              "VIP Executive Protection",
              "Third-Party Risk Management",
              "24/7 Priority Support",
              "Quarterly Threat Briefings"
            ]}
          />
        </div>

        <div className="mt-20 bg-brand-deep-blue border border-slate-700 rounded-xl p-8 md:p-12 text-center animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          <h3 className="text-2xl font-bold text-brand-lightest-slate mb-4 font-syne">Not sure which plan is right for you?</h3>
          <p className="text-brand-slate mb-8 max-w-2xl mx-auto">
            Our team of security architects can assess your organization's unique digital footprint and recommend the optimal coverage strategy.
          </p>
          <a 
            href="#free-trial" 
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = 'free-trial';
              window.scrollTo(0,0);
            }}
            className="inline-block px-8 py-4 bg-brand-navy border border-brand-cyan text-brand-cyan font-bold rounded-md hover:bg-brand-cyan hover:text-brand-deep-blue transition-all duration-300"
          >
            Schedule a Consultation
          </a>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 pt-12 border-t border-slate-800">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-lightest-slate text-center mb-16 font-syne">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
             {faqs.map((faq, index) => (
               <FAQItem 
                 key={index}
                 question={faq.question}
                 answer={faq.answer}
                 delay={600 + (index * 50)}
               />
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};
