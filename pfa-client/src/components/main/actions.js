import { GET_USERS } from './constants';

export const getUsers = () => {
  console.log('getUsers action');
  return {
    type: GET_USERS,
  };
} ;
