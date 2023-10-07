import { useEffect, useState, useCallback, useRef } from "react";
import "./App.css";
import React from "react";
import Hero from "./components/hero";
import About from "./components/wrapper";
import HorizontalScroll from "react-scroll-horizontal";
import Loader from "./components/loader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollAnimation } from "./lib/gsap-scroll";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [changeSkin, setChangeSkin] = useState({
    isDark: true,
    isLight: false,
  });
  useEffect(() => {
    ScrollAnimation()
  }, [0]);

  return (
    <div className="App">
      <Loader />
      <Hero setChangeSkin={setChangeSkin} changeSkin={changeSkin} />
      {window.innerWidth > "800" ? (
        <HorizontalScroll reverseScroll={true}>
          <About changeSkin={changeSkin} />
        </HorizontalScroll>
      ) : (
        <About changeSkin={changeSkin} />
      )}
    </div>
  );
}

export default App;
