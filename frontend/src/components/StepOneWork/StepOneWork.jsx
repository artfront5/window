import React from 'react';
import css from './StepOneWork.module.scss'

function StepOneWork({img, title, text }) {
  return (
    <div className={css.conteiner_card}>
      <div className={css.box}>
        <img src={img} alt="window" className={css.img} />
        <h2 className={css.boxh2}>{title}</h2>
        <p className={css.textp}>{text}</p>
      </div>
    </div>
  );
}

export default StepOneWork;
