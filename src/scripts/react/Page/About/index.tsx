import "./index.scss";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
export default function About() {
  const [showMore, setShowMore] = useState(true);
  const [showText, setShowText] = useState(false);

  return (
    <div id='about'>
      <div className='content'>
        <div className='word'>
          <div className='left'>
            <h1>The Face of Sui!</h1>
            <div className='subtitle'></div>
            <h2>
              Introducing "SuiGals," a Sui-Native NFT, set to become the
              metaverse ambassadors of the Sui network.
              <br />
              <br />
              SuiGals will consist of a diverse and talented lineup of virtual
              idols, each with their own distinct personalities, styles, and
              abilities.
              <br />
              <br />
              With the power of AGI, these idols will independently write songs,
              compose music, generate music videos, and host live concerts, all
              while interacting with fans in the metaverse.
              <br />
              <br />
            </h2>
          </div>
          {showMore ? (
            <button
              className='more'
              onClick={() => {
                setShowMore(false);
                setShowText(true);
              }}
            >
              more
            </button>
          ) : null}

          {showText ? (
            <div className='left'>
              <h1>AIGC Metaverse</h1>
              <h2>
                As the era of AI dawns, Virtual Idols can independently write
                songs, compose music, generate music videos, and host live
                concerts, all while interacting with fans in the metaverse.
                <br />
                <br />
                We envision a future where virtual idols leverage artificial
                general intelligence to create unique and engaging content
                autonomously, reshaping the entertainment industry as we know
                it.
                <br />
                <br />
                Our virtual idols will be more than just human creations; they
                will possess self-awareness, independent thinking, and the
                ability to evolve alongside their audience.
                <br />
                <br />
                SuiGals will embark on their metaverse careers, releasing music
                videos, live streaming, and concerts.
              </h2>
            </div>
          ) : null}
        </div>
        <div className='img'>
          <Swiper
            className='swiper-container'
            pagination={true}
            modules={[Pagination, Autoplay]}
            slidesPerView='auto'
            loopedSlides={9}
            autoplay={{
              delay: 1800,
              disableOnInteraction: false,
            }}
            loop
          >
            <SwiperSlide>
              <img src='/img/11.png' alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='/img/12.png' alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='/img/13.png' alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='/img/14.png' alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='/img/05.png' alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='/img/06.png' alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='/img/07.png' alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='/img/08.png' alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='/img/15.png' alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='/img/16.png' alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='/img/17.png' alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='/img/09.png' alt='' />
            </SwiperSlide>

          </Swiper>
        </div>
        {/* <div className="right">
          <img src="/img/poster1.png" alt="" />


          <h2></h2>
        </div> */}

        
      </div>
    </div>
  );
}
