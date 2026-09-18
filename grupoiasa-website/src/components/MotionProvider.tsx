'use client';

import { MotionConfig } from 'framer-motion';

/**
 * `reducedMotion="user"` hace que framer-motion respete la preferencia del
 * sistema en todo el árbol. La regla equivalente de globals.css sólo alcanza a
 * las animaciones CSS, y todos los reveals del sitio son de framer (JS).
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
