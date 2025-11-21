
import React, { useState } from 'react';
import { 
    PlayIcon, 
    SlackIcon, 
    JiraIcon, 
    TeamsIcon, 
    ZapIcon,
    ShieldCheckIcon,
} from './icons/PlatformIcons';
import { NetworkIcon } from './icons/FeatureIcons';
import { RootpingLogo } from './icons/RootpingLogo';

const ThreatFlowIllustration: React.FC = () => {
    return (
        <div className="w-full max-w-5xl mx-auto aspect-[2/1] md:aspect-[3/1] relative">
            <svg viewBox="0 0 900 300" className="w-full h-full overflow-visible">
                <defs>
                    <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#1e293b" />
                        <stop offset="50%" stopColor="#64ffda" />
                        <stop offset="100%" stopColor="#1e293b" />
                    </linearGradient>
                    <filter id="glow-flow">
                         <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                         <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                         </feMerge>
                    </filter>
                </defs>

                {/* Connecting Line */}
                <line x1="100" y1="150" x2="800" y2="150" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
                
                {/* Animated Data Packets */}
                <circle r="4" fill="#64ffda" filter="url(#glow-flow)">
                    <animateMotion 
                        path="M 100 150 L 800 150" 
                        dur="3s" 
                        repeatCount="indefinite"
                        keyPoints="0;1"
                        keyTimes="0;1" 
                    />
                </circle>
                <circle r="4" fill="#64ffda" filter="url(#glow-flow)">
                    <animateMotion 
                        path="M 100 150 L 800 150" 
                        dur="3s" 
                        begin="1s"
                        repeatCount="indefinite" 
                    />
                </circle>
                 <circle r="4" fill="#64ffda" filter="url(#glow-flow)">
                    <animateMotion 
                        path="M 100 150 L 800 150" 
                        dur="3s" 
                        begin="2s"
                        repeatCount="indefinite" 
                    />
                </circle>

                {/* Step 1: Collection */}
                <g transform="translate(100, 150)">
                    <circle r="40" fill="#0a192f" stroke="#64ffda" strokeWidth="2" />
                    <text x="0" y="5" textAnchor="middle" fill="#64ffda" className="font-bold text-xl">IN</text>
                    <text x="0" y="60" textAnchor="middle" fill="#8892b0" className="text-sm font-mono">Collection</text>
                    <text x="0" y="80" textAnchor="middle" fill="#475569" className="text-xs">Dark Web, Sensors, OSINT</text>
                </g>

                {/* Step 2: AI Analysis */}
                <g transform="translate(450, 150)">
                     <circle r="50" fill="#112240" stroke="#64ffda" strokeWidth="3">
                         <animate attributeName="stroke-opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
                     </circle>
                     {/* Centered Logo: x/y = -width/2 to center at 0,0 */}
                     <RootpingLogo x="-24" y="-24" width="48" height="48" className="text-brand-cyan" />
                     <text x="0" y="70" textAnchor="middle" fill="#8892b0" className="text-sm font-mono">Threat Flow Engine</text>
                     <text x="0" y="90" textAnchor="middle" fill="#475569" className="text-xs">Normalization, Scoring, Context</text>
                </g>

                {/* Step 3: Action */}
                <g transform="translate(800, 150)">
                    <circle r="40" fill="#0a192f" stroke="#64ffda" strokeWidth="2" />
                    <text x="0" y="5" textAnchor="middle" fill="#64ffda" className="font-bold text-xl">OUT</text>
                    <text x="0" y="60" textAnchor="middle" fill="#8892b0" className="text-sm font-mono">Remediation</text>
                    <text x="0" y="80" textAnchor="middle" fill="#475569" className="text-xs">Takedowns, Tickets, Blocks</text>
                </g>
            </svg>
        </div>
    );
};

