import styles from "./page.module.css";
import { useTranslations } from "next-intl";

export default function Events() {
  const t = useTranslations();
  return (
    <div>
      <h2 className="title mt-2 mb-0 d-flex align-items-center">
        {t("Events.top")}
      </h2>
      <div className={`container1 ps-5 text-center ${styles.desc}`}>
        <p className="mt-4" style={{ whiteSpace: "pre-line" }}>
          {t("Events.p1")}
        </p>
        <p>{t("Events.p2")}</p>

        <p>
          {t.rich("Events.cta", {
            youtube: (chunks) => (
              <a
                href="https://www.youtube.com/watch?v=NttEhG1qiQs"
                target="_blank"
                rel="noopener noreferrer"
                className="brand"
              >
                {chunks}
              </a>
            ),
          })}
        </p>
      </div>
    </div>
  );
}
