import "./index.scss"
import {useEffect, useRef, useState} from "react";

const options = {
  // 图片路径
  image: "img/17.png",
  // 歌曲列表
  musics: [
    {
      url: "https://azuki-songs.s3.amazonaws.com/jacket/Choices%20(Yup).m4a",
      title: "Choices (Yup)",
      subtitle: "E-40"
    },
    {
      url: "https://azuki-songs.s3.amazonaws.com/jacket/Burn.m4a",
      title: "Burn",
      subtitle: "Juice WRLD"
    },
  ]
}

function Music() {
  const [open, setOpen] = useState(false)
  const [play, setPlay] = useState(false)
  const audio = useRef<HTMLAudioElement>(null)
  const [key, setKey] = useState(0)
  useEffect(() => {
    if (play) {
      audio.current?.play()
    }
  }, [key])
  function nextMusic() {
    if (key + 1 > musics.length - 1) {
      setKey(0)
    } else {
      setKey(key + 1)
    }
  }
  function preMusic() {
    if (key - 1 < 0) {
      setKey(musics.length - 1)
    } else {
      setKey(key - 1)
    }
  }
  function togglePlay() {
    if (audio.current?.paused) {
      audio.current?.play()
      setPlay(true)
    } else {
      audio.current?.pause()
      setPlay(false)
    }
  }
  useEffect(() => {
    audio.current?.addEventListener("ended", function () {
      nextMusic()
    })
  }, [])
  const musics = options.musics
  return (
    <div id="music" className={`${play ? 'play' : ''} ${open ? 'open' : ''}`} onClick={() => {
      console.log(open)
      !open ? setOpen(true) : null
    }}>
      <div className="image">
        <img src={options.image} alt=""/>
      </div>
      <div className="line-group">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="music-text">
        <div className="title">{musics[key].title}</div>
        <div className="subtitle">{musics[key].subtitle}</div>
      </div>
      <div className="actions">
        <audio src={musics[key].url} ref={audio}/>
        <div className="pre" onClick={preMusic}>
          <img src="/img/play-pre.png"/>
        </div>
        <div className="center" onClick={() => {
          togglePlay()
        }}>
          {
            play ? <img src="/img/pause.png"/> : <img src="/img/play.png"/>
          }
        </div>
        <div className="next" onClick={nextMusic}>
          <img src="/img/play-next.png"/>
        </div>
      </div>
      <div className="open-action" onClick={() => {
        setOpen(open => !open)
      }}>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  )
}
export default Music