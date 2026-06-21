import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        /* Neutral charcoal — not cold blue, not warm cream: pure dark */
        bg: {
          deep:    '#0C0C0C',
          base:    '#141414',
          card:    '#1C1C1C',
          surface: '#242424',
        },
        /* Text — warm ivory, not cool lavender-white */
        ink: {
          DEFAULT: '#F2EEE8',
          sub:     '#8C8880',
          muted:   '#524E48',
        },
      },
      keyframes: {
        breathe: {
          '0%, 100%': { opacity: '1' },
          '50%':       { opacity: '0.3' },
        },
        ticker: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        breathe: 'breathe 2.4s ease-in-out infinite',
        ticker:  'ticker 30s linear infinite',
        fadeUp:  'fadeUp 0.7s cubic-bezier(.22,1,.36,1) both',
      },
    },
  },
  plugins: [],
} satisfies Config
