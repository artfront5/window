import React from 'react';
import css from './Article.module.scss'

function ArticleInfo({img, title, text}) {
  
  return (
    <div className={css.articleWrapper}>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default ArticleInfo;
