# Handoff técnico — Skarn × Grupo IASA + Proteus.exchange

**Audiencia:** Instancia de IA que tomará este proyecto y lo desarrollará.
**Estudio responsable:** Skarn (Oscar Angulo · oscar@skarn.cl · skarn.cl)
**Estado:** Propuesta aprobada por el cliente el 11 de mayo de 2026. Listos para arrancar pendiente recepción de inputs.

---

## 1. Resumen ejecutivo

Vas a desarrollar **dos sitios web complementarios** para un mismo grupo de clientes:

1. **grupoiasa.cl** — Sitio institucional de Grupo IASA, consultora chilena de ingeniería ambiental. 9 secciones. CMS editable.
2. **proteus.exchange** — Landing one-pager trilingüe (DE/EN/ES) de Proteus UG, startup alemana de Joachim Vogdt. Relanzamiento de "manifiesto Web3 abstracto" a "producto tangible para PYMEs alemanas".

**Stack obligatorio:** Next.js 15 + Tailwind CSS. Sanity CMS solo para IASA. i18n nativo de Next.js para Proteus.

**Inversión total cotizada:** UF 32 + IVA (≈ CLP $1.300.000 + IVA). **Aprobada.**

**Plazo:** 8 semanas en paralelo, contadas desde la entrega del contenido inicial.

---

## 2. Contexto del cliente (importante)

### Quién es quién

- **Oscar Angulo** — tú representas a Skarn, el estudio de diseño/desarrollo. CTO de StrixSoft en su día principal, este es proyecto freelance/estudio.
- **Carolina Casanova** — contacto principal del lado IASA. Maneja las decisiones operativas. Envía los inputs.
- **Joachim Vogdt** — fundador de Proteus UG (alemán radicado en Celle, Alemania). También está vinculado a IASA como Gerente General de Ingeniería Alemana S.A. Es quien negoció el precio original.
- **Equipo cc en correos de Carolina:** Javier, Nicolás, Yamina, Evandro (probable equipo IASA).

### Estructura corporativa de IASA (importante para diseño)

Grupo IASA tiene actualmente **3 divisiones operativas**:
- **PROIECTA** — Ingeniería sanitaria, hidráulica, residuos
- **PROAMBIENTE** — Auditorías ambientales, eficiencia energética, huella de carbono
- **PROCEANIC** — Ingeniería marítima, oceanografía, vigilancia ambiental

**ATENCIÓN:** Carolina ha mencionado en correos posteriores que pueden sumar **Ingeniería Alemana** como cuarta empresa. Esto NO está confirmado todavía y NO está incluido en el alcance contratado. Si se confirma, será cambio de alcance con cotización adicional. Diseña el sistema visual de manera que pueda escalar a 4 divisiones sin rehacer.

### Estado actual del sitio IASA (lo que reemplazamos)

El sitio actual `grupoiasa.cl` está sobre **WordPress + tema Woodmart (WooCommerce)** mal configurado. Aparecen productos demo de e-commerce (sillas Eames, iPhones) que NO corresponden al rubro. Es un desastre. La nueva propuesta lo reemplaza completamente.

### Estado actual de Proteus (lo que pivoteamos)

`proteus.exchange` hoy es un "manifiesto digital" abstracto sobre Web3/Blockchain. **No vende nada.** Joachim lo describió como "Fashion Emergency": necesita pivotar urgentemente hacia el producto tangible que ya tienen operativo: el **"Managed Construction Kit Abo"** (Kit de Construcción Gestionado en suscripción), dirigido a PYMEs alemanas del sector ingeniería, construcción y diseño.

**Dato crítico:** El cliente pidió **ignorar las menciones de Odoo** en el documento original de Proteus. Sin embargo, ahora IASA quiere integración Odoo (ver sección 6). NO confundir: Odoo en Proteus = ignorar. Odoo en IASA = integrar.

---

## 3. PALETA OFICIAL IASA (corregida por el cliente)

**Esto es CRÍTICO.** El 11 de mayo Carolina envió la paleta oficial que usan internamente (talleres KAM, presentaciones a clientes). La paleta que estaba en la propuesta original es OBSOLETA. Usar exclusivamente estos hex:

