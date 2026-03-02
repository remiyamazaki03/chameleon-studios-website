import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import styles from "./page.module.css";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Meta.Events");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function Events() {
  const t = await getTranslations("Events");
  return (
    <div>
      <h1 className="title">{t("top")}</h1>
      <div className="container1">
        <h2 className="subhead2">{t("title")}</h2>
        <p className="bio" style={{ whiteSpace: "pre-line" }}>
          {t("p1")}
        </p>
        <p className="bio">{t("p2")}</p>

        <div className={styles.video}>
          <div className="ratio ratio-16x9">
            <iframe
              title="Chameleon Studios Recital Highlights video"
              src="https://www.youtube.com/embed/NttEhG1qiQs"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}
