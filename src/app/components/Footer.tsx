import Link from "next/link";
import { useTranslations } from "next-intl";
import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faXTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer({ lang }: { lang: string }) {
  const t = useTranslations("Footer");
  return (
    <div>
      <div className={`row ${styles.contact}`}>
        <div className="col-md-6 d-none d-md-block">
          <h1 className="ps-5 mt-5 mb-2 mb-md-5 homepage">
            <div className="brand">
              <div>{t("Footer.cta1")}</div>
              {t("Footer.cta2")}
            </div>
          </h1>

          <div className="d-flex ps-5">
            <a
              href="https://www.instagram.com/remi.0.3"
              className="fs-1 me-3"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className={`${styles.instLogo}`}
              />
            </a>
            <a
              href="https://www.youtube.com/@remi03"
              className="fs-1 mx-3"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                className={`${styles.youtubeLogo}`}
              />
            </a>
            <a
              href="https://twitter.com/03_remi"
              className="fs-1 mx-3"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faXTwitter}
                className={`${styles.twitterLogo}`}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/remi-yamazaki-77580b55/"
              className="fs-1 mx-3"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className={`${styles.linkedinLogo}`}
              />
            </a>
            <a
              href="https://github.com/remiyamazaki03"
              className="fs-1 ms-3"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className={`${styles.githubLogo}`}
              />
            </a>
          </div>
          <p className={`mt-5 mb-2 mb-md-5 ps-5 ${styles.email}`}>
            hello@chameleon-studios.com
          </p>
        </div>
        <div className="col-md-6 d-flex flex-column">
          <h2 className="d-block d-md-none text-center my-4 brand fs-1">
            {t("Footer.ctas")}
          </h2>
          <div className="d-flex d-block d-md-none mb-3 justify-content-center">
            <a
              href="https://www.instagram.com/remi.0.3"
              className="fs-1 me-3"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram inst-logo"></i>
            </a>
            <a
              href="https://www.youtube.com/@remi03"
              className="fs-1 mx-3"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-youtube youtube-logo"></i>
            </a>
            <a
              href="https://twitter.com/03_remi"
              className="fs-1 mx-3"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-x-twitter twitter-logo"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/remi-yamazaki-77580b55/"
              className="fs-1 mx-3"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin linkedin-logo"></i>
            </a>
            <a
              href="https://github.com/remiyamazaki03"
              className="fs-1 ms-3"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github github-logo"></i>
            </a>
          </div>
          <div className="d-flex d-block d-md-none mb-3 justify-content-center">
            email: hello@chameleon-studios.com
          </div>
          <div
            className="me-sm-5 d-flex align-items-center justify-content-center"
            style={{ height: "100vh", width: "100%" }}
          >
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScGNmvJZi7y5zQztyhrSeGIe_HVPr-uCRwYfh4U0UDX8XQXtA/viewform?embedded=true"
              width="100%"
              style={{ height: "100vh" }}
              allowFullScreen
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
      <footer className={`${styles.copyright}`}>
        <div className="brand pt-2">
          © 2024 &nbsp;
          <a
            href="https://github.com/remiyamazaki03/remi"
            className={`brand ${styles.footerLink}`}
          >
            Open-source code
          </a>
          &nbsp; by <span className="fw-bold">Remi Yamazaki</span>&nbsp; |
          &nbsp;&nbsp;
          <Link href={"/disclosure"} className={`brand ${styles.footerLink}`}>
            Commercial Disclosure
          </Link>
        </div>
      </footer>
    </div>
  );
}
