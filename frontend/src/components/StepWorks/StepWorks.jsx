import React from 'react';
import StepOneWork from '../StepOneWork/StepOneWork';
import css from './StepWorks.module.scss'
import {stepWorkData} from '../../mock/stepWorkData'

function StepWorks(props) {
  return (
    <div className={css.container}>
      <div className={css.title}>Этапы работы</div>
      <div className={css.content}>
        {stepWorkData.map(({ id, img, title, text }) => (
          <StepOneWork key={id} img={img} title={title} text={text}/>
        ))}
      </div>
    </div>
  );
}

export default StepWorks;
