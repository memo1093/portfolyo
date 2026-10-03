import { renderToBuffer } from "@react-pdf/renderer";
import { getDictionary } from "@/dictionaries";
import { CvDocument } from "@/lib/cv/CvDocument";
import { hasLocale, locales } from "@/lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

/**
 * `/tr/cv.pdf` ve `/en/cv.pdf` — sitedeki içerikten build sırasında üretilir,
 * böylece CV ile site metinleri her zaman senkron kalır.
 */
export async function GET(_request: Request, { params }: RouteContext<"/[lang]/cv.pdf">) {
  const { lang } = await params;
  if (!hasLocale(lang)) return new Response("Not found", { status: 404 });

  const dict = await getDictionary(lang);
  const pdf = await renderToBuffer(<CvDocument dict={dict} />);

  return new Response(new Uint8Array(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${dict.cv.fileName}"`,
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
