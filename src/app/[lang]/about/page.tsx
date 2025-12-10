import Image from "next/image";
import styles from "./page.module.css";

export default function About() {
  return (
    <div>
      <h1 className="mt-5">hello</h1>
      <h2 className="title m-0 d-flex align-items-center">About Remi</h2>

      <div className="container1 m-0 row text-center align-items-center">
        <Image
          className={`img-fluid col-md-4 d-block mx-auto ${styles.aboutImg}`}
          src="/Remi.jpg"
          alt="Remi"
          width={350}
          height={350}
        />
        <div className="col-md-8 p-5">
          <h2 className="mt-2 fs-3">About Remi</h2>
          <p className="mt-4 bio ">
            about
            <a
              href="https://www.brooklyntabernacle.org/music/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#6347ff",
              }}
            >
              Brooklyn Tabernacle Choir
            </a>
            about
            <a
              href="https://www.williammcdowellmusic.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#6347ff",
              }}
            >
              William McDowell
            </a>
            and
            <a
              href="https://nataliegrant.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#6347ff",
              }}
            >
              Natalie Grant
            </a>
            about
            <a
              href="https://54below.org/about/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#6347ff",
              }}
            >
              54 Below
            </a>
            about about about
            <a
              href="https://music.princeton.edu/people/ronald-cappon/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#6347ff",
              }}
            >
              Ronald Cappon
            </a>
            about
            <a
              href="https://chapel.princeton.edu/chapel-choir"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#6347ff",
              }}
            >
              link
            </a>
            about about
            <a
              href="https://www.tokyounion.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#6347ff",
              }}
            >
              tuc
            </a>
            about
            <a
              href="http://ssp-create.com/pupa.html"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#6347ff",
              }}
            >
              SSP
            </a>
            about
            <br />
            <br />
            <small>cta</small>
          </p>
        </div>
      </div>
    </div>
  );
}
