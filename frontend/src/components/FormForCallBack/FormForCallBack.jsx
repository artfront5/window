import React from 'react';
import css from './FormForCallBack.module.scss';

function FormForCallBack({ closeModal }) {
  return (
    <div className={css.modalStyle}>
      <svg
        onClick={() => closeModal(false)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        role="img"
        className={css.svgStyle}
      >
        <path d="M602.51 512l402.745-402.745a64 64 0 00-90.51-90.51L512 421.49 109.255 18.745a64 64 0 00-90.51 90.51L421.49 512 18.745 914.745a64 64 0 0090.51 90.51L512 602.51l402.745 402.745a64 64 0 0090.51-90.51z" />
      </svg>

      <div className={css.forInput}>
        <label className={css.name} for="name">
          Имя
        </label>
        <input className={css.inp} id="name" type="text" />
      </div>
      <div className={css.forInput}>
        <label className={css.name} for="number">
          Номер
        </label>
        <input className={css.inp} id="number" type="text" />
      </div>
      <button className={`${css.btn} ${css.btn_brand}`}>Отправить</button>
    </div>
  );
}

export default FormForCallBack;
