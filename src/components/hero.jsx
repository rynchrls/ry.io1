import React, { useEffect, useState } from "react";
import Header from "./header";

function Hero({ changeSkin, setChangeSkin }) {
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      document.querySelectorAll(".layer").forEach((layer) => {
        const speed = layer.getAttribute("datatype");
        const x = (window.innerWidth - e.pageX * speed) / 150;
        const y = (window.innerWidth - e.pageY * speed) / 150;
        // layer.style.transform = 'translateX(0) translateY(0)'`translateX(${x}px) translateY(${y}px)`;
        if (window.innerWidth <= "600") {
          layer.style.transform = "translateX(0) translateY(0)";
        } else {
          layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
        }
      });
    });
  }, [window.innerWidth]);

  const handleClick = () => {
    const element = document.querySelector(".project");
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className={`hero ${changeSkin.isLight ? "hero-lightmode" : ""}`}>
      <Header changeSkin={changeSkin} setChangeSkin={setChangeSkin} />
      <section className="hero-wrapper">
        <img src="../img/ers.png" className="layer layer1" datatype="-5" />
        {window.innerWidth <= "600" ? (
          ""
        ) : (
          <img src="../img/3.png" className="layer" datatype="5" />
        )}
        <img src="../img/css.png" className="layer layer2" datatype="2" />
        {window.innerWidth <= "600" ? (
          ""
        ) : (
          <img src="../img/5.png" className="layer" datatype="6" />
        )}
        <img src="../img/db.png" className="layer layer3" datatype="8" />
        {window.innerWidth <= "600" ? (
          ""
        ) : (
          <img src="../img/7.png" className="layer" datatype="-2" />
        )}
        <img src="../img/json.png" className="layer layer4" datatype="4" />
        {window.innerWidth <= "600" ? (
          ""
        ) : (
          <img src="../img/6.png" className="layer" datatype="-9" />
        )}
        <img src="../img/npm.png" className="layer layer5" datatype="6" />
        {window.innerWidth <= "600" ? (
          ""
        ) : (
          <img src="../img/10.png" className="layer" datatype="-7" />
        )}
        <img src="../img/react.png" className="layer layer6" datatype="-5" />
        {window.innerWidth <= "600" ? (
          ""
        ) : (
          <img src="../img/12.png" className="layer" datatype="5" />
        )}
        <div className="hero-context layer" datatype="2">
          <h2 className={`title ${changeSkin.isLight ? "light-h2" : ""}`}>
            I'm <span className="front">Front-end</span>
            <br /> <span>Web Developer</span>
          </h2>
          <p>
            A passionate and aspiring developer from Philippines who took
            advantage of the technology to conquer the world of web development.
          </p>
          <div className={`${changeSkin.isLight ? 'learn-more-light' : 'learn-more'}`} onClick={handleClick}>Learn More</div>
        </div>
      </section>
    </section>
  );
}

export default Hero;
