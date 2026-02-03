"use client";

import useEmblaCarousel from "embla-carousel-react";
import styles from "./testimonialsCarousel.module.css";

export default function TestimonialsCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className={`max-w-lg mx-auto ${styles.embla}`}>
      <div className={`${styles.embla__viewport}`} ref={emblaRef}>
        <div className={`${styles.embla__container}`}>
          <div className={`${styles.embla__slide}`}>Slide 1</div>
          <div className={`${styles.embla__slide}`}>Slide 2</div>
          <div className={`${styles.embla__slide}`}>Slide 3</div>
        </div>
      </div>

      <button className={`${styles.embla__prev}`}>Scroll to prev</button>
      <button className={`${styles.embla__next}`}>Scroll to next</button>
    </div>
  );
}
