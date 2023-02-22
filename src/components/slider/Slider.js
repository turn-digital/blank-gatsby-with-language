import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import arrowLeft from "../../images/svg/icon-arrow--left.svg";
import arrowRight from "../../images/svg/icon-arrow--right.svg";

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button type="button" className={className} onClick={onClick}>
      <img src={arrowRight} alt="Right arrow icon" />
    </button>
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button type="button" className={className} onClick={onClick}>
      <img src={arrowLeft} alt="Left arrow icon" />
    </button>
  );
};

const SlickSlider = (props) => {
  const list = props.slide;
  const settings = {
    dots: true,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 890,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  return (
    <Slider className="slider" {...settings}>
      {list.map((anObjectMapped, index) => (
        <div className="slider__item" key={`${index}`}>
          <div className="slider__image">
            <img src={anObjectMapped.img.src} alt={anObjectMapped.title} />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SlickSlider;
