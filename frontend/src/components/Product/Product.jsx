import React from 'react';
import css from './Product.module.scss';

function Product({ img, title }) {
  return (
    <div className={css.conteiner_card}>
    <div className={css.box}>
      <img src={img} alt="window" class={css.img} />
    </div>
      <p className={css.boxp}>{title}</p>
    </div>
  );
}

export default Product;
