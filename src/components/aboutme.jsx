import React from "react";
import { Reveal } from "./Reveal";
import { Reveal2 } from "./Reveal";

function AboutMe({changeSkin}) {
  const toTop = () => {
    const element = document.querySelector(".hero");
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="about-me">
      <div className="section-title">
        <h1>About</h1>
        <h4>Personal and Experience Information</h4>
      </div>
      <div className="back-to-top">
        <h6 onClick={toTop}>{`Home />`}</h6>
      </div>
      <span className="web">Information</span>
      <div className="personal-information">
        <div className="front-end">
          <h2>Front-End Web Developer</h2>
        </div>
        <div className="horizontal-line-1">
          <span></span>
        </div>
        <div className="two-blocks">
          <span className="block-1"></span>
          <span className="block-3"></span>
          <span className="block-2"></span>
        </div>
        <div className="important-layer">
          <div className="important-layer-wrapper">
            <div className="important-layer-left container">
              <div className="personal-information-wrapper">
                <Reveal>
                  <div className="personal-information-container">
                    Personal Information
                  </div>
                </Reveal>
              </div>
              <div className="personal-name"><Reveal2>Ryan Charles Alcaraz</Reveal2></div>
              <span className="separated-line"></span>
              <div className="gender-age">
                <span><Reveal>Male</Reveal></span>
                <span><Reveal>22 yrs old</Reveal></span>
              </div>
              <div className="education"><Reveal2>Educational Attainment</Reveal2></div>
              <div className="education1">
                <Reveal>Senior High School Information and Communication Technologies</Reveal>
              </div>
              <div className="education2">
                <Reveal>Bachelor of Engineering Major in Computer Engineering{" "}
                {`(1st year only)`}</Reveal>
              </div>
            </div>
            <div className="important-layer-center container">
              <div className="personal-experience"><Reveal>Work Experience</Reveal></div>
              <div className="personal-experience-1"><Reveal2>Front-end Commission</Reveal2></div>
              <div className="personal-experience-2"><Reveal2>Graphic Designer</Reveal2></div>
              <span className="separated-line"></span>
              <div className="gender-age">
                <span><Reveal>Email</Reveal></span>
                <span><Reveal>Hero</Reveal></span>
              </div>
              <div className="personal-experience-3"><Reveal>Sales Agent</Reveal></div>
              <div className="personal-experience-4"><Reveal2>Excel Encoder</Reveal2></div>
            </div>
            <div className="important-layer-right container">
              <div className="technologies-stack"><Reveal>Technologies Stack</Reveal></div>
              <div className="html5"><Reveal2>HTML5</Reveal2></div>
              <div className="css3"><Reveal2>CSS3</Reveal2></div>
              <span className="separated-line"></span>
              <div className="gender-age">
                <span><Reveal>SCSS</Reveal></span>
                <span><Reveal>Tailwind</Reveal></span>
              </div>
              <div className="v-js"><Reveal2>JAVASCRIPT</Reveal2></div>
              <span className="separated-line"></span>
              <div className="gender-age">
                <span><Reveal>ReactJS</Reveal></span>
                <span><Reveal>Js Libraries</Reveal></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
