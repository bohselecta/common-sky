import en from "@/i18n/en";
import ar from "@/i18n/ar";
import he from "@/i18n/he";

export type Locale = "en" | "ar" | "he";

export function getMessages(locale: Locale) {
  switch (locale) {
    case "ar": return ar;
    case "he": return he;
    default: return en;
  }
}

export function isRTL(locale: Locale) { 
  return locale === "ar" || locale === "he"; 
}
