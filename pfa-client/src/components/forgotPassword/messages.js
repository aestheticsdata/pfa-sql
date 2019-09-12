import { defineMessages } from 'react-intl';

const scope = 'app.components.ForgotPassword';

export default defineMessages({
  buttonLabel: {
    id: `${scope}.resetPasswordButtonLabel`,
    defaultMessage: 'Reset password',
  },
  emailSentSuccessTitle: {
    id: `${scope}.emailSentSuccessTitle`,
    defaultMessage: 'Success',
  },
  emailSentSuccessMessage: {
    id: `${scope}.emailSentSuccessMessage`,
    defaultMessage: 'A recovery password has been sent to your email',
  },
  emailSentErrorTitle: {
    id: `${scope}.emailSentErrorTitle`,
    defaultMessage: 'Recovery password error',
  },
  emailSubject: {
    id: `${scope}.emailSubject`,
    defaultMessage: 'password recovery from PFA',
  },
});

