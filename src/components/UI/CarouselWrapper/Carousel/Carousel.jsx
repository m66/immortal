import React, { Component } from "react";
import Slider from "react-slick";

import "./carousel.scss";

export default class SimpleSlider extends Component {
  componentDidMount() {
    console.log(
      document
        .getElementsByClassName("slick-center")[1]
        .previousSibling.classList.add("trans7deg")
    );
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      centerMode: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };

    return (
      <div>
        <Slider {...settings}>
          <div>
            <a href="">
              <img
                src="https://immortal.inc/storage/app/resized/ad0/a24/5ae/SD800x500_resized_ad0a245ae77cbd9ecf49a5919b977949a1fa0032.png"
                alt=""
              />
            </a>
          </div>
          <div>
            <a href="">
              <img
                src="https://immortal.inc/storage/app/resized/abc/d2b/fb3/bm%20800x500_resized_abcd2bfb31dc0774ec21cf8faa3ecbf4cef751bc.png"
                alt=""
              />
            </a>
          </div>
          <div>
            <a href="">
              <img
                src="https://immortal.inc/storage/app/resized/ae0/888/b07/Twitter%20post%20-%2020_resized_ae0888b075e8522dc03f2fcaf76ed3db2ea1ed1a.png"
                alt=""
              />
            </a>
          </div>
          <div>
            <a href="">
              <img
                src="https://immortal.inc/storage/app/resized/bfb/daa/c55/planeta_resized_bfbdaac55576c3b2611343639d957e15948a64d9.jpg"
                alt=""
              />
            </a>
          </div>
        </Slider>
      </div>
    );
  }
}
