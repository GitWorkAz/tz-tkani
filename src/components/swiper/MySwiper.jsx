
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./MySwiper.module.css";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export const MySwiper = () => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.swiper_container}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          // modules={[Autoplay]}
          // autoplay={{ delay: 5000, disableOnInteraction: false }}
          // loop
        >
          <SwiperSlide>
            <img src="/Hero Image Left.jpg" alt="Ткань для одежды" className={styles.swiper_img}/>
          </SwiperSlide>

        </Swiper>

      </div>
    </div>
  );
};
