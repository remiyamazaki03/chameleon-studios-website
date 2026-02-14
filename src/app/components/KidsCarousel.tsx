"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import styles from "./testimonialsCarousel.module.css";
import { useTranslations } from "next-intl";

export default function WorshipCarousel() {
  const t = useTranslations("Kidsc");
  const slides = t.raw("slides") as {
    quote: string;
    name: string;
  }[];
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  return (
    <div className={`max-w-lg mx-auto ${styles.embla}`}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((slide, i) => (
            <div key={i} className={styles.embla__slide}>
              <article className={`${styles.card} ${styles.carouselK}`}>
                <div className={`${styles.avatar} ${styles.avatarK}`}>
                  <Image
                    src="/unicorn.png"
                    alt="show off your singing"
                    width={150}
                    height={150}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p className={`${styles.quote} ${styles.quoteK}`}>
                  {slide.quote}
                </p>
                <footer className={styles.name}>{slide.name}</footer>
              </article>
            </div>
          ))}
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
