import React from 'react';
import Main from '../../layout/main/index';
import {articlesData} from '../../mock/articlesData'
import Article from '../../components/Article/Article';
function Articles(props) {
  return (
    <Main>
      <div>{articlesData.map((article) => 
      <Article key={article.id} {...article}/>
      )}</div>
    </Main>
  );
}

export default Articles;
