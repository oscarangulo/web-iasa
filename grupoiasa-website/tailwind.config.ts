import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        iasa: {
          azul: '#2C5FA1',
          'azul-dark': '#1F4778',
          verde: '#0F9649',
          naranja: '#B6612A',
          amarillo: '#F2C811',
          gris: '#838488',
        },
        carbon: '#0A0A0A',
        crema: '#FAFAF8',
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
