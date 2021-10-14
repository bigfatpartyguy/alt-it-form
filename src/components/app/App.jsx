import React from 'react';
import Header from '../Header';
import AccessForm from '../AccessForm';
import FormSection from '../AccessForm/FormSection';
import TextInput from '../AccessForm/TextInput';
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
          <AccessForm>
            <FormSection title="Представитель юридического лица">
              <TextInput id="name" type="text">
                Имя&#42;
              </TextInput>
            </FormSection>
          </AccessForm>
        </section>
      </main>
    </div>
  );
};

export default App;
