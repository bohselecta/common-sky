import Link from "next/link";
import { getMessages, Locale } from "@/lib/locale";

export default function ToolsPage({ params }: { params: { locale: Locale } }) {
  const t = getMessages(params.locale ?? "en");

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold">{t.tools.pageTitle}</h1>
      <p className="text-gray-700 mt-2">Install the Citizen App to participate safely and verify your rights.</p>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <ToolCard
          title={t.landing.citizenAppTitle}
          desc={t.landing.citizenAppDesc}
          href={`/${params.locale}/tools/citizen-app`}
          cta="Open download page →"
        />
        <ToolCard
          title={t.landing.observerTitle}
          desc={t.landing.observerDesc}
          disabled
        />
        <ToolCard
          title={t.landing.clerkBuilderTitle}
          desc={t.landing.clerkBuilderDesc}
          disabled
        />
        <ToolCard
          title="Builder Console"
          desc="Schema proposals, test suites, reproducible builds, three-key release quorum."
          disabled
        />
      </div>
    </div>
  );
}

function ToolCard({ title, desc, href, cta, disabled }: {
  title: string; desc: string; href?: string; cta?: string; disabled?: boolean;
}) {
  return (
    <div className="border rounded p-5">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-700 mt-2">{desc}</p>
      {disabled ? (
        <span className="text-gray-400 text-sm inline-block mt-3">Coming soon</span>
      ) : (
        <Link href={href!} className="text-sky inline-block mt-3">{cta || "Open →"}</Link>
      )}
    </div>
  );
}
