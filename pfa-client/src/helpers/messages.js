import { defineMessages } from 'react-intl';

const scope = 'app.helpers.requestHelper';

export default defineMessages({
  expiredToken: {
    id: `${scope}.title`,
    defaultMessage: 'Session has expired',
  },
  text: {
    id: `${scope}.text`,
    defaultMessage: 'You will be redirected to login',
  },
});
