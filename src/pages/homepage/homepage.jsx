import React from "react";
import Directory from "../../components/directory/directory";
import Carousel from "../../components/carousel/carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./homepage.scss";

const HomePage = () => {
  return (
    <>
      <Carousel />
      <div className="about">
        <div className="about-text">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aliquam possimus atque ad, quia dolor ex. Sint, ex hic. Dicta sed,
            exercitationem ipsam obcaecati voluptatem ex illum eos nostrum quas.
          </p>
        </div>
        <div className="about-pic">
          <img
            src="https://i.ibb.co/Jj0CVJK/air-max-red.png"
            alt="air-max-1-red"
          />
        </div>
      </div>
      <div className="homepage">
        <Directory />
      </div>
    </>
  );
};

export default HomePage;
