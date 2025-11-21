
import React from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const RootpingLogo: React.FC<LogoProps> = ({ className = "w-8 h-8", ...props }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      className={className}
      aria-label="Rootping Logo"
      {...props}
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="0" x2="24" y2="24">
          <stop offset="0%" stopColor="#64ffda" />
          <stop offset="100%" stopColor="#0a192f" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Sclera (Outer Eye Shape) - Cybernetic Style */}
      <path 
        d="M12 5C7 5 2.73 8.11 1 12C2.73 15.89 7 19 12 19C17 19 21.27 15.89 23 12C21.27 8.11 17 5 12 5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17Z" 
        stroke="#64ffda" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />

      {/* Iris / Network Node */}
      <circle cx="12" cy="12" r="3" fill="#64ffda" fillOpacity="0.2" stroke="#64ffda" strokeWidth="1.5" />
      
      {/* Pupil / Data Core */}
      <circle cx="12" cy="12" r="1.5" fill="#64ffda" />

      {/* Digital "Scan" Lines indicating monitoring */}
      <path d="M2 12H4" stroke="#64ffda" strokeWidth="1" strokeOpacity="0.5" />
      <path d="M20 12H22" stroke="#64ffda" strokeWidth="1" strokeOpacity="0.5" />
      <path d="M12 2V4" stroke="#64ffda" strokeWidth="1" strokeOpacity="0.5" />
      <path d="M12 20V22" stroke="#64ffda" strokeWidth="1" strokeOpacity="0.5" />
      
      {/* Circuit Traces */}
      <path d="M15.5 15.5L17.5 17.5" stroke="#64ffda" strokeWidth="1" strokeOpacity="0.5" />
      <path d="M8.5 8.5L6.5 6.5" stroke="#64ffda" strokeWidth="1" strokeOpacity="0.5" />
    </svg>
  );
};
