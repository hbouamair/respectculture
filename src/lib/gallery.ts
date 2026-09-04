export type GalleryClip = {
  id: string;
  title: { en: string; fr: string };
  src: string;
  poster: string;
  width: number;
  height: number;
  instagram?: string;
};

export const galleryClips: GalleryClip[] = [
  {
    id: "floor",
    title: {
      en: "On the floor",
      fr: "Sur le floor",
    },
    src: "/gallery/dance-01.mp4",
    poster: "/gallery/dance-01.jpg",
    width: 720,
    height: 1280,
    instagram: "https://www.instagram.com/respectyourculture/",
  },
  {
    id: "crew",
    title: {
      en: "Crew in the clothes",
      fr: "Le crew dans les pièces",
    },
    src: "/gallery/dance-02.mp4",
    poster: "/gallery/dance-02.jpg",
    width: 720,
    height: 540,
    instagram: "https://www.instagram.com/respectyourculture_apparel/",
  },
  {
    id: "night",
    title: {
      en: "Night set",
      fr: "Set de nuit",
    },
    src: "/gallery/dance-03.mp4",
    poster: "/gallery/dance-03.jpg",
    width: 720,
    height: 1280,
    instagram: "https://www.instagram.com/scorpion_99_/",
  },
  {
    id: "street",
    title: {
      en: "Street cipher",
      fr: "Cipher de rue",
    },
    src: "/gallery/dance-04.mp4",
    poster: "/gallery/dance-04.jpg",
    width: 720,
    height: 1282,
    instagram: "https://www.instagram.com/respectyourculture/",
  },
];

export function isLandscapeClip(clip: GalleryClip) {
  return clip.width >= clip.height;
}
