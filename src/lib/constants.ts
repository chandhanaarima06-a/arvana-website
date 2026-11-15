/**
 * ARVANA premium design tokens — jet black + metallic gold palette.
 * Matches src/index.css @theme values exactly.
 */
export const COLORS = {
  black: '#080808',
  gold: '#D4AF37',
  goldDim: '#B5942B',
  warmWhite: '#F5F3EE',
  charcoal: '#292929',
  surface: '#121212',
  card: '#121212',
  offwhite: '#E8E4DA',
  grey: '#8A8A8A',
  muted: '#5A5A5A',
  electricBlue: '#0A66CC',
  ink: '#080808',
} as const;

export const ANIMATION = {
  duration: {
    fast: 0.2,
    normal: 0.4,
    slow: 0.6,
    xslow: 1.0,
  },
  easing: {
    standard: [0.22, 1, 0.36, 1] as const,
    easeOut: [0.22, 1, 0.36, 1] as const,
  },
  stagger: {
    cards: 0.1,
    text: 0.05,
    steps: 0.15,
  },
} as const;

export const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
  wide: 1440,
} as const;

export const Z_INDEX = {
  base: 0,
  dropdown: 10,
  navbar: 100,
  modal: 1000,
  tooltip: 2000,
} as const;
