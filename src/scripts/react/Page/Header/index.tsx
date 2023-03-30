import "./index.scss"
import {useEffect} from "react";
import $ from "jquery"
type Props = {
  show(): void
  connect():void
  noConnect: boolean
  userAddress: string|null
}
export default function Header(props: Props) {
  function id(str: string | null) {
    return str ? str.slice(0, 4) + "..." + str.slice(-4) : ""
  }
  useEffect(() => {
    $(".menu-btn").click(function() {
      $(".top-nav").addClass("active")
    })

    $("#header .m-d, #header .close").click(() => {
      $(".top-nav").removeClass("active")
    })
  }, [])
  return (
    <div id="header">
      <div className="top-nav">
        <img className="logo" src="/img/logo.png" alt=""/>
        <div className="m-d"/>
        <div className="right">
          <img src="/img/close.png" className="close"/>
          <div className="nav-list">
            <a className="nav-item" href="">
              HOME
            </a>
            <a className="nav-item" href="#about">
              NFT
            </a>
            <a className="nav-item" href="#roadmap">
              ROADMAP
            </a>
            <a className="nav-item" href="#team">
              TEAM
            </a>
            <a className="nav-item" href="#Concept">
              ART
            </a>
            <a className="nav-item" href="#faq">
              FAQ
            </a>
          </div>
          {
            props.noConnect ? (
              <div className="connect" onClick={()=>{
                props.connect()
              }}>
                <img src="/img/wallet.png" alt=""/>
                CONNECT WALLET
              </div>
            ) : (
              <div className="connect" onClick={()=>{
                console.log("show")
                props.show()
              }}>
                <img src="/img/wallet.png" alt=""/>
                {id(props.userAddress)}
              </div>
            )
          }
          <div className="icon-list">
            <a className="icon-item" href="#" target="_blank">
              <img src="/img/twitter_1.png" alt=""/>
            </a>
            <a className="icon-item" href="#" target="_blank">
              <img src="/img/discord_1.png" alt=""/>
            </a>
            <a className="icon-item" href="#" target="_blank">
              <img src="/img/opensea_1.png" alt=""/>
            </a>
          </div>
        </div>
        <div className="menu-btn">
          <img src="/img/menu.png" alt=""/>
        </div>
      </div>
      <video id="header-video" src="/video/headervid1.mp4" autoPlay loop muted/>


      <div className="coming-button" onClick={props.show}>
      Connect
      </div>
    </div>
  )
}