```css
/* Colores corporativos IASA — OBLIGATORIOS */
--iasa-verde: #0F9649;        /* PROAMBIENTE */
--iasa-azul: #2C5FA1;         /* PROIECTA */
--iasa-naranja: #B6612A;      /* PROCEANIC (terracota, NO el naranja vivo anterior) */
--iasa-amarillo: #F2C811;     /* Acento — usar con MUCHA moderación */
--iasa-gris: #838488;         /* Institucional */

/* Neutros del sistema */
--carbon: #0A0A0A;
--blanco: #FFFFFF;
--crema: #FAFAF8;
--gris-medio: #5C6470;
--gris-borde: #E5E5E5;
```

**Estrategia de aplicación:**
- El **azul #2C5FA1** es el ancla visual de toda la marca (no el verde, no el naranja).
- Cada división se identifica por su color SOLO en bordes superiores de cards, tags de categoría, y links accionables dentro de la sección de esa división. No usar fondos coloreados masivos.
- El **amarillo** se reserva exclusivamente para microacentos (highlights muy puntuales) y el logo institucional. Nunca usar como fondo ni como color de UI principal — caerías en estética infantil.
- El **gris institucional** para texto secundario y separadores.

**Verificación obligatoria antes de empezar:** confirmar con Oscar/Carolina contraste WCAG AA del azul #2C5FA1 sobre blanco — debería estar correcto pero validar.

### Paleta Proteus (sin cambios)

```css
--proteus-carbon: #0A0A0A;
--proteus-verde-profundo: #2A6B43;  /* Único acento de marca */
--proteus-crema: #F7F5F0;
--proteus-blanco: #FFFFFF;
--proteus-acento-calido: #B35710;   /* Solo en bloque "Problema" */
```

---

## 4. Línea de diseño — visión general

### Referencias de inspiración (obligatorias)

- **vs.de** — estructura, serenidad tipográfica, bicromía estricta sobre blanco, jerarquía clara, mucho whitespace
- **arup.com** — autoridad técnica, color único monolítico, serif editorial en titulares, narrativa long-form
- **dornier-group.com** — datos cuantitativos protagonistas, hero con titular grande + contadores animados, grid limpio de business units
- **vestas.com** — escala emocional + datos duros, video aéreo (NO aplica para nosotros, no hay metraje)

**Lo que NO queremos:** maximalismo, brutalism, animaciones llamativas, sliders/carruseles, megamenús, stock photography de "ingenieros sonriendo".

### Principios de diseño compartidos

1. **Fondo blanco/neutro como base**, un solo color de acento dominante por marca
2. **Sans-serif neo-grotesca moderna** (Inter o IBM Plex Sans) — titulares grandes en peso medium
3. **Hero con titular contundente y CTA único** — sin sliders
4. **Animaciones discretas** — fade-ins al scroll y hover sutiles (Framer Motion)
5. **Datos cuantitativos como protagonistas** — números grandes en tipografía ligera
6. **Iconografía técnica de líneas finas** — Phosphor Icons o Lucide
7. **Sin fotografía profesional producida** — usar lo que el cliente entregue, idealmente diagramas isométricos o tipografía como protagonista
8. **WCAG AA mínimo** — contraste validado, navegación accesible

### Tipografía

```css
/* Stack tipográfico */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
/* Alternativa: 'IBM Plex Sans' para Proteus si quieres acentuar gramática alemana */

/* Jerarquía */
h1: 44-60px, weight 500, letter-spacing -0.025em, line-height 1.0-1.05
h2: 24-32px, weight 500, letter-spacing -0.015em
h3: 15-17px, weight 600
body: 14-16px, weight 400, line-height 1.55
eyebrow: 10-11px, weight 600, uppercase, letter-spacing 0.18em
```

---

## 5. Sitio 1 — Grupo IASA (grupoiasa.cl)

### Información clave de la empresa

- **25+ años** de experiencia
- **ISO 9001:2015** certificada
- **Av. Providencia 2653, Santiago**
- KPIs reales del sitio actual (usar): 35 RCA aprobadas, 24 depósitos construidos, 16 centros mineros, 20 planes integrales de residuos
- Clientes/referencias del rubro: BHP, Anglo American, Teck, CMPC, Arauco, AES Chile, Aguas Andinas (validar lista exacta con Carolina antes de publicar)

