import { useDispatch } from 'react-redux';
import { useIntl  } from 'react-intl';

import { changePassword } from './actions';

import SharedLoginForm from '@components/shared/sharedLoginForm/SharedLoginForm';
import StyledChangePassword from './StyledChangePassword';
import StyledSharedLoginContainer from '@components/shared/sharedLoginContainer/StyledSharedLoginContainer';
import messages from './messages';


const ChangePassword = () => {
  const user = JSON.parse(localStorage.getItem('pfa-user'));

  const dispatch = useDispatch();

  const intl = useIntl();

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    dispatch(changePassword(user.email, values.password));
    resetForm({ password: '' });
    setSubmitting(false);
  };

  return (
    <StyledChangePassword>
      <StyledSharedLoginContainer>
        <SharedLoginForm
          onSubmit={onSubmit}
          buttonTitle={intl.formatMessage({ ...messages.buttonLabel })}
          displayPasswordField
        />
      </StyledSharedLoginContainer>
    </StyledChangePassword>
  )
}

export default ChangePassword;
