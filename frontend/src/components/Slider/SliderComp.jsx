import React from 'react';
import Slider from 'react-slick';
// import css from './Slider.module.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SliderComp({ slides }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  console.log(slides)
  return (
    <div>
      <Slider {...settings}>
        {/* {slides.map(slide => <img src={slide.img} alt="slide" />) } */}
        <img src='img/backg.png' alt="w" />
      </Slider>
    </div>
  );
}

export default SliderComp;
