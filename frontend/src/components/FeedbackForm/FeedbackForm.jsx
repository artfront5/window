import React from 'react';
import css from './FeedbackForm.module.scss';

function FeedbackForm(props) {
  return (
    <div className={css.container}>
      <div className={css.form}>
        <h1 className={css.forh1}>Бесплатный вызов специалиста</h1>
        <p className={css.forp}>
          Оставьте заявку прямо сейчас и мы отправим специалиста к вам!
        </p>

        <div className={css.forinp}>
          <input className={css.inp} type="text" placeholder="Имя" />
          <input className={css.inp} type="text" placeholder="Номер" />
          <button className={`${css.btn} ${css.btn_brand}`}>Заказать замер</button>
        </div>
      </div>
    </div>
  );
}

export default FeedbackForm;
