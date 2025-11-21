
import React from 'react';
import { RootpingLogo } from './icons/RootpingLogo';
import {
  KeyIcon,
  ShieldAlertIcon,
  ServerStackIcon,
  LockIcon,
  UsersIcon,
  ZapIcon,
  WrenchIcon,
  ShieldCheckIcon,
  TrendingUpIcon,
  GitBranchIcon,
} from './icons/PlatformIcons';

const inputs = [
  { icon: <KeyIcon />, name: 'Leaked Credentials' },
  { icon: <ShieldAlertIcon />, name: 'Exploitable Vulnerabilities' },
  { icon: <ServerStackIcon />, name: 'Exposed Assets' },
  { icon: <LockIcon />, name: 'Exposed Secrets' },
  { icon: <UsersIcon />, name: 'Impersonation Infrastructure' },
];

const outputs = [
  { icon: <ZapIcon />, name: 'Fast Detection' },
  { icon: <WrenchIcon />, name: 'Auto Remediation' },
  { icon: <ShieldCheckIcon />, name: 'Attacks Prevented' },
  { icon: <TrendingUpIcon />, name: 'Risk Prioritized' },
  { icon: <GitBranchIcon />, name: 'Response Orchestrated' },
];

interface PlatformIllustrationProps {
  showTitle?: boolean;
}

