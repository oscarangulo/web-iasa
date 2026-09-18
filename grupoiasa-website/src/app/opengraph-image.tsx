import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Grupo IASA · Ingeniería, ambiente y mar integrados para proyectos complejos';

// Preview al compartir el sitio (LinkedIn, WhatsApp, Slack). Se dibuja con el
// lenguaje del sitio: petróleo de fondo, regla amarilla y las cuatro empresas.
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0B1E36',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ width: 56, height: 4, background: '#F2C811' }} />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 6,
              color: '#F2C811',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            Grupo IASA · 30 años
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 74,
            lineHeight: 1.05,
            color: '#FFFFFF',
            fontWeight: 700,
            letterSpacing: -2,
            maxWidth: 940,
          }}
        >
          Ingeniería, ambiente y mar integrados para proyectos complejos.
        </div>

        <div style={{ display: 'flex', gap: 14 }}>
          {[
            ['PROIECTA', '#2C5FA1'],
            ['PROAMBIENTE', '#0F9649'],
            ['PROCEANIC', '#B6612A'],
            ['INGENIERÍA ALEMANA', '#F2C811'],
          ].map(([nombre, color]) => (
            <div key={nombre} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ width: 168, height: 6, background: color }} />
              <div style={{ fontSize: 17, color: '#FFFFFF', opacity: 0.75, letterSpacing: 1 }}>
                {nombre}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
