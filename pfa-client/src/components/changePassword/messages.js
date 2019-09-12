import { defineMessages } from 'react-intl';

const scope = 'app.components.ChangePassword';

export default defineMessages({
  buttonLabel: {
    id: `${scope}.changePasswordButtonLabel`,
    defaultMessage: 'Change password',
  },
  emailSubject: {
    id: `${scope}.changePasswordEmailSubject`,
    defaultMessage: 'PFA - password change',
  },
  changePasswordSuccessTitle: {
    id: `${scope}.changePasswordSuccessTitle`,
    defaultMessage: 'Success',
  },
  changePasswordSuccessText: {
    id: `${scope}.changePasswordSuccessText`,
    defaultMessage: 'Change password success',
  },
});
