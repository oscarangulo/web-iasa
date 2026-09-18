type Props = {
  /** Opacidad global de la retícula. El hero admite más presencia que un cierre. */
  opacidad?: number;
  /** Acento de las marcas de estación. */
  acento?: string;
};

/**
 * Retícula de plano: grilla de coordenadas, cotas rotuladas y marcas de
 * estación. Reemplaza los lavados de `radial-gradient` que leían como landing
 * de producto. Es la textura que DESIGN.md llama "El Plano de Ingeniería", y
 * está dibujada, no degradada.
 */
export function PlanoTexture({ opacidad = 0.09, acento = '#F2C811' }: Props) {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMidYMid slice"
      style={{ opacity: opacidad }}
    >
      <defs>
        <pattern id="plano-fina" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M24 0H0V24" fill="none" stroke="white" strokeWidth="0.4" />
        </pattern>
        <pattern id="plano-gruesa" width="120" height="120" patternUnits="userSpaceOnUse">
          <path d="M120 0H0V120" fill="none" stroke="white" strokeWidth="0.9" />
        </pattern>
      </defs>

      <rect width="1200" height="700" fill="url(#plano-fina)" />
      <rect width="1200" height="700" fill="url(#plano-gruesa)" opacity="0.8" />

      {/* Regla de cotas superior, rotulada cada 120 unidades */}
      <g stroke="white" strokeWidth="0.9">
        <line x1="0" y1="34" x2="1200" y2="34" />
        {Array.from({ length: 11 }, (_, i) => (i + 1) * 100).map((x) => (
          <line key={x} x1={x} y1="28" x2={x} y2="40" />
        ))}
      </g>
      <g fill="white" fontSize="9" fontFamily="ui-monospace, monospace" letterSpacing="1.5">
        {[200, 500, 800, 1100].map((x) => (
          <text key={x} x={x + 5} y="24">
            {x}
          </text>
        ))}
      </g>

      {/* Regla lateral */}
      <g stroke="white" strokeWidth="0.9">
        <line x1="34" y1="0" x2="34" y2="700" />
        {Array.from({ length: 6 }, (_, i) => (i + 1) * 100).map((y) => (
          <line key={y} x1="28" y1={y} x2="40" y2={y} />
        ))}
      </g>

      {/* Marcas de estación: puntos de control del levantamiento */}
      <g stroke={acento} strokeWidth="1.1" fill="none">
        {[
          [252, 196],
          [612, 412],
          [948, 244],
        ].map(([cx, cy]) => (
          <g key={`${cx}-${cy}`}>
            <circle cx={cx} cy={cy} r="7" />
            <line x1={cx - 14} y1={cy} x2={cx + 14} y2={cy} />
            <line x1={cx} y1={cy - 14} x2={cx} y2={cy + 14} />
          </g>
        ))}
        <path d="M252 196 L612 412 L948 244" strokeDasharray="5 7" strokeWidth="0.9" />
      </g>
    </svg>
  );
}
