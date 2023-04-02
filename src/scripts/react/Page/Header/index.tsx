import "./index.scss";
import { useEffect, useLayoutEffect } from "react";
import { baseUrl } from "./constant";
import $ from "jquery";
type Props = {
  show(): void;
  connect(): void;
  noConnect: boolean;
  userAddress: string | null;
};
export default function Header(props: Props) {
  function id(str: string | null) {
    return str ? str.slice(0, 4) + "..." + str.slice(-4) : "";
  }

  useLayoutEffect(() => {
    const element = document.getElementById(
      "header-video"
    )! as HTMLVideoElement;
    element.oncanplay = () => {
      $("#header-video").addClass("mask");
    };
  }, []);
  useEffect(() => {
    $(".menu-btn").click(function () {
      $(".top-nav").addClass("active");
    });

    $("#header .m-d, #header .close").click(() => {
      $(".top-nav").removeClass("active");
    });
  }, []);
  return (
    <div id='header'>
      <div className='top-nav'>
        <img className='logo' src='/img/logo.png' alt='' />
        <div className='m-d' />
        <div className='right'>
          <img src='/img/close.png' className='close' />
          <div className='nav-list'>
            <a className='nav-item' href=''>
              HOME
            </a>
            <a className='nav-item' href='#about'>
              NFT
            </a>
            <a className='nav-item' href='#roadmap'>
              ROADMAP
            </a>
            <a className='nav-item' href='#team'>
              TEAM
            </a>
            <a className='nav-item' href='#post'>
              ART
            </a>
            <a className='nav-item' href='#faq'>
              FAQ
            </a>
          </div>

          <div className='icon-list'>
            <a className='icon-item' href='#' target='_blank'>
              <img src='/img/twitter_1.png' alt='' />
            </a>
            <a className='icon-item' href='#' target='_blank'>
              <img src='/img/discord_1.png' alt='' />
            </a>
            <a className='icon-item' href='#' target='_blank'>
              <img src='/img/opensea_1.png' alt='' />
            </a>
          </div>


        </div>
        <div className='menu-btn'>
          <img src='/img/menu.png' alt='' />
        </div>
      </div>
      <div id='header-video'>
        <img src={baseUrl} alt='' style={{ width: "100%", height: "auto" }} />
      </div>
      {/* <video
        id='header-video'
        src='/video/headervid1.mp4'
        autoPlay
        poster={baseUrl}
        loop
        muted
      /> */}
      {/* home页底部链接 */}
      <div className='home_foot'>
        <div>
          <a href='#'>
            <img src='img/16.png' alt='' />
          </a>
        </div>
        <div>
          <a href='#'>
            <img src='' alt='' />
          </a>
        </div>
        <div>
          <a href='#'>
            <img src='' alt='' />
          </a>
        </div>
        <div>
          <a href='#'>
            <img src='' alt='' />
          </a>
        </div>
      </div>
    </div>
  );
}
