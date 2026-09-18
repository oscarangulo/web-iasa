/**
 * Filtro duotono petróleo → crema.
 *
 * Las imágenes de proyecto vienen de fuentes dispares (plano escaneado, dos
 * renders, foto de obra). `mix-blend-color` las teñía de forma despareja según
 * el color de origen; esto mapea la luminancia a una rampa fija, así que todas
 * salen del mismo material sin importar de dónde vengan.
 */
export function DuotonoFiltro() {
  return (
    <svg aria-hidden className="absolute h-0 w-0" focusable="false">
      <filter id="duotono-iasa" colorInterpolationFilters="sRGB">
        <feColorMatrix type="saturate" values="0" />
        <feComponentTransfer>
          {/* de #0B1E36 (sombras) a #FAFAF8 (altas luces) */}
          <feFuncR type="table" tableValues="0.043 0.98" />
          <feFuncG type="table" tableValues="0.118 0.98" />
          <feFuncB type="table" tableValues="0.212 0.973" />
        </feComponentTransfer>
      </filter>
    </svg>
  );
}
