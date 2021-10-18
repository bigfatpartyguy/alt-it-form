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
import TextArea from '../AccessForm/TextArea/TextArea';
import bgUrl from '../../assets/images/bg.png';
import styles from './App.module.scss';
const App = () => {
  const [userCategory, setUserCategory] = useState([]);
  const [userCountry, setUserCountry] = useState([]);
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
        country: [],
        lang: '',
        industry: [],
      },
      validateInputs,
      setDisabled
    );

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
                options={userCountry}
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
            <FormSection title="Профессиональные интересы">
              <SelectInput
                id="country"
                selectValue={values.country}
                onBlur={handleBlur}
                options={userCountry}
                onChange={handleChange}
                errorMsg={errors.country || ''}
                multi
              >
                Целевые рынки&#42;
              </SelectInput>
              <SelectInput
                id="lang"
                selectValue={[values.lang]}
                onBlur={handleBlur}
                options={lang}
                onChange={handleChange}
                errorMsg={errors.lang || ''}
              >
                Предпочтительный язык&#42;
              </SelectInput>
              <SelectInput
                id="industry"
                selectValue={values.industry}
                onBlur={handleBlur}
                options={industry}
                onChange={handleChange}
                errorMsg={errors.industry || ''}
                multi
                fullWidth
              >
                Интересующие отрасли&#42;
              </SelectInput>
              <TextArea id="message" placeholder="Сообщение" />
            </FormSection>
          </AccessForm>
        </section>
      </main>
      <footer>FOoter</footer>
    </div>
  );
};

export default App;
