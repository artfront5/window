import React from 'react';
import CompanyType from '../../components/CompanyType/CompanyType';
import FeedbackForm from '../../components/FeedbackForm/FeedbackForm';
import Production from '../../components/Production/Production';
import Slider from '../../components/Slider/SliderComp';
import StartSection from '../../components/StartSection/StartSection';
import StepWorks from '../../components/StepWorks/StepWorks';
import Main from '../../layout/main';
import { sliderImg } from '../../mock/slider';
import css from './Home.module.scss'


function Home(props) {
  return (
    <Main>
      <div className={css.container}>
        <StartSection />
        <Production />
        <CompanyType />
        <StepWorks />
        <FeedbackForm />
        <Slider slides={sliderImg} />
      </div>
    </Main>
  );
}

export default Home;
