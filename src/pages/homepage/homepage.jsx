import React from "react";
import Directory from "../../components/directory/directory";
import Carousel from "../../components/carousel/carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./homepage.scss";

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
