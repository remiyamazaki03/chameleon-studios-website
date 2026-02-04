import styles from "./page.module.css";
import { useTranslations } from "next-intl";

export default function Events() {
  const t = useTranslations("Events");
  return (
    <div>
      <h1 className="title mt-2 mb-0 d-flex align-items-center">
        {t("Events.top")}
      </h1>
      <div className={`container1 text-center ${styles.desc}`}>
        <p className="mt-md-5 px-4" style={{ whiteSpace: "pre-line" }}>
          {t("Events.p1")}
        </p>
        <p className="mb-5 px-4">{t("Events.p2")}</p>

        <div className={`mx-auto mb-4 ${styles.video}`}>
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
