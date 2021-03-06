import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./carousel.scss";

export default () => (
  <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
    <div className="slide-text">
      <img src="https://i.ibb.co/WvLwbpd/snkrhdz-nike.jpg" alt="snkrhdz-nike" />
      <div className="text">
        <h1>AIR MAX 270 SE</h1>
        <p>
          Boasting the largest-ever Wmns <br />
          air heel unit created by Nike
        </p>
      </div>
    </div>
    <div className="slide-text reverse">
      <img
        src="https://i.ibb.co/hcPfn5C/adidas-hoodie.jpg"
        alt="snkrhdz-hoodie"
      />
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
        src="https://i.ibb.co/SJRVMXx/snkrhdz-adidas.jpg"
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
