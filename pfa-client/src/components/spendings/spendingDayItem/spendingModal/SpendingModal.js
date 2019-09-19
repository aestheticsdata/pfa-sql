import React from 'react';
import { connect } from 'react-redux';

import {
  Formik,
  Form,
  Field,
} from 'formik';

import { createSpending } from '../../actions';

import StyledSpendingModal from './StyledSpendingModal';


const SpendingModal = (props) => {
  const onSubmit = (values, { setSubmitting }) => {
    const spending = {
      date: props.date,
      label: values.label,
      amount: values.amount,
      category: values.category,
      currency: props.user.baseCurrency,
      userID: props.user.id,
    };

    props.createSpending(spending);
    props.closeModal();
    setSubmitting(false);
  };

  return (
    <StyledSpendingModal>
      <div className="spending-modal-container">
        <Formik
          initialValues={{
            label: '',
            amount: '',
            category: '',
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
                Create spending
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
  };
};

export default connect(null, mapDispatchToProps)(SpendingModal);
