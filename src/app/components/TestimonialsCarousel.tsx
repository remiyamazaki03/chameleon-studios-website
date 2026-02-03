"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
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
      <div className={`${styles.embla__viewport}`} ref={emblaRef}>
        <div className={`${styles.embla__container}`}>
          <div className={`${styles.embla__slide}`}>{t("Carousel.slide1")}</div>
          <div className={`${styles.embla__slide}`}>{t("Carousel.slide2")}</div>
          <div className={`${styles.embla__slide}`}>{t("Carousel.slide3")}</div>
          <div className={`${styles.embla__slide}`}>{t("Carousel.slide4")}</div>
          <div className={`${styles.embla__slide}`}>{t("Carousel.slide5")}</div>
          <div className={`${styles.embla__slide}`}>{t("Carousel.slide6")}</div>
        </div>
      </div>
      <div className={styles.embla__buttons}>
        <button
          className={`${styles.embla__button}`}
          onClick={() => emblaApi?.scrollPrev()}
        >
          ‹
        </button>

        <button
          className={`${styles.embla__button}`}
          onClick={() => emblaApi?.scrollNext()}
        >
          ›
        </button>
      </div>
    </div>
  );
}