### Arquitectura de información (9 secciones)

**Modelo de marca:** "Branded House" suave — las divisiones son especialidades de Grupo IASA, no marcas independientes.

| # | Sección | Módulos y componentes |
|---|---------|----------------------|
| 01 | **Home** | Hero (titular + subtítulo + 2 CTAs) · 4 KPIs animados (años, RCA, depósitos, centros) · Grid 3 divisiones con color identificador · 'Quiénes somos' breve · Logos clientes (carrusel estático) · Bloque CTA contacto · Footer |
| 02 | **Nosotros** | Hero con misión · Línea de tiempo 25 años · Misión/visión · Galería equipo (foto + nombre + cargo) · Sello ISO 9001:2015 · CTA descarga Brochure |
| 03 | **PROIECTA** | Hero divisional · Lista de servicios (sanitaria, hidráulica, residuos) — formato desplegable click/hover · 3-4 proyectos referenciales tipo card · 'Por qué PROIECTA' · CTA cotización |
| 04 | **PROAMBIENTE** | Hero · Servicios (auditorías, eficiencia energética, huella de carbono) — desplegable · Proyectos referenciales · Metodología · CTA cotización |
| 05 | **PROCEANIC** | Hero · Servicios (marítima, oceanografía, vigilancia) — desplegable · Proyectos referenciales · CTA cotización |
| 06 | **Proyectos** | Hero · Filtros por división y sector · Grid de proyectos con card (cliente, año, división, descripción, sector) · Detalle individual |
| 07 | **Publicaciones** | Listado de descargables técnicos existentes · Filtro por tipo · Enlaces a PDFs |
| 08 | **SGC** | Política de calidad · Certificaciones · Código de ética · Documentos descargables |
| 09 | **Contacto** | Formulario funcional → integra con Odoo (ver §6) · Datos · Mapa Av. Providencia 2653 · Redes sociales |

### Componente clave: lista de servicios desplegable

Carolina pidió explícitamente este patrón. Cada división tendrá una **lista tipo menú** donde cada item se expande al hacer click/hover mostrando una descripción técnica breve. Diseñarlo como componente reutilizable porque se usa en al menos 3 (potencialmente 4) divisiones.

```tsx
// Estructura sugerida del componente
<ServiciosLista division="PROIECTA" accent="#2C5FA1">
  <ServicioItem
    titulo="Diseño de plantas de tratamiento de aguas"
    descripcion="..."
  />
  {/* ... */}
</ServiciosLista>
```

Comportamiento: en desktop, hover expande; en mobile, click expande. Una sola descripción visible a la vez (acordeón). Transición suave con Framer Motion.

### Estructura técnica IASA

```
grupoiasa-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx              # Home
│   │   ├── nosotros/page.tsx
│   │   ├── proiecta/page.tsx
│   │   ├── proambiente/page.tsx
│   │   ├── proceanic/page.tsx
│   │   ├── proyectos/page.tsx
│   │   ├── proyectos/[slug]/page.tsx
│   │   ├── publicaciones/page.tsx
│   │   ├── sgc/page.tsx
│   │   └── contacto/page.tsx
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── KpiStrip.tsx
│   │   ├── DivisionCard.tsx
│   │   ├── ServiciosLista.tsx    # componente acordeón reutilizable
│   │   ├── ProyectoCard.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ContactForm.tsx       # integra con Odoo
│   └── lib/
│       ├── sanity.ts             # cliente Sanity
│       └── odoo.ts               # cliente Odoo CRM
└── studio/                       # Sanity Studio embedded
    └── schemas/
        ├── proyecto.ts
        ├── division.ts
        ├── servicio.ts
        ├── publicacion.ts
        └── miembroEquipo.ts
```

---

## 6. INTEGRACIÓN CON ODOO CRM (incluida sin costo extra)

**Contexto:** En la propuesta original Odoo estaba excluido. Tras conversación con Carolina, se incluye sin costo adicional. Es un valor agregado importante.

**Alcance mínimo:** Formulario de contacto del sitio → leads aterrizan en Odoo CRM automáticamente.