export const PlatformPage: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    // Removed auto-scroll to top effect to allow embedding in Home page flow

    return (
        <div id="platform">
            {/* Hero Overview */}
            <section className="py-20 px-6 md:px-10 lg:px-24 bg-brand-deep-blue relative overflow-hidden">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
                <div className="max-w-5xl mx-auto text-center relative z-10 animate-fade-in-up">
                    <h1 className="text-4xl md:text-6xl font-bold text-brand-lightest-slate mb-6 font-syne">
                        The <span className="text-brand-cyan">Rootping</span> Platform
                    </h1>
                    <p className="text-xl text-brand-slate leading-relaxed max-w-3xl mx-auto mb-10">
                        A unified command center for your external attack surface. We combine continuous asset discovery with elite dark web intelligence to stop attacks before they breach your perimeter.
                    </p>
                </div>
            </section>

            {/* Guided Demo Section */}
            <section className="py-16 px-6 md:px-10 lg:px-24 bg-brand-navy/50 border-y border-slate-800">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-brand-lightest-slate font-syne">See It In Action</h2>
                        <p className="text-brand-slate mt-2">10-Second Platform Tour</p>
                    </div>
                    
                    <div className="relative aspect-video bg-black/40 rounded-xl border border-slate-700 overflow-hidden shadow-2xl group cursor-pointer" onClick={() => setIsPlaying(!isPlaying)}>
                        {!isPlaying ? (
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <div className="w-20 h-20 bg-brand-cyan/90 rounded-full flex items-center justify-center text-brand-deep-blue shadow-[0_0_30px_rgba(100,255,218,0.5)] group-hover:scale-110 transition-transform duration-300">
                                    <PlayIcon />
                                </div>
                            </div>
                        ) : null}
                        
                        {/* Placeholder for Video Content - Simulating a loaded video interface */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy to-brand-deep-blue flex items-center justify-center">
                             {isPlaying ? (
                                 <div className="text-center animate-pulse">
                                     <p className="text-brand-cyan font-mono text-xl mb-2">[ DEMO VIDEO PLAYING ]</p>
                                     <p className="text-slate-500 text-sm">Simulated playback for demo purposes</p>
                                 </div>
                             ) : (
                                 <>
                                    <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                                    <div className="absolute bottom-8 left-8 right-8 h-2 bg-slate-700 rounded-full overflow-hidden">
                                        <div className="w-1/3 h-full bg-brand-cyan"></div>
                                    </div>
                                    <div className="absolute bottom-12 left-8 text-brand-lightest-slate font-mono text-sm">
                                        00:00 / 00:10 • Rootping_Platform_Overview.mp4
                                    </div>
                                 </>
                             )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Threat Flow Section */}
            <section id="platform-flow" className="py-24 px-6 md:px-10 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-lightest-slate font-syne mb-4">Threat Flow Technology</h2>
                        <p className="text-brand-slate max-w-2xl mx-auto">
                            How Rootping transforms chaos into clarity. Our proprietary AI pipeline ingests billions of signals, strips away the noise, and delivers only confirmed, high-priority risks.
                        </p>
                    </div>
                    
                    <div className="bg-brand-navy/30 border border-slate-700/50 rounded-2xl p-8 md:p-12 shadow-inner">
                        <ThreatFlowIllustration />
                    </div>
                </div>
            </section>

            {/* Integrations Section */}
            <section className="py-20 px-6 md:px-10 lg:px-24 bg-brand-navy border-y border-slate-800/50">
                 <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-brand-lightest-slate font-syne mb-6">Seamless Integrations</h2>
                    <p className="text-brand-slate mb-12 max-w-2xl mx-auto">
                        Don't change how you work. Rootping pipes critical alerts directly into the tools your team already uses every day.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Slack */}
                        <div className="p-8 bg-brand-deep-blue rounded-lg border border-slate-700 hover:border-[#4A154B] hover:shadow-[0_0_20px_rgba(74,21,75,0.3)] transition-all duration-300 group">
                            <div className="w-16 h-16 mx-auto mb-4 text-[#E01E5A] group-hover:scale-110 transition-transform">
                                <SlackIcon />
                            </div>
                            <h3 className="text-xl font-bold text-brand-lightest-slate mb-2">Slack</h3>
                            <p className="text-sm text-brand-slate">Real-time alerts sent to dedicated channels based on severity.</p>
                        </div>

                        {/* Jira */}
                        <div className="p-8 bg-brand-deep-blue rounded-lg border border-slate-700 hover:border-[#0052CC] hover:shadow-[0_0_20px_rgba(0,82,204,0.3)] transition-all duration-300 group">
                            <div className="w-16 h-16 mx-auto mb-4 text-[#0052CC] group-hover:scale-110 transition-transform">
                                <JiraIcon />
                            </div>
                            <h3 className="text-xl font-bold text-brand-lightest-slate mb-2">Jira</h3>
                            <p className="text-sm text-brand-slate">Automatically create tickets for confirmed exposures with remediation steps.</p>
                        </div>

                        {/* Teams */}
                        <div className="p-8 bg-brand-deep-blue rounded-lg border border-slate-700 hover:border-[#6264A7] hover:shadow-[0_0_20px_rgba(98,100,167,0.3)] transition-all duration-300 group">
                            <div className="w-16 h-16 mx-auto mb-4 text-[#6264A7] group-hover:scale-110 transition-transform">
                                <TeamsIcon />
                            </div>
                            <h3 className="text-xl font-bold text-brand-lightest-slate mb-2">Microsoft Teams</h3>
                            <p className="text-sm text-brand-slate">Collaborate on threat responses with integrated message cards.</p>
                        </div>
                    </div>
                 </div>
            </section>

            {/* Why Rootping */}
            <section className="py-24 px-6 md:px-10 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-lightest-slate font-syne">Why Rootping?</h2>
                        <p className="text-brand-slate mt-4">The advantage is in the architecture.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="bg-brand-navy/20 p-8 rounded-xl border-l-4 border-brand-cyan hover:bg-brand-navy/40 transition-colors">
                            <div className="mb-6 text-brand-cyan">
                                <ZapIcon />
                            </div>
                            <h3 className="text-xl font-bold text-brand-lightest-slate mb-3">Fastest Time-to-Value</h3>
                            <p className="text-brand-slate leading-relaxed">
                                Zero agents to install. Zero firewalls to configure. Rootping is 100% SaaS and starts delivering value within minutes of onboarding.
                            </p>
                        </div>

                        <div className="bg-brand-navy/20 p-8 rounded-xl border-l-4 border-brand-cyan hover:bg-brand-navy/40 transition-colors">
                            <div className="mb-6 text-brand-cyan">
                                <NetworkIcon />
                            </div>
                            <h3 className="text-xl font-bold text-brand-lightest-slate mb-3">Total Coverage</h3>
                            <p className="text-brand-slate leading-relaxed">
                                We monitor the places others don't. From obscure dark web forums to misconfigured cloud buckets, if it's exposed, we find it.
                            </p>
                        </div>

                        <div className="bg-brand-navy/20 p-8 rounded-xl border-l-4 border-brand-cyan hover:bg-brand-navy/40 transition-colors">
                             <div className="mb-6 text-brand-cyan">
                                <ShieldCheckIcon />
                            </div>
                            <h3 className="text-xl font-bold text-brand-lightest-slate mb-3">False Positive Reduction</h3>
                            <p className="text-brand-slate leading-relaxed">
                                Our "Threat Flow" engine uses multi-stage verification to ensure your security team focuses on real attacks, not ghost alerts.
                            </p>
                        </div>
                    </div>

                    <div className="mt-20 text-center">
                        <a 
                            href="#free-trial" 
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.hash = 'free-trial';
                                window.scrollTo(0,0);
                            }}
                            className="px-8 py-4 bg-brand-cyan text-brand-deep-blue font-bold rounded-md hover:bg-opacity-90 transition-all duration-300 shadow-lg shadow-brand-cyan/20"
                        >
                            Experience the Platform
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};
