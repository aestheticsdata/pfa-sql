import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import format from 'date-fns/format';
import { FormattedMessage } from 'react-intl';

import {
  Formik,
  Form,
  Field,
} from 'formik';
import { Autocomplete } from "formik-material-ui-lab";
import { TextField } from "@material-ui/core";

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
  const initialEmptyCategoryState = {
    ID: null,
    userID: null,
    name: "",
    color: null
  };

  let initialCategoryState = spending?.category ?
    {
      ID: spending.categoryID,
      userID: user.id,
      name: spending.category,
      color: spending.color,
    }
    :
    initialEmptyCategoryState;

  const [selectedCategory, setselectedCategory] = useState(initialCategoryState);
  const dispatch = useDispatch();
  const categories = useSelector(state => state.spendingsReducer.categories);

  const getRandomHexColor = () => Math.floor(Math.random()*16777215).toString(16);

  const onSubmit = (values, { setSubmitting }) => {
    const spendingEdited = {
      // this format date is required to avoid inconsistency
      // when axios convert date in POST request
      // see https://github.com/axios/axios/issues/567
      date: date ? format(date, 'yyyy-MM-dd') : null,
      // ///////////////////////////////////////////////////
      label: values.label,
      amount: values.amount,
      category: selectedCategory,
      currency: user.baseCurrency,
      userID: user.id,
      id: spending.ID,
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

  const handleAutocompleteChange = (value) => {
    console.log('handleAutocompleteChange value : ', value);
    setselectedCategory(value ?? initialEmptyCategoryState);
  }
  console.log('spending : ', spending);
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
                  // see https://stackoverflow.com/a/63422513/2466369 for Formik with material-ui autocomplete
                  // https://stackworx.github.io/formik-material-ui/docs/api/material-ui-lab
                  // https://material-ui.com/api/autocomplete/
                  <Field
                    name="autocomplete"
                    value={selectedCategory}
                    component={Autocomplete}
                    autoComplete={true}
                    options={categories}
                    getOptionLabel={(option) => option.name}
                    style={{ width: '100%' }}
                    getOptionSelected={(item, current) => item.value === current.value}
                    onBlur={
                      event => {
                        if (selectedCategory?.ID === null) { // so it's a new category
                          handleAutocompleteChange({
                            ID: null,
                            userID: user.id,
                            name: event.target.value,
                            color: event.target.value !== '' && `#${getRandomHexColor()}` // if there is a name, it's a new category, else it's a category deletion
                          })
                        }
                      }
                    }
                    onChange={(_, value) => { handleAutocompleteChange(value) }}
                    noOptionsText="create category"
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="category"
                        variant="outlined"
                        size="small"
                      />
                    )}
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
