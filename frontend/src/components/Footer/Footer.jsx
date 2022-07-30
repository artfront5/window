import React from 'react';
import css from './Footer.module.scss'

function Footer(props) {
  return (
    <div className={css.container}>
      <div className={css.content}>
        Компания "Оконный городок" | +7 (999) 999-99-99 | почта |
      </div>
    </div>
  );
}

export default Footer;
