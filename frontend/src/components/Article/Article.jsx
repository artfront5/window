import React from 'react';
import ArticleInfo from '../ArticleInfo/ArticleInfo';
import Modal from '../Modal/Modal';
import css from './Article.module.scss';

function Article({ img, title, text}) {
  const [IsOpenModal, setIsOPenModal] =React.useState(false)
  return (
    <div class={css.cards__item}>
      <div class={css.card}>
        <img
          src={img}
          alt="window"
          class={`${css.card__image} ${css.card__image__fence}`}
        />
        <div class={css.card__content}>
          <h3 class={css.card__title}>{title}</h3>
          <button
            onClick={() => setIsOPenModal(true)}
            class={`${css.btn} ${css.btn_brand}`}
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
