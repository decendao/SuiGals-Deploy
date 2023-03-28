import {Swiper, SwiperSlide} from "swiper/react"
import "./index.scss"
import "swiper/css"
import {Autoplay} from "swiper";

export default function Community() {
  return (
    <div id="community">
      <div className="h1s">
        <h1>지역 사회</h1>
        <h1>COMMUNITY</h1>
        <h1>コミュニティ</h1>
      </div>
      <h2>
        VDOL is the first virtual modeling agency in the metaverse created for NFT entrepreneurs with earnings possibilities of holding NFTs instead of flipping.ties of holding NFTs instead of flipping.
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
      <h3>Join 32,973 other Blackpink FANs in the Discord!</h3>
      <div className="list">
        <div className="item">
          <img src="/img/community/vivi.png" alt=""/>
          <div className="title">vivi</div>
        </div>
        <div className="item">
          <img src="/img/community/odod.png" alt=""/>
          <div className="title">odod</div>
        </div>
        <div className="item">
          <img src="/img/community/joe lee.png" alt=""/>
          <div className="title">joe lee</div>
        </div>
        <div className="item">
          <img src="/img/community/sam.png" alt=""/>
          <div className="title">sam</div>
        </div>
        <div className="item">
          <img src="/img/community/super.png" alt=""/>
          <div className="title">super</div>
        </div>
        <div className="item">
          <img src="/img/community/vivi.png" alt=""/>
          <div className="title">vivi</div>
        </div>
        <div className="item">
          <img src="/img/community/odod.png" alt=""/>
          <div className="title">odod</div>
        </div>
        <div className="item">
          <img src="/img/community/joe lee.png" alt=""/>
          <div className="title">joe lee</div>
        </div>
        <div className="item">
          <img src="/img/community/sam.png" alt=""/>
          <div className="title">sam</div>
        </div>
        <div className="item">
          <img src="/img/community/super.png" alt=""/>
          <div className="title">super</div>
        </div>
        <div className="item">
          <img src="/img/community/vivi.png" alt=""/>
          <div className="title">vivi</div>
        </div>
        <div className="item">
          <img src="/img/community/odod.png" alt=""/>
          <div className="title">odod</div>
        </div>
        <div className="item">
          <img src="/img/community/joe lee.png" alt=""/>
          <div className="title">joe lee</div>
        </div>
        <div className="item">
          <img src="/img/community/sam.png" alt=""/>
          <div className="title">sam</div>
        </div>
        <div className="item">
          <img src="/img/community/super.png" alt=""/>
          <div className="title">super</div>
        </div>
        <div className="item">
          <img src="/img/community/vivi.png" alt=""/>
          <div className="title">vivi</div>
        </div>
        <div className="item">
          <img src="/img/community/odod.png" alt=""/>
          <div className="title">odod</div>
        </div>
        <div className="item">
          <img src="/img/community/joe lee.png" alt=""/>
          <div className="title">joe lee</div>
        </div>
        <div className="item">
          <img src="/img/community/sam.png" alt=""/>
          <div className="title">sam</div>
        </div>
        <div className="item">
          <img src="/img/community/super.png" alt=""/>
          <div className="title">super</div>
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
            <img src="/img/community/t1.png" alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/community/t2.png" alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/community/t3.png" alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/community/t4.png" alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/community/t1.png" alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/community/t2.png" alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/community/t3.png" alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/community/t4.png" alt=""/>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}