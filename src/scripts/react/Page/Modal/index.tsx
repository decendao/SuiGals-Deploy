import React, {useEffect, useState} from "react";
import moment from "moment";

const duration = moment.duration(moment("2022-05-20 05:20").diff(moment()))

type Props = {
  modal: boolean
  setModal(open: boolean):void
  isConnect: boolean
}

export default function Modal(props: Props) {
  const [time, setTime] = useState({
    day: 0,
    minute: 0,
    hour: 0,
    second: 0,
    allS: 0
  })

  function refreshTime() {
    setTime({
      day: duration.days(),
      minute: duration.minutes(),
      hour: duration.hours(),
      second: duration.seconds(),
      allS: duration.asSeconds() < 0 ? 0 : duration.asSeconds()
    })
  }

  useEffect(() => {
    refreshTime()
    let interval = setInterval(() => {
      duration.subtract(1, "seconds")
      refreshTime()
      if (duration.asSeconds() <= 0) {
        clearInterval(interval)
      }
    }, 1000)
  }, [])

  return (
    <div className={`dapp-modal ${props.modal ? "show" : "hide"}`}>
      <div id="dapp">
        {
          props.isConnect ? (
            <div className="flex" id="flex">
              {
                time.allS > 0 ? (
                  <div className="left flex-shrink-0 pt-5">
                    <div className="subtitle">PINK3 NFT</div>
                    <div className="title">COMING SOON</div>
                    <div className="xw">GET YOUR PINK3 NFT READY ?</div>
                    <div className="times">
                      <div className="time-item">
                        <div className="num">{time.day}</div>
                        <div className="name">DAY</div>
                      </div>
                      <div className="time-item">
                        <div className="num">{time.hour}</div>
                        <div className="name">HOUR</div>
                      </div>
                      <div className="time-item">
                        <div className="num">{time.minute}</div>
                        <div className="name">MINUTE</div>
                      </div>
                      <div className="time-item">
                        <div className="num">{time.second}</div>
                        <div className="name">SECOND</div>
                      </div>
                    </div>
                    <div className="icons">
                      <a href="#">
                        <img src="/img/twitter.png" alt=""/>
                      </a>
                      <a href="#">
                        <img src="/img/discord.png" alt=""/>
                      </a>
                      <a href="#">
                        <img src="/img/opensea.png" alt=""/>
                      </a>
                    </div>
                  </div>
                ): (
                  <span>COMING SOON</span>
                )
              }
            </div>
          ) : (
            <div className="no-wallet">
              <button className="primary" disabled onClick={() => {}}>PINK3 IS THE REVOLUTION! </button>
              <div className="use-block-explorer">
                PINK3 NFT<span className="emoji">❤️</span><span className="emoji"></span>
              </div>
            </div>
          )
        }
        <div className="close" onClick={() => {props.setModal(false)}}>X</div>
      </div>
    </div>
  )
}