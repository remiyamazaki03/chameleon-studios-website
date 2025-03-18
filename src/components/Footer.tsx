import Link from "next/link";
import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faXTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div>
      <div className={`row ${styles.contact}`}>
        <div className="col-md-6 d-none d-md-block">
          <h1 className="ps-5 mt-5 mb-2 mb-md-5 homepage">
            Get <div className="brand">in touch</div>
          </h1>

          <div className="d-flex ps-5">
            <a
              href="https://www.instagram.com/remi.0.3"
              className="fs-1 me-3"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className={`${styles.instLogo}`}
              />
            </a>
            <a
              href="https://www.youtube.com/@remi03"
              className="fs-1 mx-3"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                className={`${styles.youtubeLogo}`}
              />
            </a>
            <a
              href="https://twitter.com/03_remi"
              className="fs-1 mx-3"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faXTwitter}
                className={`${styles.twitterLogo}`}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/remi-yamazaki-77580b55/"
              className="fs-1 mx-3"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className={`${styles.linkedinLogo}`}
              />
            </a>
            <a
              href="https://github.com/remiyamazaki03"
              className="fs-1 ms-3"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className={`${styles.githubLogo}`}
              />
            </a>
          </div>
          <p className={`mt-5 mb-2 mb-md-5 ps-5 ${styles.email}`}>
            email: hello@chameleon-studios.com
          </p>
        </div>
        <div className="col-md-6 d-flex flex-column">
          <h2 className="d-block d-md-none my-4 highlight fs-1">
            get in touch
          </h2>
          <div className="d-flex d-block d-md-none mb-3 justify-content-center">
            <a
              href="https://www.instagram.com/remi.0.3"
              className="fs-1 me-3"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram inst-logo"></i>
            </a>
            <a
              href="https://www.youtube.com/@remi03"
              className="fs-1 mx-3"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-youtube youtube-logo"></i>
            </a>
            <a
              href="https://twitter.com/03_remi"
              className="fs-1 mx-3"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-x-twitter twitter-logo"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/remi-yamazaki-77580b55/"
              className="fs-1 mx-3"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin linkedin-logo"></i>
            </a>
            <a
              href="https://github.com/remiyamazaki03"
              className="fs-1 ms-3"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github github-logo"></i>
            </a>
          </div>
          <div className="d-flex d-block d-md-none mb-3 justify-content-center">
            email: hello03remi@gmail.com
          </div>
          <div className="me-sm-5">
            <div id="ff-compose"></div>
            <script
              async
              defer
              src="https://formfacade.com/include/100240402409090706097/form/1FAIpQLScGNmvJZi7y5zQztyhrSeGIe_HVPr-uCRwYfh4U0UDX8XQXtA/classic.js?div=ff-compose"
            ></script>
          </div>
        </div>
      </div>
      <footer>
        <div className="brand pt-2">
          © 2024 &nbsp;
          <a
            href="https://github.com/remiyamazaki03/remi"
            className="brand footer-link"
          >
            Open-source code
          </a>
          &nbsp; by <span className="fw-bold">Remi Yamazaki</span>&nbsp; |
          &nbsp;&nbsp;
          <Link href={"/disclosure"} className="brand footer-link">
            Disclosure
          </Link>
        </div>
      </footer>
    </div>
  );
}
