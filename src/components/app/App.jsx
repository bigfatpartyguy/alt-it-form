import React, {useState, useEffect} from 'react';
import {
  getUserCategory,
  getUserCountry,
  getLang,
  getIndustry,
} from '../../features/requests/loadData';
import {useFormValidation, validateInputs} from '../../features/validation';
import Header from '../Header';
import AccessForm from '../AccessForm';
import FormSection from '../AccessForm/FormSection';
import TextInput from '../AccessForm/TextInput';
import SelectInput from '../AccessForm/SelectInput';
import bgUrl from '../../assets/images/bg.png';
import styles from './App.module.scss';
const App = () => {
  const [userCategory, setUserCategory] = useState([]);
  const [userCoutry, setUserCountry] = useState([]);
  const [lang, setLang] = useState([]);
  const [industry, setIndustry] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [values, handleChange, handleBlur, handleSubmit, errors] =
    useFormValidation(
      {
        company_name: '',
        user_category: '',
        user_country: '',
        name: '',
        surname: '',
        position: '',
        corporate_email: '',
      },
      validateInputs,
      setDisabled
    );
  console.log(values);

  useEffect(() => {
    Promise.all([getUserCategory, getUserCountry, getLang, getIndustry])
      .then(responses => {
        const [catResponse, countryResopnse, langResponse, industryResponse] =
          responses;
        return Promise.all([
          catResponse(),
          countryResopnse(),
          langResponse(),
          industryResponse(),
        ]);
      })
      .then(results => {
        const [category, country, lang, industry] = results;
        setUserCategory(category.data.data);
        setUserCountry(country.data.data);
        setLang(lang.data.data);
        setIndustry(industry.data.data);
      });
  }, []);

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
              >
                Название юридического лица&#42;
              </TextInput>
              <SelectInput
                id="user_category"
                selectValue={[values.user_category]}
                onBlur={handleBlur}
                options={userCategory}
                onChange={handleChange}
                errorMsg={errors.user_category || ''}
              >
                Категория&#42;
              </SelectInput>
              <SelectInput
                id="user_country"
                selectValue={[values.user_country]}
                onBlur={handleBlur}
                options={lang}
                onChange={handleChange}
                errorMsg={errors.user_country || ''}
              >
                Страна&#42;
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
