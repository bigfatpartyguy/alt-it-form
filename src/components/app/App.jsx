import React from 'react';
import Header from '../Header';
import bgUrl from '../../assets/images/bg.png';
import styles from './App.module.scss';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <section className={styles['demo-access']}>
          <img className={styles['demo-access__bg']} src={bgUrl} alt="" />
          <h2 className={styles['demo-access__title']}>
            Запросить демо-доступ
          </h2>
          <p>
            Доступ к платформе возможен исключительно для представителей,
            юридических лиц или индивидуальных предпринимателей
          </p>
        </section>
      </main>
    </div>
  );
};

export default App;
