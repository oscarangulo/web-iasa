---
name: Grupo IASA
description: El Plano de Ingeniería — ecosistema técnico multidisciplinario, evidencia sobre marketing
colors:
  azul: "#2C5FA1"
  azul-dark: "#1F4778"
  petroleo: "#0B1E36"
  verde: "#0F9649"
  naranja: "#B6612A"
  amarillo: "#F2C811"
  carbon: "#0A0A0A"
  crema: "#FAFAF8"
  gris-medio: "#5C6470"
  gris-borde: "#E5E5E5"
  blanco: "#FFFFFF"
typography:
  display:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2.75rem, 5vw, 4rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  section:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 3vw, 2.125rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  eyebrow:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.18em"
rounded:
  sm: "2px"
  md: "8px"
  lg: "12px"
  full: "9999px"
spacing:
  section-y: "5rem"
  section-y-lg: "7rem"
  gutter: "1.5rem"
components:
  button-primary:
    backgroundColor: "{colors.amarillo}"
    textColor: "{colors.petroleo}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  button-secondary:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.carbon}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  nav-link-active:
    textColor: "{colors.azul}"
  card-project:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.carbon}"
    rounded: "{rounded.lg}"
    padding: "28px"
  eyebrow:
    textColor: "{colors.azul}"
    typography: "{typography.eyebrow}"
---

## Overview

**El Plano de Ingeniería.** Grupo IASA se presenta como un documento técnico vivo: preciso, sobrio, construido sobre evidencia. Líneas limpias, mucho aire, jerarquía tipográfica clara y texturas sutiles de topografía y batimetría (5–8% de opacidad) que evocan planos de ingeniería sin distraer. El sistema alterna superficies claras (crema, blanco) con bloques de azul petróleo profundo que aportan autoridad. No es una plantilla SaaS ni una consultora con stock: cada pantalla afirma capacidad con datos, no con adjetivos.

El registro es **brand** (marketing/landing). La emoción meta es confianza / respaldo técnico. El lujo está en la restricción: espaciados amplios, mayúsculas técnicas con tracking ancho para los eyebrows, y color usado con significado, no por estética.

Layout: contenedor máximo 1280px con padding 24/40/56px; sin envolver todo en cajas. El ritmo vertical varía a propósito (5rem / 7rem) para evitar monotonía.

## Colors

Estrategia: **Committed con disciplina**. El azul (`#2C5FA1`) y el azul petróleo (`#0B1E36`) dominan; el resto de la paleta mapea a capacidades estratégicas y aparece con moderación.

- **Azul `#2C5FA1`** — ingeniería, confianza, precisión. Color primario, eyebrows, enlaces, división PROIECTA.
- **Azul petróleo `#0B1E36`** — autoridad. Fondo de hero, footer y bloques de alto impacto (propósito, calidad, contacto).
- **Verde `#0F9649`** — medio ambiente, cumplimiento. Reservado a PROAMBIENTE.
- **Naranjo `#B6612A`** — movimiento, mar, innovación. Reservado a PROCEANIC.
- **Amarillo `#F2C811`** — experiencia, prestigio, know-how alemán. **Solo acento**: CTA primario, franja de Ingeniería Alemana, detalles destacados. Nunca dominante.
- **Neutrales**: crema `#FAFAF8` (superficie suave), blanco, carbón `#0A0A0A` (texto), gris-medio `#5C6470` (texto secundario), gris-borde `#E5E5E5` (hairlines). Todos ligeramente templados hacia el azul corporativo.

Sobre azul petróleo, el texto secundario usa blanco a 60–75% de opacidad; los eyebrows amarillos y el texto destacado en amarillo aportan el contraste cálido.

## Typography

Familia única: **Inter** (alta legibilidad, técnica, sin decoración). Jerarquía por escala + peso, ratio ≥1.25 entre pasos.

