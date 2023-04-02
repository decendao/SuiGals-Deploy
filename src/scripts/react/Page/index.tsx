import Header from "./Header";
import { useEffect, useState } from "react";
import About from "./About";
import Genesis from "./Genesis";
import Roadmap from "./Roadmap";
import Team from "./Team";
import Faq from "./Faq/inedx";
import Footer from "./Footer";
import Community from "./Community";
import { useMoralis } from "react-moralis";
import Modal from "./Modal";
import Music from "./Music";
import Post from "./Post";
const message = "Sui-Native AIGC Metaverse!";

export default function Page() {
  const { authenticate, isAuthenticated, user } = useMoralis();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    function resize() {
      let width =
        document.documentElement.clientWidth || document.body.clientWidth;
      let dom = document.getElementsByTagName("html");
      dom[0].style.fontSize = (width / 1920) * 16 + "px";
    }
    resize();
    window.onresize = resize;
  }, []);

  return (
    <>
      <Modal modal={modal} setModal={setModal} isConnect={isAuthenticated} />
      <Header
        noConnect={!isAuthenticated}
        connect={() => authenticate({ signingMessage: message })}
        userAddress={user?.get("accounts")?.[0] ?? null}
        show={() => {
          console.log("show1");
          setModal(true);
          if (!isAuthenticated) {
            authenticate({ signingMessage: message });
          }
        }}
      />
      <About />
      {/* <video
        src='/video/a.mp4'
        autoPlay
        width='100%'
        height='100%'
        loop
        muted
      />
      <video
        src='/video/b.mp4'
        autoPlay
        width='100%'
        height='100%'
        loop
        muted
      /> */}

    

      <Roadmap />

      <Post imageList={[
        
        "/img/c1.png", "/img/c2.png", "/img/c3.png", "/img/c4.png","/img/c5.png",
       
    ]} />

      <Team />
      <Community />
      <Faq />
      <Footer />
      {/* <Music /> */}
    </>
  );
}
