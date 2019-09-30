import React from 'react';
import { connect } from 'react-redux';
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


const SpendingModal = (props) => {
  const onSubmit = (values, { setSubmitting }) => {
    const spending = {
      // this format date is required to avoid inconsistency
      // when axios convert date in POST request
      // see https://github.com/axios/axios/issues/567
      date: props.date ? format(props.date, 'yyyy-MM-dd') : null,
      // ///////////////////////////////////////////////////
      label: values.label,
      amount: values.amount,
      category: values.category,
      currency: props.user.baseCurrency,
      userID: props.user.id,
      id: props.spending._id,
    };

    if (props.isEditing) {
      if (props.recurringType) {
        const formattedMonth = {
          start: format(props.month.start, 'yyyy-MM-dd'),
          end: format(props.month.end, 'yyyy-MM-dd'),
        };
        props.updateRecurring(spending, formattedMonth);
      } else {
        props.updateSpending(spending);
      }
    } else {
      if (props.recurringType) {
        const formattedMonth = {
          start: format(props.month.start, 'yyyy-MM-dd'),
          end: format(props.month.end, 'yyyy-MM-dd'),
        };
        props.createRecurring(spending, formattedMonth);
      } else {
        props.createSpending(spending);
      }
    }

    props.closeModal();
    setSubmitting(false);
  };

  return (
    <StyledSpendingModal
      recurringType={props.recurringType}
    >
      <div className="spending-modal-container">
        <Formik
          initialValues={{
            label: props.spending.label || '',
            amount: props.spending.amount || '',
            category: props.spending.category || '',
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
                !props.recurringType ?
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
                  props.isEditing ?
                    <FormattedMessage { ...messages.editModalButton } />
                    :
                    <FormattedMessage { ...messages.createModalButton } />
                }
              </button>
              <button
                type="reset"
                value="Reset"
                className="spending-btn cancel"
                onClick={() => props.closeModal()}
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

const mapDispatchToProps = (dispatch) => {
  return {
    createSpending: (spending) => dispatch(createSpending(spending)),
    updateSpending: (spending) => dispatch(updateSpending(spending)),
    createRecurring: (recurring, month) => dispatch(createRecurring(recurring, month)),
    updateRecurring: (recurring) => dispatch(updateRecurring(recurring)),
  };
};

export default connect(null, mapDispatchToProps)(SpendingModal);
