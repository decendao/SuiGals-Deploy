import "./index.scss";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

export default function Genesis() {
  return (
    <div id='Pink_Venom'>
      <div className='background-list'></div>
      <img className='pre' src='/img/pre.png' alt='' />
      <img className='next' src='/img/next.png' alt='' />
      <Swiper
        className='list'
        slidesPerView={1}
        slidesPerGroup={1}
        modules={[Navigation]}
        navigation={{
          prevEl: "#Pink_Venom .pre",
          nextEl: "#Pink_Venom .next",
        }}
        breakpoints={{
          900: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
      >
        <SwiperSlide className='item left'>
          <img src='/img/17.png' alt='' />
          <div className='text'>
            <h1>
              <br />
              <br />
            </h1>
            <h2>
              <br />
              <br />
            </h2>
            <h2></h2>
          </div>
        </SwiperSlide>
        <SwiperSlide className='item right'>
          <img src='/img/16.png' alt='' />
          <div className='text'>
            <h1>
              <br />
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className='item right'>
          <img src='/img/28.png' alt='' />
          <div className='text'>
            <h1>
              <br />
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
