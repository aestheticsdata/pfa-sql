import axios from 'axios';
import _ from 'lodash';



const privateRequest = (url, options) => {
  const tokenBearer = {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('pfa-token')}`,
    },
  };
  console.log('tokenBearer : ', tokenBearer.headers);
  // const axiosInstance = axios.create({
  //   headers: tokenBearer.headers,
  // });
  // axiosInstance.interceptors.response.use((response) => {
  //   console.log('axios interceptor response : ', response.status);
  // }, (err) => {
  //   return Promise.reject(err);
  // });
  // return axiosInstance(url, options);
  return axios(url, _.merge(options, tokenBearer));
};

const request = (url, options) => {
  return axios(url, options);
};

export {
  request,
  privateRequest,
};


