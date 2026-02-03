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
            <article className={styles.card2}>
              <Image
                src="/logo-small.png"
                alt="student review"
                width={72}
                height={72}
                className={styles.avatar}
              />
              <p className={styles.quote}> {t("Voice.worship.testimonial1")}</p>
            </article>
          </div>
          <div className={styles.embla__slide}>
            <article className={styles.card2}>
              <Image
                src="/logo-small.png"
                alt="student review"
                width={72}
                height={72}
                className={styles.avatar}
              />
              <p className={styles.quote}>{t("Voice.worship.testimonial2")}</p>
            </article>
          </div>
        </div>
      </div>
      <div></div>
      <div className={styles.embla__buttons}>
        <button
          className={`${styles.embla__button} ${styles.embla__button2}`}
          onClick={() => emblaApi?.scrollPrev()}
        >
          ‹
        </button>

        <button
          className={`${styles.embla__button} ${styles.embla__button2}`}
          onClick={() => emblaApi?.scrollNext()}
        >
          ›
        </button>
      </div>
    </div>
  );
}
