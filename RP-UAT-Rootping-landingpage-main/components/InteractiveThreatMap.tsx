
import React, { useState, useEffect } from 'react';
import { 
    DomainIcon, DnsIcon, CertificateIcon, FingerprintIcon, NetworkFootprintIcon, 
    OpenPortsIcon, TyposquatIcon, CloudIcon, CodeSecretIcon, DarkWebIcon 
} from './icons/ThreatMapIcons';
import { RootpingLogo } from './icons/RootpingLogo';

// FIX: Stored component references instead of instantiated elements to allow passing props later.
const threatData = [
  { id: 0, title: 'Domain Intelligence', icon: DomainIcon, details: ['WHOIS details', 'Registrar history', 'Name server changes', 'Domain age & ownership'] },
  { id: 1, title: 'DNS Records', icon: DnsIcon, details: ['A / AAAA', 'MX', 'TXT (SPF/DMARC/DKIM)', 'CNAME', 'Zone misconfigurations'] },
  { id: 2, title: 'SSL/TLS Certificates', icon: CertificateIcon, details: ['Certificate transparency logs', 'Expired / weak certs', 'Mismatched domains', 'Certificate chain weaknesses'] },
  { id: 3, title: 'Web Fingerprinting', icon: FingerprintIcon, details: ['Webpage analysis', 'Web server banners', 'Framework & CMS detection', 'Technology stack mapping'] },
  { id: 4, title: 'Network Footprint', icon: NetworkFootprintIcon, details: ['IP ranges', 'ASN data', 'Geolocation', 'Routing paths', 'Open directories'] },
  { id: 5, title: 'Open Ports & Services', icon: OpenPortsIcon, details: ['RDP, SSH, VPN, DBs', 'Admin interfaces', 'Outdated services', 'Protocol misconfigurations'] },
  { id: 6, title: 'Similarity / Typosquat Analysis', icon: TyposquatIcon, details: ['Lookalike domains', 'Homoglyph domains', 'Clone site detection', 'Phishing infrastructure'] },
  { id: 7, title: 'Cloud & Storage Exposures', icon: CloudIcon, details: ['Public S3 buckets', 'Blob storage leaks', 'Misconfigured cloud instances', 'Identity/role exposures'] },
  { id: 8, title: 'Code & Repo Secrets', icon: CodeSecretIcon, details: ['API keys', 'SSH keys', 'Hard-coded credentials', 'Internal endpoints leaked in commits'] },
  { id: 9, title: 'Dark Web Mentions', icon: DarkWebIcon, details: ['Credential dumps', 'Data leaks', 'Threat actor chatter', 'Network access listings'] },
];

const mapCenter = { x: 225, y: 225 };
const radius = 180;
const nodePositions = threatData.map((_, index) => {
    const angle = (index / threatData.length) * 2 * Math.PI - Math.PI / 2; // Start from top
    let x = mapCenter.x + radius * Math.cos(angle);
    const y = mapCenter.y + radius * Math.sin(angle);
    
    // FIX: Add a tiny, imperceptible offset to prevent perfectly vertical lines, 
    // which can cause SVG filter rendering issues in some browsers.
    if (Math.abs(x - mapCenter.x) < 0.01) {
      x += 0.01;
    }

    return { x, y };
});

