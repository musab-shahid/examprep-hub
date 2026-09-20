/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Brand
        brand: {
          50:  '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9', // primary
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        // Semantic status
        success: {
          50:  '#ecfdf5',
          100: '#d1fae5',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
        },
        warning: {
          50:  '#fffbeb',
          100: '#fef3c7',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        danger: {
          50:  '#fef2f2',
          100: '#fee2e2',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },
      },
      borderRadius: {
        'card': '1rem',      // 16px → rounded-2xl equivalent
        'btn':  '0.75rem',   // 12px → rounded-xl
        'chip': '9999px',
      },
      boxShadow: {
        'card':     '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'card-hover': '0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
        'glow-brand': '0 0 0 1px rgb(14 165 233 / 0.15), 0 4px 12px -2px rgb(14 165 233 / 0.2)',
        'glow-indigo': '0 0 0 1px rgb(99 102 241 / 0.15), 0 4px 12px -2px rgb(99 102 241 / 0.2)',
      },
      transitionDuration: {
        'DEFAULT': '150ms',
        'fast': '100ms',
        'medium': '200ms',
        'slow': '300ms',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.4s ease-out both',
        'slide-in-left': 'slideInLeft 0.35s ease-out both',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-12px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(99, 102, 241, 0.15)' },
          '50%':      { boxShadow: '0 0 0 8px rgba(99, 102, 241, 0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      minHeight: {
        'touch': '44px',
        'touch-lg': '48px',
      },
    },
  },
  plugins: [],
};
