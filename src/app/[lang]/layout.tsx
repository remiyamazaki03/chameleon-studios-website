import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export function generateMetadata({ params }: { params: { lang: string } }) {
  const { lang } = params;

  const translations = {
    en: {
      title: "My English Title",
      description: "This is an English description.",
    },
    ja: {
      title: "日本語のタイトル",
      description: "これは日本語の説明です。",
    },
  };

  return translations[lang] ?? translations.en;
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const { lang } = params;

  return (
    <html lang={lang}>
      <body>
        <Navbar lang={lang} />
        {children}
        <Footer lang={lang} />
      </body>
    </html>
  );
}
