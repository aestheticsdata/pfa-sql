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
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  globalCurrency: {
    id: `${scope}.globalCurrency`,
    defaultMessage: 'Global currency',
  },
});
