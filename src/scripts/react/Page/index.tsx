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
      <Post imageList={["/img/28.png.png", "/img/338.png", "/img/344.png"]} />
      <Post imageList={["/img/35.png", "/img/380.png", "/img/385.png"]} />
      <Post imageList={["/img/44.png", "/img/513.png", "/img/17.png"]} />

      <Roadmap />
      <Team />
      <Community />
      <Genesis />
      <Faq />
      <Footer />
      {/* <Music /> */}
    </>
  );
}
