import React from 'react';
import Slider from 'react-slick';
// import css from './Slider.module.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';

function SliderComp({ children, autoSlide }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoSlide,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}

export default SliderComp;
