import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";

export default function Navbar({ lang }: { lang: string }) {
  const closeMenu = () => {
    const navbar = document.getElementById("navbarNav");
    if (navbar?.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-md navbar-light fixed-top ${styles["navbar-css"]}`}
    >
      <Link className={`${styles["navbar-icon"]} ms-3`} href="/">
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
          <li className={`${styles["nav-item"]} ms-3`}>
            <Link className={`${styles["nav-link"]} nav-link`} href="/about">
              {lang === "ja" ? "スタジオ紹介" : "About me"}
            </Link>
          </li>

          <li className={`${styles["nav-item"]}`}>
            <Link
              className={`${styles["nav-link"]} nav-link`}
              href="/voicecoach"
            >
              {lang === "ja"
                ? "個人ボイストレーニング"
                : "Private voice lessons"}
            </Link>
          </li>
          <li className={`${styles["nav-item"]}`}>
            <Link className={`${styles["nav-link"]} nav-link`} href="/events">
              {lang === "ja" ? "イベント" : "Events"}
            </Link>
          </li>
          <li className={`${styles["nav-item"]}`}>
            <Link
              className={`${styles["nav-link"]} nav-link`}
              href="/webdeveloper"
            >
              {lang === "ja" ? "ホームページ作成" : "Website development"}
            </Link>
          </li>
          <li className={`${styles["nav-item"]}`}>
            <Link className={`${styles["nav-link"]} nav-link`} href="/contact">
              {lang === "ja" ? "お問い合わせ" : "Contact"}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
