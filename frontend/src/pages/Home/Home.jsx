import React from 'react';
import CompanyType from '../../components/CompanyType/CompanyType';
import FeedbackForm from '../../components/FeedbackForm/FeedbackForm';
import Production from '../../components/Production/Production';
import Slider from '../../components/Slider/SliderComp';
import StartSection from '../../components/StartSection/StartSection';
import StepWorks from '../../components/StepWorks/StepWorks';
import Main from '../../layout/main';
import { sliderText } from '../../mock/sliderText';
import css from './Home.module.scss';

function Home(props) {
  return (
    <Main>
      <StartSection />
      <Production />
      <CompanyType />
      <StepWorks />
      <FeedbackForm />
      <div className={css.wrapperSlider}>
        <Slider autoSlide={true}>
          {sliderText.map(({ id, name, text }) => (
            <p key={id} className={css.textP}>
              {' '}
              {name} <br />
              {text}
            </p>
          ))}
        </Slider>
      </div>
    </Main>
  );
}

export default Home;