- **Display** (hero h1): 44→64px, peso 500, tracking −0.025em, line-height 1.02. Titulares cortos y memorables.
- **Section** (h2): 28→34px, peso 500, tracking −0.015em.
- **Body**: 15–17px, peso 400, line-height 1.6. Largo de línea limitado a 65–75ch.
- **Eyebrow**: 11px, peso 600, MAYÚSCULAS, tracking 0.18em — la firma tipográfica del sistema (precede a cada sección).
- **Cifras** (proyectos): 27px peso 500 con `tabular-nums`, en el color de la división; unidad en eyebrow gris.

El cuerpo de los párrafos largos va **justificado** (alineación a ambos márgenes) para reforzar el carácter de documento técnico; titulares y listas quedan alineados a la izquierda.

## Elevation

**Lift sutil en interactivos.** El sistema es plano por defecto: la jerarquía nace de bordes hairline (`#E5E5E5`), tintes de fondo y superposición tonal (crema sobre blanco sobre petróleo). No hay sombras ambientales decorativas.

La excepción son los elementos accionables: las tarjetas de proyecto se elevan al hover con una sombra difusa y direccional (`0 24px 50px -24px rgba(15,28,55,0.25)`) y un `translateY(-4px)`, invitando a la interacción. El núcleo del ecosistema usa una sombra profunda (`0 25px 60px -15px rgba(11,30,54,0.55)`) para flotar sobre los anillos. Las sombras son estructurales (comunican interactividad / profundidad de capa), nunca ornamentales.

## Components

- **Botón primario**: fondo amarillo `#F2C811`, texto petróleo, full-rounded, padding 12×24. Hover: leve `translateY(-1px)`. Es el CTA de conversión ("Quiero conversar mi proyecto").
- **Botón secundario**: fondo blanco, texto carbón, full-rounded, borde sutil. Sobre fondo oscuro usa borde blanco translúcido.
- **Eyebrow**: línea corta (8px) + label en mayúsculas azul/amarillo con tracking 0.18em. Abre cada sección.
- **Tarjeta de proyecto**: blanco, `rounded-lg`, padding 28, franja de color superior (10px) + encabezado de altura fija + cifras en lista `<dl>` con hairlines + "Ver ficha" anclado al fondo. Imagen del proyecto (plano/obra) en la parte superior cuando aplica.
- **Franjas de división**: barra de color (azul/verde/naranjo/amarillo) con el nombre de la empresa encima y su descripción debajo. Orden fijo: PROIECTA, PROAMBIENTE, PROCEANIC, INGENIERÍA ALEMANA.
- **Retratos de equipo**: 3:4, fondo negro de estudio, logo IASA full-color, grises por defecto con transición a color en hover. Tratamiento uniforme para todos.
- **Bloque de impacto**: panel azul petróleo a ancho completo con eyebrow amarillo, titular display blanco y, opcionalmente, una tarjeta interior (compromiso, certificación) con franja de color.

## Do's and Don'ts

**Do**
- Respaldar cada afirmación con un dato concreto (29 años, ISO 9001, 3.000.000 m³, US$85M, clientes nombrados).
- Usar el amarillo solo como acento (CTA, Ingeniería Alemana, detalles). Azul y petróleo cargan la identidad.
- Justificar los párrafos de cuerpo largo; mantener titulares y eyebrows a la izquierda.
- Mostrar evidencia visual real: planos, depósitos, obras, instalaciones técnicas.
- Reservar verde→PROAMBIENTE y naranjo→PROCEANIC; acompañar siempre el color de un nombre/etiqueta (no depender solo del color).
- Mantener el sistema plano; reservar la elevación para lo accionable.

**Don't**
- Sin fotos de stock, personas sonriendo frente a computadores, ni "soluciones globales".
- Sin gradient-hero, gradient text, hero-metric template, ni cards idénticas en grilla infinita.
- Sin side-stripe borders (border-left de color como acento). Usar bordes completos, tintes o numeración.
- Sin saturar: nunca los cuatro colores compitiendo a la vez.
- Sin em dashes en el copy. Usar comas, dos puntos, punto y coma o paréntesis.
- Sin glassmorphism decorativo ni sombras ornamentales.
