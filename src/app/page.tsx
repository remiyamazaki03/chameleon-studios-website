import Image from "next/image";
import "../globals.css";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="container2">
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/logo.png"
          alt="Chameleon Studios logo スタジオカメレオン ロゴ"
          width={600}
          height={600}
          priority
        />
        <p>this is the homepage</p>
      </main>
    </div>
  );
}
