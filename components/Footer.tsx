import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-bone/5 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-16">
      <div className="container-x flex flex-col items-center gap-6 text-center">
        <Logo size="md" />
        <p className="max-w-xs text-sm text-bone/45">Autenticidade em cada detalhe. Envios para todo Brasil.</p>
        <p className="eyebrow">© {new Date().getFullYear()} LC Imports</p>
        <p className="text-[10px] text-bone/30">Prévia visual — compras, busca e carrinho ainda não estão ativos.</p>
      </div>
    </footer>
  );
}
