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
      date: format(props.date, 'yyyy-MM-dd'),
      // ///////////////////////////////////////////////////
      label: values.label,
      amount: values.amount,
      category: values.category,
      currency: props.user.baseCurrency,
      userID: props.user.id,
      id: props.spending._id,
    };

    spending.label ?
      props.updateSpending(spending)
      :
      props.createSpending(spending);

    props.closeModal();
    setSubmitting(false);
  };

  return (
    <StyledSpendingModal>
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
              <Field
                type="text"
                name="category"
                placeholder="category"
              />
              <button
                type="submit"
                disabled={isSubmitting || errors.email || errors.password}
                className="shared-login-submit-btn"
              >
                {
                  props.spending.label ?
                    <FormattedMessage { ...messages.editModalButton } />
                    :
                    <FormattedMessage { ...messages.createModalButton } />
                }
              </button>
              <button
                type="reset"
                value="Reset"
                onClick={() => props.closeModal()}
              >
                Close
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
  };
};

export default connect(null, mapDispatchToProps)(SpendingModal);
