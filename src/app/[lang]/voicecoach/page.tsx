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
          className={`img-fluid col-lg-4 h-md-100 d-block mx-auto pe-md-5 pb-2 order-1 order-lg-2 ${styles.voicecoachLogo}`}
          src="/logo.png"
          alt="logo"
          width={400}
          height={400}
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
            <li>{t("worship.p4")}</li>
          </ul>
        </div>
        <div className="col-lg-6">
          <WorshipCarousel />
        </div>
      </div>

      <div className={`row container1 d-flex align-items-center`}>
        <div className="col-xl-9">
          <div>
            <h2 className="text-center pt-5 text-decoration-underline">
              pricing
            </h2>
            <ul className="ps-0 py-3 px-md-5 mx-5 prices">
              <li className="mainList">
                price 1
                <ul className="subList">
                  <li>menu 1</li>
                  <li>menu 2</li>
                </ul>
                <br />
              </li>
              <li className="mainList">price2</li>
              <ul className="subList">
                <li>menu 3</li>
                <li>
                  <small>
                    menu 4a
                    <a
                      href="https://wise.com/gb/currency-converter/jpy-to-usd-rate?amount=4500"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#6347ff",
                      }}
                    >
                      {" "}
                      menu4link
                    </a>
                    menu4b
                  </small>
                </li>
              </ul>{" "}
              <br />
              <li className="mainList">
                price3
                <ul className="subList">
                  <li>menu5</li>
                  <li>menu6</li>
                </ul>{" "}
                <br />
              </li>
              <li className="mainList">
                price4
                <ul className="subList">
                  <li>menu7</li>
                </ul>
              </li>
            </ul>
            <p className="text-start text-xl-center ms-md-5 ps-5 pe-2 me-5 px-md-5 pb-3 fw-bold">
              cta1
              <br className="d-lg-none" />
              cta2
            </p>
          </div>
        </div>
        <div className="col-md-3 d-none d-xl-block"></div>
      </div>
    </div>
  );
}
