import React from 'react';
import Main from '../../layout/main/index';
import css from './Projects.module.scss'

function Projects(props) {
 
  return (
    <Main>
      <div className={css.container}>
        <div class={css.title}>Наши реализованные проекты</div>
        <div className={css.content}>
          
        </div>
      </div>
    </Main>
  );
}

export default Projects;
