import React from 'react';
import css from './Production.module.scss'
import {typeOption} from '../../mock/typeOption'
import Product from '../Product/Product';

function Production() {
  return (
    <>
      <div class={css.container}>
        <div class={css.title}>Наши услуги</div>
        <div className={css.content}>
          {typeOption.map(({ img, title, id}) => (
            <Product key={id} img={img} title={title} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Production;
