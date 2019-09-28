import { defineMessages } from 'react-intl';

const scope = 'app.components.Navbar';

export default defineMessages({
  login: {
    id: `${scope}.login`,
    defaultMessage: 'Login',
  },
  signUp: {
    id: `${scope}.signUp`,
    defaultMessage: 'Sign up',
  },
  spendings: {
    id: `${scope}.spendings`,
    defaultMessage: 'Spendings',
  },
  stats: {
    id: `${scope}.stats`,
    defaultMessage: 'Stats',
  },
  globalCurrency: {
    id: `${scope}.globalCurrency`,
    defaultMessage: 'Currency',
  },
});
