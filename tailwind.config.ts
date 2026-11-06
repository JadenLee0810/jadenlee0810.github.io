import type { Config } from 'tailwindcss';

const config: Config = {
  // System-based light/dark. Tailwind emits `@media (prefers-color-scheme: dark)`
  // for every `dark:` utility, so no theme provider or JS is required.
  darkMode: 'media',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Product Sans is not publicly licensed. We try the real thing first (in
        // case the user has it installed / self-hosts it), then fall back to
        // Poppins — loaded via next/font in app/layout.tsx and exposed as
        // --font-logo — which is the closest widely available geometric match.
        logo: [
          '"Product Sans"',
          '"Google Sans"',
          'var(--font-logo)',
          'Futura',
          '"Century Gothic"',
          'Questrial',
          'ui-rounded',
          'system-ui',
          'sans-serif',
        ],
        sans: ['Arial', 'Roboto', 'Helvetica', 'sans-serif'],
      },
      colors: {
        google: {
          blue: '#4285F4',
          red: '#EA4335',
          yellow: '#FBBC05',
          green: '#34A853',
        },
        // Google's actual surface tokens, light + dark.
        surface: {
          light: '#FFFFFF',
          dark: '#202124',
        },
        field: {
          light: '#FFFFFF',
          dark: '#303134',
        },
        hairline: {
          light: '#DFE1E5',
          dark: '#5F6368',
        },
        ink: {
          light: '#202124',
          dark: '#E8EAED',
        },
        muted: {
          light: '#70757A',
          dark: '#9AA0A6',
        },
        row: {
          light: '#F8F9FA',
          dark: '#3C4043',
        },
        // Google's search-results-page (SERP) text colours.
        serp: {
          link: { light: '#1A0DAB', dark: '#8AB4F8' },
          snippet: { light: '#4D5156', dark: '#BDC1C6' },
        },
      },
      boxShadow: {
        // The single "floating container" shadow Google applies to the
        // searchbar + suggestion box as one unit.
        google: '0 1px 6px rgba(32, 33, 36, 0.28)',
        'google-dark': '0 1px 6px rgba(0, 0, 0, 0.60)',
        'google-btn': '0 1px 1px rgba(0, 0, 0, 0.10)',
      },
    },
  },
  plugins: [],
};

export default config;
