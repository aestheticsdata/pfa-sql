import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Formik,
  Form,
  Field,
} from 'formik';

import {
  getSpendings,
} from './actions';

import StyledSpendings from './StyledSpendings';

import {
  createSpending,
} from './actions';

class Spendings extends Component {
  componentDidMount() {
    this.props.getSpendings(this.props.user.id);
  }

  onSubmit = (values, { setSubmitting }) => {
    const spending = {
      date: values.date,
      label: values.label,
      amount: values.amount,
      category: values.category,
      userID: this.props.user.id,
    };

    this.props.createSpending(spending);
    setSubmitting(false);
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('spendings : ', this.props.spendings);
  }

  render() {
    return (
      <StyledSpendings>
        <Formik
          initialValues={{
            date: '',
            label: '',
            amount: '',
            category: '',
          }}
          onSubmit={this.onSubmit}
        >
          {({ isSubmitting, errors }) => (
            <Form>
              <Field
                type="date"
                name="date"
                placeholder="date"
              />
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
            </Form>
          )}
        </Formik>
        <div className="spendings-list">
        {
          this.props.spendings.length > 0 ?
            <div className="list-container">
              <ul>
                {
                  this.props.spendings.map(spending => (
                    <li key={spending._id}>
                      <div>date : {spending.date}</div>
                      <div>label : {spending.label}</div>
                      <div>amount : {spending.amount}</div>
                    </li>
                  ))
                }
              </ul>
            </div>
            :
            null
        }
        </div>
      </StyledSpendings>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.loginReducer.token,
    user: state.loginReducer.user,
    spendings: state.spendingsReducer.spendings,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSpendings: (userID) => dispatch(getSpendings(userID)),
    createSpending: (spending) => dispatch(createSpending(spending)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Spendings);
