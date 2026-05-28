import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        proteus: {
          carbon: '#0A0A0A',
          verde: '#2A6B43',
          'verde-light': '#3A8A57',
          crema: '#F7F5F0',
          calido: '#B35710',
        },
        'gris-medio': '#5C6470',
        'gris-borde': '#E5E5E5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        tightish: '-0.015em',
        tighter2: '-0.025em',
        eyebrow: '0.18em',
      },
      maxWidth: {
        container: '1280px',
      },
    },
  },
  plugins: [],
};

export default config;
