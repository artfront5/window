import React from 'react';
import Modal from '../Modal/Modal';
import css from './StartSection.module.scss';

function StartSEction() {
  const [isModalActive, setIsModalActive] = React.useState(false);

  return (
    <section id={css.start} className={css.startSection}>
      <div className={css.container}>
        <h1 className={css.display_5}>
          УСТАНОВКА ПЛАСТИКОВЫХ ОКОН <p className={css.forrad}>ПО ГОСТ </p>
          НАПРЯМУЮ С ЗАВОДА
        </h1>
        <button
          onClick={() => setIsModalActive(true)}
          className={`${css.btn} ${css.btn_brand}`}
          target="_blank"
          rel="noreferrer"
        >
          Заказать обратный звонок
        </button>
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
      {isModalActive && (
        <Modal closeModal={setIsModalActive}>
          <div onClick={() => setIsModalActive(false)}>x</div>

          <label>
            Имя:
            <input type="text" />
          </label>
          <label>
            Номер:
            <input type="text" />
          </label>
          <button>Отправить</button>
        </Modal>
      )}
    </section>
  );
}

export default StartSEction;
