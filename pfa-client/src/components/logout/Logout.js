import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import {
  logout,
  logoutSuccess,
} from './actions';


const Logout = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.loginReducer.token);

  useEffect(() => {
    dispatch(logout());
  }, []);

  useEffect(() => {
    if (!localStorage.getItem('pfa-token')) {
      dispatch(logoutSuccess());
    }
  }, [token]);

  return null;
}

export default Logout;