**Posibles extensiones (a discutir con técnico de IASA):** sincronía de contactos bidireccional, segmentación por división, etiquetas automáticas.

### Lo que necesitas saber antes de implementar

Oscar tiene pendiente coordinar una **reunión con el técnico de Odoo de IASA** para definir:

1. **Versión de Odoo** y si está en Odoo Online (SaaS) o auto-hospedado
2. **URL de la instancia** y módulo CRM destino de los leads
3. **Endpoints API disponibles**:
   - Odoo expone API XML-RPC nativa (`/xmlrpc/2/object`) para todas las versiones
   - Odoo 14+ también soporta API REST vía `odoorpc` o módulos custom como `muk_rest`
4. **Credenciales de servicio** (usuario de integración con permisos limitados al modelo `crm.lead`)
5. **Mapeo de campos**: qué campos del formulario van a qué campos de `crm.lead` en Odoo
6. **Reglas de negocio**: equipo de ventas asignado, etiquetas automáticas, lead source

### Implementación técnica recomendada

**Opción A — formulario propio Next.js + API Route que llama Odoo XML-RPC:**

```typescript
// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import xmlrpc from 'xmlrpc';

const ODOO_URL = process.env.ODOO_URL!;
const ODOO_DB = process.env.ODOO_DB!;
const ODOO_USER = process.env.ODOO_USER!;
const ODOO_PASSWORD = process.env.ODOO_PASSWORD!;

export async function POST(req: NextRequest) {
  const { nombre, email, telefono, division, mensaje } = await req.json();

  // 1. Autenticación
  const common = xmlrpc.createSecureClient({
    url: `${ODOO_URL}/xmlrpc/2/common`,
  });

  const uid: number = await new Promise((resolve, reject) => {
    common.methodCall('authenticate',
      [ODOO_DB, ODOO_USER, ODOO_PASSWORD, {}],
      (err: any, value: number) => err ? reject(err) : resolve(value)
    );
  });

  // 2. Crear lead
  const models = xmlrpc.createSecureClient({
    url: `${ODOO_URL}/xmlrpc/2/object`,
  });

  const leadId: number = await new Promise((resolve, reject) => {
    models.methodCall('execute_kw', [
      ODOO_DB, uid, ODOO_PASSWORD,
      'crm.lead', 'create',
      [{
        name: `Contacto web — ${nombre}`,
        contact_name: nombre,
        email_from: email,
        phone: telefono,
        description: mensaje,
        source_id: /* lead source de "Sitio Web" */,
        tag_ids: [[6, 0, [/* tag de la división */]]],
        team_id: /* equipo de ventas */,
      }]
    ], (err: any, value: number) => err ? reject(err) : resolve(value));
  });

  return NextResponse.json({ success: true, leadId });
}
```

**Opción B — usar paquete `odoo-await` o `odoo-xmlrpc-ts` (recomendada por mantenibilidad):**

```bash
npm install odoo-xmlrpc-ts
```

```typescript
import Odoo from 'odoo-xmlrpc-ts';

const odoo = new Odoo({
  url: process.env.ODOO_URL,
  db: process.env.ODOO_DB,
  username: process.env.ODOO_USER,
  password: process.env.ODOO_PASSWORD,
});

await odoo.connect();
const leadId = await odoo.create('crm.lead', {
  name: `Contacto web — ${nombre}`,
  // ...
});
```

### Validación y seguridad

- **Rate limiting** en el endpoint del formulario (max 5 requests/min/IP)
- **Validación server-side** (zod o equivalente) — email válido, campos requeridos
- **reCAPTCHA v3 o Cloudflare Turnstile** — anti-spam
- **Honeypot field** adicional
- Variables de entorno **nunca expuestas al cliente**
- Confirmación visual al usuario tras envío exitoso
- Email de respaldo a `contacto@grupoiasa.cl` (vía Resend) por si la API de Odoo falla

### Manejo de errores

Si Odoo está caído o devuelve error, el lead NO se pierde:

1. Guardar el intento en una fila de respaldo (puede ser un archivo JSON en filesystem de Vercel temporal + email crítico)
2. Mostrar al usuario "Mensaje recibido" igualmente (no exponer el error técnico)
3. Notificar a Oscar para reintento manual

---

