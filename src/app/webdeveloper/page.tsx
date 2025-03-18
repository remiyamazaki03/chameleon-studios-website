import "../../globals.css";
import styles from "./page.module.css";

export default function Webdeveloper() {
  return (
    <div>
      <h2 className="title m-0 d-flex align-items-center">Web developer</h2>
      <div className="container1">
        <p className="py-5 px-5 m-0 text-center fs-5">
          I am currently taking a limited number of inquiries. If you would like
          to chat about (re-)designing your website or making an existing design
          come to life, please contact me via the form below! Here are a couple
          examples of my work:
        </p>
        <div className={`row ${styles.demoRow} pb-5`}>
          <div className="col-lg-6 d-flex flex-column text-center">
            <div className={styles.demo}>
              <a href="https://bwave-entertainment.com" className="link">
                <h2 className="brand">Bwave Entertainment (description)</h2>

                <img
                  className={`img-fluid mt-4 mb-4 ${styles.demoThumbnail} d-none d-md-block`}
                  src="/bwave-demo.png"
                  alt="bwave ホームページ デモ"
                />
                <img
                  className={`img-fluid mt-4 mb-4 ${styles.demoThumbnail} d-md-none`}
                  src="/bwavemobile.jpg"
                  alt="bwave ホームページ デモ"
                />
              </a>
              <p className="pt-2">description</p>
            </div>
          </div>
          <div className="col-lg-6 d-flex flex-column text-center">
            <div className={styles.demo}>
              <a href="https://d-tokyo-wadaiko.com" className="link">
                <h2 className="brand">
                  <span style={{ fontStyle: "italic" }}>:D-Tokyo</span>
                  (description)
                </h2>
                <img
                  className={`img-fluid mt-4 mb-4 ${styles.demoThumbnail} d-none d-md-block`}
                  src="/dtokyo-demo.png"
                  alt="dtokyo ホームページ デモ"
                />
                <img
                  className={`img-fluid mt-4 mb-4 ${styles.demoThumbnail} d-md-none`}
                  src="/dtokyomobile.jpg"
                  alt="dtokyo ホームページ デモ"
                />
              </a>
              <p className="pt-2">description</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
