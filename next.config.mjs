const LOCALES = ["vi"];
const DEFAULT_LOCALE = "vi";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  i18n: {
    locales: LOCALES,
    defaultLocale: DEFAULT_LOCALE,
    localeDetection: false,
  },
};

export default nextConfig;

export { LOCALES, DEFAULT_LOCALE };
