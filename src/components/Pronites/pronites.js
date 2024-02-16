import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <Carousel autoPlay>
    <div>
      <img alt="" src={require('../../assets/img/4041.png')} />
      <p className="legend">COMEDY NIGHT</p>
    </div>
    <div>
      <img alt="" src={require('../../assets/img/Pronites/ATM7835_Base Guns - DJ Night.jpg')}/>
      <p className="legend">EDM NIGHT</p>
    </div>
  </Carousel>
);
