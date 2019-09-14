import { defineMessages } from 'react-intl';

const scope = 'app.components.navbar.UserMenu';

export default defineMessages({
  changePassword: {
    id: `${scope}.changePassword`,
    defaultMessage: 'Change password',
  },
  changeBaseCurrency: {
    id: `${scope}.changeBaseCurrency`,
    defaultMessage: 'Change base currency',
  },
  logout: {
    id: `${scope}.logout`,
    defaultMessage: 'Logout',
  },
});
