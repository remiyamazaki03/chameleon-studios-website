"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import styles from "./testimonialsCarousel.module.css";
import { useTranslations } from "next-intl";

export default function TestimonialsCarousel() {
  const t = useTranslations();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  return (
    <div className={`max-w-lg mx-auto ${styles.embla}`}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          <div className={styles.embla__slide}>
            <article className={styles.card}>
              <Image
                src="/logo-small.png"
                alt="student review"
                width={72}
                height={72}
                className={styles.avatar}
              />
              <p className={styles.quote}>{t("Carousel.slide1")}</p>
            </article>
          </div>
          <div className={styles.embla__slide}>
            <article className={styles.card}>
              <Image
                src="/logo-small.png"
                alt="student review"
                width={72}
                height={72}
                className={styles.avatar}
              />
              <p className={styles.quote}>{t("Carousel.slide2")}</p>
            </article>
          </div>
          <div className={styles.embla__slide}>
            <article className={styles.card}>
              <Image
                src="/logo-small.png"
                alt="student review"
                width={72}
                height={72}
                className={styles.avatar}
              />
              <p className={styles.quote}>{t("Carousel.slide3")}</p>
            </article>
          </div>
          <div className={styles.embla__slide}>
            <article className={styles.card}>
              <Image
                src="/logo-small.png"
                alt="student review"
                width={72}
                height={72}
                className={styles.avatar}
              />
              <p className={styles.quote}>{t("Carousel.slide4")}</p>
            </article>
          </div>
          <div className={styles.embla__slide}>
            <article className={styles.card}>
              <Image
                src="/logo-small.png"
                alt="student review"
                width={72}
                height={72}
                className={styles.avatar}
              />
              <p className={styles.quote}>{t("Carousel.slide5")}</p>
            </article>
          </div>
          <div className={styles.embla__slide}>
            <article className={styles.card}>
              <Image
                src="/logo-small.png"
                alt="student review"
                width={72}
                height={72}
                className={styles.avatar}
              />
              <p className={styles.quote}>{t("Carousel.slide6")}</p>
            </article>
          </div>
        </div>
      </div>
      <div className={styles.embla__buttons}>
        <button
          className={`${styles.embla__button} ${styles.embla__button1}`}
          onClick={() => emblaApi?.scrollPrev()}
        >
          ‹
        </button>

        <button
          className={`${styles.embla__button} ${styles.embla__button1}`}
          onClick={() => emblaApi?.scrollNext()}
        >
          ›
        </button>
      </div>
    </div>
  );
}