export const InteractiveThreatMap: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeNode = threatData[activeIndex];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex + 1) % threatData.length);
        }, 5000); // Cycle every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-brand-navy rounded-lg border border-slate-700/50 shadow-2xl overflow-hidden min-h-[600px] flex flex-col md:flex-row">
            {/* Left Panel: Live Visual Map */}
            <div className="w-full md:w-1/2 border-r border-slate-700/50 bg-brand-deep-blue/30 p-4 md:p-8 flex flex-col items-center justify-center">
                 <div className="relative w-full max-w-[450px] aspect-square">
                    <svg viewBox="0 0 450 450" className="w-full h-full overflow-visible">
                         <defs>
                            <filter id="map-glow" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Pulsing Rings */}
                        <circle cx={mapCenter.x} cy={mapCenter.y} r="20" fill="none" stroke="#64ffda" strokeWidth="1.5" strokeOpacity="0.8">
                           <animate attributeName="r" from="20" to="150" dur="3s" begin="0s" repeatCount="indefinite" />
                           <animate attributeName="stroke-opacity" from="0.8" to="0" dur="3s" begin="0s" repeatCount="indefinite" />
                        </circle>
                        <circle cx={mapCenter.x} cy={mapCenter.y} r="20" fill="none" stroke="#64ffda" strokeWidth="1.5" strokeOpacity="0.6">
                           <animate attributeName="r" from="20" to="150" dur="3s" begin="1.5s" repeatCount="indefinite" />
                           <animate attributeName="stroke-opacity" from="0.6" to="0" dur="3s" begin="1.5s" repeatCount="indefinite" />
                        </circle>

                        {/* Connection Lines */}
                        {nodePositions.map((pos, index) => (
                            <line
                                key={`line-${index}`}
                                x1={mapCenter.x}
                                y1={mapCenter.y}
                                x2={pos.x}
                                y2={pos.y}
                                stroke={activeIndex === index ? '#64ffda' : '#334155'}
                                strokeWidth={activeIndex === index ? 2.5 : 1}
                                className="transition-all duration-500"
                                filter={activeIndex === index ? 'url(#map-glow)' : 'none'}
                            />
                        ))}
                        
                        {/* Central Hub */}
                        <circle cx={mapCenter.x} cy={mapCenter.y} r="50" fill="#0a192f" stroke="#64ffda" strokeWidth="2" />
                        
                        <foreignObject x={mapCenter.x - 16} y={mapCenter.y - 28} width="32" height="32">
                            <div className="flex items-center justify-center w-full h-full text-brand-cyan">
                                <RootpingLogo className="w-8 h-8" />
                            </div>
                        </foreignObject>
                        
                        <text x={mapCenter.x} y={mapCenter.y + 16} textAnchor="middle" fill="#ccd6f6" fontSize="14" fontWeight="bold" className="font-syne tracking-tight">Rootping</text>
                        <text x={mapCenter.x} y={mapCenter.y + 28} textAnchor="middle" fill="#94a3b8" fontSize="9" className="font-syne uppercase tracking-wider">Platform</text>

                        {/* Nodes */}
                        {threatData.map((node, index) => {
                            const pos = nodePositions[index];
                            const isActive = activeIndex === index;
                            return (
                                <g key={node.id}>
                                    <circle
                                        cx={pos.x}
                                        cy={pos.y}
                                        r="35"
                                        fill={isActive ? '#64ffda1A' : '#1e293b'}
                                        stroke={isActive ? '#64ffda' : '#475569'}
                                        strokeWidth="2"
                                        className="transition-all duration-500"
                                    />
                                    <foreignObject x={pos.x - 18} y={pos.y - 18} width="36" height="36">
                                       <div className={`w-full h-full flex items-center justify-center transition-colors duration-300 ${isActive ? 'text-brand-cyan' : 'text-brand-slate'}`}>
                                          {/* FIX: Replaced React.cloneElement with React.createElement to correctly pass props and resolve TypeScript error. */}
                                          {React.createElement(node.icon, {width: 36, height: 36})}
                                       </div>
                                    </foreignObject>
                                </g>
                            )
                        })}
                    </svg>
                 </div>
            </div>

            {/* Right Panel: Details */}
            <div className="w-full md:w-1/2 p-8 md:p-12 relative flex items-center">
                <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-700/10 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_80%)]"></div>
                
                {activeNode && (
                    <div key={activeIndex} className="relative z-10 animate-fade-in-up">
                        <div className="flex items-center gap-6 mb-8">
                           <div className="text-brand-cyan w-20 h-20 flex-shrink-0">
                               {/* FIX: Replaced React.cloneElement with React.createElement to correctly pass props and resolve TypeScript error. */}
                               {React.createElement(activeNode.icon, {width: 80, height: 80})}
                           </div>
                           <h3 className="text-4xl font-bold text-brand-lightest-slate">{activeNode.title}</h3>
                        </div>
                        <div className="flex-1">
                           <ul className="space-y-4">
                            {activeNode.details.map((detail, index) => (
                                <li key={index} className="flex items-start gap-4 text-brand-light-slate text-lg">
                                    <svg className="w-6 h-6 mt-1 text-brand-cyan flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span>{detail}</span>
                                </li>
                            ))}
                           </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
