import Image from "next/image";
import { getMessages, Locale, isRTL } from "@/lib/locale";

export default function CitizenAppPage({ params }: { params: { locale: Locale } }) {
  const t = getMessages(params.locale ?? "en");
  const rtl = isRTL(params.locale ?? "en");

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 space-y-8">
      <header>
        <h1 className={`text-3xl font-semibold ${rtl ? 'text-right' : 'text-left'}`}>{t.tools.citizen.title}</h1>
        <p className={`text-gray-700 mt-2 ${rtl ? 'text-right' : 'text-left'}`}>
          {t.tools.citizen.hero}
        </p>
      </header>

      <div className={`grid md:grid-cols-5 gap-6 items-start ${rtl ? 'md:grid-flow-col-dense' : ''}`}>
        <div className={`md:col-span-3 relative aspect-[16/9] w-full rounded border overflow-hidden ${rtl ? 'md:col-start-3' : ''}`}>
          <Image src="/landing-graphic.jpg" alt="Citizen app context" fill className="object-cover" />
        </div>
        <aside className={`md:col-span-2 border rounded p-5 ${rtl ? 'md:col-start-1' : ''}`}>
          <h3 className={`font-semibold ${rtl ? 'text-right' : 'text-left'}`}>{t.common.download}</h3>
          <ul className={`text-sm mt-2 space-y-2 ${rtl ? 'text-right' : 'text-left'}`}>
            <li><a className="text-sky hover:text-sky-600 transition-colors" href="/citizen-app.apk" download>{t.tools.citizen.download}</a></li>
            <li><a className="text-sky hover:text-sky-600 transition-colors" href="/api/tools/citizen-app/manifest" target="_blank">{t.tools.citizen.manifest}</a></li>
          </ul>
          <div className={`text-xs text-gray-600 mt-4 space-y-2 ${rtl ? 'text-right' : 'text-left'}`}>
            <p className={rtl ? 'text-right' : 'text-left'}><strong>{t.tools.citizen.verifyAndroid}:</strong></p>
            <code className="block bg-gray-50 border rounded px-2 py-1 text-left font-mono">{rtl ? 'sha256sum ~/Download/citizen-app.apk' : 'sha256sum ~/Download/citizen-app.apk'}</code>
            <p className={`mt-2 ${rtl ? 'text-right' : 'text-left'}`}><strong>{t.tools.citizen.verifyMacLinux}:</strong></p>
            <code className="block bg-gray-50 border rounded px-2 py-1 text-left font-mono">{rtl ? 'shasum -a 256 citizen-app.apk' : 'shasum -a 256 citizen-app.apk'}</code>
          </div>
        </aside>
      </div>

      <section className="grid md:grid-cols-3 gap-6">
        <Feature
          title={t.tools.citizen.feature1.t}
          text={t.tools.citizen.feature1.d}
          rtl={rtl}
        />
        <Feature
          title={t.tools.citizen.feature2.t}
          text={t.tools.citizen.feature2.d}
          rtl={rtl}
        />
        <Feature
          title={t.tools.citizen.feature3.t}
          text={t.tools.citizen.feature3.d}
          rtl={rtl}
        />
      </section>

      <section className="border rounded p-5">
        <h3 className={`font-semibold ${rtl ? 'text-right' : 'text-left'}`}>{t.tools.citizen.privacyTitle}</h3>
        <ul className={`text-sm text-gray-700 mt-2 space-y-1 ${rtl ? 'text-right' : 'text-left'}`}>
          {t.tools.citizen.privacyPoints.map((point, i) => (
            <li key={i} className={rtl ? 'text-right' : 'text-left'}>
              {rtl ? '•' : '•'} {point}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function Feature({ title, text, rtl }: { title: string; text: string; rtl: boolean }) {
  return (
    <div className="border rounded p-5">
      <h4 className={`font-semibold ${rtl ? 'text-right' : 'text-left'}`}>{title}</h4>
      <p className={`text-sm text-gray-700 mt-2 ${rtl ? 'text-right' : 'text-left'}`}>{text}</p>
    </div>
  );
}
