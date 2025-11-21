
import React from 'react';

interface IconProps {
  className?: string;
  viewBox?: string;
  width?: number | string;
  height?: number | string;
}

const IconWrapper: React.FC<{ children: React.ReactNode; viewBox?: string; className?: string; width?: number | string; height?: number | string }> = ({ children, viewBox = "0 0 24 24", className, width = 48, height = 48 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox={viewBox}
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

export const DetectIcon: React.FC<IconProps> = (props) => (
    <IconWrapper {...props}>
        <circle cx="12" cy="12" r="2"></circle>
        <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48 0a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>
    </IconWrapper>
);

export const PrioritizeIcon: React.FC<IconProps> = (props) => (
    <IconWrapper {...props}>
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
    </IconWrapper>
);


export const KeyIcon: React.FC<IconProps> = (props) => (
  <IconWrapper {...props}>
    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
  </IconWrapper>
);

export const ShieldAlertIcon: React.FC<IconProps> = (props) => (
  <IconWrapper {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M12 8v4" />
    <path d="M12 16h.01" />
  </IconWrapper>
);

export const ServerStackIcon: React.FC<IconProps> = (props) => (
    <IconWrapper {...props}>
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6.01" y2="6"></line>
        <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </IconWrapper>
);

export const LockIcon: React.FC<IconProps> = (props) => (
  <IconWrapper {...props}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </IconWrapper>
);

export const UsersIcon: React.FC<IconProps> = (props) => (
  <IconWrapper {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <path d="M20 8v6" />
    <path d="M23 11h-6" />
  </IconWrapper>
);

export const ZapIcon: React.FC<IconProps> = (props) => (
  <IconWrapper {...props}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </IconWrapper>
);

export const WrenchIcon: React.FC<IconProps> = (props) => (
    <IconWrapper {...props}>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </IconWrapper>
);

export const ShieldCheckIcon: React.FC<IconProps> = (props) => (
    <IconWrapper {...props}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
    </IconWrapper>
);

export const TrendingUpIcon: React.FC<IconProps> = (props) => (
  <IconWrapper {...props}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </IconWrapper>
);

export const GitBranchIcon: React.FC<IconProps> = (props) => (
  <IconWrapper {...props}>
    <line x1="6" y1="3" x2="6" y2="15" />
    <circle cx="18" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M18 9a9 9 0 0 1-9 9" />
  </IconWrapper>
);

export const PlayIcon: React.FC = () => (
    <IconWrapper viewBox="0 0 24 24" className="fill-current">
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
    </IconWrapper>
);

export const SlackIcon: React.FC = () => (
    <IconWrapper viewBox="0 0 24 24">
        <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"/>
        <path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
        <path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"/>
        <path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"/>
        <path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"/>
        <path d="M15.5 19.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-1.5h1.5c.83 0 1.5.67 1.5 1.5z"/>
        <path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"/>
        <path d="M8.5 4.5C8.5 3.67 9.17 3 10 3s1.5.67 1.5 1.5v1.5H10c-.83 0-1.5-.67-1.5-1.5z"/>
    </IconWrapper>
);

export const JiraIcon: React.FC = () => (
    <IconWrapper viewBox="0 0 24 24">
        <path d="M11.53 2.53a5.5 5.5 0 0 0-7.78 7.78l7.78-7.78Z"/>
        <path d="M11.53 10.31a5.5 5.5 0 0 0-7.78 7.78l7.78-7.78Z"/>
        <path d="M19.31 10.31a5.5 5.5 0 0 0-7.78 7.78l7.78-7.78Z"/>
    </IconWrapper>
);

export const TeamsIcon: React.FC = () => (
    <IconWrapper viewBox="0 0 24 24" className="fill-current">
        <path d="M8.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
        <path d="M1 11.5A1.5 1.5 0 0 1 2.5 10h6a1.5 1.5 0 0 1 1.5 1.5V14h-9v-2.5z" />
        <path d="M23 11.5A1.5 1.5 0 0 0 21.5 10h-6a1.5 1.5 0 0 0-1.5 1.5V14h9v-2.5z" />
        <path d="M20.5 8a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0z" />
        <path d="M16 15H8v2.5A1.5 1.5 0 0 0 9.5 19h5a1.5 1.5 0 0 0 1.5-1.5V15z" />
        <path d="M14.5 13a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
    </IconWrapper>
);
