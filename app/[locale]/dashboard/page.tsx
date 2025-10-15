import Link from "next/link";
import { getMessages, Locale } from "@/lib/locale";

export default function Dashboard({ params }: { params: { locale: Locale } }) {
  const t = getMessages(params.locale ?? "en");

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 space-y-6">
      <h1 className="text-2xl font-semibold">{t.dashboard.welcome}</h1>
      <p className="text-gray-700">{t.dashboard.blurb}</p>
      <div className="grid md:grid-cols-2 gap-6">
        <Card title={t.dashboard.citizenCard.t} desc={t.dashboard.citizenCard.d}>
          <Link href={`/${params.locale}/tools/citizen-app`} className="text-sky">{t.dashboard.citizenCard.cta}</Link>
        </Card>
        <Card title={t.dashboard.receiptsCard.t} desc={t.dashboard.receiptsCard.d}>
          <Link href={`/${params.locale}/receipts`} className="text-sky">{t.dashboard.receiptsCard.cta}</Link>
        </Card>
      </div>
    </div>
  );
}

function Card({ title, desc, children }: any) {
  return (
    <div className="border rounded p-5">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-700 mt-2">{desc}</p>
      <div className="mt-3">{children}</div>
    </div>
  );
}
