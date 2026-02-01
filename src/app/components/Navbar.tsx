import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import styles from "./navbar.module.css";
import LanguageSwitch from "./LanguageSwitch";

export default function Navbar({ lang }: { lang: string }) {
  const closeMenu = () => {
    const navbar = document.getElementById("navbarNav");
    if (navbar?.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };
  const t = useTranslations();
  return (
    <nav
      className={`navbar navbar-expand-md navbar-light fixed-top ${styles.navbarCss}`}
    >
      <Link className={`${styles.navbarIcon} ms-3 my-1`} href="/">
        <Image
          src="/logo-small.png"
          alt="Chameleon Studios logo"
          width={60}
          height={60}
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className={`navbar-nav me-auto ${styles["navul"]}`}>
          <li className={`${styles.navItem} ms-3`}>
            <Link className={`${styles.navLink} nav-link`} href="/voicecoach">
              {t("Navbar.Voice")}
            </Link>
          </li>
          <li className={`${styles.navItem}`}>
            <Link className={`${styles.navLink} nav-link`} href="/events">
              {t("Navbar.Events")}
            </Link>
          </li>
          <li className={`${styles.navItem}`}>
            <Link className={`${styles.navLink} nav-link`} href="/about">
              {t("Navbar.About")}
            </Link>
          </li>
          <li className={`${styles.navItem}`}>
            <Link className={`${styles.navLink} nav-link`} href="/webdeveloper">
              {t("Navbar.Web")}
            </Link>
          </li>
          <li className={`${styles.navItem}`}>
            <Link className={`${styles.navLink} nav-link`} href="/contact">
              {t("Navbar.Contact")}
            </Link>
          </li>
        </ul>
        <LanguageSwitch />
      </div>
    </nav>
  );
}
