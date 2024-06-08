import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        increaseSizeFromCenter: {
          '0%': { opacity: '1', transform: 'scale(0.1)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        slideIn: 'slideIn 1.2s ease-out forwards',
        slideInFromLeft: 'slideInFromLeft 1.2s ease-out forwards',
        fadeInUp: 'fadeInUp 1.2s ease-out forwards',
        zoomIn: 'zoomIn 1.2s ease-out forwards',
        increaseSizeFromCenter: 'increaseSizeFromCenter 1.2s ease-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;
