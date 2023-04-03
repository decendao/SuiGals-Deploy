import "./index.scss";
import { useEffect } from "react";
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
              FUTURE
            </a>
            <a className='nav-item' href='#faq'>
              FAQ
            </a>
          </div>

          <div className='icon-list'>
            <a className='icon-item' href='https://twitter.com/suigalsnft' target='_blank'>
              <img src='/img/twitter_1.png' alt='' />
            </a>
            <a className='icon-item' href='https://discord.gg/bAsGGa6pvs' target='_blank'>
              <img src='/img/discord_1.png' alt='' />
            </a>
          </div>
        </div>
        <div className='menu-btn'>
          <img src='/img/menu.png' alt='' />
        </div>
      </div>
      <div id='header_banner'>
        <img src={baseUrl} alt='' />
      </div>
      {/* home页底部链接 */}
      <div className='home_foot'>
        <div>
          <a href='https://sui.art'>
            <img src='img/suiart.jpg' alt='' />
          </a>
          <h1 className='title'>sui.art</h1>
        </div>
        <div>
          <a href='https://sui.bluemove.net/launchpad'>
            <img src='img/bluemove.png' alt='' />
          </a>
          <h1 className='title'>bluemove</h1>
        </div>
        <div>
          <a href='https://www.sui.gallery'>
            <img src='img/suigallery.jpg' alt='' />
          </a>
          <h1 className='title'>sui.gallery</h1>
        </div>
        <div>
          <a href='https://clutchy.io'>
            <img src='img/clutchy.jpg' alt='' />
          </a>
          <h1 className='title'>clutchy</h1>
        </div>
      </div>
    </div>
  );
}
