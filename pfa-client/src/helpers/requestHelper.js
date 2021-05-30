import axios from 'axios';
import _ from 'lodash';
import Swal from 'sweetalert2';

import { history } from '../history';
import { intl } from '../index';
import messages from './messages';


const getRequestURL = (url) => window.location.host.search('pfa') !== -1 ? `api${url}` : url;

const privateRequest = (url, options, config) => {
  const tokenBearer = {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('pfa-token')}`,
    },
  };

  const axiosInstance = axios.create({
    headers: tokenBearer.headers,
    ...config,
  });

  axiosInstance.interceptors.response.use(
    response => response,
    err => {
     if (err.response.status && err.response.status === 401) {
       Swal.fire({
         title: intl.formatMessage({ ...messages.expiredToken }),
         text: intl.formatMessage({ ...messages.text }),
         type: 'info',
         grow: 'fullscreen',
         showConfirmButton: false,
         timer: 3000,
         onClose: () => {
           history.push('/logout');
         }
       })
     }
    // see https://stackoverflow.com/questions/56954527/handling-a-promise-reject-in-axios-interceptor
    // see https://stackoverflow.com/questions/49886315/axios-interceptors-response-undefined
    // see https://github.com/axios/axios#interceptors
    return Promise.reject(err);
    // throw err;
  });

  const requestURL = getRequestURL(url);
  return axiosInstance(requestURL, _.merge(options, tokenBearer));
};

const request = (url, options) => {
  const requestURL = getRequestURL(url);
  return axios(requestURL, options);
};

export {
  request,
  privateRequest,
};


