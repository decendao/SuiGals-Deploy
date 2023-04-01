import "./index.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default function About() {
  return (
    <div id="post">
      <Swiper
        className="swiper-container"
        pagination={true}
        modules={[Pagination, Autoplay]}
        slidesPerView="auto"
        loopedSlides={9}
        autoplay={{
          delay: 1800,
          disableOnInteraction: false,
        }}
        loop
       
      >
        <SwiperSlide>
          <img src="/img/poster1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/poster1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/poster1.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
