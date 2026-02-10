import styles from "./page.module.css";
import { useTranslations } from "next-intl";

export default function Events() {
  const t = useTranslations("Events");
  return (
    <div>
      <h1 className="title mt-2 mb-0 d-flex align-items-center">
        {t("Events.top")}
      </h1>
      <div className="container1">
        <p className="desc" style={{ whiteSpace: "pre-line" }}>
          {t("Events.p1")}
        </p>
        <p className="desc">{t("Events.p2")}</p>

        <div className={styles.video}>
          <div className="ratio ratio-16x9">
            <iframe
              title="Chameleon Studios Recital Highlights video"
              src="https://www.youtube.com/embed/NttEhG1qiQs"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}
