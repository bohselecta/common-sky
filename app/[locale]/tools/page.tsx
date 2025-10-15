import Link from "next/link";
import { getMessages, Locale, isRTL } from "@/lib/locale";

export default function ToolsPage({ params }: { params: { locale: Locale } }) {
  const t = getMessages(params.locale ?? "en");
  const rtl = isRTL(params.locale ?? "en");

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className={`text-3xl font-semibold ${rtl ? 'text-right' : 'text-left'}`}>{t.tools.pageTitle}</h1>
      <p className={`text-gray-700 mt-2 ${rtl ? 'text-right' : 'text-left'}`}>
        {params.locale === 'ar' ? 'قم بتثبيت تطبيق المواطن للمشاركة بأمان والتحقق من حقوقك.' : 
         params.locale === 'he' ? 'התקן את אפליקציית האזרח להשתתף בבטחה ולאמת את הזכויות שלך.' :
         'Install the Citizen App to participate safely and verify your rights.'}
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <ToolCard
          title={t.landing.citizenAppTitle}
          desc={t.landing.citizenAppDesc}
          href={`/${params.locale}/tools/citizen-app`}
          cta={rtl ? "← افتح صفحة التحميل" : "Open download page →"}
          rtl={rtl}
        />
        <ToolCard
          title={t.landing.observerTitle}
          desc={t.landing.observerDesc}
          disabled
          rtl={rtl}
        />
        <ToolCard
          title={t.landing.clerkBuilderTitle}
          desc={t.landing.clerkBuilderDesc}
          disabled
          rtl={rtl}
        />
        <ToolCard
          title={rtl ? "وحدة تحكم البناء" : "Builder Console"}
          desc={rtl ? "مقترحات مخطط، مجموعات اختبار، بناءات قابلة للتكرار، كوورم إصدار ثلاثي المفاتيح." : "Schema proposals, test suites, reproducible builds, three-key release quorum."}
          disabled
          rtl={rtl}
        />
      </div>
    </div>
  );
}

function ToolCard({ title, desc, href, cta, disabled, rtl }: {
  title: string; desc: string; href?: string; cta?: string; disabled?: boolean; rtl?: boolean;
}) {
  return (
    <div className="border rounded p-5">
      <h3 className={`font-semibold ${rtl ? 'text-right' : 'text-left'}`}>{title}</h3>
      <p className={`text-sm text-gray-700 mt-2 ${rtl ? 'text-right' : 'text-left'}`}>{desc}</p>
      {disabled ? (
        <span className={`text-gray-400 text-sm inline-block mt-3 ${rtl ? 'text-right' : 'text-left'}`}>
          {rtl ? 'قريباً' : 'Coming soon'}
        </span>
      ) : (
        <Link href={href!} className={`text-sky hover:text-sky-600 transition-colors inline-block mt-3 ${rtl ? 'text-right' : 'text-left'}`}>
          {cta || (rtl ? "← افتح" : "Open →")}
        </Link>
      )}
    </div>
  );
}
