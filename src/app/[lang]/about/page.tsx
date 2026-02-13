import Image from "next/image";
import styles from "./page.module.css";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");
  return (
    <div>
      <h1 className="title">{t("top")}</h1>

      <div className="container1 m-0 row text-center align-items-center">
        <div className="col-lg-4">
          <Image
            className={`img-fluid d-block mx-auto ${styles.aboutImg}`}
            src="/Remi2.jpg"
            alt="Remi2"
            width={350}
            height={350}
          />
        </div>
        <div className="col-md-8 p-5">
          <h2 className="subhead">{t("Remi")}</h2>
          <div className="mt-4">
            <p className="bio">{t("bio.tldr")}</p>
            <h3 className="subtitle">Performer</h3>

            <p className="bio">
              {t.rich("bio.performer", {
                btc: (chunks) => (
                  <a
                    href="https://www.brooklyntabernacle.org/music/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brand"
                  >
                    {chunks}
                  </a>
                ),
                mcdowell: (chunks) => (
                  <a
                    href="https://www.williammcdowellmusic.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brand"
                  >
                    {chunks}
                  </a>
                ),

                grant: (chunks) => (
                  <a
                    href="https://nataliegrant.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brand"
                  >
                    {chunks}
                  </a>
                ),
                below: (chunks) => (
                  <a
                    href="https://54below.org/about/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brand"
                  >
                    {chunks}
                  </a>
                ),
              })}
            </p>
            <h3 className="subtitle">Teacher</h3>
            <p className="bio">{t("bio.teacher")}</p>
            <h3 className="subtitle">Now in Tokyo</h3>
            <p className="bio">
              {t.rich("bio.tokyo", {
                tuc: (chunks) => (
                  <a
                    href="https://www.tokyounion.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brand"
                  >
                    {chunks}
                  </a>
                ),
                ssp: (chunks) => (
                  <a
                    href="http://ssp-create.com/b_woman/remi.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brand"
                  >
                    {chunks}
                  </a>
                ),
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
