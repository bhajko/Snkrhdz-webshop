import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
    <div>
      <img src="https://i.ibb.co/Rb1YSw7/snkrhdz-nike.png" alt="snkrhdz-nike" />
    </div>
    <div>
      <img src="https://i.ibb.co/mXGyH66/custom-1.png" alt="snkrhdz-hoodie" />
    </div>
    <div>
      <img
        src="https://i.ibb.co/MB1C6vL/snkrhdz-adidas.png"
        alt="snkrhdz-adidas"
      />
    </div>
  </Carousel>
);
