import "./index.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
interface Props {
  imageList: string[];
}
export default function Post(props: Props) {
  return (
    <div id='post'>
      <Swiper
        className='swiper-container'
        pagination={true}
        modules={[Pagination, Autoplay]}
        slidesPerView='auto'
        loopedSlides={9}
        autoplay={{
          delay: 800,
          disableOnInteraction: false,
        }}
        loop
      >
        {props.imageList.map((item) => {
          return (
            <SwiperSlide>
              <img src={item} alt='' className='post_img' />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
