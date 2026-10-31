// Placeholder imagery — swap for the client's product shots in /public/products.
const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const heroImage = u("photo-1552346154-21d32810aba3", 1600);

export const highlights = [
  { name: "Oversized Essential Tee", tag: "Drop 07", price: "R$ 289", image: u("photo-1521572163474-6864f9cf17ab", 900) },
  { name: "Runner Phantom", tag: "Limitado", price: "R$ 1.290", image: u("photo-1542291026-7eec264c27ff", 900) },
  { name: "Heavyweight Hoodie", tag: "Novo", price: "R$ 549", image: u("photo-1556821840-3a63f95609a7", 900) },
  { name: "Court Classic Low", tag: "Importado", price: "R$ 999", image: u("photo-1600185365483-26d7a4cc7519", 900) },
];

export const featured = {
  tee: {
    eyebrow: "Camiseta · Algodão Pima",
    name: "Signature Black Tee",
    copy: "Corte estruturado, toque seco e caimento impecável. A base de todo guarda-roupa com presença.",
    price: "R$ 329",
    image: u("photo-1503341504253-dff4815485f1", 1400),
  },
  sneaker: {
    eyebrow: "Tênis · Edição Importada",
    name: "Phantom Runner 01",
    copy: "Design arquitetônico, amortecimento responsivo e acabamento premium. Feito para ser notado.",
    price: "R$ 1.490",
    image: u("photo-1549298916-b41d501d3772", 1400),
  },
};

export const categories = [
  { name: "Camisetas", count: "48 peças", image: u("photo-1622445275463-afa2ab738c34", 800) },
  { name: "Tênis", count: "32 pares", image: u("photo-1595950653106-6c9ebd614d3a", 800) },
  { name: "Moletons", count: "21 peças", image: u("photo-1578587018452-892bacefd3f2", 800) },
  { name: "Acessórios", count: "17 itens", image: u("photo-1523170335258-f5ed11844a49", 800) },
];
