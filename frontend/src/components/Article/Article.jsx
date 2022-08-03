import React from 'react';
import ArticleInfo from '../ArticleInfo/ArticleInfo';
import Modal from '../Modal/Modal';
import css from './Article.module.scss';

function Article({ img, title, text}) {
  const [IsOpenModal, setIsOPenModal] =React.useState(false)
  return (
    <div className={css.cards__item}>
      <div className={css.card}>
        <img
          src={img}
          alt="window"
          className={`${css.card__image} ${css.card__image__fence}`}
        />
        <div className={css.card__content}>
          <h3 className={css.card__title}>{title}</h3>
          <button
            onClick={() => setIsOPenModal(true)}
            className={`${css.btn} ${css.btn_brand}`}
          >
            Читать
          </button>
        </div>
      </div>
      {IsOpenModal && <Modal closeModal={setIsOPenModal}>
        <ArticleInfo  img={img} title={title} text={text}/>
        </Modal>}
    </div>
  );
}

export default Article;
