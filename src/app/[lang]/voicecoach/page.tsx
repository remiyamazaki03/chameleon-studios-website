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
      <h1 className="title d-flex align-items-center m-0">{t("Voice.top")}</h1>

      <div className="container1 row align-items-center">
        <div className="col-lg-8 px-5 py-lg-5 order-2 order-lg-1">
          <h2 className="subhead">{t("Voice.Chameleon")}</h2>
          <div>
            <p className="bio mt-4" style={{ whiteSpace: "pre-line" }}>
              {t("Voice.studio.p1")}
            </p>
            <h3 className="subtitle">Philosophy</h3>
            <p className="bio">{t("Voice.studio.p2")}</p>
            <h3 className="subtitle">Style</h3>
            <p className="bio">{t.rich("Voice.studio.p3")}</p>
            <h3 className="subtitle"> Lesson flow</h3>
            <ol className="bio">
              <li>Targeted warm-ups tailored to each student</li>
              <li>Focused vocal exercises to build new skills</li>
              <li>Song work to apply technique to real music</li>
            </ol>
          </div>
        </div>
        <Image
          className={`img-fluid col-lg-4 h-md-100 d-block mx-auto pe-md-5 order-1 order-lg-2 ${styles.voicecoachLogo}`}
          src="/logo.png"
          alt="logo"
          width={400}
          height={400}
        />
      </div>

      <div className="row px-md-5 container2 d-flex align-items-center flex-wrap">
        <div className="col-md-4 order-2 order-lg-1">
          <KidsCarousel />
        </div>
        <div className="col-md-8 order-1 order-lg-2">
          <div>
            <h2 className="text-center px-4 px-md-0 pt-5">
              {t("Voice.kids.kids")}
            </h2>
            <p
              className="text-md-center px-5 px-md-2 pt-4 pb-2"
              style={{ whiteSpace: "pre-line" }}
            >
              {t("Voice.kids.p1")}
            </p>{" "}
          </div>
        </div>
      </div>
      <div className="row px-md-5 container1 d-flex align-items-center flex-wrap">
        <div className="col-md-4">
          <h2 className="text-center px-4 px-md-0 pt-5">
            {t("Voice.worship.worship")}
          </h2>
          <p
            className="text-center px-5 px-md-2 pt-4 pb-5"
            style={{ whiteSpace: "pre-line" }}
          >
            {t("Voice.worship.p1")}
          </p>
        </div>
        <div className="col-md-8">
          <WorshipCarousel />
        </div>
      </div>

      <div className="row px-md-5 container2 d-flex align-items-center flex-wrap">
        <div>
          <h3 className="text-center my-5">{t("Voice.reviews")}</h3>
          <div>
            <TestimonialsCarousel />
          </div>
        </div>
      </div>

      <div className={`row ${styles.pricing} d-flex align-items-center`}>
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
