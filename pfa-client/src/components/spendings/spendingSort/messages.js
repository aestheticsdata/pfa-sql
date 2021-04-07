import { defineMessages } from 'react-intl';

const scope = 'app.components.SpendingsSort';

export default defineMessages({
  SORT_BY_LABEL: {
    id: `${scope}.SORT_BY_LABEL`,
    defaultMessage: 'Label',
  },
  SORT_BY_CATEGORY: {
    id: `${scope}.SORT_BY_CATEGORY`,
    defaultMessage: 'Category',
  },
  SORT_BY_AMOUNT: {
    id: `${scope}.SORT_BY_AMOUNT`,
    defaultMessage: 'Amount',
  }
});
