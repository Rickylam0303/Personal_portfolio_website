import React from "react";

const info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <div className="about__header">
          <i className="bx bx-award about__icon"></i>
          <h3 className="about__title">Experience</h3>
        </div>
        <span className="about__subtitle">
          Leveraging academic projects and hands-on practice
        </span>
      </div>

      <div className="about__box">
        <div className="about__header">
          <i className="bx bx-briefcase about__icon"></i>
          <h3 className="about__title">Completed</h3>
        </div>
        <span className="about__subtitle">
          Over 5 projects involving data analysis and modeling
        </span>
      </div>

      <div className="about__box">
        <div className="about__header">
          <i className="bx bx-support about__icon"></i>
          <h3 className="about__title">Support</h3>
        </div>
        <span className="about__subtitle">
          Available for collaboration and eager to learn
        </span>
      </div>
    </div>
  );
};

export default info;
