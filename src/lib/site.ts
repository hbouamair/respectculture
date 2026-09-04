export const site = {
  name: "Respect Your Culture",
  nameAr: "احترم تقافتك",
  taglineTifinagh: "ⴳⴰⵙ ⵓⴷⵓⵔ ⵏ ⵜⵓⵚⵏⴰ ⵏⴰⴽ",
  description:
    "High-quality dance apparel inspired by cultures from around the world — comfort, durability, and style for the floor and the street.",
  social: {
    instagram: "https://www.instagram.com/respectyourculture/",
    instagramApparel: "https://www.instagram.com/respectyourculture_apparel/",
    founder: "https://www.instagram.com/scorpion_99_/",
    facebook: "https://www.facebook.com/respectyourculture/",
  },
  contact: {
    address: "Hay Mohammadi, Casablanca 20250",
    phoneDisplay: "+212 6 64 08 84 42",
    phoneTel: "tel:+212664088442",
    email: "respectyourculture@gmail.com",
    emailMailto: "mailto:respectyourculture@gmail.com",
  },
  founder: {
    name: "Scorpion 99",
    legalName: "Mohammed Garmoumi",
  },
} as const;

export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "212664088442";

export const SIZES = ["S", "M", "L", "XL", "XXL"] as const;
export type Size = (typeof SIZES)[number];
