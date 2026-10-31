const phrases = ["Envios para todo Brasil", "LC Imports"];

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {Array.from({ length: 6 }).flatMap((_, i) =>
        phrases.map((p) => (
          <span key={`${i}-${p}`} className="flex items-center">
            <span className="whitespace-nowrap px-8 text-[10px] uppercase tracking-[0.3em] text-bone/70">{p}</span>
            <span className="h-1 w-1 rotate-45 bg-gold/70" />
          </span>
        ))
      )}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-b border-bone/5 bg-ink-900 py-2.5 pt-[max(0.625rem,env(safe-area-inset-top))]">
      <div className="flex w-max animate-marquee will-change-transform">
        <Row />
        <Row />
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-ink-900" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-ink-900" />
    </div>
  );
}
