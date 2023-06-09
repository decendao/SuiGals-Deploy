import "./index.scss"
export default function Footer() {
  return (
    <div id="footer">
      <img src="/img/logo.png" className="logo"/>
      <div className="list">
        <a className="item" href="https://twitter.com/suigalsnft">
          <img src="/img/twitter.png" alt=""/>
        </a>
        <a className="item" href="https://discord.com/invite/bAsGGa6pvs">
          <img src="/img/discord.png" alt=""/>
        </a>

      </div>
      <h2>2023 SuiGals Official.</h2>
      <div className="fixed-box">
        <p>
          <span>SuiGals Official</span>
          <a href="https://twitter.com/suigalsnft" target="_blank">
          <img src="/img/rb/twitter_mini.png" alt=""/></a>
          <a href="https://discord.com/invite/bAsGGa6pvs" target="_blank">
          <img src="/img/rb/discord_mini.png" alt=""/></a>
          <a href="#" target="_blank">
          <img src="/img/rb/ins_mini.png" alt=""/></a>
       
        </p>
        <p>©Copyright Sui Global Foundation All rights reserved.</p>
        <p>The Face of Sui! </p>
      </div>
    </div>
  )
}