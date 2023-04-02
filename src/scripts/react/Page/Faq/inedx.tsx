import "./index.scss"
import {useEffect} from "react";
import $ from "jquery"

export default function Faq() {
  useEffect(() => {
    $("#faq .list .open h2").show()
    $("#faq .list .item").click(function() {
      $("#faq .list .item h2").slideUp()
      $(this).siblings().removeClass("open")
      let h2 = $(this).children("h2")
      if ($(this).hasClass("open")) {
        $(this).removeClass("open")
        h2.slideUp()
      } else {
        h2.stop(false, false)
        $(this).addClass("open")
        h2.slideDown()
      }
    })
  }, [])
  return (
    <div id="faq">
      <div className="h1s">
        <h1>FAQ</h1>
      </div>
      <div className="list">
        <div className="item open">
          <div className="title">
            <h1>What is the PINK3 NFT?</h1>
            <div className="close">
              <img src="/img/zk.png" className="icon"/>
            </div>
          </div>
          <h2>
            VDOL is the first virtual modeling agency in the metaverse created for NFT entrepreneurs with earnings possibilities of holding NFTs instead of flipping.
            You are not only owning a digital collectible but also gaining access to the forefront of evolution in Virtual Humans industry metaverse.
            Our Vdols are meant to exist as actual celebrities with their own careers, performing in things like music videos and virtual runway shows to maintain a regular income.
          </h2>
        </div>
        <div className="item">
          <div className="title">
            <h1>VDOL is the first virtual modeling agency in the metaverse created for NFT?</h1>
            <div className="close">
              <img src="/img/zk.png" className="icon"/>
            </div>
          </div>
          <h2>
            VDOL is the first virtual modeling agency in the metaverse created for NFT entrepreneurs with earnings possibilities of holding NFTs instead of flipping.
            You are not only owning a digital collectible but also gaining access to the forefront of evolution in Virtual Humans industry metaverse.
            Our Vdols are meant to exist as actual celebrities with their own careers, performing in things like music videos and virtual runway shows to maintain a regular income.
          </h2>
        </div>
        <div className="item">
          <div className="title">
            <h1>VDOL is the first virtual modeling agency in the metaverse created for NFT?</h1>
            <div className="close">
              <img src="/img/zk.png" className="icon"/>
            </div>
          </div>
          <h2>
            VDOL is the first virtual modeling agency in the metaverse created for NFT entrepreneurs with earnings possibilities of holding NFTs instead of flipping.
            You are not only owning a digital collectible but also gaining access to the forefront of evolution in Virtual Humans industry metaverse.
            Our Vdols are meant to exist as actual celebrities with their own careers, performing in things like music videos and virtual runway shows to maintain a regular income.
          </h2>
        </div>
        <div className="item">
          <div className="title">
            <h1>VDOL is the first virtual modeling agency in the metaverse created for NFT?</h1>
            <div className="close">
              <img src="/img/zk.png" className="icon"/>
            </div>
          </div>
          <h2>
            VDOL is the first virtual modeling agency in the metaverse created for NFT entrepreneurs with earnings possibilities of holding NFTs instead of flipping.
            You are not only owning a digital collectible but also gaining access to the forefront of evolution in Virtual Humans industry metaverse.
            Our Vdols are meant to exist as actual celebrities with their own careers, performing in things like music videos and virtual runway shows to maintain a regular income.
          </h2>
        </div>
      </div>
    </div>
  )
}