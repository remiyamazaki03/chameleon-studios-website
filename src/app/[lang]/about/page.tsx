import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations();
  return (
    <div>
      <h2 className="title mt-2 mb-0 d-flex align-items-center">
        {t("About.top")}
      </h2>
      <div className="container2 row text-center align-items-center">
        <div className="col-md-8 p-5">
          <h2 className="mt-2 fs-3">{t("About.Chameleon")}</h2>
          <div className={`mt-4 ${styles.bio}`}>
            <p style={{ whiteSpace: "pre-line" }}>{t("About.studio.p1")}</p>
            <p>
              {t.rich("About.studio.p2", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
            <p>
              {t.rich("About.studio.p3", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
            <p>{t("About.studio.p4")}</p>
            <p style={{ whiteSpace: "pre-line" }}>
              {t.rich("About.studio.p5", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
            <p>
              {t.rich("About.studio.p6", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
            <p>
              {t.rich("About.studio.cta", {
                voicecoach: (chunks) => (
                  <a className="brand" href="/voicecoach">
                    {chunks}
                  </a>
                ),
              })}
            </p>
          </div>
        </div>
        <Image
          className="img-fluid col-md-4 h-md-100 d-block mx-auto pe-5"
          src="/logo-mid.png"
          alt="Chameleon Studios logo"
          width={450}
          height={450}
        />
      </div>
      <div className="container1 m-0 row text-center align-items-center">
        <Image
          className={`img-fluid col-md-4 d-block mx-auto ${styles.aboutImg}`}
          src="/Remi2.jpg"
          alt="Remi2"
          width={350}
          height={350}
        />
        <div className="col-md-8 p-5">
          <h2 className="mt-2 fs-3">{t("About.Remi")}</h2>
          <div className={`mt-4 ${styles.bio}`}>
            <p>
              {t.rich("About.teacher.p1", {
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
            <p>{t("About.teacher.p2")}</p>
            <p>
              {t.rich("About.teacher.p3", {
                cappon: (chunks) => (
                  <a
                    href="https://music.princeton.edu/people/ronald-cappon/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brand"
                  >
                    {chunks}
                  </a>
                ),
                chapel: (chunks) => (
                  <a
                    href="https://chapel.princeton.edu/chapel-choir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brand"
                  >
                    {chunks}
                  </a>
                ),
              })}
            </p>
            <p>
              {t.rich("About.teacher.p4", {
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
            <small>{t("About.teacher.cta")}</small>
          </div>
        </div>
      </div>
    </div>
  );
}
