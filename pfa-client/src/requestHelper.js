import axios from 'axios';
import _ from 'lodash';


const privateRequest = (url, options) => {
  const tokenBearer = {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('pfa-token')}`,
    },
  };
  return axios(url, _.merge(options, tokenBearer));
};

const request = (url, options) => {
  return axios(url, options);
};

export {
  request,
  privateRequest,
};


