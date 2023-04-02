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
  

    {/* </Swiper>
        <SwiperSlide className='item left'>
          <img src='/img/17.png'  alt='' />

          <img src='/img/18.png' alt='' />

          <img src='/img/35.png' alt='' />

          <img src='/img/44.png' alt='' />

        </SwiperSlide>

        <SwiperSlide className='item right'>
          <img src='/img/15.png' alt='' />
       
        
          <img src='/img/28.png' alt='' />
      

          <img src='/img/338.png' alt='' />
       

          <img src='/img/344.png' alt='' />
          </SwiperSlide> */}
       
     
    </div>
  );
}
