import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-carbon text-white/80">
      <div className="container-x py-16 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <Image src="/logo-iasa-white.png" alt="Grupo IASA" width={281} height={273} className="h-16 w-auto" />
          </div>
          <div className="mt-5 text-[10px] uppercase tracking-eyebrow text-white/50">
            Cuatro especialidades. Un equipo. Un mismo método.
          </div>
          <p className="mt-6 max-w-md text-[14px] leading-relaxed text-white/60">
            Ecosistema técnico multidisciplinario chileno. Ingeniería, ambiente, ciencias del mar y know-how alemán integrados para acompañar proyectos complejos desde la idea hasta su consolidación. ISO 9001:2015 · 30 años.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="text-[11px] uppercase tracking-eyebrow text-white/55 mb-4">Empresas</div>
          <ul className="space-y-2 text-[14px]">
            <li><Link href="/proiecta" className="hover:text-white">PROIECTA</Link></li>
            <li><Link href="/proambiente" className="hover:text-white">PROAMBIENTE</Link></li>
            <li><Link href="/proceanic" className="hover:text-white">PROCEANIC</Link></li>
            <li><Link href="/ingenieria-alemana" className="hover:text-white">Ingeniería Alemana</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="text-[11px] uppercase tracking-eyebrow text-white/55 mb-4">Empresa</div>
          <ul className="space-y-2 text-[14px]">
            <li><Link href="/nosotros" className="hover:text-white">Nosotros</Link></li>
            <li><Link href="/servicios" className="hover:text-white">Servicios</Link></li>
            <li><Link href="/proyectos" className="hover:text-white">Proyectos</Link></li>
            <li><Link href="/sgc" className="hover:text-white">SGC</Link></li>
            <li><Link href="/contacto" className="hover:text-white">Contacto</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="text-[11px] uppercase tracking-eyebrow text-white/55 mb-4">Contacto</div>
          <address className="not-italic text-[14px] leading-relaxed text-white/70">
            Av. Providencia 2653<br />Of. 1308<br />Providencia, Santiago
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[12px] text-white/55">
          <div>© {new Date().getFullYear()} Grupo IASA · Todos los derechos reservados</div>
          <div className="flex items-center gap-4">
            <span>ISO 9001:2015 · AENOR · ER-0538/2024</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
