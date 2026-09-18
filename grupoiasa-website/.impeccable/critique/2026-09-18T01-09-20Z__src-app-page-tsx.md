---
timestamp: 2026-09-18T01-09-20Z
slug: src-app-page-tsx
---
{
  "target": "src/app/page.tsx",
  "mode": "persuade",
  "heuristics": {"visibilidad":2,"mundo-real":3,"control":3,"consistencia":2,"prevencion":null,"reconocer":2,"flexibilidad":2,"minimalismo":3,"errores":null,"ayuda":2},
  "score": 2.4,
  "designSpecificity": "contenido anclado, composicion transferible",
  "issues": [
    {"p":1,"t":"El cierre repite el hero y no ofrece via de contacto directa","f":"src/components/MensajeFinal.tsx"},
    {"p":1,"t":"Sin mailto ni tel en home ni footer","f":"src/components/Footer.tsx"},
    {"p":2,"t":"Texto justificado sin hyphens: rios visibles","f":"src/app/globals.css"},
    {"p":2,"t":"Ritmo vertical plano: 9 de 11 secciones con padding 112px","f":"src/app/page.tsx"},
    {"p":2,"t":"Logos servidos 2.4x-5.7x mas grandes, sin sizes","f":"src/components/Header.tsx"},
    {"p":3,"t":"ClientStrip: la mejor prueba en el lugar mas debil","f":"src/components/ClientStrip.tsx"},
    {"p":3,"t":"Escala tipografica: 23 tamanos unicos en el DOM","f":"src/"},
    {"p":3,"t":"17 de 18 animaciones usan la misma entrada fade+y","f":"src/components/"},
    {"p":3,"t":"prefers-reduced-motion no cubre framer-motion","f":"src/app/globals.css"},
    {"p":1,"t":"Contradiccion: /nosotros dice Tres empresas, home dice Cuatro","f":"src/app/nosotros/page.tsx"}
  ]
}
