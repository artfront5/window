import React from 'react';
import css from './Production.module.scss'
import {typeOption} from '../../mock/typeOption'

function Production() {
  return (
    <>
      <div class={css.container}>
        <div class={css.title}>Наша продукция</div>
        <div className={css.content}>
          {typeOption && typeOption.map((item) => 
          <div key={item.id} className={css.box}>
          <img src={item.img} alt="window" class={css.img} />
          <p>{item.title}</p>
          </div>)}
          </div>
      </div>
    </>
  );
}

export default Production;
