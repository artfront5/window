import React from 'react';
import css from './CompanyType.module.scss';

function CompanyType(props) {
  return (
    <div className="container">
      <div className={css.title}>Продукты от проверенных производителей</div>
      <div className={css.parallax_img}>
        <div className={css.content}>
          <img src={'img/Euroline.png'} alt="window" className={css.img} />
          <div className={css.text}>
            <h1 className={css.forh}>Veka</h1>
            <p className={css.forp}>
              Один из мировых лидеров в области разработки и производства оконных и
              дверных систем из высококачественного пластика.{' '}
            </p>
            <h1 className={css.forh}>Rexau</h1>
            <p className={css.forp}>
              Один из ведущих престижных брендов, объединяющий технологии на основе
              полимеров для строительства, автомобилестроения и промышленности.{' '}
            </p>
            <h1 className={css.forh}>Ivaper</h1>
            <p className={css.forp}>
              Бренд широко известен, как стандарт качества в области изготовления оконного
              ПВХ для производства металлопластиковых окон и дверей.{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyType;
