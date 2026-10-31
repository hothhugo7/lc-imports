// Wordmark placeholder — replace with the client's logo file (e.g. /public/brand/logo.svg).
export default function Logo({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: "text-xl", md: "text-2xl", lg: "text-5xl sm:text-6xl" };
  return (
    <span className={`inline-flex flex-col items-center leading-none ${className}`}>
      <span className={`font-display font-medium tracking-[0.14em] ${sizes[size]}`}>LC</span>
      <span className="mt-1 text-[8px] uppercase tracking-[0.5em] text-bone/60">Imports</span>
    </span>
  );
}
