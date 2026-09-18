const AZUL = '#2C5FA1';
const VERDE = '#0F9649';
const NARANJA = '#B6612A';
const AMARILLO = '#8A6B00';
const LINEA = '#0B1E36';

/**
 * Corte esquemático del territorio donde opera el Grupo, con las cuatro
 * divisiones anotadas como llamadas de plano.
 *
 * Sustituye cuatro columnas de texto idénticas: el sistema es que las
 * especialidades se reparten un mismo terreno, y eso se explica dibujándolo,
 * no repitiéndolo. Ingeniería Alemana no ocupa un punto del corte porque es
 * transversal, así que se anota con una llave sobre el conjunto.
 */
export function PlanoEcosistema() {
  return (
    <svg
      viewBox="0 0 1200 460"
      className="h-auto w-full"
      role="img"
      aria-label="Corte esquemático del territorio: depósito y obras civiles (PROIECTA), monitoreo ambiental (PROAMBIENTE), obra marítima (PROCEANIC) y soporte técnico transversal (Ingeniería Alemana)."
    >
      {/* Llave de alcance transversal */}
      <g stroke={AMARILLO} strokeWidth="1.2" fill="none">
        <path d="M120 96 V84 H1080 V96" />
        <path d="M600 84 V68" />
      </g>

      {/* Terreno */}
      <path
        d="M0 330 L120 320 L240 276 L360 254 L480 276 L620 296 L760 326 L880 356 L1000 378 L1200 378"
        fill="none"
        stroke={LINEA}
        strokeWidth="1.6"
        opacity="0.55"
      />
      <path
        d="M0 330 L120 320 L240 276 L360 254 L480 276 L620 296 L760 326 L880 356 L1000 378 L1200 378 V460 H0 Z"
        fill={LINEA}
        opacity="0.04"
      />

      {/* Mar, con rayado de agua */}
      <g stroke={NARANJA} strokeWidth="1" opacity="0.5">
        {[398, 414, 430, 446].map((y) => (
          <line key={y} x1="1000" y1={y} x2="1200" y2={y} strokeDasharray="14 9" />
        ))}
      </g>

      {/* 01 · Depósito y obras civiles */}
      <g stroke={AZUL} strokeWidth="1.5" fill="none">
        <path d="M268 262 L300 228 L396 228 L428 262 Z" />
        <path d="M286 244 L410 244" strokeWidth="0.9" opacity="0.7" />
        <path d="M296 234 L400 234" strokeWidth="0.9" opacity="0.5" />
      </g>

      {/* 02 · Monitoreo ambiental */}
      <g stroke={VERDE} strokeWidth="1.5" fill="none">
        <path d="M596 296 L596 232" />
        <path d="M578 232 L614 232" />
        <path d="M586 244 L606 244" strokeWidth="0.9" />
        <circle cx="596" cy="222" r="6" />
      </g>

      {/* 03 · Obra marítima */}
      <g stroke={NARANJA} strokeWidth="1.5" fill="none">
        <path d="M1002 378 L1136 378" />
        {[1030, 1062, 1094, 1126].map((x) => (
          <line key={x} x1={x} y1="378" x2={x} y2="408" strokeWidth="1.1" />
        ))}
        <path d="M1096 378 L1096 344 L1140 344" />
      </g>

      {/* Llamadas: círculo numerado y línea guía al elemento */}
      {[
        { n: '01', x: 348, y: 150, destinoY: 224, color: AZUL },
        { n: '02', x: 596, y: 150, destinoY: 212, color: VERDE },
        { n: '03', x: 1096, y: 150, destinoY: 338, color: NARANJA },
        { n: '04', x: 600, y: 48, destinoY: 62, color: AMARILLO },
      ].map((l) => (
        <g key={l.n}>
          {l.n !== '04' && (
            <line
              x1={l.x}
              y1={l.y + 17}
              x2={l.x}
              y2={l.destinoY}
              stroke={l.color}
              strokeWidth="0.9"
              strokeDasharray="4 5"
            />
          )}
          <circle cx={l.x} cy={l.y} r="16" fill="#FFFFFF" stroke={l.color} strokeWidth="1.4" />
          <text
            x={l.x}
            y={l.y + 4}
            textAnchor="middle"
            fontSize="12"
            fontFamily="ui-monospace, monospace"
            fill={l.color}
            letterSpacing="0.5"
          >
            {l.n}
          </text>
        </g>
      ))}
    </svg>
  );
}
