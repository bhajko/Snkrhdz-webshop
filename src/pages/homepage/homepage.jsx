import React from "react";
import Directory from "../../components/directory/directory";
import Carousel from "../../components/carousel/carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HomePageContainer } from "./homepage.styled";

const HomePage = () => {
  return (
    <>
      <Carousel />
      <HomePageContainer>
        <Directory />
      </HomePageContainer>
    </>
  );
};

export default HomePage;
