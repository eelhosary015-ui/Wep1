import React from 'react';

interface BrandMarkProps {
  className?: string;
}

/**
 * شعار REMO PRO (حرف R) — نسخة SVG متجهية تُستخدم في القائمة العلوية والتذييل.
 * الحرف مبني من ساق زرقاء ملكية + قوس وذيل بتدرّج سماوي، بنفس هوية الشعار في الهوية البصرية.
 */
export const BrandMark: React.FC<BrandMarkProps> = ({ className = 'h-9 w-9' }) => (
  <svg
    viewBox="0 0 96 96"
    className={className}
    role="img"
    aria-label="REMO PRO"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="remo-mark-stem" x1="0" y1="0" x2="0.9" y2="1">
        <stop offset="0%" stopColor="#5A6BFF" />
        <stop offset="100%" stopColor="#2136D6" />
      </linearGradient>
      <linearGradient id="remo-mark-bowl" x1="0.05" y1="0" x2="0.95" y2="1">
        <stop offset="0%" stopColor="#35D3FF" />
        <stop offset="52%" stopColor="#1FA2FF" />
        <stop offset="100%" stopColor="#1360F2" />
      </linearGradient>
    </defs>

    {/* الساق العمودية */}
    <rect x="6" y="15" width="20" height="67" rx="10" fill="url(#remo-mark-stem)" />

    {/* القوس العلوي للـ R */}
    <path
      d="M26 15h30a23 23 0 0 1 0 46H39"
      fill="none"
      stroke="url(#remo-mark-bowl)"
      strokeWidth="19"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* الذيل المائل */}
    <path
      d="M48 55 74 83"
      fill="none"
      stroke="url(#remo-mark-bowl)"
      strokeWidth="19"
      strokeLinecap="round"
    />
  </svg>
);
