import React, {useState} from 'react';
import Header from '../Header';
import AccessForm from '../AccessForm';
import FormSection from '../AccessForm/FormSection';
import TextInput from '../AccessForm/TextInput';
import SelectInput from '../AccessForm/SelectInput';
import bgUrl from '../../assets/images/bg.png';
import styles from './App.module.scss';
import {useFormValidation, validateInputs} from '../../features/validation';

//Hardcoded data for testing purposes
import data from '../../data';

const App = () => {
  const [disabled, setDisabled] = useState(true);
  const [values, handleChange, handleBlur, handleSubmit, errors] =
    useFormValidation(
      {
        company_name: '',
        user_category: '',
        name: '',
        surname: '',
        position: '',
        corporate_email: '',
      },
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
            <FormSection title="Юридическое лицо">
              <TextInput
                id="company_name"
                type="text"
                value={values.company_name}
                onChange={handleChange}
                onBlur={handleBlur}
                errorMsg={errors.company_name || ''}
                fullWidth
                required
              >
                Название юридического лица&#42;
              </TextInput>
              <SelectInput
                id="user_category"
                onBlur={handleBlur}
                options={data}
              >
                Категория&#42;
              </SelectInput>
            </FormSection>
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
                id="corporate_email"
                type="email"
                value={values.corporate_email}
                onChange={handleChange}
                onBlur={handleBlur}
                errorMsg={errors.corporate_email || ''}
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
