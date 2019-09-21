import { defineMessages } from 'react-intl';

const scope = 'app.components.Spendings';

export default defineMessages({
  createSuccess: {
    id: `${scope}.createSuccess`,
    defaultMessage: 'New spending added',
  },
  deleteSuccess: {
    id: `${scope}.deleteSuccess`,
    defaultMessage: 'Delete success',
  },
  confirmDeleteTitle: {
    id: `${scope}.confirmDeleteTitle`,
    defaultMessage: 'Confirm delete ?',
  },
  confirmDeleteCancelButton: {
    id: `${scope}.confirmDeleteCancelButton`,
    defaultMessage: 'Cancel',
  },
  confirmDeleteConfirmButton: {
    id: `${scope}.confirmDeleteConfirmButton`,
    defaultMessage: 'Delete',
  },
});