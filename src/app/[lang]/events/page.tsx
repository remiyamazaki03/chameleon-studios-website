import styles from "./page.module.css";
import { useTranslations } from "next-intl";

export default function Events() {
  const t = useTranslations();
  return (
    <div>
      <h2 className="title mt-2 mb-0 d-flex align-items-center">
        {t("Events.top")}
      </h2>
      <div className={`container1 ps-5 ${styles.desc}`}>
        <p className="mt-4">{t("Events.p1")}</p>
        <p>{t("Events.cta")}</p>
      </div>
    </div>
  );
}
