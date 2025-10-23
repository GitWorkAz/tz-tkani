import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import styles from "./MySwiper.module.css";
import "swiper/css";

export const MySwiper = () => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
      >
        <SwiperSlide>
          <img
            src="/Hero Image Left.jpg"
            alt="Ткань для одежды"
            className={styles.swiper_img}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/Hero Image Left.jpg"
            alt="Ткань для одежды"
            className={styles.swiper_img}
          />
        </SwiperSlide>
      </Swiper>
      
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
      >
        <SwiperSlide>
          <img
            src="/Hero Image Left.jpg"
            alt="Ткань для одежды"
            className={styles.swiper_img}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/Hero Image Left.jpg"
            alt="Ткань для одежды"
            className={styles.swiper_img}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
