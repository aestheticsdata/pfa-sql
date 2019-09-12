import axios from 'axios';
import _ from 'lodash';
import Swal from 'sweetalert2';

import { history } from '../history';
import { intl } from '../index';
import messages from './messages';


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


