import React from 'react';
import Main from '../../layout/main/index';
import css from './Projects.module.scss';
// import Slider from '../../components/Slider/SliderComp';
import { sliderImg } from '../../mock/slider';
import Slider from 'react-slick';

function Projects(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Main>
      <div className={css.container}>
        <div className={css.title}>Наши реализованные проекты</div>
        <div className={css.content}>
          <Slider {...settings}>
            {sliderImg.map((slide) => (
              <img src={slide} alt="t" />
            ))}
          </Slider>
        </div>
      </div>
    </Main>
  );
}

export default Projects;
