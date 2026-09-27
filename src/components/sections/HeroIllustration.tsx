"use client";

import { motion, type MotionValue } from "framer-motion";

export default function HeroIllustration({
  progress,
}: {
  progress: MotionValue<number>;
}) {
  return (
    <svg
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#173B60" />
          <stop offset="100%" stopColor="#071726" />
        </linearGradient>
        <clipPath id="insulationClip">
          <rect x="540" y="240" width="70" height="320" />
        </clipPath>
      </defs>

      <rect width="800" height="600" fill="url(#skyGrad)" />
      <rect x="0" y="560" width="800" height="40" fill="#050f1c" />

      <polygon
        points="120,240 680,240 400,80"
        fill="#16406A"
        stroke="#0A2038"
        strokeWidth="2"
      />

      <rect x="160" y="240" width="340" height="320" fill="#16406A" />
      <rect x="195" y="300" width="70" height="80" fill="#0A2038" stroke="#C9A227" strokeWidth="2" />
      <rect x="320" y="300" width="70" height="80" fill="#0A2038" stroke="#C9A227" strokeWidth="2" />
      <rect x="420" y="460" width="60" height="100" fill="#0A2038" stroke="#C9A227" strokeWidth="2" />

      <rect x="500" y="240" width="40" height="320" fill="#0A2038" />

      <motion.g style={{ scaleX: progress }} transform="translate(540,0)">
        <g clipPath="url(#insulationClip)" transform="translate(-540,0)">
          <rect x="540" y="240" width="70" height="320" fill="#C9A227" />
          {Array.from({ length: 9 }).map((_, i) => (
            <path
              key={i}
              d={`M540 ${252 + i * 34} Q575 ${240 + i * 34} 610 ${252 + i * 34}`}
              stroke="#96781D"
              strokeWidth="3"
              fill="none"
              opacity="0.55"
            />
          ))}
        </g>
      </motion.g>

      <motion.g style={{ opacity: progress }}>
        <rect x="610" y="240" width="30" height="320" fill="#E9EDF2" />
        <rect x="640" y="260" width="140" height="300" fill="#F6F7F9" />
        <rect x="668" y="300" width="80" height="70" fill="#16406A" opacity="0.25" />
        <rect x="655" y="470" width="110" height="55" rx="10" fill="#0E2A47" opacity="0.55" />
      </motion.g>

      <line x1="500" y1="240" x2="500" y2="560" stroke="#C9A227" strokeWidth="1.5" opacity="0.6" />
    </svg>
  );
}
