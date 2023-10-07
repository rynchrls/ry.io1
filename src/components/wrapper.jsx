import React from "react";
import "../about.css";
import { Reveal } from "./Reveal";
import Project from "./project";
import AboutMe from "./aboutme";
import Contact from "./contact";
import Project2 from "./project2";

function About({changeSkin}) {


  return (
    <section className="for-all-section">
      <div className="timeline" />
      <Project changeSkin={changeSkin} />
      <Project2  changeSkin={changeSkin} />
      <AboutMe changeSkin={changeSkin}  />
      <Contact changeSkin={changeSkin} />
    </section>
  );
}

export default About;
