import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { useIntl } from 'react-intl';

import {
  register,
  clearRegisterFailed,
} from './actions';

import StyledRegister from './StyledRegister';
import SharedLoginForm from "@components/shared/sharedLoginForm/SharedLoginForm";
import StyledSharedLoginContainer from '@components/shared/sharedLoginContainer/StyledSharedLoginContainer';
import messages from './messages';


const Register = ({ history }) => {
  const dispatch = useDispatch();
  const intl = useIntl();

  const token = useSelector(state => state.loginReducer.token);
  const registerFailed =  useSelector(state => state.registerReducer.failed);
  const registerErrorMessage = useSelector(state => state.registerReducer.errorMessage);

  const onSubmit = (values, { setSubmitting }) => {
    dispatch(register(values.email, values.password, values.currency));
    setSubmitting(false);
  };

  useEffect(() => {
    if (localStorage.getItem('pfa-token')) {
      history.push('/');
    }
  }, [token]);

  useEffect(() => {
    if (registerFailed) {
      Swal.fire({
        title: 'Error',
        text: registerErrorMessage,
        type: 'error',
        confirmButtonText: 'close',
        onClose: () => {
          dispatch(clearRegisterFailed());
        }
      })
    }
  }, [registerFailed]);

  return (
    <StyledRegister>
      <StyledSharedLoginContainer>
        <SharedLoginForm
          onSubmit={onSubmit}
          buttonTitle={intl.formatMessage({ ...messages.buttonLabel })}
          displayEmailField
          displayPasswordField
          displayCurrencyField
        />
      </StyledSharedLoginContainer>
    </StyledRegister>
  );
}

export default Register;
