import {
  Formik,
  Form,
  Field,
} from 'formik';

import { validationHelper } from './helpers/validationHelper';

import getSymbolFromCurrency from 'currency-symbol-map';

import StyledSharedLoginForm from './StyledSharedLoginForm';

import currencyCodes from  '@src/currency-codes.json';


const SharedLoginForm = ({
    onSubmit,
    buttonTitle,
    displayEmailField,
    displayPasswordField,
    displayCurrencyField,
  }) => {

  const { validateEmail, validatePassword } = validationHelper();

  const getCurrenciesList = () => {
    return (
      currencyCodes.map(currency =>
        <option
          key={currency.code}
          value={currency.code}
        >
          {currency.name} : { getSymbolFromCurrency(currency.code) }
        </option>
      )
    )
  };

  return (
    <StyledSharedLoginForm>
      <div className="container">
        <div className="title">Personal Finance Assistant</div>
        <Formik
          initialValues={{ email: '', password: '', currency: 'EUR' }}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, errors }) => (
            <Form>
              {
                displayEmailField ?
                  <>
                    <Field
                      type="email"
                      name="email"
                      placeholder="email"
                      validate={validateEmail}
                    />
                    {errors.email && <div>{errors.email}</div>}
                  </>
                  :
                  null
              }
              {
                displayPasswordField ?
                  <>
                    <Field
                      type="password"
                      name="password"
                      placeholder="password"
                      validate={validatePassword}
                    />
                    {errors.password && <div>{errors.password}</div>}
                  </>
                  :
                  null
              }
              {
                displayCurrencyField ?
                  <>
                    <Field
                      component="select"
                      name="currency"
                    >
                      { getCurrenciesList() }
                    </Field>
                  </>
                  :
                  null
              }
              <button
                type="submit"
                disabled={isSubmitting || errors.email || errors.password}
                className="shared-login-submit-btn"
              >
                {buttonTitle}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </StyledSharedLoginForm>
  )
};

export default SharedLoginForm;



