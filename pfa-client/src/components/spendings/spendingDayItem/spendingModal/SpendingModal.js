import { useDispatch } from 'react-redux';
import format from 'date-fns/format';
import {FormattedMessage} from 'react-intl';

import {
  Formik,
  Form,
  Field,
} from 'formik';

import {
  createRecurring,
  updateRecurring,
  createSpending,
  updateSpending,
} from '../../actions';

import messages from '../../messages';
import StyledSpendingModal from './StyledSpendingModal';


const SpendingModal = ({
    date,
    closeModal,
    user,
    spending,
    recurringType,
    isEditing,
    month,
  }) => {
  const dispatch = useDispatch();

  const onSubmit = (values, { setSubmitting }) => {
    const spendingEdited = {
      // this format date is required to avoid inconsistency
      // when axios convert date in POST request
      // see https://github.com/axios/axios/issues/567
      date: date ? format(date, 'yyyy-MM-dd') : null,
      // ///////////////////////////////////////////////////
      label: values.label,
      amount: values.amount,
      category: values.category,
      currency: user.baseCurrency,
      userID: user.id,
      id: spending._id,
    };

    if (isEditing) {
      if (recurringType) {
        dispatch(updateRecurring(spendingEdited));
      } else {
        dispatch(updateSpending(spendingEdited));
      }
    } else {
      if (recurringType) {
        const formattedMonth = {
          start: format(month.start, 'yyyy-MM-dd'),
          end: format(month.end, 'yyyy-MM-dd'),
        };
        dispatch(createRecurring(spendingEdited, formattedMonth));
      } else {
        dispatch(createSpending(spendingEdited));
      }
    }

    closeModal();
    setSubmitting(false);
  };

  return (
    <StyledSpendingModal
      recurringType={recurringType}
    >
      <div className="spending-modal-container">
        <Formik
          initialValues={{
            label: spending.label || '',
            amount: spending.amount || '',
            category: spending.category || '',
          }}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, errors }) => (
            <Form>
              <Field
                type="text"
                name="label"
                placeholder="label"
              />
              <Field
                type="number"
                name="amount"
                placeholder="amount"
              />
              {
                !recurringType ?
                  <Field
                    type="text"
                    name="category"
                    placeholder="category"
                  />
                  :
                  null
              }
              <button
                type="submit"
                disabled={isSubmitting || errors.email || errors.password}
                className="spending-btn submit"
              >
                {
                  isEditing ?
                    <FormattedMessage { ...messages.editModalButton } />
                    :
                    <FormattedMessage { ...messages.createModalButton } />
                }
              </button>
              <button
                type="reset"
                value="Reset"
                className="spending-btn cancel"
                onClick={() => closeModal()}
              >
                <FormattedMessage { ...messages.cancelModalButton } />
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </StyledSpendingModal>
  )
};

export default SpendingModal;
