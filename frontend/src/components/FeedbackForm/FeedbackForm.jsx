import React from 'react';
import css from './FeedbackForm.module.scss';

function FeedbackForm(props) {
  return (
    <div class={css.container}>
      <div class={css.form}>
        <h1 class={css.forh1}>Бесплатный вызов специалиста</h1>
        <p class={css.forp}>
          Оставьте заявку прямо сейчас и мы отправим специалиста к вам!
        </p>

        <div class={css.forinp}>
          <input class={css.inp} type="text" placeholder="Имя" />
          <input class={css.inp} type="text" placeholder="Номер" />
          <button className={`${css.btn} ${css.btn_brand}`}>Заказать замер</button>
        </div>
      </div>
    </div>
  );
}

export default FeedbackForm;
