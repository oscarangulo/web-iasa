# Skarn × Grupo IASA + Proteus.exchange

Monorepo con los dos sitios web del handoff (ver `HANDOFF_SKARN_IASA_PROTEUS.md`).

## Estructura

```
web_iasa/
├── assets/                  Fotos originales del cliente + PDFs (fuente)
├── grupoiasa-website/       Sitio institucional · Next.js 15 + TS + Tailwind
└── proteus-website/         One-pager trilingüe DE/EN/ES · Next.js 15 + next-intl
```

## Cómo correr

```bash
# IASA — http://localhost:3001
cd grupoiasa-website
npm install
npm run dev

# Proteus — http://localhost:3002 (redirige a /de)
cd proteus-website
npm install
npm run dev
```

## Lo que está implementado (MVP visual estático)

### grupoiasa-website (18 rutas estáticas)
- **/** — Home con hero, 4 KPIs animados, grid 3 divisiones, quiénes somos, proyectos destacados, clientes, CTA
- **/nosotros** — Misión/visión, línea de tiempo 29 años, equipo (16 personas), sello ISO 9001
- **/proiecta**, **/proambiente**, **/proceanic** — Hero divisional + acordeón de servicios + proyectos
- **/proyectos** — Grid con filtro por división
- **/proyectos/[slug]** — Detalle de cada proyecto (6 fichas pre-cargadas)
- **/publicaciones** — Descarga de los 2 PDFs del cliente
- **/sgc** — Sistema de Gestión de Calidad + certificados AENOR
- **/contacto** — Formulario funcional (UI; integración Odoo pendiente)

Contenido **extraído de los PDFs reales** del cliente (`assets/GRUPO_IASA_Portfolio_2026_HD_20260508.pdf` y `GRUPO_IASA_Servicios_2026_EXTENDIDO.pdf`).

### proteus-website (9 rutas: 3 idiomas × 3 páginas)
- **/[de|en|es]** — One-pager: Hero, Problema, Solución (3 pilares), Red (3 partners), Contacto
- **/[locale]/impressum** — Plantilla §5 TMG con campos pendientes marcados
- **/[locale]/datenschutz** — Plantilla DSGVO Art. 13
- Cookie banner técnico-necesario (sin tracking)
- Selector de idioma DE · EN · ES en header y footer

## Sistema visual

### IASA · paleta corporativa oficial (11/05)
- `#2C5FA1` azul (ancla visual, PROIECTA)
- `#0F9649` verde (PROAMBIENTE)
- `#B6612A` naranja terracota (PROCEANIC)
- `#F2C811` amarillo (acento mínimo · reservado para Ingeniería Alemana cuando se confirme)
- `#838488` gris institucional

Cada división tiene un color identificador que aparece como borde superior de cards, tags, y acentos en CTAs. El sistema soporta una 4ª división (Ingeniería Alemana / amarillo) sin rediseño.

### Proteus
- `#2A6B43` verde profundo (único acento)
- `#B35710` cálido (solo bloque "Problema")
- Fondo blanco/crema, tipografía editorial, palabra clave en cursiva

### Tipografía (ambos)
- `Inter` vía `next/font/google` (display: swap)
- Jerarquía neo-grotesca: titulares 44-72px weight 500 letter-spacing tight

### Animaciones
- `framer-motion` discreto: fade-ins al scroll, contador animado para KPIs, acordeón con `AnimatePresence`

## Lo que falta para producción

### Bloqueante
- [ ] Reunión técnica con responsable Odoo de IASA — definir credenciales y mapeo de campos
- [ ] Wiring real del formulario IASA `/api/contact` → Odoo XML-RPC (`crm.lead`)
- [ ] Wiring real del formulario Proteus `/api/kontakt` → Resend + email
- [ ] Textos legales finales de Proteus (Impressum, Datenschutz) revisados por abogado alemán
- [ ] Variables de entorno: `ODOO_URL`, `ODOO_DB`, `ODOO_USER`, `ODOO_PASSWORD`, `RESEND_API_KEY`

### Contenido pendiente del cliente
- [ ] Lista definitiva de clientes (validar con Carolina antes de publicar)
- [ ] Confirmación nombres + cargos del equipo (provisionalmente inferidos de las fotos)
- [ ] Foto institucional grupal — el archivo `equipo-iasa.jpg` está en `public/team/` pero sin uso aún
- [ ] Logos vectoriales SVG de Zebroo y Julasoft para sección "Red" de Proteus

### Mejoras post-MVP
- [ ] Sanity Studio embebido para IASA (schemas: proyecto, division, servicio, publicacion, miembroEquipo, cliente)
- [ ] Cloudflare Turnstile o reCAPTCHA v3 en formularios
- [ ] Rate limiting en API routes
- [ ] Sitemap.xml + robots.txt
- [ ] Open Graph images dinámicas
- [ ] Lighthouse audit (objetivo ≥ 90 mobile en todas las métricas)

## Notas técnicas

- **Imágenes**: las fotos originales (17MB c/u) están en `assets/`. Las versiones optimizadas (≤ 800px JPEG q=80, ~80KB c/u) en `grupoiasa-website/public/team/`. Total team: 1.2MB.
- **Lockfiles**: cada sitio tiene su `package-lock.json` propio. Next.js avisa porque hay otro `package-lock.json` en `~/`. Inofensivo.
- **next-intl v3**: usa el patrón sin `hasLocale` (que llega en v4). El root layout (`src/app/layout.tsx`) sólo retorna `children`; el `[locale]/layout.tsx` controla `<html lang>` y `<body>`.
- **Default locale Proteus**: `de` con detección por `Accept-Language`. URLs siempre prefijadas (`/de/`, `/en/`, `/es/`).
