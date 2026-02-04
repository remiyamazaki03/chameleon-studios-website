"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import styles from "./testimonialsCarousel.module.css";
import { useTranslations } from "next-intl";

export default function TestimonialsCarousel() {
  const t = useTranslations("Carousel");
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
  const [selectedIndex, setSelectedIndex] = useState(0);
  const slides = t.raw("Carousel.slides") as {
    quote: string;
    name: string;
  }[];
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);
  return (
    <div className={`max-w-lg mx-auto ${styles.embla}`}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((slide, i) => (
            <div key={i} className={styles.embla__slide}>
              <article className={styles.card}>
                <Image
                  src="/logo-small.png"
                  alt="student review"
                  width={72}
                  height={72}
                  className={styles.avatar}
                />
                <p className={styles.quote}>{slide.quote}</p>
                <footer className={styles.name}>{slide.name}</footer>
              </article>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.embla__buttons}>
        <button
          className={`${styles.embla__button} ${styles.embla__button1}`}
          onClick={() => emblaApi?.scrollPrev()}
        >
          ‹
        </button>
        <div className={styles.embla__dots}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`${styles.embla__dot} ${
                i === selectedIndex ? styles.embla__dotActive : ""
              }`}
            />
          ))}
        </div>
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
