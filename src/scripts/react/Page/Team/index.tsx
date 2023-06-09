import "./index.scss";

export default function Team() {
  return (
    <div id='team'>
      <div className='h1s'>
        <h1>TEAM </h1>
      </div>
      <h2></h2>
      <div className='list'>
        <div className='item'>
          <div
            className='img'
            style={{
              backgroundImage: "url(/img/06.png)",
            }}
          >
            <a
              href='https://twitter.com/buna_sui'
              style={{ display: "inline-block", width: "100%", height: "100%" }}
            ></a>
          </div>
          <h1>Buna</h1>
          <h2>Artist Director</h2>
        </div>
        <div className='item'>
          <div
            className='img'
            style={{
              backgroundImage: "url(/img/10.png)",
            }}
          >
            <a
              href='https://twitter.com/Suigals_boi'
              style={{ display: "inline-block", width: "100%", height: "100%" }}
            ></a>
          </div>
          <h1>SuiBoi</h1>
          <h2>Co-Founder</h2>
        </div>
        <div className='item'>
          <div
            className='img'
            style={{
              backgroundImage: "url(/img/02.png)",
            }}
          >
            <a
              href='https://twitter.com/evaaadyss'
              style={{ display: "inline-block", width: "100%", height: "100%" }}
            ></a>
          </div>
          <h1>Eva</h1>
          <h2>Community Manager</h2>
        </div>
        <div className='item'>
          <div
            className='img'
            style={{
              backgroundImage: "url(/img/marco.png)",
            }}
          >
            <a
              href='https://link3.to/invest'
              style={{ display: "inline-block", width: "100%", height: "100%" }}
            ></a>

          </div>
          <h1>Marco</h1>
          <h2>Developer</h2>
        </div>
      </div>
      <div className='list list-bottom'>
        <div className='item'>
          <div
            className='img'
            style={{
              backgroundImage: "url(/img/04.png)",
            }}
          >
            <a
              href='https://link3.to/invest'
              style={{ display: "inline-block", width: "100%", height: "100%" }}
            ></a>

          </div>
          <h1>Sandy</h1>
          <h2>Advisor</h2>
        </div>
        <div className='item'>
          <div
            className='img'
            style={{
              backgroundImage: "url(/img/03.png)",
            }}
          >
            <a
              href='https://link3.to/invest'
              style={{ display: "inline-block", width: "100%", height: "100%" }}
            ></a>
          </div>
          <h1>Amber</h1>
          <h2>Advisor</h2>
        </div>
        <div className='item'>
          <div
            className='img'
            style={{
              backgroundImage: "url(/img/05.png)",
            }}
          >
            <a
              href='https://link3.to/invest'
              style={{ display: "inline-block", width: "100%", height: "100%" }}
            ></a>
          </div>
          <h1>Dudu</h1>
          <h2>Ambassador</h2>
        </div>
        <div className='item'>
          <div
            className='img'
            style={{
              backgroundImage: "url(/img/01.png)",
            }}
          >
            <a
              href='https://link3.to/invest'
              style={{ display: "inline-block", width: "100%", height: "100%" }}
            ></a>
          </div>
          <h1>Nina</h1>
          <h2>Community Mod</h2>
        </div>
      </div>
    </div>
  );
}
