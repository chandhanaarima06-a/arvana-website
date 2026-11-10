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
    // Single easing curve used across the screen (unslop pass 9)
    standard: [0.22, 1, 0.36, 1] as const,
    // Kept for any legacy references
    easeOut: [0.22, 1, 0.36, 1] as const,
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
  black: '#0B0B0C',
  charcoal: '#141416',
  surface: '#1A1A1E',
  lime: '#C6F432',
  white: '#FFFFFF',
  offwhite: '#E4E4E7',
  grey: '#6B6B70',
  muted: '#8A8A90',
  light: '#C5CDD8',
} as const;
