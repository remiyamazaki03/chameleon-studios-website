import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

config.autoAddCss = false;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lang = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={lang}>
      <NextIntlClientProvider messages={messages}>
        <body>
          <Navbar lang={lang} />
          {children}
          <Footer lang={lang} />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