## 7. Sitio 2 — Proteus.exchange

### USP definitivo

> **"Wachsen, ohne im Verwaltungschaos zu ertrinken"**
> (Crecer, sin ahogarse en el caos administrativo)

### Audiencia objetivo

PYMEs alemanas del Mittelstand en construcción, ingeniería y diseño. Concretamente: el "jefe-cuello-de-botella" generación X/Y que tiene una empresa creciente pero todo el peso administrativo cae sobre sus hombros.

### Estructura del one-pager (6 bloques)

| # | Bloque | Módulos |
|---|--------|---------|
| 01 | **Hero** | Eyebrow "MITTELSTAND × INGENIEURWESEN" · Titular con palabra clave en cursiva verde · Subtítulo · CTA único "Demo anfragen" · Nota "15 min · unverbindlich" · Selector idioma DE/EN/ES |
| 02 | **Problema** | Layout 2 columnas: título corto "Der Inhaber-Engpass" · Texto del dolor en 2 párrafos · Acento naranja para tensión |
| 03 | **Solución** | Eyebrow "Die Lösung" · Título "Managed Construction Kit Abo" · Tabla horizontal de 3 pilares (01 Co-Produce, 02 Co-Educate, 03 Co-Innovate) |
| 04 | **Red** | Bloque oscuro (fondo negro) · "Drei Partner. Drei Disziplinen. Ein System." · 3 cards de partners: IASA (con su logo multicolor), Zebroo, Julasoft |
| 05 | **Contacto** | "15 Minuten. Kein Sales." · Formulario DSGVO-compliant (nombre, email, empresa) · CTA "Termin vorschlagen" |
| 06 | **Footer** | Datos Proteus UG · Impressum (obligatorio en Alemania) · Datenschutz · Selector idioma |

### Trilingüe (DE/EN/ES)

Implementar con i18n nativo de Next.js (`next-intl` o `next-i18next`):

```
src/app/
├── [locale]/
│   ├── layout.tsx
│   └── page.tsx          # un solo archivo, texto vía dictionary
├── i18n/
│   ├── de.json
│   ├── en.json
│   └── es.json
└── middleware.ts          # detección y routing
```

Idioma por defecto: **DE**. Detección por `Accept-Language` con fallback a DE. URLs: `/de/`, `/en/`, `/es/`.

### Cumplimiento legal alemán (CRÍTICO)

Alemania exige por ley:

1. **Impressum** — datos completos: razón social Proteus UG, dirección registrada en Celle, gerente, registro mercantil, USt-IdNr (NIF intracomunitario), email de contacto, teléfono. Ruta `/impressum`.
2. **Datenschutzerklärung** — política de privacidad DSGVO/GDPR completa. Ruta `/datenschutz`.
3. **Cookie banner** con opt-in granular (no opt-out) si se usan cookies de tracking. Para este sitio probablemente solo necesarias técnicas → banner simple de aviso.
4. **Consentimiento explícito** en formulario de contacto: checkbox "Ich willige in die Datenverarbeitung gemäß Datenschutzerklärung ein" (no marcado por defecto).

**Pedir a Joachim los textos legales redactados por abogado.**

### Estructura técnica Proteus

```
proteus-website/
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx              # one-pager completo
│   │   │   ├── impressum/page.tsx
│   │   │   └── datenschutz/page.tsx
│   │   └── api/
│   │       └── kontakt/route.ts      # formulario → email + Resend
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── Problema.tsx
│   │   ├── Pilares.tsx
│   │   ├── Red.tsx
│   │   ├── KontaktForm.tsx
│   │   ├── LangSwitcher.tsx
│   │   └── CookieBanner.tsx
│   ├── i18n/
│   │   ├── de.json
│   │   ├── en.json
│   │   └── es.json
│   └── middleware.ts
```

---

## 8. Contenido pendiente del cliente

### Lo que Carolina confirmó que ya está armando (recibido el 11/05)

**✅ Paleta visual** — recibida (ver §3)

**🟡 Fotografías**
- Llegan por correo personal en ZIP separado.
- Incluyen: equipo, proyectos, instalaciones.
- Si no llegan al iniciar, alternativa: subirlas a Google Drive compartido (Oscar debe crear la carpeta).
- **Importante:** usar lo que entreguen, NO producir nuevo material fotográfico.

