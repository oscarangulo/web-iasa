'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { kpis } from '@/data/clientes';

function Counter({ to, sufijo }: { to: string; sufijo: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [val, setVal] = useState(0);
  const target = parseInt(to, 10);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1100;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-medium tracking-tighter2 text-carbon">
      {val}
      {sufijo}
    </span>
  );
}

export function KpiStrip() {
  return (
    <section className="border-y border-gris-borde bg-white">
      <div className="container-x py-14 grid grid-cols-2 md:grid-cols-4 gap-y-10">
        {kpis.map((k, i) => (
          <motion.div
            key={k.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="flex flex-col"
          >
            <div className="text-[44px] md:text-[56px] leading-none">
              <Counter to={k.numero} sufijo={k.sufijo} />
            </div>
            <div className="mt-3 text-[12px] uppercase tracking-eyebrow text-gris-medio">{k.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
