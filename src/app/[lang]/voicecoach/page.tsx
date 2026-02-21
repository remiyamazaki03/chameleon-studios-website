import Image from "next/image";
import styles from "./page.module.css";
import KidsCarousel from "@/app/components/KidsCarousel";
import WorshipCarousel from "@/app/components/WorshipCarousel";
import TestimonialsCarousel from "@/app/components/TestimonialsCarousel";
import { useTranslations } from "next-intl";

export default function Voicecoach() {
  const t = useTranslations("Voice");
  return (
    <div>
      <h1 className="title">{t("top")}</h1>

      <div className="container1 px-4 row align-items-center">
        <div className="col-lg-8 px-5 py-lg-5 order-2 order-lg-1">
          <h2 className="subhead">{t("Chameleon")}</h2>
          <div>
            <p className="bio mt-4" style={{ whiteSpace: "pre-line" }}>
              {t("intro.p1")}
            </p>
            <h3 className="subtitle">Philosophy</h3>
            <p className="bio">{t("intro.philosophy")}</p>
            <h3 className="subtitle">Style</h3>
            <p className="bio">{t.rich("intro.style")}</p>
          </div>
        </div>
        <Image
          className={`img-fluid col-lg-4 h-md-100 d-block mx-auto pe-md-5 pb-2 order-1 order-lg-2 ${styles.voicecoachImg}`}
          src="/logo.png"
          alt="logo"
          width={250}
          height={250}
        />
      </div>

      <div className="row px-5 container2 d-flex align-items-center flex-wrap">
        <div className="col-lg-6 order-2 order-lg-1">
          <KidsCarousel />
        </div>
        <div
          className="col-lg-6 order-1 pt-5
     order-lg-2 pt-lg-0"
        >
          <div>
            <h2 className="subhead">🎤 {t("flow.lesson")}</h2>
            <ol className="bio pb-5">
              <li>{t("flow.p1")}</li>
              <li>{t("flow.p2")}</li>
              <li>{t("flow.p3")}</li>
            </ol>
            <h2 className="subhead">🥳 {t("kids.kids")}</h2>
            <p className="bio">{t("kids.include")}</p>
            <ul className="bio">
              <li>{t("kids.p1")}</li>
              <li>{t("kids.p2")}</li>
              <li>{t("kids.p3")}</li>
              <li>{t("kids.p4")}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="px-5 container1">
        <h2 className="subhead pt-5 pt-md-3">{t("reviews")} 🎤</h2>
        <p className="bio pt-2 pb-1">{t("adults")}</p>
        <div>
          <TestimonialsCarousel />
        </div>
      </div>

      <div className="row px-5 container2 d-flex align-items-center flex-wrap">
        <div className="col-lg-6 pt-5 pt-lg-0">
          <h2 className="subhead">{t("worship.worship")} ⛪️</h2>
          <p className="bio" style={{ whiteSpace: "pre-line" }}>
            {t("worship.special")}
          </p>
          <ul className="bio">
            <li>{t("worship.p1")}</li>
            <li>{t("worship.p2")}</li>
            <li>{t("worship.p3")}</li>
          </ul>
        </div>
        <div className="col-lg-6">
          <WorshipCarousel />
        </div>
      </div>

      <div className="container1 px-4 row align-items-center">
        <Image
          className={`img-fluid col-lg-5 h-md-100 d-block mx-auto pe-md-5 pb-2  ${styles.pricingImg}`}
          src="/rainbow.png"
          alt="chameleon"
          width={250}
          height={250}
        />
        <div className="col-lg-7 px-5 py-lg-5 ">
          <div className={`pt-4 pt-lg-0 ${styles.pricing}`}>
            <h2 className="subhead">{t("pricing")} Under construction</h2>

            <ul className={styles.priceList}>
              <li>
                <strong>Trial Lesson</strong>
                <div className={styles.priceGroup}>
                  <span>in person ¥3,000 / 30 min</span>
                  <span>online ¥2,000 / 30 min</span>
                </div>
              </li>

              <li>
                <strong>Online Lessons</strong>
                <div className={styles.priceGroup}>
                  <span>
                    ¥3,000 / 45 min
                    <small>USD $30</small>
                  </span>

                  <span>
                    ¥2,000 / 60 min
                    <small>USD $20</small>
                  </span>
                  <p className={styles.priceNote}>
                    * USD prices are adjusted using purchasing power parity for
                    fairness across regions.
                  </p>
                </div>
              </li>

              <li>
                <strong className="d-flex flex-column">
                  In Person Lessons
                  <span className={styles.locations}>
                    (Tokyo: Ikebukuro / Akabane / Shibuya-Omotesando)
                  </span>
                </strong>
                <div className={styles.priceGroup}>
                  <span>¥3,000 / 45 min</span>
                  <span>¥2,000 / 60 min</span>
                </div>
              </li>
            </ul>

            <p className={styles.cta}>
              Please contact me for availability and packages. discount pkgs
              available etc Please contact me via the form or email below if you
              would like to book a trial or have any questions. I look forward
              to hearing from you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
