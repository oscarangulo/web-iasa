import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        iasa: {
          azul: '#2C5FA1',
          'azul-dark': '#1F4778',
          petroleo: '#0B1E36',
          verde: '#0F9649',
          naranja: '#B6612A',
          amarillo: '#F2C811',
          gris: '#838488',
          // Variantes "ink": mismo matiz corporativo, oscurecido hasta pasar
          // WCAG AA (>=4.5:1) como TEXTO sobre blanco y crema. Los hex de arriba
          // se reservan para superficies (barras, fondos, bordes), donde el
          // contraste del texto lo aporta el fondo, no el color de marca.
          'verde-ink': '#0B7A3B',
          'naranja-ink': '#9E5424',
          'amarillo-ink': '#8A6B00',
        },
        carbon: '#0A0A0A',
        crema: '#FAFAF8',
        'gris-medio': '#5C6470',
        'gris-borde': '#E5E5E5',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
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
