
import React, { useEffect } from 'react';
import { 
    DetectIcon, 
    PrioritizeIcon, 
    WrenchIcon, 
    ShieldCheckIcon, 
    UsersIcon, 
    TrendingUpIcon,
    ZapIcon
} from './icons/PlatformIcons';
import { NetworkIcon, BrainCircuitIcon, MagnifyingGlassIcon } from './icons/FeatureIcons';

const WorldMapBackground: React.FC = () => (
  <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
     <path d="M150,120 Q180,100 200,130 T280,150 T350,120 T420,160 T500,140 T600,180 T700,150 T850,200" fill="none" stroke="#64ffda" strokeWidth="2" strokeDasharray="5,5" />
     <path d="M100,250 Q150,300 250,280 T400,320 T550,300 T700,350 T850,300" fill="none" stroke="#64ffda" strokeWidth="2" strokeDasharray="10,10" opacity="0.5" />
     {/* Simple dot grid representing nodes */}
     {Array.from({ length: 50 }).map((_, i) => (
         <circle key={i} cx={Math.random() * 1000} cy={Math.random() * 500} r={Math.random() * 2} fill="#64ffda" opacity={Math.random()} />
     ))}
  </svg>
);

export const CompanyPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id="company" className="bg-brand-deep-blue">
            {/* Hero Section */}
            <section className="relative py-24 px-6 md:px-10 lg:px-24 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                <div className="relative z-10 max-w-5xl mx-auto text-center animate-fade-in-up">
                    <span className="text-brand-cyan font-mono text-sm tracking-wider uppercase mb-4 block">About Rootping</span>
                    <h1 className="text-4xl md:text-6xl font-bold text-brand-lightest-slate mb-8 font-syne leading-tight">
                        Illuminate Your Attack Surface. <br />
                        <span className="text-brand-slate">Extinguish Threats. Instantly.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-brand-light-slate max-w-3xl mx-auto leading-relaxed mb-12">
                        Rootping is the first platform to unify threat exposure management (CTEM) and real-time threat intelligence, giving organizations complete visibility into their digital footprint.
                    </p>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="py-16 bg-brand-navy/30 border-y border-slate-800">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto">
                        <svg className="w-12 h-12 text-brand-cyan mx-auto mb-6 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H7.19922V13.3452C6.29207 13.6996 5.30392 13.5369 4.56304 12.796C3.58673 11.8197 3.58673 10.2368 4.56304 9.26051C5.53935 8.2842 7.12226 8.2842 8.09858 9.26051C8.83945 10.0014 9.00213 10.9895 8.64772 11.8967L11.2929 11.8967C11.2929 10.2398 12.636 8.89666 14.2929 8.89666L17.2929 8.89666C18.9498 8.89666 20.2929 10.2398 20.2929 11.8967V14.8967C20.2929 16.5535 18.9498 17.8967 17.2929 17.8967H16.017C15.4647 17.8967 15.017 18.3444 15.017 18.8967V21H14.017ZM7.02802 11.3818C6.63749 11.7724 6.00433 11.7724 5.6138 11.3818C5.22328 10.9913 5.22328 10.3581 5.6138 9.96761C6.00433 9.57709 6.63749 9.57709 7.02802 9.96761C7.41854 10.3581 7.41854 10.9913 7.02802 11.3818Z"></path></svg>
                        <h2 className="text-2xl md:text-3xl font-light italic text-brand-lightest-slate font-syne">
                            "Our mission is simple: stop chasing vulnerabilities and start managing exposure."
                        </h2>
                    </div>
                </div>
            </section>

            {/* What We Do */}
            <section className="py-24 px-6 md:px-10 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-lightest-slate font-syne">What We Do</h2>
                        <p className="text-brand-slate mt-4 max-w-2xl mx-auto">
                            Rootping combines cutting-edge technology with actionable intelligence to help organizations proactively defend their perimeter.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="bg-brand-navy p-8 rounded-xl border border-slate-700/50 hover:border-brand-cyan/50 transition-all duration-300 group">
                            <div className="w-16 h-16 bg-brand-deep-blue rounded-lg flex items-center justify-center text-brand-cyan mb-6 group-hover:scale-110 transition-transform">
                                <DetectIcon />
                            </div>
                            <h3 className="text-xl font-bold text-brand-lightest-slate mb-4">Detect Exposures</h3>
                            <p className="text-brand-slate leading-relaxed text-sm">
                                Uncover leaked credentials, exploitable vulnerabilities, exposed assets, secrets, and impersonation infrastructure across the deep, dark, and open web.
                            </p>
                        </div>

                        <div className="bg-brand-navy p-8 rounded-xl border border-slate-700/50 hover:border-brand-cyan/50 transition-all duration-300 group">
                            <div className="w-16 h-16 bg-brand-deep-blue rounded-lg flex items-center justify-center text-brand-cyan mb-6 group-hover:scale-110 transition-transform">
                                <PrioritizeIcon />
                            </div>
                            <h3 className="text-xl font-bold text-brand-lightest-slate mb-4">Prioritize Risk</h3>
                            <p className="text-brand-slate leading-relaxed text-sm">
                                AI-driven analysis of trillions of signals identifies which threats matter most, contextualized with attacker tactics and historical intelligence.
                            </p>
                        </div>

                        <div className="bg-brand-navy p-8 rounded-xl border border-slate-700/50 hover:border-brand-cyan/50 transition-all duration-300 group">
                            <div className="w-16 h-16 bg-brand-deep-blue rounded-lg flex items-center justify-center text-brand-cyan mb-6 group-hover:scale-110 transition-transform">
                                <WrenchIcon />
                            </div>
                            <h3 className="text-xl font-bold text-brand-lightest-slate mb-4">Remediate Automatically</h3>
                            <p className="text-brand-slate leading-relaxed text-sm">
                                Resolve exposures through integrations, workflows, and playbooks, turning intelligence into action.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Platform */}
            <section className="py-24 bg-brand-navy relative">
                <div className="container mx-auto px-6 md:px-10 lg:px-24 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-lightest-slate font-syne">Our Platform</h2>
                        <p className="text-brand-slate mt-4">An integrated view of your attack surface.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="flex flex-col items-center text-center p-6">
                            <div className="text-brand-cyan mb-6 transform hover:rotate-12 transition-transform duration-500">
                                <NetworkIcon />
                            </div>
                            <h3 className="text-xl font-bold text-brand-lightest-slate mb-3">Unified Exposure View</h3>
                            <p className="text-brand-slate text-sm">Discover shadow IT, unknown assets, and external risks in a single, queryable platform.</p>
                        </div>
                        
                        <div className="flex flex-col items-center text-center p-6 border-x border-slate-700/50">
                            <div className="text-brand-cyan mb-6 transform hover:scale-110 transition-transform duration-500">
                                <BrainCircuitIcon />
                            </div>
                            <h3 className="text-xl font-bold text-brand-lightest-slate mb-3">AI-Driven Prioritization</h3>
                            <p className="text-brand-slate text-sm">Focus on the threats that matter most, reducing alert fatigue.</p>
                        </div>

                        <div className="flex flex-col items-center text-center p-6">
                            <div className="text-brand-cyan mb-6 transform hover:-translate-y-2 transition-transform duration-500">
                                <MagnifyingGlassIcon />
                            </div>
                            <h3 className="text-xl font-bold text-brand-lightest-slate mb-3">Actionable Intelligence</h3>
                            <p className="text-brand-slate text-sm">Gain contextual insights on threat actors, tactics, and proactive defense strategies.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Data Intelligence Stats */}
            <section className="py-24 bg-brand-deep-blue relative overflow-hidden border-y border-slate-800">
                <WorldMapBackground />
                <div className="container mx-auto px-6 md:px-10 lg:px-24 relative z-10">
                    <div className="max-w-3xl mb-16">
                        <span className="text-brand-cyan font-mono text-xs tracking-widest uppercase">Global Telemetry</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-lightest-slate font-syne mt-2 mb-6">Data & Intelligence You Can Trust</h2>
                        <p className="text-brand-slate text-lg">
                            Backed by nearly a decade of continuous collection and monitoring, Rootping delivers unmatched insight into the cybercrime ecosystem.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="border-l-2 border-brand-cyan pl-6">
                            <div className="text-3xl md:text-4xl font-bold text-brand-lightest-slate font-mono mb-2">1.4M+</div>
                            <p className="text-sm text-brand-slate">New breached identities tracked weekly</p>
                        </div>
                        <div className="border-l-2 border-brand-cyan pl-6">
                            <div className="text-3xl md:text-4xl font-bold text-brand-lightest-slate font-mono mb-2">19B+</div>
                            <p className="text-sm text-brand-slate">Leaked credentials monitored</p>
                        </div>
                        <div className="border-l-2 border-brand-cyan pl-6">
                            <div className="text-3xl md:text-4xl font-bold text-brand-lightest-slate font-mono mb-2">45K+</div>
                            <p className="text-sm text-brand-slate">Telegram channels & forums covered</p>
                        </div>
                        <div className="border-l-2 border-brand-cyan pl-6">
                            <div className="text-3xl md:text-4xl font-bold text-brand-lightest-slate font-mono mb-2">2M+</div>
                            <p className="text-sm text-brand-slate">Threat actor profiles mapped</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Rootping */}
            <section className="py-24 px-6 md:px-10 lg:px-24">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                         <h2 className="text-3xl md:text-4xl font-bold text-brand-lightest-slate font-syne mb-6">Why Organizations Choose Rootping</h2>
                         <p className="text-brand-slate mb-8 text-lg">
                            Rootping helps teams act confidently, defend effectively, and never operate in the dark. Security teams rely on us to:
                         </p>
                         <ul className="space-y-4">
                            {[
                                "Visualize their complete attack surface",
                                "Detect and respond to threats faster",
                                "Prioritize remediation with actionable intelligence",
                                "Protect executives, high-risk users, and supply chains"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-brand-light-slate">
                                    <ShieldCheckIcon viewBox="0 0 24 24" className="w-6 h-6 text-brand-cyan flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                         </ul>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-brand-cyan/20 blur-3xl rounded-full"></div>
                        <div className="relative bg-brand-navy p-8 rounded-2xl border border-slate-700 shadow-2xl">
                            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-700">
                                <div className="w-12 h-12 bg-brand-cyan rounded-full flex items-center justify-center text-brand-deep-blue font-bold text-xl">R</div>
                                <div>
                                    <h4 className="text-brand-lightest-slate font-bold">Rootping Security</h4>
                                    <p className="text-xs text-brand-slate">Threat Intelligence Platform</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-2 bg-slate-700 rounded w-3/4"></div>
                                <div className="h-2 bg-slate-700 rounded w-1/2"></div>
                                <div className="h-2 bg-slate-700 rounded w-5/6"></div>
                                <div className="mt-6 p-4 bg-brand-deep-blue rounded border-l-4 border-red-500">
                                    <p className="text-xs text-red-400 font-bold mb-1">CRITICAL ALERT DETECTED</p>
                                    <p className="text-sm text-brand-slate">Exposed database credentials found on dark web forum.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-b from-brand-deep-blue to-brand-navy border-t border-slate-800 text-center px-6">
                <div className="max-w-4xl mx-auto animate-fade-in-up">
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-lightest-slate font-syne mb-6">Join the Leaders in Cybersecurity</h2>
                    <p className="text-xl text-brand-slate mb-10 max-w-2xl mx-auto">
                        Start your free trial or request a personalized demo today to explore exposures affecting your organization.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <a 
                            href="#free-trial" 
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.hash = 'free-trial';
                                window.scrollTo(0,0);
                            }}
                            className="w-full sm:w-auto px-8 py-4 bg-brand-cyan text-brand-deep-blue font-bold rounded-md hover:bg-opacity-90 transition-all duration-300 shadow-lg shadow-brand-cyan/20 text-center"
                        >
                            Start Free Trial
                        </a>
                        <a 
                            href="#free-trial" 
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.hash = 'free-trial';
                                window.scrollTo(0,0);
                            }}
                            className="w-full sm:w-auto px-8 py-4 border border-brand-cyan text-brand-cyan font-bold rounded-md hover:bg-brand-cyan-tint transition-all duration-300 text-center"
                        >
                            Request a Demo
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};
