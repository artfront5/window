import React from 'react';

function Article({img, title, text}) {
  return (
    <div>
      <div className='box'>
        <img src={img} alt="" />
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Article;
