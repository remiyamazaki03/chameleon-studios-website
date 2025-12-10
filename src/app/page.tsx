import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <main>
      <h1 className="mt-5">{lang === "ja" ? "こんにちは" : "Hello"}</h1>
      <div className={styles.hero}>
        <Image
          className={styles.logo}
          src="/logo.png"
          alt="Chameleon Studios logo スタジオカメレオン ロゴ"
          fill={true}
          style={{
            objectFit: "contain",
          }}
          priority
        />
      </div>
      <div className="row">
        <div className={`col-md-4 p-0 ${styles.workImg}`}>
          <Image
            className="img-fluid"
            src="/Remi-singer.jpg"
            alt="Remi singer"
            fill={true}
            style={{
              objectFit: "cover",
            }}
          />
          <div className={`${styles.overlay}`}>
            <h2>Singer</h2>
            <h3 className="p-5 text-center fs-4 subheader">Singer</h3>
            <Link href="/about" className={`${styles.launchButton}`}>
              Button1
            </Link>
          </div>
        </div>
        <div className={`col-md-4 p-0 ${styles.workImg}`}>
          <Image
            className="img-fluid"
            src="/microphone.jpg"
            alt="microphone"
            fill={true}
            style={{
              objectFit: "cover",
            }}
          />
          <div className={`${styles.overlay}`} id={`${styles.vocalOverlay}`}>
            <h2 className="overlayTitle">Voice coach</h2>
            <h3 className="p-5 text-center fs-4 subheader">Voice coach</h3>
            <Link
              href="/voicecoach"
              className={`${styles.launchButton}`}
              id={`${styles.vocalButton}`}
            >
              Button2
            </Link>
          </div>
        </div>
        <div className={`col-md-4 p-0 ${styles.workImg}`}>
          <Image
            className="img-fluid"
            src="/Remi-developer.jpg"
            alt="Remi web developer"
            fill={true}
            style={{
              objectFit: "cover",
            }}
          />
          <div className={`${styles.overlay}`}>
            <h2 className="overlayTitle">Web developer</h2>
            <h3 className="p-4 text-center fs-4 subheader">Web developer</h3>

            <Link href="/webdeveloper" className={`${styles.launchButton}`}>
              Button 3
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
