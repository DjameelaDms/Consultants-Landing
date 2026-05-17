import React from "react";

/**
 * Victorian / monarchy ornaments — single-colour SVGs (currentColor)
 * Used throughout the page to reinforce a 19th-century editorial aesthetic.
 */

export const FleurDeLis = ({ size = 18, className = "", title = "Fleur de lis" }) => (
  <svg
    viewBox="0 0 64 64"
    width={size}
    height={size}
    aria-label={title}
    role="img"
    className={className}
    fill="currentColor"
  >
    <path d="M32 4c-1.6 4.4-1.4 7.8.6 12.7-3.6-.9-5.5-.5-7.7 1.2 2.3 1.7 4 4.2 5.1 7.3-3.4-1.7-6.3-1.6-9.3.4 2.5 2.2 3.5 4 4.3 6.7-2.2-1.2-4-1.5-6.2-.6 1.6 1.6 2.4 3.3 2.7 5.2-2.1-.6-3.7-.4-5.4.6 2.8 2.6 4.4 5.9 4.8 9.6h6V41h-3v-3h5l-1.2-3 4 .5L31 32h2l1.3 3.5 4-.5L37 38h5v-3h-3v6h6c.4-3.7 2-7 4.8-9.6-1.7-1-3.3-1.2-5.4-.6.3-1.9 1.1-3.6 2.7-5.2-2.2-.9-4-.6-6.2.6.8-2.7 1.8-4.5 4.3-6.7-3-2-5.9-2.1-9.3-.4 1.1-3.1 2.8-5.6 5.1-7.3-2.2-1.7-4.1-2.1-7.7-1.2C33.4 11.8 33.6 8.4 32 4z" />
    <path d="M22 49h20v3H22z" />
    <path d="M28 54h8v3h-8z" />
  </svg>
);

export const Crown = ({ size = 20, className = "", title = "Crown" }) => (
  <svg
    viewBox="0 0 64 64"
    width={size}
    height={size}
    aria-label={title}
    role="img"
    className={className}
    fill="currentColor"
  >
    <path d="M6 22l8 22h36l8-22-12 8-8-14-6 6-6-6-8 14L6 22z" />
    <circle cx="6" cy="22" r="3" />
    <circle cx="32" cy="14" r="3" />
    <circle cx="58" cy="22" r="3" />
    <rect x="12" y="48" width="40" height="4" />
    <rect x="10" y="54" width="44" height="3" />
  </svg>
);

/**
 * Victorian florette — a four-petalled ornamental star, very common in
 * 19th-century book typography as a section breaker (* * *).
 */
export const VictorianFloret = ({ size = 18, className = "", title = "Florette" }) => (
  <svg
    viewBox="0 0 64 64"
    width={size}
    height={size}
    aria-label={title}
    role="img"
    className={className}
    fill="currentColor"
  >
    {/* Four diamond petals */}
    <path d="M32 4 L36 28 L32 32 L28 28 Z" />
    <path d="M60 32 L36 36 L32 32 L36 28 Z" />
    <path d="M32 60 L28 36 L32 32 L36 36 Z" />
    <path d="M4 32 L28 28 L32 32 L28 36 Z" />
    {/* Centre lozenge */}
    <path d="M32 28 L36 32 L32 36 L28 32 Z" fill="none" stroke="currentColor" strokeWidth="1" />
    {/* Tiny corner dots */}
    <circle cx="48" cy="16" r="1.4" />
    <circle cx="16" cy="16" r="1.4" />
    <circle cx="48" cy="48" r="1.4" />
    <circle cx="16" cy="48" r="1.4" />
  </svg>
);

/**
 * Victorian asterism — three small diamonds in triangle (typographic ornament).
 */
export const Asterism = ({ size = 24, className = "", title = "Asterism" }) => (
  <svg
    viewBox="0 0 64 32"
    width={size}
    height={size * 0.5}
    aria-label={title}
    role="img"
    className={className}
    fill="currentColor"
  >
    <path d="M32 4 L36 12 L32 20 L28 12 Z" />
    <path d="M12 16 L16 24 L12 32 L8 24 Z" />
    <path d="M52 16 L56 24 L52 32 L48 24 Z" />
  </svg>
);

export const OrnamentDivider = ({ className = "", color = "#C8A97E" }) => (
  <svg
    viewBox="0 0 360 28"
    aria-hidden="true"
    className={className}
    style={{ color }}
  >
    <g fill="none" stroke="currentColor" strokeWidth="1">
      <line x1="0" y1="14" x2="140" y2="14" />
      <line x1="220" y1="14" x2="360" y2="14" />
    </g>
    <g fill="currentColor">
      <circle cx="148" cy="14" r="1.6" />
      <circle cx="212" cy="14" r="1.6" />
    </g>
    {/* Centre fleur-de-lis */}
    <g transform="translate(180,14)" fill="currentColor">
      <path d="M0 -10c-.7 1.9-.6 3.4.3 5.5-1.6-.4-2.4-.2-3.4.5 1 .7 1.7 1.8 2.3 3.2-1.5-.7-2.8-.7-4 .2 1.1 1 1.5 1.8 1.9 2.9-1-.5-1.8-.6-2.8-.2.7.7 1.1 1.5 1.2 2.3H7c.1-.8.5-1.6 1.2-2.3-1-.4-1.8-.3-2.8.2.4-1.1.8-1.9 1.9-2.9-1.2-.9-2.5-.9-4-.2.6-1.4 1.3-2.5 2.3-3.2-1-.7-1.8-.9-3.4-.5C.6-6.6.7-8.1 0-10zm-5 12.5h10v1.3H-5zM-3 4h6V5h-6z" />
    </g>
  </svg>
);

export const ScrollFiligree = ({ className = "", color = "#C8A97E" }) => (
  <svg
    viewBox="0 0 200 40"
    aria-hidden="true"
    className={className}
    style={{ color }}
  >
    <g fill="none" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round">
      <path d="M2 20 Q 30 4, 60 20 T 120 20 T 198 20" />
      <path d="M100 8 Q 102 14, 100 20 Q 98 26, 100 32" />
      <path d="M82 14 Q 86 18, 90 14" />
      <path d="M110 14 Q 114 18, 118 14" />
      <path d="M82 26 Q 86 22, 90 26" />
      <path d="M110 26 Q 114 22, 118 26" />
    </g>
    <g fill="currentColor">
      <circle cx="100" cy="20" r="1.4" />
      <circle cx="60" cy="20" r="1" />
      <circle cx="140" cy="20" r="1" />
    </g>
  </svg>
);

export default { FleurDeLis, Crown, OrnamentDivider, ScrollFiligree };
