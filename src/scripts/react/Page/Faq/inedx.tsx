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
            <h1>When is the SuiGals NFT Mint/Launch?</h1>
            <div className="close">
              <img src="/img/zk.png" className="icon"/>
            </div>
          </div>
          <h2>
          The SuiGals NFT launch is scheduled to coincide with the Sui Token generation next month. Stay tuned for the exact date announcement on our social media channels!
          </h2>
        </div>
        <div className="item">
          <div className="title">
            <h1>Where can I mint SuiGal NFTs?</h1>
            <div className="close">
              <img src="/img/zk.png" className="icon"/>
            </div>
          </div>
          <h2>
          SuiGals NFTs will be launched & traded on all major Sui NFT Marketplaces and Launchpads. More details regarding the platform will be shared soon on our website and social media channels.
          </h2>
        </div>
        <div className="item">
          <div className="title">
            <h1>What is the price and the total supply of SuiGals NFTs?</h1>
            <div className="close">
              <img src="/img/zk.png" className="icon"/>
            </div>
          </div>
          <h2>
          The price and the total supply of SuiGal NFTs is yet to be determined. More information about the supply will be provided prior to the official launch.
          </h2>
        </div>
        <div className="item">
          <div className="title">
            <h1>How can I get whitelisted for the SuiGals NFT launch?</h1>
            <div className="close">
              <img src="/img/zk.png" className="icon"/>
            </div>
          </div>
          <h2>
          To get on the whitelist, follow our social media accounts and join our official community channels. We will announce the specific steps and requirements for whitelisting in the coming weeks!
          </h2>
        </div>

        <div className="item">
          <div className="title">
            <h1>How will the SuiGals NFT project benefit the overall Sui ecosystem?</h1>
            <div className="close">
              <img src="/img/zk.png" className="icon"/>
            </div>
          </div>
          <h2>
          The SuiGals NFT project will bring more diversity and fun to the Sui ecosystem, attracting web3 and AI enthusiasts, driving user engagement, and fostering a thriving community around the Sui Network.
          </h2>
        </div>

      </div>
    </div>
  )
}