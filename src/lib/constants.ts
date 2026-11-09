/**
 * Animation timing and easing constants for consistent motion design
 */
export const ANIMATION = {
  duration: {
    fast: 0.2,
    normal: 0.4,
    slow: 0.6,
    xslow: 1.0,
  },
  easing: {
    // Smooth ease for general use
    smooth: [0.43, 0.13, 0.23, 0.96] as const,
    // Bouncy for interactive elements
    bounce: [0.68, -0.55, 0.265, 1.55] as const,
    // Cinematic aggressive ease-in-out for drama
    cinematic: [0.87, 0, 0.13, 1] as const,
    // Ease out for entrances
    easeOut: [0.16, 1, 0.3, 1] as const,
  },
  stagger: {
    cards: 0.1,
    text: 0.05,
    steps: 0.15,
  },
} as const;

/**
 * Responsive breakpoints matching Tailwind defaults
 */
export const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
  wide: 1440,
} as const;

/**
 * Z-index scale for layering
 */
export const Z_INDEX = {
  base: 0,
  dropdown: 10,
  navbar: 100,
  modal: 1000,
  tooltip: 2000,
} as const;

/**
 * Color palette (matches CSS variables)
 */
export const COLORS = {
  black: '#050505',
  charcoal: '#101116',
  blue: '#007FFF',
  rose: '#FF2E88',
  white: '#F5F7FF',
  grey: '#9299A8',
} as const;
