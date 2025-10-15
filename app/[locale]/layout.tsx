import "../../styles/globals.css";
import Image from "next/image";
import Link from "next/link";
import { getMessages, isRTL, Locale } from "@/lib/locale";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import DynamicTextGraphic from "../../components/DynamicTextGraphic";

export const dynamicParams = false;
export async function generateStaticParams() { 
  return [{ locale: "en" }, { locale: "ar" }, { locale: "he" }]; 
}

export const metadata = {
  title: "The Common Sky — Peace Portal",
  description: "Under one sky: rights, truth, and tools for a peaceful generation."
};

export default function RootLayout({
  params, children
}: { params: { locale: Locale }, children: React.ReactNode }) {
  const locale = params.locale ?? "en";
  const rtl = isRTL(locale);
  const t = getMessages(locale);

  return (
    <html lang={locale} dir={rtl ? "rtl" : "ltr"}>
      <body className={`min-h-screen bg-white text-gray-900 ${rtl ? "font-[system-ui]" : ""}`}>
        <header className="border-b">
          <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
            <Link href={`/${locale}`} aria-label={t.common.brand} className="flex items-center gap-3">
              <Image src="/main-logo.png" alt={t.common.brand} width={84} height={24} priority />
              <DynamicTextGraphic locale={locale} />
            </Link>
            <nav className="flex items-center gap-4 text-sm">
              <Link href={`/${locale}/register`} className="rounded bg-sky text-white px-3 py-1.5">{t.common.enterPortal}</Link>
              <Link href={`/${locale}/tools`} className="px-3 py-1.5">{t.common.tools}</Link>
              <LanguageSwitcher currentLocale={locale} />
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t">
          <div className="mx-auto max-w-7xl px-4 py-6 text-xs text-gray-600">
            © {new Date().getFullYear()} {t.common.brand} — {t.common.footer}
          </div>
        </footer>
      </body>
    </html>
  );
}
