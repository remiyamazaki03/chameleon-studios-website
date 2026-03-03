import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../globals.css";
import BootstrapClient from "../components/BootstrapClient";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

config.autoAddCss = false;

export const metadata: Metadata = {
  metadataBase: new URL("https://chameleon-studios.com"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      ja: "/ja",
    },
  },
  title: {
    default: "Chameleon Studios",
    template: "%s | Chameleon Studios",
  },
  openGraph: { images: ["/opengraph-image.jpg"] },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lang = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={lang} data-scroll-behavior="smooth">
      <NextIntlClientProvider messages={messages}>
        <body>
          <BootstrapClient />
          <Navbar lang={lang} />
          {children}
          <Footer lang={lang} />
        </body>
      </NextIntlClientProvider>
      <GoogleAnalytics gaId="G-BRFJXTY6WF" />
    </html>
  );
}