**🟡 Listado de proyectos**
- Vienen de una presentación PDF que adjuntó Carolina.
- Datos a complementar por proyecto: cliente, año, división, descripción breve, sector.
- Llegan junto al resto del material.

**🟡 Listado de servicios por división**
- Lo están consolidando internamente.
- Llegará "en los próximos días" desde el 11/05.
- Incluye descripción técnica de cada servicio para los desplegables.

### Lo que sigue pendiente (no confirmado en mensaje del 11/05)

- **Foto institucional grupal** del equipo IASA (mencionada en correo anterior, sin confirmar inclusión)
- **Logos vectoriales** de Proteus, Zebroo y Julasoft para el bloque "Red"
- **Textos finales en alemán de Proteus** (los 6 bloques)
- **Traducciones EN/ES de Proteus**
- **Detalle del Managed Construction Kit** de Proteus: qué incluye exactamente, casos de uso
- **Datos legales alemanes** para Impressum y Datenschutz
- **Foto de Joachim o equipo Proteus** (opcional)

### Pendiente operativo crítico

- **Reunión con técnico de Odoo de IASA** para definir alcance integración

---

## 9. Cronograma estimado (8 semanas)

| Semana | Hito |
|--------|------|
| 1 | Briefing conjunto con Carolina (IASA) + Joachim (Proteus). Definición de estructura final, validación de paleta sobre prototipos. Wireframes simples ambos sitios. Reunión técnica con responsable de Odoo. |
| 2-3 | Diseño visual: Home IASA + Hero Proteus. Una ronda de revisión por marca. Setup repo Next.js para ambos sitios. |
| 4-6 | Desarrollo paralelo: IASA (9 páginas + Sanity Studio + integración Odoo) y Proteus (one-pager trilingüe + Impressum/Datenschutz). Sprints semanales con demos al cliente. |
| 7 | QA cruzado, validación responsive, integración de textos finales DE/EN/ES de Proteus, pruebas de formulario → Odoo. |
| 8 | Lanzamiento Proteus primero (más urgente por timeline de Joachim), luego IASA. Capacitación básica al equipo IASA para edición vía Sanity Studio. |

---

## 10. Decisiones de stack

### Frontend (ambos sitios)

- **Next.js 15** con App Router
- **TypeScript** estricto
- **Tailwind CSS** con tokens custom (paleta IASA y paleta Proteus en archivos separados)
- **Framer Motion** para animaciones discretas
- **next/font** para Inter (preferido) o IBM Plex Sans

### CMS (solo IASA)

- **Sanity Studio v3** embebido en mismo repo o standalone
- Schemas obligatorios: `proyecto`, `division`, `servicio`, `publicacion`, `miembroEquipo`, `cliente`
- Preview en vivo de cambios
- Acceso para 2-3 usuarios del equipo IASA

### Internacionalización (solo Proteus)

- **next-intl** (preferido) o `next-i18next`
- Routing: `/de/`, `/en/`, `/es/`
- Default: `de`
- Detección por `Accept-Language` con fallback

### Backend / Integraciones

- **API Routes de Next.js** para endpoints custom
- **Odoo XML-RPC** (cliente: `odoo-xmlrpc-ts` o similar) para envío de leads
- **Resend** para emails transaccionales (fallback Odoo + confirmaciones)
- **Cloudflare Turnstile** o **reCAPTCHA v3** para anti-spam

### Hosting

- **Vercel** plan Hobby (gratis para ambos sitios)
- Variables de entorno: ODOO_URL, ODOO_DB, ODOO_USER, ODOO_PASSWORD, RESEND_API_KEY, SANITY_PROJECT_ID, SANITY_TOKEN
- Dominios: grupoiasa.cl (cambiar DNS desde hosting actual) y proteus.exchange (validar dónde está hoy)

### Performance objetivos

- **Lighthouse mobile ≥ 90** en todas las métricas (Performance, SEO, Accessibility, Best Practices)
- **LCP < 2.5s**
- **CLS < 0.1**
- **WCAG 2.1 AA** validado con axe DevTools o similar

---

## 11. Lo que NO incluye este proyecto

