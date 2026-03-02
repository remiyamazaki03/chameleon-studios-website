import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) || "en";
  const messages = {
    Navbar: (await import(`../../messages/${locale}/navbar.json`)).default,
    Meta: (await import(`../../messages/${locale}/meta.json`)).default,
    Home: (await import(`../../messages/${locale}/home.json`)).default,
    About: (await import(`../../messages/${locale}/about.json`)).default,
    Voice: (await import(`../../messages/${locale}/voice.json`)).default,
    Kidsc: (await import(`../../messages/${locale}/kidsc.json`)).default,
    Worshipc: (await import(`../../messages/${locale}/worshipc.json`)).default,
    Carousel: (await import(`../../messages/${locale}/carousel.json`)).default,
    Events: (await import(`../../messages/${locale}/events.json`)).default,
    Web: (await import(`../../messages/${locale}/web.json`)).default,
    Footer: (await import(`../../messages/${locale}/footer.json`)).default,
  };
  return {
    locale,
    messages,
  };
});
