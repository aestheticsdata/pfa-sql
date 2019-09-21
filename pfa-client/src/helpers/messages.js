import { defineMessages } from 'react-intl';

const scope = 'app.helpers.requestHelper';

export default defineMessages({
  expiredToken: {
    id: `${scope}.expiredToken`,
    defaultMessage: 'Session has expired',
  },
  text: {
    id: `${scope}.text`,
    defaultMessage: 'You will be redirected to login',
  },
});
