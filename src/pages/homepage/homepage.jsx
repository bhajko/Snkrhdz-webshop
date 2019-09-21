import React from "react";
import Directory from "../../components/directory/directory";
import "./homepage.scss";
import Carousel from "../../components/carousel/carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomePage = () => {
  return (
    <>
      <Carousel />
      <div className="homepage">
        <Directory />
      </div>
    </>
  );
};

export default HomePage;
