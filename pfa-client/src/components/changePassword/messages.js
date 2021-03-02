import { defineMessages } from 'react-intl';

const scope = 'app.components.ChangePassword';

export default defineMessages({
  buttonLabel: {
    id: `${scope}.changePasswordButtonLabel`,
    defaultMessage: 'Change password',
  },
  emailSubject: {
    id: `${scope}.emailSubject`,
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
  changeBaseCurrencySuccessTitle: {
    id: `${scope}.changeBaseCurrencySuccessTitle`,
    defaultMessage: 'Success',
  },
  changeCurrencySuccessText: {
    id: `${scope}.changeCurrencySuccessText`,
    defaultMessage: 'Change base currency success',
  },
});
