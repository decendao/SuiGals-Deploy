import "./index.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
export default function About() {
  return (
    <div id="about">
      <div className="content">
        <div className="word">
          <div className="left">
            <h1>Virtual Idols</h1>
            <div className="subtitle"></div>
            <h2>
              Introducing "SuiGal," a Sui-Native NFT, set to become the
              metaverse ambassadors of the Sui network.
              <br />
              <br />
              SuiGal will consist of a diverse and talented lineup of virtual
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

          <div className="left">
            <h1>AIGC Metaverse</h1>
            <h2>
              As the era of AI dawns, Virtual Idols can independently write
              songs, compose music, generate music videos, and host live
              concerts, all while interacting with fans in the metaverse.
              <br />
              <br />
              We envision a future where virtual idols leverage artificial
              general intelligence to create unique and engaging content
              autonomously, reshaping the entertainment industry as we know it.
              <br />
              <br />
              Our virtual idols will be more than just human creations; they
              will possess self-awareness, independent thinking, and the ability
              to evolve alongside their audience.
              <br />
              <br />
              SuiGal will embark on their metaverse careers, releasing music
              videos, live streaming, and concerts.
            </h2>

            <h1>NFT Utility</h1>
            <h2>
              The NFT will empower fans to be a part of their favorite idols'
              journey in the metaverse, providing an unprecedented level of
              engagement and interaction.
              <br />
              <br />
              NFT Holders will enjoy voting rights, casting their vision in a
              DAO-voting for creative and career development decisions, sharing
              in the revenue generated by NFTs and intellectual property.
              <br />
              <br />
              SuiGals NFT Holders will participate, invest, and co-develop the
              virtual idols' ownership -- just like owning the SM Entertainment
              in the web3 world.
            </h2>

            <h1>NFT Utility</h1>
            <h2>
              Owning a Suigal NFT is akin to investing in a metaverse talent
              management company, allowing users to participate, invest, and
              co-develop the virtual idols' ownership.
              <br />
              <br />
              NFT Holders will enjoy voting rights, casting their vision in a
              DAO-voting for creative and career development decisions, sharing
              in the revenue generated by NFTs and intellectual property.
              <br />
              <br />
              Simple words, it’s just like owning the SM Entertainment in the
              web3 world.
            </h2>
          </div>
        </div>
        <div className="img">
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
