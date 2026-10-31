// Test catalogue for the MVP — names and prices are placeholders to be confirmed by the client.
import type { StaticImageData } from "next/image";
import bmwTrio from "@/public/products/bmw-trio.jpg";
import bmwStripes from "@/public/products/bmw-stripes.jpg";
import bmwBack from "@/public/products/bmw-m-back.jpg";
import bmwColorblock from "@/public/products/bmw-colorblock.jpg";
import jordanTrio from "@/public/products/jordan-trio.jpg";
import jordanSet from "@/public/products/jordan-set.jpg";
import jordanCircle from "@/public/products/jordan-circle.jpg";
import airJordanGrey from "@/public/products/air-jordan-grey.jpg";
import airJordanDetail from "@/public/products/air-jordan-detail.jpg";
import jordanShorts from "@/public/products/jordan-shorts.jpg";

export type Img = StaticImageData;

export const heroImage = bmwTrio;

export const highlights = [
  { name: "BMW M Motorsport Stripes", tag: "Puma", price: "R$ 219", image: bmwStripes },
  { name: "Jordan Jumpman Circle", tag: "Jordan", price: "R$ 199", image: jordanCircle },
  { name: "BMW M Back Stripe", tag: "Novo", price: "R$ 219", image: bmwBack },
  { name: "Air Jordan Script Grey", tag: "Jordan", price: "R$ 189", image: airJordanGrey },
];

export const featured = {
  tee: {
    eyebrow: "Camiseta · Puma × BMW M Motorsport",
    name: "Colorblock Navy",
    copy: "Corpo marinho, mangas em azul intenso e gola contrastante. A estética das pistas em uma peça feita para o dia a dia.",
    price: "R$ 239",
    image: bmwColorblock,
  },
  set: {
    eyebrow: "Conjunto · Jordan",
    name: "Jumpman Court Set",
    copy: "Camiseta Jumpman Circle com short mesh de estampa geométrica. Presença de quadra, conforto de rua.",
    price: "R$ 359",
    image: jordanSet,
  },
};

export const categories = [
  { name: "BMW Motorsport", count: "Puma", image: bmwTrio },
  { name: "Jordan", count: "Nike", image: jordanTrio },
  { name: "Camisetas", count: "Ver todas", image: airJordanDetail },
  { name: "Shorts", count: "Ver todos", image: jordanShorts },
];
