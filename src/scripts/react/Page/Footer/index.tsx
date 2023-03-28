import "./index.scss"
export default function Footer() {
  return (
    <div id="footer">
      <img src="/img/logo.png" className="logo"/>
      <div className="list">
        <a className="item" href="">
          <img src="/img/f1.png" alt=""/>
        </a>
        <a className="item" href="">
          <img src="/img/f2.png" alt=""/>
        </a>
        <a className="item" href="">
          <img src="/img/f3.png" alt=""/>
        </a>
      </div>
      <h2>2022 Pink 3 NFT. All Rights Reserved.</h2>
      <div className="fixed-box">
        <p>
          <span>Pink3 Official</span>
          <a href="#" target="_blank">
          <img src="/img/rb/twitter_mini.png" alt=""/></a>
          <a href="#" target="_blank">
          <img src="/img/rb/discord_mini.png" alt=""/></a>
          <a href="#" target="_blank">
          <img src="/img/rb/ins_mini.png" alt=""/></a>
          <a href="#" target="_blank">
          <img src="/img/rb/tikok_mini.png" alt=""/></a>
          <a href="#" target="_blank">
          <img src="/img/rb/opensea_mini.png" alt=""/></a>
        </p>
        <p>©Copyright YG Entertainment All rights reserved.</p>
        <p>Pink3 is the Revolution!</p>
      </div>
    </div>
  )
}