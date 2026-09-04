import type { Metadata } from "next";
import { VideoDialog } from "@/components/video-dialog";
import { galleryClips } from "@/lib/gallery";
import { getLocale } from "@/lib/locale";
import { messages } from "@/lib/messages";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = messages[locale];
  return { title: t.gallery.title, description: t.gallery.lead };
}

export default async function GalleryPage() {
  const locale = await getLocale();
  const t = messages[locale];

  return (
    <div className="page-pad pb-16">
      {galleryClips.map((clip) => (
        <link key={clip.id} rel="preload" as="video" href={clip.src} />
      ))}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="reveal text-sm text-gold">{t.gallery.hover}</p>
        <h1 className="reveal reveal-delay-1 font-display mt-3 text-5xl leading-[0.92] sm:text-6xl">
          {t.gallery.title}
        </h1>
        <p className="reveal reveal-delay-2 mt-4 max-w-2xl text-lg text-muted">{t.gallery.lead}</p>
      </div>
      <div className="mt-12 px-4 sm:px-6">
        <VideoDialog clips={galleryClips} locale={locale} copy={t.gallery} />
      </div>
    </div>
  );
}
