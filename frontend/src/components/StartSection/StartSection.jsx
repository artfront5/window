import React from 'react';
import css from './StartSection.module.scss';


function StartSEction(props) {
  return (
    <section id={css.start} className={css.startSection}>
      <div className={css.container}>
        <h1 className={css.display_5}>
          УСТАНОВКА ПЛАСТИКОВЫХ ОКОН <p className={css.forrad}>ПО ГОСТ </p>
          НАПРЯМУЮ С ЗАВОДА
        </h1>
        <a
          href="https://www.garagebarbers.net/"
          className={`${css.btn} ${css.btn_brand}`}
          target="_blank"
          rel="noreferrer"
        >
          Заказать обратный звонок
        </a>
        <div className={css.allTextWing}>
          <span>
            <img src={'img/pngwing.png'} className={css.wing} alt="f" />
            <p className={css.startText1}>НИЗКИЕ ЦЕНЫ</p>
          </span>
          <p className={css.startText}>
            Мы ориентируемся на рынок и предлагаем цену ниже.
          </p>
          <span>
            <img src={'img/pngwing.png'} className={css.wing} alt="f" />
            <p className={css.startText1}>НАША ПРОДУКЦИЯ СЕРТИФИЦИРОВАНА</p>
          </span>
          <p className={css.startText}>
            Наша продукция имеет сертификаты соответствующие текущим ГОСТ
          </p>
          <span>
            <img src={'img/pngwing.png'} className={css.wing} alt="f" />
            <p className={css.startText1}>ОФИЦИАЛЬНАЯ ГАРАНТИЯ</p>
          </span>
          <p className={css.startText}>
            Даём официальную гарантию не просто на словах, а подкрепленную договором.
          </p>
        </div>
      </div>
    </section>
  );
}

export default StartSEction;
