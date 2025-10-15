import Image from "next/image";
import Link from "next/link";
import { getMessages, Locale } from "@/lib/locale";

export default function Landing({ params }: { params: { locale: Locale } }) {
  const t = getMessages(params.locale ?? "en");

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 flag-stripe opacity-20" aria-hidden />
        <div className="mx-auto max-w-7xl px-4 py-14 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              {t.landing.h1}
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              {t.landing.blurb}
            </p>
            <div className="mt-6 flex gap-3">
              <Link href={`/${params.locale}/register`} className="bg-sky text-white px-5 py-3 rounded">
                {t.landing.ctas.enter}
              </Link>
              <a href={`#tools`} className="px-5 py-3 rounded border">
                {t.landing.ctas.tools}
              </a>
            </div>
          </div>
          <div className="relative aspect-[16/10] w-full">
            <Image
              src="/hero-graphic.jpg"
              alt="Rebuilt street with families, markets, and modern infrastructure"
              fill
              className="object-cover rounded-lg border"
              priority
            />
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS / DATA + IMAGE */}
      <section className="mx-auto max-w-7xl px-4 py-12 grid gap-8 md:grid-cols-2 items-center">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src="/landing-graphic.jpg"
            alt="Modern commercial street with small businesses and solar canopies"
            fill
            className="object-cover rounded-lg border"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">{t.landing.section2Title}</h2>
          <ul className="mt-4 space-y-3 text-gray-700">
            {t.landing.bullets.map((bullet, i) => (
              <li key={i}>• {bullet}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* TOOLS PREVIEW */}
      <section id="tools" className="bg-gray-50 border-t">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <h3 className="text-xl font-semibold">{t.landing.toolsTitle}</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="border rounded p-5">
              <h4 className="font-semibold">{t.landing.citizenAppTitle}</h4>
              <p className="text-sm text-gray-700 mt-2">
                {t.landing.citizenAppDesc}
              </p>
              <div className="mt-3 flex gap-4">
                <a href="/citizen-app.apk" className="text-sky">{t.common.download} APK →</a>
                <a href={`/${params.locale}/tools/citizen-app`} className="text-sky">{t.common.learnMore} →</a>
              </div>
            </div>
            <div className="border rounded p-5">
              <h4 className="font-semibold">{t.landing.observerTitle}</h4>
              <p className="text-sm text-gray-700 mt-2">
                {t.landing.observerDesc}
              </p>
              <span className="text-gray-400">{t.common.comingSoon}</span>
            </div>
            <div className="border rounded p-5">
              <h4 className="font-semibold">{t.landing.clerkBuilderTitle}</h4>
              <p className="text-sm text-gray-700 mt-2">
                {t.landing.clerkBuilderDesc}
              </p>
              <span className="text-gray-400">{t.common.comingSoon}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
