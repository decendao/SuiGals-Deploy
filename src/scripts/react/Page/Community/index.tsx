import {Swiper, SwiperSlide} from "swiper/react"
import "./index.scss"
import "swiper/css"
import {Autoplay} from "swiper";

export default function Community() {
  return (
    <div id="community">
      <div className="h1s">
    
        <h1>COMMUNITY</h1>
        
      </div>
      <h2>
      We're incredibly grateful for the support from our entire Sui Community! 
      <br/>
      <br/>
      🌐 Together, we'll make SuiGal a sensation, attracting even more web3 and AI enthusiasts to join the vibrant Sui ecosystem. 💫
      <br/>
      <br/>
       Thank you all for being part of this exciting journey!
      </h2>
      <div className="icon-list">
        <a href="" className="icon-item">
          <img src="/img/community/twitter.png" alt=""/>
        </a>
        <a href="" className="icon-item">
          <img src="/img/community/discord.png" alt=""/>
        </a>
        <a href="" className="icon-item">
          <img src="/img/community/instagram.png" alt=""/>
        </a>
        <a href="" className="icon-item">
          <img src="/img/community/tikok.png" alt=""/>
        </a>
      </div>

      <h3>Join the Amazing SuiGal Community Now!</h3>

      <div className="list">
        <div className="item">
          <img src="/img/community/344.png" alt=""/>
          <div className="title">vivi</div>
        </div>
        <div className="item">
          <img src="/img/community/380.png" alt=""/>
          <div className="title">odod</div>
        </div>
        <div className="item">
          <img src="/img/community/35.png" alt=""/>
          <div className="title">joe lee</div>
        </div>
        <div className="item">
          <img src="/img/community/28.png" alt=""/>
          <div className="title">sam</div>
        </div>
        <div className="item">
          <img src="/img/community/385.png" alt=""/>
          <div className="title">super</div>
        </div>
        <div className="item">
          <img src="/img/community/44.png" alt=""/>
          <div className="title">vivi</div>
        </div>
        <div className="item">
          <img src="/img/community/513.png" alt=""/>
          <div className="title">odod</div>
        </div>
        <div className="item">
          <img src="/img/community/338.png" alt=""/>
          <div className="title">joe lee</div>
        </div>
        <div className="item">
          <img src="/img/community/344.png" alt=""/>
          <div className="title">sam</div>
        </div>
        <div className="item">
          <img src="/img/community/380.png" alt=""/>
          <div className="title">super</div>
        </div>
        <div className="item">
          <img src="/img/community/35.png" alt=""/>
          <div className="title">vivi</div>
        </div>
        <div className="item">
          <img src="/img/community/28.png" alt=""/>
          <div className="title">odod</div>
        </div>
        <div className="item">
          <img src="/img/community/385.png" alt=""/>
          <div className="title">joe lee</div>
        </div>
        <div className="item">
          <img src="/img/community/44.png" alt=""/>
          <div className="title">sam</div>
        </div>
        <div className="item">
          <img src="/img/community/513.png" alt=""/>
          <div className="title">super</div>
        </div>
        <div className="item">
          <img src="/img/community/338.png" alt=""/>
          <div className="title">vivi</div>
        </div>
        <div className="item">
          <img src="/img/community/344.png" alt=""/>
          <div className="title">odod</div>
        </div>
        <div className="item">
          <img src="/img/community/380.png" alt=""/>
          <div className="title">joe lee</div>
        </div>
        <div className="item">
          <img src="/img/community/35.png" alt=""/>
          <div className="title">sam</div>
        </div>
      </div>

      <div className="hd">
        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          loopedSlides={9}
          autoplay={{
            delay: 800,
            disableOnInteraction: false,
          }}
          touchRatio={0.5}
          loop
          freeMode={{
            enabled: true
          }}
        >
          <SwiperSlide>
            <img src="/img/community/344.png" alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/community/380.png" alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/community/35.png" alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/community/28.png" alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/community/385.png" alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/community/44.png" alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/community/513.png" alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/community/338.png" alt=""/>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}