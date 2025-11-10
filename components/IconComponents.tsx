import React from 'react';

type IconProps = {
  className?: string;
};

export const MailIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

export const CheckCircleIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const SparklesIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 22.5l-.648-1.938a3.375 3.375 0 00-2.67-2.67L11.25 18l1.938-.648a3.375 3.375 0 002.67-2.67L16.25 13.5l.648 1.938a3.375 3.375 0 002.67 2.67L21.75 18l-1.938.648a3.375 3.375 0 00-2.67 2.67z" />
    </svg>
);

export const AlertTriangleIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
);

export const CalendarIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M12 12.75h.008v.008H12v-.008z" />
    </svg>
);

export const AcademicCapIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v5.5a2.5 2.5 0 005 0V14" />
    </svg>
);

export const BriefcaseIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.075c0 1.313-.972 2.4-2.25 2.4h-12c-1.278 0-2.25-1.087-2.25-2.4V14.15M12 6.375v2.25m-4.5 0v2.25m9-2.25v2.25M3.75 12h16.5M3.75 5.25h16.5a2.25 2.25 0 012.25 2.25v.375a.75.75 0 01-.75.75H3a.75.75 0 01-.75-.75V7.5a2.25 2.25 0 012.25-2.25z" />
    </svg>
);

export const BuildingOfficeIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6M9 11.25h6M9 15.75h6" />
    </svg>
);

export const ChartBarIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
);

export const PuzzlePieceIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.75a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75v-.01zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V12zM15.75 15a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75v-.01zM4.5 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V12zM7.5 15a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75v-.01zM10.5 9a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12a8.25 8.25 0 1116.5 0 8.25 8.25 0 01-16.5 0z" />
    </svg>
);

export const LightBulbIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.311a12.06 12.06 0 01-4.5 0m4.5 0a3.75 3.75 0 11-4.5 0m4.5 0a3.75 3.75 0 01-4.5 0m0 0H9m3 0h3m-3 0h-3m3 0H9m0 0h3m-3 0h3" />
    </svg>
);

export const RocketLaunchIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 2.25a14.98 14.98 0 00-12.12 6.16.983.983 0 00.983 1.293c.538 0 1.024-.213 1.38-.572a6 6 0 017.38-5.84m0 0a6 6 0 016 6c0 3.314-2.686 6-6 6" />
    </svg>
);

export const BrainCircuitIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h8.25v8.25H8.25V6.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h3.75m12.75 0h-3.75M12 3.75v3.75m0 12.75v-3.75M5.25 5.25l3.75 3.75m10.5-3.75l-3.75 3.75m0 10.5l3.75-3.75m-10.5 0l-3.75-3.75" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
    </svg>
);

export const UserGroupIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.14-4.72a3 3 0 00-5.884 0m5.884 0a3 3 0 00-5.884 0m5.884 0h.008m-5.884 0h.008m5.884 0h.008m-5.884 0h.008M12 21a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.14-4.72a3 3 0 00-5.884 0m5.884 0a3 3 0 00-5.884 0m5.884 0h.008m-5.884 0h.008m5.884 0h.008m-5.884 0h.008m11.25-1.5a3 3 0 10-5.884 0m5.884 0a3 3 0 10-5.884 0m5.884 0h.008m-5.884 0h.008" />
    </svg>
);

export const XMarkIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const WhatsappIcon: React.FC<IconProps> = ({ className }) => (
    <svg fill="currentColor" viewBox="0 0 24 24" className={className}>
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.36 21.86 12.04 21.86C17.5 21.86 21.95 17.41 21.95 11.95C21.95 6.49 17.5 2 12.04 2M12.04 3.67C16.56 3.67 20.28 7.39 20.28 11.91C20.28 16.43 16.56 20.14 12.04 20.14C10.5 20.14 9.03 19.74 7.76 19.05L7.31 18.8L4.8 19.55L5.57 17.11L5.32 16.65C4.57 15.32 4.13 13.65 4.13 11.91C4.13 7.39 7.85 3.67 12.04 3.67M9.23 7.52C8.96 7.52 8.71 7.59 8.51 7.97C8.31 8.36 7.67 8.99 7.67 10.13C7.67 11.27 8.54 12.34 8.68 12.51C8.83 12.68 10.11 14.82 12.22 15.7C13.97 16.45 14.33 16.32 14.74 16.29C15.42 16.21 16.23 15.65 16.45 14.93C16.67 14.21 16.67 13.61 16.6 13.48C16.52 13.34 16.37 13.29 16.12 13.18C15.87 13.07 14.62 12.45 14.38 12.36C14.13 12.27 13.96 12.22 13.79 12.49C13.62 12.76 13.15 13.29 13 13.43C12.85 13.57 12.7 13.59 12.45 13.5C12.2 13.4 11.29 13.11 10.21 12.18C9.36 11.45 8.79 10.55 8.68 10.28C8.57 10.01 8.69 9.87 8.81 9.75C8.92 9.64 9.06 9.47 9.18 9.32C9.3 9.17 9.35 9.05 9.43 8.86C9.51 8.67 9.46 8.51 9.39 8.39C9.32 8.27 8.96 7.52 8.81 7.52H8.81Z" />
    </svg>
);

export const PencilSquareIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
    </svg>
);