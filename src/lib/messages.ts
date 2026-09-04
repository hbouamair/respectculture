export type Locale = "en" | "fr";

export const navHrefs = [
  { href: "/", key: "home" },
  { href: "/store", key: "store" },
  { href: "/gallery", key: "gallery" },
  { href: "/about", key: "about" },
] as const;

export type Messages = {
  nav: Record<(typeof navHrefs)[number]["key"], string>;
  header: {
    cart: string;
    openCart: string;
    closeMenu: string;
    openMenu: string;
    language: string;
    banner: string;
  };
  hero: {
    title: string;
    lead: string;
    ctaStore: string;
    collection: string;
    scroll: string;
  };
  home: {
    conceptTitle: string;
    conceptBody: string;
    lookTitle: string;
    lookLead: string;
    dropTitle: string;
    dropLead: string;
    galleryTitle: string;
    galleryLead: string;
    galleryCta: string;
    whatsappNote: string;
    viewAll: string;
    collectionsTitle: string;
    jerseyTitle: string;
    jerseyBody: string;
    streetTitle: string;
    streetBody: string;
    tabFeatured: string;
    tabJerseys: string;
    tabHoodies: string;
    shopCollection: string;
  };
  store: {
    title: string;
    lead: string;
    view: string;
  };
  product: {
    add: string;
    added: string;
    size: string;
    color: string;
    qty: string;
    howToBuy: string;
    back: string;
  };
  gallery: {
    title: string;
    lead: string;
    play: string;
    close: string;
    instagram: string;
    hover: string;
  };
  about: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    founder: string;
    founderStory: string;
  };
  cart: {
    title: string;
    empty: string;
    emptyCta: string;
    checkout: string;
    remove: string;
    close: string;
    total: string;
  };
  checkout: {
    title: string;
    lead: string;
    name: string;
    phone: string;
    city: string;
    notes: string;
    notesHint: string;
    submit: string;
    fallback: string;
    fallbackLink: string;
    empty: string;
    backToStore: string;
    order: string;
  };
  footer: {
    rights: string;
    instagram: string;
    apparel: string;
    book: string;
    bookHint: string;
    madeBy: string;
  };
  notFound: {
    title: string;
    body: string;
    home: string;
  };
};

