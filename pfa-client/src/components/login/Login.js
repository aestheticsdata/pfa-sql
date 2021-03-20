import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { NavLink } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';

import messages from './messages';
import {
  login,
  clearLoginFailed,
} from './actions';

import SharedLoginForm from '../shared/sharedLoginForm/SharedLoginForm';
import StyledLogin from './StyledLogin';
import StyledSharedLoginContainer from '../shared/sharedLoginContainer/StyledSharedLoginContainer';


const Login = ({ history }) => {
  const dispatch = useDispatch();
  const onSubmit = (values, { setSubmitting }) => {

    dispatch(login(values.email, values.password));
    setSubmitting(false);
  };
  const token = useSelector( state => state.loginReducer.token);
  const loginErrorMessage = useSelector(state => state.loginReducer.errorMessage);

  const intl = useIntl();

  useEffect(() => {
    if (localStorage.getItem('pfa-token')) {
      history.push('/');
    }
  }, [token]);

  useEffect(() => {
    if (loginErrorMessage !== '') {
      Swal.fire({
        title: intl.formatMessage({ ...messages.loginError }),
        text: loginErrorMessage,
        type: 'error',
        confirmButtonText: 'close',
        willClose: () => {
          dispatch(clearLoginFailed());
        }
      })
    }
  }, [loginErrorMessage]);


  return (
    <>
      {
        token ?
          null
          :
          <StyledLogin>
            <StyledSharedLoginContainer>
              <SharedLoginForm
                onSubmit={onSubmit}
                buttonTitle={intl.formatMessage({ ...messages.buttonLabel })}
                displayEmailField
                displayPasswordField
              />
              <div className="pwd-forgot">
                <NavLink to="/forgotpassword">
                  <FormattedMessage
                    {...messages.forgotPassword}
                  />
                </NavLink>
              </div>
            </StyledSharedLoginContainer>
          </StyledLogin>
      }
    </>
  );
}

export default Login;
