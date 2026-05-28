'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const nav = [
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/proiecta', label: 'PROIECTA' },
  { href: '/proambiente', label: 'PROAMBIENTE' },
  { href: '/proceanic', label: 'PROCEANIC' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/publicaciones', label: 'Publicaciones' },
  { href: '/sgc', label: 'SGC' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-gris-borde bg-white/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <Image
            src="/logo-iasa.webp"
            alt="Grupo IASA"
            width={140}
            height={40}
            priority
            className="h-9 w-auto"
          />
          <div className="hidden sm:block leading-none pl-3 border-l border-gris-borde">
            <div className="text-[10px] uppercase tracking-eyebrow text-gris-medio">29 años</div>
            <div className="text-[10px] uppercase tracking-eyebrow text-gris-medio mt-0.5">Ingeniería · Ambiente · Mar</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-[13px] font-medium tracking-tight transition-colors ${
                  active ? 'text-iasa-azul' : 'text-carbon/80 hover:text-iasa-azul'
                }`}
              >
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
          aria-label="Abrir menú"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-gris-borde"
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gris-borde bg-white">
          <div className="container-x py-4 flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[15px] border-b border-gris-borde last:border-b-0"
              >
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
