import "./index.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
interface Props {
  imageList: string[];
}
export default function Post(props: Props) {
  console.log(props);

  return (
    <div id='post'>
      <Swiper
        className='swiper-container'
        pagination={true}
        modules={[Pagination, Autoplay]}
        slidesPerView='auto'
        loopedSlides={3}
        autoplay={{
          delay: 800,
          disableOnInteraction: false,
        }}
        loop
      >
        {props.imageList.map((item) => {
          return (
            <SwiperSlide>
              <video
                src={item}
                autoPlay
                width='100%'
                height='100%'
                loop
                muted
              />
              {/* <img src={item} alt='' className='post_img' /> */}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
