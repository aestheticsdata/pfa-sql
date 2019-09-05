import axios from 'axios';
import _ from 'lodash';
import { history } from './history';



const privateRequest = (url, options) => {
  const tokenBearer = {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('pfa-token')}`,
    },
  };
  const axiosInstance = axios.create({
    headers: tokenBearer.headers,
  });
  axiosInstance.interceptors.response.use((response) => {
    return response;
  }, (err) => {
     if (err.response.status && err.response.status === 401) {
       history.push('/logout');
     }
    // return Promise.reject(err);
  });
  return axiosInstance(url, _.merge(options, tokenBearer));
};

const request = (url, options) => {
  return axios(url, options);
};

export {
  request,
  privateRequest,
};


