import React from "react";
import "./about.scss";

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-pic"></div>
      <div className="about-us">
        <div className="about-text">
          <h3>About us</h3>
          <p>
            We work exclusively with trusted manufacturers guaranteeing the
            latest range, including limited must-havy. The selection in our
            store is very subjective, based on timeless designs, functionality,
            natural materials and original solutions.
          </p>
          <br />
          <p>
            We do not rest on our laurels, so we still expanding with new makes
            and models, so that the displayed products always reflect the world
            stage.
          </p>
        </div>
        <div className="about-map">map</div>
      </div>
    </div>
  );
};

export default AboutPage;
