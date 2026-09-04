import Link from "next/link";
import { getLocale } from "@/lib/locale";
import { messages } from "@/lib/messages";

export default async function NotFound() {
  const locale = await getLocale();
  const t = messages[locale];

  return (
    <div className="page-pad mx-auto max-w-xl px-4 pb-20 text-center">
      <h1 className="font-display text-4xl">{t.notFound.title}</h1>
      <p className="mt-4 text-muted">{t.notFound.body}</p>
      <Link href="/" className="btn-gold mt-8 inline-flex">
        {t.notFound.home}
      </Link>
    </div>
  );
}
