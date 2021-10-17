import axios from 'axios';

export const getUserCategory = () => {
  return axios.get('api/v1/public/user_category/input_list');
};

export const getUserCountry = () => {
  return axios.get('api/v1/public/country/input_list');
};

export const getLang = () => {
  return axios.get('api/v1/public/lang/input_list');
};

export const getIndustry = () => {
  return axios.get('api/v1/public/industry/input_list');
};
