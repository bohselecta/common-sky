import Image from "next/image";
import { getMessages, Locale } from "@/lib/locale";

export default function CitizenAppPage({ params }: { params: { locale: Locale } }) {
  const t = getMessages(params.locale ?? "en");

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 space-y-8">
      <header>
        <h1 className="text-3xl font-semibold">{t.tools.citizen.title}</h1>
        <p className="text-gray-700 mt-2">
          {t.tools.citizen.hero}
        </p>
      </header>

      <div className="grid md:grid-cols-5 gap-6 items-start">
        <div className="md:col-span-3 relative aspect-[16/9] w-full rounded border overflow-hidden">
          <Image src="/landing-graphic.jpg" alt="Citizen app context" fill className="object-cover" />
        </div>
        <aside className="md:col-span-2 border rounded p-5">
          <h3 className="font-semibold">{t.common.download}</h3>
          <ul className="text-sm mt-2 space-y-2">
            <li><a className="text-sky" href="/citizen-app.apk" download>{t.tools.citizen.download}</a></li>
            <li><a className="text-sky" href="/api/tools/citizen-app/manifest" target="_blank">{t.tools.citizen.manifest}</a></li>
          </ul>
          <div className="text-xs text-gray-600 mt-4 space-y-2">
            <p><strong>{t.tools.citizen.verifyAndroid}:</strong></p>
            <code className="block bg-gray-50 border rounded px-2 py-1">sha256sum ~/Download/citizen-app.apk</code>
            <p className="mt-2"><strong>{t.tools.citizen.verifyMacLinux}:</strong></p>
            <code className="block bg-gray-50 border rounded px-2 py-1">shasum -a 256 citizen-app.apk</code>
          </div>
        </aside>
      </div>

      <section className="grid md:grid-cols-3 gap-6">
        <Feature
          title={t.tools.citizen.feature1.t}
          text={t.tools.citizen.feature1.d}
        />
        <Feature
          title={t.tools.citizen.feature2.t}
          text={t.tools.citizen.feature2.d}
        />
        <Feature
          title={t.tools.citizen.feature3.t}
          text={t.tools.citizen.feature3.d}
        />
      </section>

      <section className="border rounded p-5">
        <h3 className="font-semibold">{t.tools.citizen.privacyTitle}</h3>
        <ul className="text-sm text-gray-700 mt-2 space-y-1">
          {t.tools.citizen.privacyPoints.map((point, i) => (
            <li key={i}>• {point}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div className="border rounded p-5">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-gray-700 mt-2">{text}</p>
    </div>
  );
}
