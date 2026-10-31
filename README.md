# LC Imports — Home MVP

Home premium mobile-first em Next.js 14 + TypeScript + Tailwind + Framer Motion.

```
app/            layout, página e estilos globais
components/     Loader, Marquee, Header, Hero, Highlights, FeaturedProducts, Categories, Footer
lib/data.ts     produtos, categorias e imagens (placeholders)
```

## Rodar

```
npm install
npm run dev
```

## Trocar pela identidade real

- Logo: substitua o conteúdo de `components/Logo.tsx` por `<Image src="/brand/logo.svg" … />`.
- Produtos: coloque as fotos em `public/products/` e atualize os caminhos em `lib/data.ts`.
