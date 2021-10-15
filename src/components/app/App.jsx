import React, {useState} from 'react';
import Header from '../Header';
import AccessForm from '../AccessForm';
import FormSection from '../AccessForm/FormSection';
import TextInput from '../AccessForm/TextInput';
import bgUrl from '../../assets/images/bg.png';
import styles from './App.module.scss';
import {useFormValidation, validateInputs} from '../../features/validation';
const App = () => {
  const [disabled, setDisabled] = useState(true);
  const [values, handleChange, handleBlur, handleSubmit, errors] =
    useFormValidation(
      {name: '', surname: '', position: '', email: ''},
      validateInputs,
      setDisabled
    );
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
              <TextInput
                id="name"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                errorMsg={errors.name || ''}
              >
                Имя&#42;
              </TextInput>
              <TextInput
                id="surname"
                type="text"
                value={values.surname}
                onChange={handleChange}
                onBlur={handleBlur}
                errorMsg={errors.surname || ''}
              >
                Фамилия&#42;
              </TextInput>
              <TextInput
                id="position"
                type="text"
                value={values.position}
                onChange={handleChange}
                onBlur={handleBlur}
                errorMsg={errors.position || ''}
              >
                Должность&#42;
              </TextInput>
              <TextInput
                id="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                errorMsg={errors.email || ''}
              >
                Ваш корпоративный email&#42;
              </TextInput>
            </FormSection>
          </AccessForm>
        </section>
      </main>
    </div>
  );
};

export default App;
