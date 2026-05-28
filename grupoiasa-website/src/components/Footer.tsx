import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-24 bg-carbon text-white/80">
      <div className="container-x py-16 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <div className="bg-white/95 rounded-sm p-2">
              <Image src="/logo-iasa.webp" alt="Grupo IASA" width={160} height={45} className="h-10 w-auto" />
            </div>
          </div>
          <div className="mt-5 text-[10px] uppercase tracking-eyebrow text-white/50">
            Soluciones globales para la producción y el desarrollo sustentable
          </div>
          <p className="mt-6 max-w-md text-[14px] leading-relaxed text-white/60">
            Consultora chilena de ingeniería y consultoría ambiental. ISO 9001:2015. 29 años acompañando a la industria minera, sanitaria, energética y portuaria.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="text-[11px] uppercase tracking-eyebrow text-white/40 mb-4">Empresas</div>
          <ul className="space-y-2 text-[14px]">
            <li><Link href="/proiecta" className="hover:text-white">PROIECTA</Link></li>
            <li><Link href="/proambiente" className="hover:text-white">PROAMBIENTE</Link></li>
            <li><Link href="/proceanic" className="hover:text-white">PROCEANIC</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="text-[11px] uppercase tracking-eyebrow text-white/40 mb-4">Empresa</div>
          <ul className="space-y-2 text-[14px]">
            <li><Link href="/nosotros" className="hover:text-white">Nosotros</Link></li>
            <li><Link href="/proyectos" className="hover:text-white">Proyectos</Link></li>
            <li><Link href="/sgc" className="hover:text-white">SGC</Link></li>
            <li><Link href="/contacto" className="hover:text-white">Contacto</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="text-[11px] uppercase tracking-eyebrow text-white/40 mb-4">Contacto</div>
          <address className="not-italic text-[14px] leading-relaxed text-white/70">
            Av. Providencia 2653<br />Of. 1308<br />Providencia, Santiago
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[12px] text-white/40">
          <div>© {new Date().getFullYear()} Grupo IASA · Todos los derechos reservados</div>
          <div className="flex items-center gap-4">
            <span>ISO 9001:2015 · AENOR · ER-0538/2024</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
