import "./index.scss";
import { useRef } from "react";
import introJpeg from "../../assets/intro_bg.jpeg";
import introMp4 from "../../assets/intro_bg.mp4";
import introWebM from "../../assets/intro_bg.webm";

const Intro = () => {
  const videoRef = useRef();
  const setPlayBack = () => {
    videoRef.current.playbackRate = 0.25;
  };

  return (
    <>
      <section id="intro" className="intro container">
        <video
          autoPlay
          muted
          loop
          playsInline
          ref={videoRef}
          onCanPlay={() => setPlayBack()}
          poster={introJpeg}
        >
          <source src={introMp4} type="video/mp4" />
          <source src={introWebM} type="video/webm" />
        </video>
        <h1 className="intro__title" role="heading">
          Pei-Yi Chen
        </h1>
      </section>
    </>
  );
};

export default Intro;
