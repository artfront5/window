import React from 'react';
import FormForCallBack from '../FormForCallBack/FormForCallBack';
import Modal from '../Modal/Modal';
import css from './StartSection.module.scss';

function StartSEction() {
  const [isModalActive, setIsModalActive] = React.useState(false);

  return (
    <section id={css.start} className={css.startSection}>
      <div className="container">
        <h1 className={css.display_5}>
          УСТАНОВКА ПЛАСТИКОВЫХ ОКОН В СПб <br />{' '}
          <span className={css.forrad}> ЧЕСТНЫЕ НИЗКИЕ ЦЕНЫ </span> <br />
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
            <img src={'img/wingr.png'} className={css.wing} alt="f" />
            <p className={css.startText1}>
              СКИДКИ ДЛЯ ПЕНСИОНЕРОВ И РАБОТНИКОВ БЮДЖЕТНОЙ СФЕРЫ
            </p>
          </span>
          <p className={css.startText}>
            Мы разработали уникальную систему скидок и бонусов для наших клиентов.
            Подробности можно уточнить у менеджеров: +7 (999) 55 61 99;
          </p>
          <span>
            <img src={'img/wingr.png'} className={css.wing} alt="f" />
            <p className={css.startText1}>БЕСПЛАТНЫЙ ЗАМЕР</p>
          </span>
          <p className={css.startText}>
            Замеры производит сертифицированный специалист в удобное для вас время —
            работаем в выходные дни.
          </p>
          <span>
            <img src={'img/wingr.png'} className={css.wing} alt="f" />
            <p className={css.startText1}>ОФИЦИАЛЬНАЯ ГАРАНТИЯ</p>
          </span>
          <p className={css.startText}>
            Даём официальную гарантию не просто на словах, а подкрепленную договором.
          </p>
        </div>
      </div>
      {isModalActive && (
        <Modal closeModal={setIsModalActive}>
          <FormForCallBack closeModal={setIsModalActive} />
        </Modal>
      )}
    </section>
  );
}

export default StartSEction;
