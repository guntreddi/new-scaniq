import React from 'react';

interface IconProps {
  width?: number;
  height?: number;
}

const IconWrapper: React.FC<IconProps & { children: React.ReactNode }> = ({ children, width = 48, height = 48 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

export const DomainIcon: React.FC<IconProps> = (props) => (
  <IconWrapper {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </IconWrapper>
);

export const DnsIcon: React.FC<IconProps> = (props) => (
  <IconWrapper {...props}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    <line x1="8" y1="7" x2="16" y2="7" />
    <line x1="8" y1="11" x2="16" y2="11" />
  </IconWrapper>
);

export const CertificateIcon: React.FC<IconProps> = (props) => (
  <IconWrapper {...props}>
    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <path d="M11.5 21H7.5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l-2.5 2.5" />
    <path d="M14 15h-1" />
    <path d="M18 15h2" />
    <path d="M16 13v4" />
    <path d="m14.8 17.2 1.2-1.2" />
    <path d="m17.2 17.2-1.2-1.2" />
  </IconWrapper>
);

export const FingerprintIcon: React.FC<IconProps> = (props) => (
  <IconWrapper {...props}>
    <path d="M12 12c-2 0-4.5 1-4.5 3.5V17h9v-1.5c0-2.5-2.5-3.5-4.5-3.5z" />
    <path d="M12 3a9 9 0 0 1 9 9c0 1.5-.5 3-1.5 4.5" />
    <path d="M3 12a9 9 0 0 1 1.5-4.5" />
    <path d="M12 3a9 9 0 0 0-7.5 4.5" />
    <path d="M21 12a9 9 0 0 0-1.5-4.5" />
  </IconWrapper>
);

export const NetworkFootprintIcon: React.FC<IconProps> = (props) => (
  <IconWrapper {...props}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </IconWrapper>
);

export const OpenPortsIcon: React.FC<IconProps> = (props) => (
  <IconWrapper {...props}>
    <path d="M12 12h.01" />
    <path d="M15 6h-6a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3z" />
    <path d="M7 12h.01" />
    <path d="M17 12h.01" />
  </IconWrapper>
);

export const TyposquatIcon: React.FC<IconProps> = (props) => (
  <IconWrapper {...props}>
    <circle cx="12" cy="12" r="3" />
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
  </IconWrapper>
);

export const CloudIcon: React.FC<IconProps> = (props) => (
  <IconWrapper {...props}>
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
  </IconWrapper>
);

export const CodeSecretIcon: React.FC<IconProps> = (props) => (
  <IconWrapper {...props}>
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72" />
  </IconWrapper>
);

export const DarkWebIcon: React.FC<IconProps> = (props) => (
  <IconWrapper {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 18a6 6 0 0 0 6-6 6 6 0 0 0-6-6" />
  </IconWrapper>
);
