import Link from "next/link";
import { useTranslations } from "next-intl";
import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer({ lang }: { lang: string }) {
  const t = useTranslations("Footer");
  const socials = [
    {
      href: "https://www.instagram.com/remi.0.3",
      icon: faInstagram,
      className: styles.instLogo,
    },
    {
      href: "https://www.youtube.com/@remi03",
      icon: faYoutube,
      className: styles.youtubeLogo,
    },
    {
      href: "https://www.linkedin.com/in/remi-yamazaki-77580b55/",
      icon: faLinkedin,
      className: styles.linkedinLogo,
    },
  ];
  type SocialLinksProps = {
    className?: string;
  };
  const SocialLinks = ({ className = "" }: SocialLinksProps) => (
    <div className={`d-flex ${className}`}>
      {socials.map(({ href, icon, className: iconClass }, i) => (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="fs-1 mx-3"
        >
          <FontAwesomeIcon icon={icon} className={iconClass} />
        </a>
      ))}
    </div>
  );
  return (
    <div>
      <div className={`row ${styles.contact}`}>
        <div className="col-md-6">
          <h1 className="mt-5 mb-2 mb-md-5 ps-md-5 d-flex justify-content-center justify-content-md-start">
            <div className={`brand ${styles.cta}`}>{t("cta")}</div>
          </h1>
          <div className="ps-4">
            <SocialLinks className="justify-content-center justify-content-md-start" />
          </div>
          <p
            className={`mt-5 mb-2 mb-md-5 ps-md-5 d-flex justify-content-center justify-content-md-start ${styles.email}`}
          >
            hello@chameleon-studios.com
          </p>
        </div>
        <div className="col-md-6 d-flex flex-column">
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
          © 2026 &nbsp;
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