export const messages: Record<Locale, Messages> = {
  en: {
    nav: {
      home: "Home",
      store: "Store",
      gallery: "Gallery",
      about: "About",
    },
    header: {
      cart: "Cart",
      openCart: "Open cart",
      closeMenu: "Close menu",
      openMenu: "Open menu",
      language: "Language",
      banner: "Checkout on WhatsApp · Casablanca",
    },
    hero: {
      title: "Wear the culture. Move in it.",
      lead: "Dance apparel that honors the traditions you carry — comfort, color, and cut for the floor and the street.",
      ctaStore: "Shop now",
      collection: "New arrivals",
      scroll: "Scroll",
    },
    home: {
      conceptTitle: "Dance as a living language",
      conceptBody:
        "We make dancewear that celebrates cultural diversity: comfort, durability, and style, with colors and patterns that belong on the floor.",
      lookTitle: "The clothes, on people",
      lookLead:
        "Models and dancers wearing Respect Your Culture — jerseys, tees, and cuts built to move.",
      dropTitle: "New arrivals",
      dropLead: "Hoodies, tees, jerseys. Gold lockup on black. ثقافة on crimson.",
      galleryTitle: "People dancing in the clothes",
      galleryLead: "Hover a clip to play. Click to open it full.",
      galleryCta: "Open the gallery",
      whatsappNote:
        "No card on this site. Pick the piece, then confirm the order on WhatsApp.",
      viewAll: "View all",
      collectionsTitle: "Curated collections",
      jerseyTitle: "Jerseys",
      jerseyBody:
        "Thaqafa on the chest. Zarbia red, tapestry print — pieces cut for the floor and the street.",
      streetTitle: "Lookbook",
      streetBody: "The clothes on people. Casablanca, desert, riad — worn, not styled in a vacuum.",
      tabFeatured: "Featured",
      tabJerseys: "Jerseys",
      tabHoodies: "Hoodies",
      shopCollection: "Shop",
    },
    store: {
      title: "Store",
      lead: "Pieces that carry the story. Sizes S to XXL. Checkout opens WhatsApp.",
      view: "View",
    },
    product: {
      add: "Add to cart",
      added: "Added",
      size: "Size",
      color: "Color",
      qty: "Qty",
      howToBuy:
        "No online payment. Add to cart, then confirm on WhatsApp. We reply with availability, delivery, and how to pay.",
      back: "All pieces",
    },
    gallery: {
      title: "Gallery",
      lead: "Hover a clip to play it. The still is a frame from that video. Click to open full screen.",
      play: "Play",
      close: "Close",
      instagram: "Watch on Instagram",
      hover: "Hover to play",
    },
    about: {
      title: "Respect Your Culture",
      p1: "Welcome to Respect Your Culture, the premier destination for high-quality dance apparel inspired by diverse cultures from around the world. Our brand is dedicated to creating dancewear that celebrates and honors the rich traditions and unique styles of various communities.",
      p2: "At Respect Your Culture, we believe that dance is not just an art form, but a means of expression and connection that transcends borders and unites people. Our clothing reflects this belief, combining comfort, durability, and style with vibrant colors and intricate patterns that showcase the beauty of cultural diversity.",
      p3: "Our mission is to inspire and empower dancers of all backgrounds to express themselves freely and authentically. We believe that by respecting and honoring each other's cultures, we can create a world where diversity is celebrated and unity is cherished.",
      p4: "Join us in our journey of celebrating cultural diversity through dance. Shop our collection today and show your love and respect for your culture on and off the dance floor.",
      founder: "Founder, choreographer, teacher",
      founderStory:
        "Mohammed Garmoumi — Scorpion 99 — is a dancer and teacher from Casablanca, now based between Marrakech and the road. He launched the brand so dancers could wear their roots as they move.",
    },
    cart: {
      title: "Cart",
      empty: "Nothing in the bag yet.",
      emptyCta: "Go to the store",
      checkout: "Checkout on WhatsApp",
      remove: "Remove",
      close: "Close cart",
      total: "Total",
    },
    checkout: {
      title: "Confirm on WhatsApp",
      lead: "No online payment. We open WhatsApp with your order. The team replies with availability, delivery, and how to pay (cash on delivery or transfer).",
      name: "Name",
      phone: "Your WhatsApp number",
      city: "City",
      notes: "Notes",
      notesHint: "Delivery hint, timing, gift — optional.",
      submit: "Confirm on WhatsApp",
      fallback: "Thank you — your order is ready on WhatsApp. If the chat did not open, tap below.",
      fallbackLink: "Open WhatsApp",
      empty: "Your cart is empty.",
      backToStore: "Back to store",
      order: "Your order",
    },
    footer: {
      rights: "All rights reserved",
      instagram: "Culture",
      apparel: "Apparel",
      book: "Book on WhatsApp",
      bookHint: "Orders and fittings — we reply on WhatsApp.",
      madeBy: "Made by",
    },
    notFound: {
      title: "This page is off the floor",
      body: "The link does not match a piece or a page.",
      home: "Back home",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      store: "Boutique",
      gallery: "Galerie",
      about: "À propos",
    },
    header: {
      cart: "Panier",
      openCart: "Ouvrir le panier",
      closeMenu: "Fermer le menu",
      openMenu: "Ouvrir le menu",
      language: "Langue",
      banner: "Commande WhatsApp · Casablanca",
    },
    hero: {
      title: "Porte la culture. Bouge dedans.",
      lead: "Des vêtements de danse qui honorent les traditions que tu portes — confort, couleur et coupe, pour le floor et la rue.",
      ctaStore: "Acheter",
      collection: "Nouveautés",
      scroll: "Défiler",
    },
    home: {
      conceptTitle: "La danse comme langue vivante",
      conceptBody:
        "Nous créons des tenues de danse qui célèbrent la diversité culturelle : confort, durabilité et style, avec des couleurs et des motifs faits pour le floor.",
      lookTitle: "Les pièces, portées",
      lookLead:
        "Mannequins et danseurs en Respect Your Culture — maillots, tees et coupes faites pour bouger.",
      dropTitle: "Nouveautés",
      dropLead: "Hoodies, tees, maillots. Lockup or sur noir. ثقافة sur cramoisi.",
      galleryTitle: "Des gens qui dansent dans les pièces",
      galleryLead: "Survole un clip pour le lire. Clique pour l’ouvrir en grand.",
      galleryCta: "Ouvrir la galerie",
      whatsappNote:
        "Pas de carte sur ce site. Tu choisis la pièce, puis tu confirmes la commande sur WhatsApp.",
      viewAll: "Tout voir",
      collectionsTitle: "Collections",
      jerseyTitle: "Maillots",
      jerseyBody:
        "Thaqafa sur la poitrine. Rouge zarbia, imprimé tapis — des pièces pour le floor et la rue.",
      streetTitle: "Lookbook",
      streetBody: "Les pièces portées. Casablanca, désert, riad — sur des gens, pas en studio vide.",
      tabFeatured: "Sélection",
      tabJerseys: "Maillots",
      tabHoodies: "Hoodies",
      shopCollection: "Voir",
    },
    store: {
      title: "Boutique",
      lead: "Des pièces qui portent l’histoire. Tailles S à XXL. Le checkout ouvre WhatsApp.",
      view: "Voir",
    },
    product: {
      add: "Ajouter au panier",
      added: "Ajouté",
      size: "Taille",
      color: "Couleur",
      qty: "Qté",
      howToBuy:
        "Pas de paiement en ligne. Ajoute au panier, puis confirme sur WhatsApp. On répond avec la dispo, la livraison et le mode de paiement.",
      back: "Toutes les pièces",
    },
    gallery: {
      title: "Galerie",
      lead: "Survole un clip pour le lire. L’image est une image extraite de la vidéo. Clique pour ouvrir en plein écran.",
      play: "Lire",
      close: "Fermer",
      instagram: "Voir sur Instagram",
      hover: "Survole pour lire",
    },
    about: {
      title: "Respect Your Culture",
      p1: "Bienvenue chez Respect Your Culture, la destination de référence pour des vêtements de danse de haute qualité, inspirés des cultures du monde entier. Notre marque crée des tenues qui célèbrent et honorent les traditions riches et les styles uniques de communautés diverses.",
      p2: "Chez Respect Your Culture, nous croyons que la danse n’est pas seulement un art, mais un langage d’expression et de lien qui traverse les frontières et rassemble. Nos vêtements portent cette conviction : confort, durabilité et style, couleurs vives et motifs complexes qui montrent la beauté de la diversité culturelle.",
      p3: "Notre mission : inspirer et donner aux danseurs de tous les horizons le pouvoir de s’exprimer librement et authentiquement. En respectant et en honorant les cultures les uns des autres, nous pouvons créer un monde où la diversité est célébrée et l’unité chérie.",
      p4: "Rejoins-nous dans ce voyage : célébrer la diversité culturelle par la danse. Découvre la collection et porte l’amour et le respect de ta culture, sur le floor et en dehors.",
      founder: "Fondateur, chorégraphe, professeur",
      founderStory:
        "Mohammed Garmoumi — Scorpion 99 — est danseur et prof, de Casablanca, entre Marrakech et la route. Il a lancé la marque pour que les danseurs portent leurs racines en mouvement.",
    },
    cart: {
      title: "Panier",
      empty: "Rien dans le sac pour l’instant.",
      emptyCta: "Aller à la boutique",
      checkout: "Commander sur WhatsApp",
      remove: "Retirer",
      close: "Fermer le panier",
      total: "Total",
    },
    checkout: {
      title: "Confirmer sur WhatsApp",
      lead: "Pas de paiement en ligne. WhatsApp s’ouvre avec ta commande. L’équipe répond avec la dispo, la livraison et le paiement (contre remboursement ou virement).",
      name: "Nom",
      phone: "Ton numéro WhatsApp",
      city: "Ville",
      notes: "Notes",
      notesHint: "Livraison, horaire, cadeau — optionnel.",
      submit: "Confirmer sur WhatsApp",
      fallback: "Merci — ta commande est prête sur WhatsApp. Si la conversation ne s’ouvre pas, appuie ci-dessous.",
      fallbackLink: "Ouvrir WhatsApp",
      empty: "Ton panier est vide.",
      backToStore: "Retour boutique",
      order: "Ta commande",
    },
    footer: {
      rights: "Tous droits réservés",
      instagram: "Culture",
      apparel: "Apparel",
      book: "Réserver sur WhatsApp",
      bookHint: "Commandes et essayages — on répond sur WhatsApp.",
      madeBy: "Créé par",
    },
    notFound: {
      title: "Cette page n’est pas sur le floor",
      body: "Le lien ne correspond à aucune pièce ni page.",
      home: "Retour accueil",
    },
  },
};
