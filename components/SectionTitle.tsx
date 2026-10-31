import Reveal from "./Reveal";

export default function SectionTitle({ eyebrow, title, copy }: { eyebrow: string; title: React.ReactNode; copy?: string }) {
  return (
    <Reveal className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="eyebrow mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-azure/60" />
          {eyebrow}
        </p>
        <h2 className="font-display text-[2.6rem] font-light leading-[1] sm:text-6xl">{title}</h2>
      </div>
      {copy && <p className="max-w-xs text-sm leading-relaxed text-bone/55">{copy}</p>}
    </Reveal>
  );
}
