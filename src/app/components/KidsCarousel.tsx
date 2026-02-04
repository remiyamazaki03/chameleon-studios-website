"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import styles from "./testimonialsCarousel.module.css";
import { useTranslations } from "next-intl";

export default function WorshipCarousel() {
  const t = useTranslations();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  return (
    <div className={`max-w-lg mx-auto ${styles.embla}`}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          <div className={styles.embla__slide}>
            <article className={styles.cardKids}>
              <Image
                src="/unicorn.png"
                alt="show off your singing"
                className={`img-fluid p-4 d-block mx-auto ${styles.avatar}`}
                width={200}
                height={200}
              />
              <p className={styles.quoteKids}>{t("Voice.kids.testimonial1")}</p>
              <footer className={styles.name}>{t("Voice.kids.name1")}</footer>
            </article>
          </div>
          <div className={styles.embla__slide}>
            <article className={styles.cardKids}>
              <Image
                src="/unicorn.png"
                alt="show off your singing"
                className={`img-fluid p-4 d-block mx-auto ${styles.avatar}`}
                width={200}
                height={200}
              />
              <p className={styles.quoteKids}>{t("Voice.kids.testimonial2")}</p>
              <footer className={styles.name}>{t("Voice.kids.name2")}</footer>
            </article>
          </div>
        </div>
      </div>
      <div></div>
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
