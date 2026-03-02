"use client";

import useEmblaCarousel from "embla-carousel-react";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";
import Image from "next/image";
import styles from "./testimonialsCarousel.module.css";

export default function WorshipCarousel({
  slides,
}: {
  slides: { quote: string; name: string }[];
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      dragFree: false,
    },
    [WheelGesturesPlugin()],
  );

  return (
    <div className={`max-w-lg mx-auto ${styles.embla}`}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((slide, i) => (
            <div key={i} className={styles.embla__slide}>
              <article className={`${styles.card} ${styles.carouselW}`}>
                <div className={`${styles.avatar} ${styles.avatarW}`}>
                  <Image
                    src="/logo-mid.png"
                    alt="student review"
                    width={100}
                    height={100}
                  />
                </div>
                <p className={`${styles.quote} ${styles.quoteW}`}>
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
