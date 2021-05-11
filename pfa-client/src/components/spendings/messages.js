import { defineMessages } from 'react-intl';

const scope = 'app.components.Spendings';

export default defineMessages({
  createSuccess: {
    id: `${scope}.createSuccess`,
    defaultMessage: 'New spending added',
  },
  updateSuccess: {
    id: `${scope}.updateSuccess`,
    defaultMessage: 'Update success',
  },
  deleteSuccess: {
    id: `${scope}.deleteSuccess`,
    defaultMessage: 'Delete success',
  },
  editModalButton: {
    id: `${scope}.editModalButton`,
    defaultMessage: 'Update',
  },
  editModalSpendingLabelPlaceholder: {
    id: `${scope}.editModalSpendingLabelPlaceholder`,
    defaultMessage: 'label',
  },
  editModalSpendingAmountPlaceholder: {
    id: `${scope}.editModalSpendingAmountPlaceholder`,
    defaultMessage: 'amount',
  },
  editModalSpendingCategoryPlaceholder: {
    id: `${scope}.editModalSpendingCategoryPlaceholder`,
    defaultMessage: 'category',
  },
  createModalButton: {
    id: `${scope}.createModalButton`,
    defaultMessage: 'Create',
  },
  cancelModalButton: {
    id: `${scope}.cancelModalButton`,
    defaultMessage: 'Cancel',
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
  recurrings: {
    id: `${scope}.recurrings`,
    defaultMessage: 'Recurrings',
  },
  initialCeilingSetSuccess: {
    id: `${scope}.initialCeilingSetSuccess`,
    defaultMessage: 'Initial ceiling set',
  },
  initialCeiling: {
    id: `${scope}.initialCeiling`,
    defaultMessage: 'Ceiling',
  },
  initialAmountSetSuccess: {
    id: `${scope}.initialAmountSetSuccess`,
    defaultMessage: 'Initial amount set',
  },
  initialAmount: {
    id: `${scope}.initialAmount`,
    defaultMessage: 'Initial amount',
  },
  remaining: {
    id: `${scope}.remaining`,
    defaultMessage: 'Remaining',
  },
  totalSpendingsOfMonth: {
    id: `${scope}.totalSpendingsOfMonth`,
    defaultMessage: 'Month Total',
  },
  copyRecurringsFromLastMonth: {
    id: `${scope}.copyRecurringsFromLastMonth`,
    defaultMessage: 'copy last month',
  },
  fileIsTooBig: {
    id: `${scope}.fileIsTooBig`,
    defaultMessage: 'file si too big, please select another file',
  },
  noInvoice: {
    id: `${scope}.noInvoice`,
    defaultMessage: 'No Invoice',
  },
  deleteImage: {
    id: `${scope}.deleteImage`,
    defaultMessage: 'delete image',
  },
  onlyThisFormat: {
    id: `${scope}.onlyThisFormat`,
    defaultMessage: 'only jpg file',
  },
  sendImageLabel: {
    id: `${scope}.sendImageLabel`,
    defaultMessage: 'send',
  },
  chooseFile: {
    id: `${scope}.chooseFile`,
    defaultMessage: 'choose a file',
  },
  totalsByDayRange: {
    id: `${scope}.totalsByDayRange`,
    defaultMessage: 'TOTAL BY DAY RANGE',
  },
  ceiling: {
    id: `${scope}.ceiling`,
    defaultMessage: 'Weekly ceiling :',
  },
  uncategorized: {
    id: `${scope}.uncategorized`,
    defaultMessage: 'uncategorized',
  },
  amountByCategoriesChartsTitle: {
    id: `${scope}.amountByCategoriesChartsTitle`,
    defaultMessage: 'Amount by categories',
  }
});
