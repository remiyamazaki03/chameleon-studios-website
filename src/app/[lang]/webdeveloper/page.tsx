import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import styles from "./page.module.css";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Meta.Web");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function Webdeveloper() {
  const t = await getTranslations("Web");
  return (
    <div>
      <h1 className="title">{t("top")}</h1>
      <div className="container1">
        <h2 className="subhead2">{t("title")}</h2>
        <p className="bio" style={{ whiteSpace: "pre-line" }}>
          {t("p1")}
        </p>
        <p className="pb-5 text-center fs-5 fw-bold">{t("examples")}</p>
        <div className={`row ${styles.demoRow} pb-5`}>
          <div className="col-lg-6 d-flex flex-column text-center">
            <div className={styles.demo}>
              <a href="https://bwave-entertainment.com" className="link">
                <h2 className="brand">Bwave Entertainment</h2>
                <Image
                  className={`img-fluid mt-4 mb-4 mx-auto ${styles.demoThumbnail} d-none d-md-block`}
                  src="/bwave-demo.png"
                  alt="bwave ホームページ デモ"
                  width={500}
                  height={150}
                />

                <Image
                  className={`img-fluid mt-4 mb-4 mx-auto ${styles.demoThumbnail} d-md-none`}
                  src="/bwavemobile.jpg"
                  alt="bwave ホームページ デモ"
                  width={300}
                  height={450}
                />
              </a>
              <p className={styles.caption}>{t("bwave")}</p>
            </div>
          </div>
          <div className="col-lg-6 d-flex flex-column text-center">
            <div className={styles.demo}>
              <a href="https://d-tokyo-wadaiko.com" className="link">
                <h2 className="brand">:D-Tokyo</h2>
                <Image
                  className={`img-fluid mt-4 mb-4 mx-auto ${styles.demoThumbnail} d-none d-md-block`}
                  src="/dtokyo-demo.png"
                  alt="dtokyo ホームページ デモ"
                  width={500}
                  height={150}
                />
                <Image
                  className={`img-fluid mt-4 mb-4 mx-auto ${styles.demoThumbnail} d-md-none`}
                  src="/dtokyomobile.jpg"
                  alt="dtokyo ホームページ デモ"
                  width={300}
                  height={450}
                />
              </a>
              <p className={styles.caption}>{t("dtokyo")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
