type Props = {
  eyebrow: string;
  titulo: string;
  bajada?: string;
  accent?: string;
};

export function SectionTitle({ eyebrow, titulo, bajada, accent = '#2C5FA1' }: Props) {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3">
        <span className="h-px w-6" style={{ background: accent }} />
        <span className="eyebrow" style={{ color: accent }}>{eyebrow}</span>
      </div>
      <h2 className="h-section mt-5 text-carbon">{titulo}</h2>
      {bajada && <p className="body-lg mt-4">{bajada}</p>}
    </div>
  );
}