Explícitamente fuera de alcance (confirmar antes de hacer cualquiera):

- ❌ Estrategia SEO, posicionamiento, linkbuilding, Google Ads
- ❌ Producción de fotografía, video, copy profesional
- ❌ Branding o rediseño de logotipo (mantener logos actuales)
- ❌ Blog dinámico o sistema de noticias
- ❌ Mantenimiento mensual continuo post go-live (cotización aparte)
- ❌ Cuarta empresa "Ingeniería Alemana" (cambio de alcance pendiente de cotización)
- ❌ Extensiones de Odoo más allá del formulario → lead básico

---

## 12. Archivos de referencia disponibles

En el momento del handoff existían los siguientes archivos (verificar persistencia):

- `Encargo_Pagina_Web_proteus_exchange_REV_A.docx` — briefing original de Proteus de Joachim Vogdt
- Capturas de WhatsApp con Joachim (acuerdos de precio)
- Capturas de las referencias visuales: vs.de, arup.com, dornier-group.com
- Logo del Grupo IASA (anillo multicolor sobre fondo negro)
- Prototipos HTML originales de mockup IASA y mockup Proteus (renderizados a 1180×1800@2x)
- Propuesta formal en .docx y .pdf entregada al cliente

Si no están disponibles en `/mnt/user-data/uploads/`, pedirlos a Oscar antes de empezar.

---

## 13. Notas de comunicación

### Cómo Carolina prefiere recibir información

- Correos estructurados con bullets y resúmenes accionables al final
- Cada cambio de alcance documentado explícitamente
- Confirmaciones explícitas antes de avanzar en supuestos

### Cómo Joachim opera

- Vía WhatsApp para conversaciones rápidas
- Maneja presupuesto en CLP aunque opera desde Alemania
- Negocia precios fuerte — el rango cerrado fue CLP $1.3-1.5M, finalmente UF 32 ≈ $1.3M
- Prefiere prosa directa, sin tecnicismos innecesarios

### Estilo de Skarn (Oscar)

- Estética minimalista negro + acento cobre
- Voz: cordial, directa, técnica cuando se requiere
- Marca personal: skarn.cl

---

## 14. Próximas acciones inmediatas (para la IA receptora)

1. **Leer este handoff completo y confirmar que se entiende cada sección**
2. **Verificar que están los archivos de referencia disponibles** (uploads del cliente, logos, etc.)
3. **Setup de repos**: crear dos proyectos Next.js separados (`grupoiasa-website` y `proteus-website`) con TypeScript + Tailwind + estructura base
4. **Configurar tokens de paleta** en Tailwind con los hex oficiales (§3)
5. **Crear componentes base reutilizables**: Header, Footer, Hero, eyebrow, sección con título grande
6. **Pedir a Oscar** que coordine: (a) recepción de fotos y proyectos de Carolina, (b) reunión con técnico Odoo de IASA, (c) recepción de servicios consolidados de IASA, (d) inputs finales de Proteus desde Joachim
7. **Empezar desarrollo del Home IASA** como primer entregable visible — es el que ancla el resto del sistema visual

---

## 15. Resumen de un solo párrafo (TL;DR)

Skarn (Oscar Angulo) tomó un proyecto de UF 32 para rediseñar dos sitios: grupoiasa.cl (sitio institucional 9 secciones con CMS Sanity, 3 divisiones PROIECTA/PROAMBIENTE/PROCEANIC, paleta corporativa #2C5FA1/#0F9649/#B6612A/#F2C811/#838488) y proteus.exchange (one-pager trilingüe DE/EN/ES con verde profundo #2A6B43 como único acento). Stack Next.js 15 + Tailwind + Sanity (IASA) + i18n nativo (Proteus) + integración Odoo CRM en el formulario de IASA (incluida sin costo extra). Cliente ya aprobó. Falta recibir fotos, lista de proyectos, servicios por división, y coordinar reunión técnica de Odoo. 8 semanas desde recepción del contenido. Audiencia IASA: clientes pesados del rubro minería/sanitario/aguas en Chile. Audiencia Proteus: PYMEs alemanas del Mittelstand. Inspiración visual: vs.de + arup.com + dornier-group.com.

**Fin del handoff.**
