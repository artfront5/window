import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import css from './index.module.scss';

function Main({ children }) {
  return (
    <div className={css.container}>
      <Header />
      <main className={css.content}>{children}</main>
      <Footer />
    </div>
  );
}

export default Main;
