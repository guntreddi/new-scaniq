
import React from 'react';

const IconWrapper: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

// Use Case Icons
export const AccountTakeoverIcon: React.FC = () => (
  <IconWrapper>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
    <path d="M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="currentColor" fillOpacity="0.2" stroke="none" />
    <line x1="18" y1="8" x2="23" y2="13" />
    <line x1="23" y1="8" x2="18" y2="13" />
  </IconWrapper>
);

export const DarkWebMonitorIcon: React.FC = () => (
  <IconWrapper>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.2" />
  </IconWrapper>
);

export const InvestigationIcon: React.FC = () => (
  <IconWrapper>
    <path d="M2 12h10" />
    <path d="M9 4v16" />
    <path d="M3 9l3 3-3 3" />
    <path d="M12 6l4 6-4 6" />
    <rect x="16" y="8" width="6" height="8" rx="2" />
  </IconWrapper>
);

export const VipProtectionIcon: React.FC = () => (
  <IconWrapper>
    <path d="M12 2l-9 4v6c0 5.55 3.81 10.74 9 12 5.19-1.26 9-6.45 9-12V6l-9-4z" />
    <path d="M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    <path d="M8 16c0-2.2 1.8-4 4-4s4 1.8 4 4" />
  </IconWrapper>
);

export const IdentityIcon: React.FC = () => (
  <IconWrapper>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M7 8h10" />
    <path d="M7 12h10" />
    <path d="M7 16h4" />
  </IconWrapper>
);

// Industry Icons
export const FinanceIcon: React.FC = () => (
  <IconWrapper>
    <path d="M3 21h18" />
    <path d="M5 21v-7" />
    <path d="M19 21v-7" />
    <path d="M10 9L3 21" opacity="0" />
    <path d="M9 21v-8" />
    <path d="M15 21v-8" />
    <path d="M2 9h20" />
    <path d="M12 2L2 9h20L12 2z" />
  </IconWrapper>
);

export const TechIcon: React.FC = () => (
  <IconWrapper>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <path d="M15 2v2" />
    <path d="M15 20v2" />
    <path d="M2 15h2" />
    <path d="M2 9h2" />
    <path d="M20 15h2" />
    <path d="M20 9h2" />
    <path d="M9 2v2" />
    <path d="M9 20v2" />
  </IconWrapper>
);

export const RetailIcon: React.FC = () => (
  <IconWrapper>
    <circle cx="8" cy="21" r="1" />
    <circle cx="19" cy="21" r="1" />
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
  </IconWrapper>
);

export const GovernmentIcon: React.FC = () => (
  <IconWrapper>
    <path d="M4 21V9" />
    <path d="M20 21V9" />
    <path d="M12 21V9" />
    <path d="M2 9h20" />
    <path d="M12 2L2 9h20L12 2z" />
  </IconWrapper>
);
