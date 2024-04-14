import { useRouter } from "next/router";
import { DEFAULT_LOCALE, LOCALES } from "next.config";
import locales from "@/locales";

export function useLocale() {
  const router = useRouter();
  const locale = router.locale || DEFAULT_LOCALE;

  const t = (key: string, placeholders: Record<string, string | number> = {}) => {
    try {
      let lang: Record<string, string> = (locales as any)[locale];
      let text: string = lang[key];
      Object.entries(placeholders).forEach(([key, value]) => {
        text = text.replace(key, typeof value === "string" ? value : value.toString());
      });
      return text;
    } catch (error) {
      console.error(error);
      return key;
    }
  };

  const changeLocale = (locale: string) => {
    router.push(router.pathname, router.pathname, { locale: locale });
  };

  return {
    locale: locale,
    locales: LOCALES,
    t: t,
    changeLocale: changeLocale,
  };
}
