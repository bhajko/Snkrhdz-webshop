import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./carousel.scss";

export default () => (
  <Carousel showThumbs={false} showStatus={false}>
    <div className="slide-text">
      <img src="https://i.ibb.co/Rb1YSw7/snkrhdz-nike.png" alt="snkrhdz-nike" />
      <div className="text">
        <h1>AIR MAX 270 SE</h1>
        <p>
          Boasting the largest-ever Wmns <br />
          air heel unit created by Nike
        </p>
      </div>
    </div>
    <div className="slide-text reverse">
      <img src="https://i.ibb.co/mXGyH66/custom-1.png" alt="snkrhdz-hoodie" />
      <div className="text">
        <h1>ADIDAS TREFOIL</h1>
        <p>
          Shop the latest selection of <br />
          Adidas trefoil hoodies
        </p>
      </div>
    </div>
    <div className="slide-text reverse">
      <img
        src="https://i.ibb.co/MB1C6vL/snkrhdz-adidas.png"
        alt="snkrhdz-adidas"
      />
      <div className="text">
        <h1>NITE JOGGER</h1>
        <p>
          Inspired by a sneaker of the <br />
          Same name from 1979.
        </p>
      </div>
    </div>
  </Carousel>
);
