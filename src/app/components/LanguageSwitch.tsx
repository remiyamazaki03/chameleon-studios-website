"use client";
import styles from "./navbar.module.css";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";

export default function LanguageSwitch() {
  const locale = useLocale();
  const pathname = usePathname();
  const nextLocale = locale === "en" ? "ja" : "en";

  return (
    <Link
      href={pathname}
      locale={nextLocale}
      className={`${styles.transLink} ${styles.language}`}
    >
      {locale === "en" ? "日本語" : "English"}
    </Link>
  );
}
