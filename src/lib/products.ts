import { SIZES, type Size } from "./site";

export type ProductColor = {
  id: string;
  label: { en: string; fr: string };
  hex: string;
};

export type ProductCategory = "hoodie" | "tee" | "jersey";

export type Product = {
  slug: string;
  name: { en: string; fr: string };
  mark: string;
  price: number;
  category: ProductCategory;
  description: { en: string; fr: string };
  colors: ProductColor[];
  sizes: readonly Size[];
  images: string[];
  looks?: string[];
  featured?: boolean;
};

export const products: Product[] = [
  {
    slug: "hoodie-gold",
    name: {
      en: "Gold lockup hoodie",
      fr: "Hoodie lockup or",
    },
    mark: "hoodie",
    price: 500,
    category: "hoodie",
    featured: true,
    description: {
      en: "Heavy black hoodie with the calligraphic Respect Your Culture lockup in gold. The square mark sits on the chest — same as the brand film.",
      fr: "Hoodie noir lourd avec le lockup calligraphique Respect Your Culture en or. Le carré de marque est sur la poitrine — le même que dans le film de la marque.",
    },
    colors: [{ id: "black", label: { en: "Black", fr: "Noir" }, hex: "#000000" }],
    sizes: SIZES,
    images: ["/products/hoodie-gold/flat.jpg"],
    looks: ["/products/hoodie-gold/worn.jpg"],
  },
  {
    slug: "hoodie-red",
    name: {
      en: "Gold lockup hoodie — red",
      fr: "Hoodie lockup or — rouge",
    },
    mark: "hoodie",
    price: 500,
    category: "hoodie",
    description: {
      en: "Same gold lockup, crimson body. For nights that need to be seen from across the floor.",
      fr: "Le même lockup or, corps cramoisi. Pour les nuits qu’on voit depuis l’autre bout de la piste.",
    },
    colors: [{ id: "red", label: { en: "Red", fr: "Rouge" }, hex: "#B1121C" }],
    sizes: SIZES,
    images: ["/products/hoodie-red/flat.jpg"],
    looks: ["/products/hoodie-red/worn.jpg"],
  },
  {
    slug: "tee-gold",
    name: {
      en: "Gold lockup tee",
      fr: "T-shirt lockup or",
    },
    mark: "tee",
    price: 300,
    category: "tee",
    featured: true,
    description: {
      en: "Oversized black tee with the gold stacked mark. Worn by Scorpion in the streets — Grand Taxi nights included.",
      fr: "Tee noir oversized avec le mark or empilé. Porté par Scorpion dans la rue — y compris les nuits Grand Taxi.",
    },
    colors: [{ id: "black", label: { en: "Black", fr: "Noir" }, hex: "#000000" }],
    sizes: SIZES,
    images: ["/products/tee-gold/flat.jpg"],
    looks: [
      "/products/tee-gold/worn.jpg",
      "/products/tee-gold/look-taxi.jpg",
      "/products/tee-gold/look-taxi-full.jpg",
    ],
  },
  {
    slug: "jersey-thaqafa",
    name: {
      en: "Thaqafa jersey — Zarbia edition",
      fr: "Maillot Thaqafa — édition Zarbia",
    },
    mark: "ثقافة",
    price: 400,
    category: "jersey",
    featured: true,
    description: {
      en: "RYC FC retro 2000. Crimson jersey with tonal zarbia pattern, black collar, gold lockup, and ثقافة — culture — across the chest.",
      fr: "RYC FC rétro 2000. Maillot cramoisi au motif zarbia tonal, col noir, lockup or, et ثقافة — culture — sur la poitrine.",
    },
    colors: [{ id: "red", label: { en: "Zarbia red", fr: "Rouge zarbia" }, hex: "#9B1B1B" }],
    sizes: SIZES,
    images: [
      "/products/jersey-thaqafa/flat-lay.png",
      "/products/jersey-thaqafa/detail.png",
      "/products/jersey-thaqafa/flat.jpg",
    ],
    looks: [
      "/products/jersey-thaqafa/look-desert.jpg",
      "/products/jersey-thaqafa/look-alley.jpg",
      "/products/jersey-thaqafa/look-riad.png",
      "/products/jersey-thaqafa/look-crew.jpg",
    ],
  },
  {
    slug: "jersey-tapestry",
    name: {
      en: "Thaqafa tapestry jersey",
      fr: "Maillot Thaqafa paisley",
    },
    mark: "ثقافة",
    price: 400,
    category: "jersey",
    description: {
      en: "Black-and-white paisley jersey with ثقافة at the chest. Street cut, heritage surface.",
      fr: "Maillot paisley noir et blanc avec ثقافة sur la poitrine. Coupe street, surface héritage.",
    },
    colors: [
      {
        id: "tapestry",
        label: { en: "Paisley", fr: "Paisley" },
        hex: "#2A2A2A",
      },
    ],
    sizes: SIZES,
    images: ["/products/jersey-tapestry/flat.png"],
    looks: ["/products/jersey-tapestry/look.jpg"],
  },
  {
    slug: "jersey-carpet",
    name: {
      en: "Thaqafa jersey — carpet edition",
      fr: "Maillot Thaqafa — édition tapis",
    },
    mark: "ثقافة",
    price: 400,
    category: "jersey",
    featured: true,
    description: {
      en: "Burgundy carpet-print jersey with cream motifs, black collar, gold lockup, and ثقافة — culture — across the chest.",
      fr: "Maillot imprimé tapis bordeaux aux motifs crème, col noir, lockup or, et ثقافة — culture — sur la poitrine.",
    },
    colors: [
      {
        id: "carpet",
        label: { en: "Carpet burgundy", fr: "Bordeaux tapis" },
        hex: "#6B2B2B",
      },
    ],
    sizes: SIZES,
    images: ["/products/jersey-carpet/flat.png"],
    looks: ["/lookbook/hero-left.jpg"],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getHoverImage(product: Product) {
  return product.looks?.[0];
}

export function getGalleryImages(product: Product) {
  const looks = product.looks ?? [];
  return [...looks, ...product.images.filter((src) => !looks.includes(src))];
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

export function formatMad(amount: number) {
  return `${amount} MAD`;
}
