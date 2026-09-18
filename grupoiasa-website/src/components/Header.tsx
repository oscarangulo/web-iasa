'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

// El punto de color distingue las cuatro empresas del resto del menú: sin él
// son cuatro nombres propios seguidos que el visitante todavía no sabe leer.
const nav = [
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/proiecta', label: 'PROIECTA', color: '#2C5FA1' },
  { href: '/proambiente', label: 'PROAMBIENTE', color: '#0F9649' },
  { href: '/proceanic', label: 'PROCEANIC', color: '#B6612A' },
  { href: '/ingenieria-alemana', label: 'Ingeniería Alemana', color: '#F2C811' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/sgc', label: 'SGC' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Escape cierra el menú móvil: sin esto el teclado queda atrapado en el panel.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-gris-borde bg-white/85 backdrop-blur">
      <div className="container-x flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <Image
            src="/logo-iasa.png"
            alt="Grupo IASA"
            width={281}
            height={273}
            priority
            sizes="(min-width: 768px) 58px, 50px"
            className="h-12 w-auto md:h-14"
          />
          <div className="hidden whitespace-nowrap border-l border-gris-borde pl-3 leading-none sm:block">
            <div className="text-[10px] uppercase tracking-eyebrow text-gris-medio">30 años</div>
            <div className="mt-0.5 text-[10px] uppercase tracking-eyebrow text-gris-medio">Ingeniería · Ambiente · Mar</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`inline-flex items-center gap-1.5 whitespace-nowrap px-2 py-2 text-[12.5px] font-medium tracking-tight transition-colors ${
                  active ? 'text-iasa-azul' : 'text-carbon/80 hover:text-iasa-azul'
                }`}
              >
                {item.color && (
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: item.color }}
                  />
                )}
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contacto"
            className="ml-3 inline-flex items-center rounded-full bg-iasa-azul px-4 py-2 text-[13px] font-medium text-white transition-colors hover:bg-iasa-azul-dark"
          >
            Contacto
          </Link>
        </nav>

        <button
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="menu-movil"
          className="xl:hidden inline-flex h-11 w-11 items-center justify-center rounded-md border border-gris-borde"
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div id="menu-movil" className="xl:hidden border-t border-gris-borde bg-white">
          <div className="container-x py-4 flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 py-3 text-[15px] border-b border-gris-borde last:border-b-0"
              >
                {item.color && (
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: item.color }}
                  />
                )}
                {item.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-iasa-azul px-5 py-3 text-[14px] font-medium text-white"
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
