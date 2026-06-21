import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        bg: {
          deep:    'rgb(var(--bg-deep) / <alpha-value>)',
          base:    'rgb(var(--bg-base) / <alpha-value>)',
          card:    'rgb(var(--bg-card) / <alpha-value>)',
          surface: 'rgb(var(--bg-surface) / <alpha-value>)',
          hover:   'rgb(var(--bg-hover) / <alpha-value>)',
        },
        ink: {
          DEFAULT: 'rgb(var(--ink) / <alpha-value>)',
          sub:     'rgb(var(--ink-sub) / <alpha-value>)',
          muted:   'rgb(var(--ink-muted) / <alpha-value>)',
        },
      },
      keyframes: {
        breathe: {
          '0%, 100%': { opacity: '1' },
          '50%':       { opacity: '0.25' },
        },
        ticker: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        spinSlow: {
          to: { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
      },
      animation: {
        breathe:  'breathe 2.4s ease-in-out infinite',
        ticker:   'ticker 28s linear infinite',
        floatY:   'floatY 5s ease-in-out infinite',
        fadeUp:   'fadeUp 0.7s cubic-bezier(.22,1,.36,1) both',
        spinSlow: 'spinSlow 10s linear infinite',
        shimmer:  'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
