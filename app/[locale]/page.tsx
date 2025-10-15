import Image from "next/image";
import Link from "next/link";
import { getMessages, Locale, isRTL } from "@/lib/locale";

export default function Landing({ params }: { params: { locale: Locale } }) {
  const t = getMessages(params.locale ?? "en");
  const rtl = isRTL(params.locale ?? "en");

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 flag-stripe opacity-20" aria-hidden />
        <div className={`mx-auto max-w-7xl px-4 py-14 grid gap-10 md:grid-cols-2 items-center ${rtl ? 'md:grid-flow-col-dense' : ''}`}>
          <div className={`${rtl ? 'md:col-start-2' : ''}`}>
            <h1 className={`text-4xl md:text-5xl font-semibold leading-tight ${rtl ? 'text-right' : 'text-left'}`}>
              {t.landing.h1}
            </h1>
            <p className={`mt-4 text-lg text-gray-700 ${rtl ? 'text-right' : 'text-left'}`}>
              {t.landing.blurb}
            </p>
            <div className={`mt-6 flex gap-3 ${rtl ? 'flex-row-reverse' : ''}`}>
              <Link href={`/${params.locale}/register`} className="bg-sky text-white px-5 py-3 rounded hover:bg-sky-600 transition-colors">
                {t.landing.ctas.enter}
              </Link>
              <Link href={`/${params.locale}/tools`} className="px-5 py-3 rounded border hover:bg-gray-50 transition-colors">
                {t.landing.ctas.tools}
              </Link>
            </div>
          </div>
          <div className={`relative aspect-[16/10] w-full ${rtl ? 'md:col-start-1' : ''}`}>
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
      <section className={`mx-auto max-w-7xl px-4 py-12 grid gap-8 md:grid-cols-2 items-center ${rtl ? 'md:grid-flow-col-dense' : ''}`}>
        <div className={`relative aspect-[4/3] w-full ${rtl ? 'md:col-start-2' : ''}`}>
          <Image
            src="/landing-graphic.jpg"
            alt="Modern commercial street with small businesses and solar canopies"
            fill
            className="object-cover rounded-lg border"
          />
        </div>
        <div className={`${rtl ? 'md:col-start-1' : ''}`}>
          <h2 className={`text-2xl font-semibold ${rtl ? 'text-right' : 'text-left'}`}>{t.landing.section2Title}</h2>
          <ul className={`mt-4 space-y-3 text-gray-700 ${rtl ? 'text-right' : 'text-left'}`}>
            {t.landing.bullets.map((bullet, i) => (
              <li key={i} className={rtl ? 'text-right' : 'text-left'}>
                {rtl ? '•' : '•'} {bullet}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TOOLS PREVIEW */}
      <section id="tools" className="bg-gray-50 border-t">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <h3 className={`text-xl font-semibold ${rtl ? 'text-right' : 'text-left'}`}>{t.landing.toolsTitle}</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="border rounded p-5">
              <h4 className={`font-semibold ${rtl ? 'text-right' : 'text-left'}`}>{t.landing.citizenAppTitle}</h4>
              <p className={`text-sm text-gray-700 mt-2 ${rtl ? 'text-right' : 'text-left'}`}>
                {t.landing.citizenAppDesc}
              </p>
              <div className={`mt-3 flex gap-4 ${rtl ? 'flex-row-reverse' : ''}`}>
                <a href="/citizen-app.apk" className="text-sky hover:text-sky-600 transition-colors">
                  {rtl ? '←' : ''} {t.common.download} APK {rtl ? '' : '→'}
                </a>
                <a href={`/${params.locale}/tools/citizen-app`} className="text-sky hover:text-sky-600 transition-colors">
                  {rtl ? '←' : ''} {t.common.learnMore} {rtl ? '' : '→'}
                </a>
              </div>
            </div>
            <div className="border rounded p-5">
              <h4 className={`font-semibold ${rtl ? 'text-right' : 'text-left'}`}>{t.landing.observerTitle}</h4>
              <p className={`text-sm text-gray-700 mt-2 ${rtl ? 'text-right' : 'text-left'}`}>
                {t.landing.observerDesc}
              </p>
              <span className={`text-gray-400 ${rtl ? 'text-right' : 'text-left'}`}>{t.common.comingSoon}</span>
            </div>
            <div className="border rounded p-5">
              <h4 className={`font-semibold ${rtl ? 'text-right' : 'text-left'}`}>{t.landing.clerkBuilderTitle}</h4>
              <p className={`text-sm text-gray-700 mt-2 ${rtl ? 'text-right' : 'text-left'}`}>
                {t.landing.clerkBuilderDesc}
              </p>
              <span className={`text-gray-400 ${rtl ? 'text-right' : 'text-left'}`}>{t.common.comingSoon}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