export const PlatformIllustration: React.FC<PlatformIllustrationProps> = ({ showTitle = true }) => {
  // Configuration for layout
  const viewBoxWidth = 1200;
  const viewBoxHeight = 900;
  const centerY = viewBoxHeight / 2; // 450
  const startY = 100;
  const endY = 800;
  const totalHeight = endY - startY;
  const spacing = totalHeight / (inputs.length - 1); // 175px spacing

  // X Coordinates for the nodes (Wires connect here)
  // Shifted OutputX to the left to allow room for text on the right side
  const inputX = 150;  
  const outputX = 900; 

  const getNodeY = (index: number) => startY + index * spacing;

  const IllustrationContent = () => (
    <>
       {/* Desktop Illustration with Precise SVG/HTML Alignment */}
       <div className="relative w-full max-w-7xl mx-auto hidden md:block aspect-[1.5/1]">
        {/* SVG Background Layer */}
        <svg
          className="absolute inset-0 w-full h-full z-0"
          viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="wire-gradient-in" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0.6" />
            </linearGradient>
             <linearGradient id="wire-gradient-out" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
            </linearGradient>
            <filter id="icon-glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
          </defs>

          {/* Input Wires (Red Context) */}
          {inputs.map((_, index) => {
            const y = getNodeY(index);
            return (
                <path 
                    key={`path-in-${index}`} 
                    id={`path-in-${index}`} 
                    d={`M ${inputX} ${y} C ${inputX + 150} ${y}, 450 ${centerY}, 580 ${centerY}`} 
                    stroke="url(#wire-gradient-in)" 
                    strokeWidth="2"
                    strokeDasharray="4 4" 
                />
            );
          })}
          
          {/* Output Wires (White Context) */}
          {outputs.map((_, index) => {
             const y = getNodeY(index);
             return (
                 <path 
                    key={`path-out-${index}`} 
                    id={`path-out-${index}`} 
                    d={`M 620 ${centerY} C 750 ${centerY}, ${outputX - 150} ${y}, ${outputX} ${y}`} 
                    stroke="url(#wire-gradient-out)" 
                    strokeWidth="2" 
                    strokeDasharray="4 4"
                />
             );
          })}

          {/* Rotating Core Rings - Scaled Down */}
          <g transform={`translate(600, ${centerY})`}>
             <circle r="90" fill="none" stroke="#64ffda" strokeWidth="1" strokeDasharray="20 10" opacity="0.2">
                <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="60s" repeatCount="indefinite" />
             </circle>
             <circle r="75" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="10 5" opacity="0.3">
                 <animateTransform attributeName="transform" type="rotate" from="360 0 0" to="0 0 0" dur="30s" repeatCount="indefinite" />
             </circle>
             <circle r="65" fill="none" stroke="#ffffff" strokeWidth="1" strokeDasharray="2 8" opacity="0.3">
                 <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="20s" repeatCount="indefinite" />
             </circle>
          </g>

          {/* Input Signals (RED - Threats Entering) */}
          {Array.from({ length: 15 }).map((_, i) => {
             const inputIndex = i % inputs.length;
             return (
                <rect key={`in-sig-${i}`} width="16" height="6" fill="#ef4444" rx="3" filter="drop-shadow(0 0 4px #ef4444)" opacity="0">
                    <animateMotion dur={`${3 + Math.random() * 2}s`} begin={`${i * 0.5}s`} repeatCount="indefinite" rotate="auto">
                        <mpath href={`#path-in-${inputIndex}`} />
                    </animateMotion>
                    <animate attributeName="opacity" values="0;1;1;0" dur={`${3 + Math.random() * 2}s`} begin={`${i * 0.5}s`} repeatCount="indefinite" />
                </rect>
             )
          })}

          {/* Output Signals (WHITE - Clean Intel Exiting) */}
          {Array.from({ length: 15 }).map((_, i) => {
             const outputIndex = i % outputs.length;
             return (
                 <rect key={`out-sig-${i}`} width="16" height="6" fill="#ffffff" rx="3" filter="drop-shadow(0 0 4px #ffffff)" opacity="0">
                    <animateMotion dur={`${3 + Math.random() * 2}s`} begin={`${i * 0.5}s`} repeatCount="indefinite" rotate="auto">
                        <mpath href={`#path-out-${outputIndex}`} />
                    </animateMotion>
                    <animate attributeName="opacity" values="0;1;1;0" dur={`${3 + Math.random() * 2}s`} begin={`${i * 0.5}s`} repeatCount="indefinite" />
                </rect>
             )
          })}
        </svg>

        {/* HTML Overlay Layer for Icons/Text */}
        
        {/* Inputs (Left) */}
        {inputs.map((item, index) => (
            <div 
                key={`in-node-${index}`}
                className="absolute flex flex-col items-center justify-center"
                style={{ 
                    left: `${(inputX / viewBoxWidth) * 100}%`, 
                    top: `${(getNodeY(index) / viewBoxHeight) * 100}%` 
                }} 
            >
                 <div className="relative group">
                     {/* Icon centered on the anchor point */}
                     <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 z-20 w-20 h-20 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                        <div className="text-brand-cyan drop-shadow-[0_0_10px_rgba(100,255,218,0.5)] group-hover:text-red-500 group-hover:drop-shadow-[0_0_15px_rgba(239,68,68,0.8)] transition-all duration-300">
                            {React.cloneElement(item.icon as React.ReactElement<any>, { width: 48, height: 48 })}
                        </div>
                     </div>

                     {/* Text to the RIGHT of the icon - Changed to GREY and STACKED */}
                     <div className="absolute left-[40px] top-0 -translate-y-1/2 ml-4 w-32 z-10">
                        <div className="text-slate-500 text-[10px] font-bold leading-tight group-hover:text-slate-300 transition-colors text-left">
                            {item.name.split(' ').map((word, i) => (
                                <span key={i} className="block">{word}</span>
                            ))}
                        </div>
                     </div>
                 </div>
            </div>
        ))}

        {/* Center Platform - Scaled Down */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative w-48 h-48 flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-brand-cyan/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="relative bg-brand-deep-blue border-2 border-brand-cyan/50 rounded-full w-32 h-32 flex flex-col items-center justify-center text-center shadow-[0_0_40px_rgba(100,255,218,0.1)]">
                    <div className="text-brand-cyan drop-shadow-[0_0_10px_rgba(100,255,218,0.8)]">
                        <RootpingLogo className="w-12 h-12" />
                    </div>
                    <span className="mt-2 font-syne font-bold text-brand-lightest-slate text-xs tracking-wide">ROOTPING</span>
                </div>
            </div>
        </div>

        {/* Outputs (Right) */}
        {outputs.map((item, index) => (
            <div 
                key={`out-node-${index}`}
                className="absolute flex flex-col items-center justify-center"
                style={{ 
                    left: `${(outputX / viewBoxWidth) * 100}%`, 
                    top: `${(getNodeY(index) / viewBoxHeight) * 100}%` 
                }}
            >
                <div className="relative group">
                     {/* Icon centered on the anchor point */}
                     <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 z-20 w-20 h-20 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                        <div className="text-brand-cyan drop-shadow-[0_0_10px_rgba(100,255,218,0.5)] group-hover:text-white group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-300">
                            {React.cloneElement(item.icon as React.ReactElement<any>, { width: 48, height: 48 })}
                        </div>
                     </div>

                     {/* Text to the RIGHT of the icon - Changed to GREY and STACKED */}
                     <div className="absolute left-[40px] top-0 -translate-y-1/2 ml-4 w-32 z-10">
                        <div className="text-slate-500 text-[10px] font-bold leading-tight group-hover:text-slate-300 transition-colors text-left">
                            {item.name.split(' ').map((word, i) => (
                                <span key={i} className="block">{word}</span>
                            ))}
                        </div>
                     </div>
                 </div>
            </div>
        ))}

      </div>
      
      {/* Mobile Fallback Layout */}
      <div className="md:hidden space-y-8">
         <h3 className="text-2xl font-bold text-center text-red-500 mb-4">Threat Inputs</h3>
         <div className="grid grid-cols-2 gap-4">
            {inputs.map(item => (
                <div key={item.name} className="bg-brand-navy p-4 rounded-lg text-center border border-red-500/20 shadow-lg">
                    <div className="text-red-400 w-10 h-10 mx-auto mb-3 flex items-center justify-center drop-shadow-[0_0_5px_rgba(248,113,113,0.5)]">
                        {React.cloneElement(item.icon as React.ReactElement<any>, { width: 32, height: 32 })}
                    </div>
                    <p className="text-slate-500 text-xs font-medium">{item.name}</p>
                </div>
            ))}
         </div>
         
         <div className="flex justify-center py-4">
             <div className="w-1 h-16 border-l-2 border-dashed border-slate-600 relative">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-brand-cyan rounded-full animate-ping"></div>
             </div>
         </div>

         <div className="bg-brand-deep-blue border border-brand-cyan p-8 rounded-full w-40 h-40 mx-auto flex flex-col items-center justify-center shadow-[0_0_30px_rgba(100,255,218,0.2)]">
             <RootpingLogo className="w-16 h-16 text-brand-cyan mb-2" />
             <span className="text-[10px] font-bold text-brand-lightest-slate tracking-widest font-syne">ROOTPING</span>
         </div>

         <div className="flex justify-center py-4">
             <div className="w-1 h-16 border-l-2 border-dashed border-slate-600 relative">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full animate-ping"></div>
             </div>
         </div>

         <h3 className="text-2xl font-bold text-center text-white mb-4">Security Outcomes</h3>
         <div className="grid grid-cols-2 gap-4">
            {outputs.map(item => (
                 <div key={item.name} className="bg-brand-navy p-4 rounded-lg text-center border border-white/20 shadow-lg">
                    <div className="text-white w-10 h-10 mx-auto mb-3 flex items-center justify-center drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
                         {React.cloneElement(item.icon as React.ReactElement<any>, { width: 32, height: 32 })}
                    </div>
                    <p className="text-slate-500 text-xs font-medium">{item.name}</p>
                </div>
            ))}
         </div>
      </div>
    </>
  );

  if (!showTitle) {
    return <IllustrationContent />;
  }

  return (
    <section id="platform-flow" className="py-24">
      <div className="text-center mb-16 animate-fade-in-up">
        <h2 className="text-4xl font-bold text-brand-lightest-slate">From Signal to Security, Instantly</h2>
        <p className="text-lg text-brand-slate mt-4 max-w-3xl mx-auto">Rootping correlates billions of external threat signals with your internal exposure to deliver clear, actionable outcomes.</p>
      </div>
      <IllustrationContent />
    </section>
  );
};
