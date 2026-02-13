"use client";
import Image from "next/image";
import { ComponentProps } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import styles from "./navbar.module.css";
import LanguageSwitch from "./LanguageSwitch";

type NavLinkProps = ComponentProps<typeof Link>;

export default function Navbar({ lang }: { lang: string }) {
  const closeMenu = () => {
    const navbar = document.getElementById("navbarNav");
    navbar?.classList.remove("show");
  };
  const NavLink = ({ href, children }: NavLinkProps) => (
    <Link
      href={href}
      className={`${styles.navLink} nav-link`}
      onClick={closeMenu}
    >
      {children}
    </Link>
  );
  const t = useTranslations("Navbar");
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light fixed-top ${styles.navbarCss}`}
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
        <ul className={`navbar-nav me-auto ${styles.navul}`}>
          <li className={`${styles.navItem} ms-lg-3`}>
            <NavLink href="/voicecoach">{t("Navbar.Voice")}</NavLink>
          </li>
          <li className={`${styles.navItem}`}>
            <NavLink href="/events">{t("Navbar.Events")}</NavLink>
          </li>
          <li className={`${styles.navItem}`}>
            <NavLink href="/about">{t("Navbar.About")}</NavLink>
          </li>
          <li className={`${styles.navItem}`}>
            <NavLink href="/webdeveloper">{t("Navbar.Web")}</NavLink>
          </li>
          <li className={`${styles.navItem}`}>
            <NavLink href="/contact">{t("Navbar.Contact")}</NavLink>
          </li>
          <li className={`d-block d-lg-none ${styles.navItem}`}>
            <LanguageSwitch />
          </li>
        </ul>
        <div className="d-none d-lg-block">
          <LanguageSwitch />
        </div>
      </div>
    </nav>
  );
}
