import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import styles from "./page.module.css";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Meta.Home");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function Home() {
  const t = await getTranslations("Home");
  return (
    <main>
      <div className={styles.hero}>
        <Image
          className={styles.logo}
          src="/logo.png"
          alt="Chameleon Studios logo スタジオカメレオン ロゴ"
          fill={true}
          sizes="50vw"
          style={{
            objectFit: "contain",
          }}
          priority
        />
      </div>
      <div className="row">
        <div className={`col-md-4 p-0 ${styles.workImg}`}>
          <Image
            className="img-fluid"
            src="/Remi-singer.jpg"
            alt="Remi singer"
            fill={true}
            sizes="33vw"
            style={{
              objectFit: "cover",
            }}
          />
          <div className={`${styles.overlay} ${styles.secondaryOverlay}`}>
            <h2>{t("Home.title1")}</h2>
            <h3 className="p-5 text-center fs-4 subheader">
              {t("Home.details1")}
            </h3>
            <Link
              href="/about"
              className={`${styles.launchButton} ${styles.secondaryButton}`}
            >
              {t("Home.button1")}
            </Link>
          </div>
        </div>
        <div className={`col-md-4 p-0 ${styles.workImg}`}>
          <Image
            className="img-fluid"
            src="/microphone.jpg"
            alt="microphone"
            fill={true}
            sizes="33vw"
            style={{
              objectFit: "cover",
            }}
          />
          <div className={`${styles.overlay} ${styles.primaryOverlay}`}>
            <h2 className="overlayTitle">{t("Home.title2")}</h2>
            <h3 className="p-5 text-center fs-4 subheader">
              {t("Home.details2")}
            </h3>
            <Link
              href="/voicecoach"
              className={`${styles.launchButton} ${styles.primaryButton}`}
            >
              {t("Home.button2")}
            </Link>
          </div>
        </div>
        <div className={`col-md-4 p-0 ${styles.workImg}`}>
          <Image
            className="img-fluid"
            src="/Remi-developer.jpg"
            alt="Remi web developer"
            fill={true}
            sizes="33vw"
            style={{
              objectFit: "cover",
            }}
          />
          <div className={`${styles.overlay} ${styles.secondaryOverlay}`}>
            <h2 className="overlayTitle">{t("Home.title3")}</h2>
            <h3 className="p-5 text-center fs-4 subheader">
              {t("Home.details3")}
            </h3>

            <Link
              href="/webdeveloper"
              className={`${styles.launchButton} ${styles.secondaryButton}`}
            >
              {t("Home.button3")}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
