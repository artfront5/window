import React from 'react';
import Main from '../../layout/main/index';
import { articlesData } from '../../mock/articlesData';
import Article from '../../components/Article/Article';
import css from './Articles.module.scss';
function Articles(props) {
  return (
    <Main>
      <div className={css.container}>
        <div class={css.content}>
          {articlesData.map((article) => (
            <Article key={article.id} {...article} />
          ))}
        </div>
      </div>
    </Main>
  );
}

export default Articles;
