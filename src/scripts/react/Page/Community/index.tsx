import { Swiper, SwiperSlide } from "swiper/react";
import "./index.scss";
import "swiper/css";
import { Autoplay } from "swiper";

export default function Community() {
  return (
    <div id='community'>
      <div className='h1s'>
        <h1>COMMUNITY</h1>
      </div>
      <h2>
        We're incredibly grateful for the support from our entire Sui Community!
        <br />
        <br />
        🌐 Together, we'll make SuiGal a sensation, attracting even more web3
        and AI enthusiasts to join the vibrant Sui ecosystem. 💫
        <br />
        <br />
        Thank you all for being part of this exciting journey!
      </h2>
      <div className='icon-list'>
        <div>
          <a href='https://link3.to/suiworld' className='icon-item'>
            <img src='/img/suihq.jpg' alt='' />
          </a>
        </div>
        <div>
          <a href='' className='icon-item'>
            <img src='/img/suiglobal.jpg' alt='' />
          </a>
        </div>
        <div>
          <a href='https://seapad.fund/' className='icon-item'>
            <img src='/img/seapad.jpg' alt='' />
          </a>
        </div>
        <div>
          <a href='https://belaunch.io/' className='icon-item'>
            <img src='/img/blaunch.jpg' alt='' />
          </a>
        </div>
      </div>

      <h3>Join the Amazing SuiGals Community Now!</h3>

      <div className='list'>
        <div className='item'>
          <a href='#'>
            <img src='/img/community/344.png' alt='' />
          </a>

          <div className='title'>vivi</div>
        </div>
        <div className='item'>
          <a href='#'>
            <img src='/img/community/380.png' alt='' />
          </a>
          <div className='title'>odod</div>
        </div>
        <div className='item'>
          <a href=''>
            <img src='/img/community/35.png' alt='' />
          </a>
          <div className='title'>joe lee</div>
        </div>
        <div className='item'>
          <a href='#'>
            <img src='/img/community/28.png' alt='' />
          </a>
          <div className='title'>sam</div>
        </div>
        <div className='item'>
          <a href=''>
            <img src='/img/community/385.png' alt='' />
          </a>
          <div className='title'>super</div>
        </div>
        <div className='item'>
          <a href='#'>
            <img src='/img/community/44.png' alt='' />
          </a>
          <div className='title'>vivi</div>
        </div>
        <div className='item'>
          <a href='#'>
            <img src='/img/community/513.png' alt='' />
          </a>
          <div className='title'>odod</div>
        </div>
        <div className='item'>
          <a href='#'>
            <img src='/img/community/338.png' alt='' />
          </a>
          <div className='title'>joe lee</div>
        </div>
        <div className='item'>
          <a href='#'>
            <img src='/img/community/344.png' alt='' />
          </a>
          <div className='title'>sam</div>
        </div>
        <div className='item'>
          <a href='#'>
            <img src='/img/community/380.png' alt='' />
          </a>
          <div className='title'>super</div>
        </div>
        <div className='item'>
          <a href='#'>
            <img src='/img/community/35.png' alt='' />
          </a>
          <div className='title'>vivi</div>
        </div>
        <div className='item'>
          <a href='#'>
            <img src='/img/community/28.png' alt='' />
          </a>
          <div className='title'>odod</div>
        </div>
        <div className='item'>
          <a href='#'>
            <img src='/img/community/385.png' alt='' />
          </a>
          <div className='title'>joe lee</div>
        </div>
        <div className='item'>
          <a href='#'>
            <img src='/img/community/44.png' alt='' />
          </a>
          <div className='title'>sam</div>
        </div>
        <div className='item'>
          <a href='#'>
            <img src='/img/community/513.png' alt='' />
          </a>
          <div className='title'>super</div>
        </div>
        <div className='item'>
          <a href='#'>
            <img src='/img/community/338.png' alt='' />
          </a>
          <div className='title'>vivi</div>
        </div>
        <div className='item'>
          <a href='#'>
            <img src='/img/community/344.png' alt='' />
          </a>
          <div className='title'>odod</div>
        </div>
        <div className='item'>
          <a href='#'>
            <img src='/img/community/380.png' alt='' />
          </a>
          <div className='title'>joe lee</div>
        </div>
        <div className='item'>
          <a href='#'>
            <img src='/img/community/35.png' alt='' />
          </a>
          <div className='title'>sam</div>
        </div>
      </div>

      <div className='hd'>
        <Swiper
          modules={[Autoplay]}
          slidesPerView='auto'
          loopedSlides={9}
          autoplay={{
            delay: 800,
            disableOnInteraction: false,
          }}
          touchRatio={0.5}
          loop
          freeMode={{
            enabled: true,
          }}
        >
          <SwiperSlide>
            <img src='/img/community/344.png' alt='' className='swiper_img' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/img/community/380.png' alt='' className='swiper_img' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/img/community/35.png' alt='' className='swiper_img' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/img/community/28.png' alt='' className='swiper_img' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/img/community/385.png' alt='' className='swiper_img' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/img/community/44.png' alt='' className='swiper_img' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/img/community/513.png' alt='' className='swiper_img' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/img/community/338.png' alt='' className='swiper_img' />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
