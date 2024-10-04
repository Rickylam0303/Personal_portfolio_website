import React from "react";
import "./about.css";
import AboutImg from "../../assets/about.png";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid ">
        <img src={AboutImg} alt="" className="sbout__img" />
        <div className="about__data">
          <Info />
          <p className="aboiut__description">
            {" "}
            I am a dedicated Data Science student with a strong passion for
            uncovering insights through data. Over the past few months, I've
            completed over five projects, honing my skills in Python, machine
            learning, and data visualization. I'm eager to apply my knowledge in
            a real-world setting and contribute to impactful projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
