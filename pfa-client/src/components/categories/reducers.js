import produce from "immer";
import {
  UPDATE_CATEGORY_ERROR,
} from "@components/categories/constants";

const initialState = {
  failed: false,
  errorMessage: '',
  ID: null,
};

const categoriesReducer = (state = initialState, action) =>
  produce(state, draft => {
    if (action.type === UPDATE_CATEGORY_ERROR) {
      draft.failed = true;
      draft.errorMessage = action.error;
      draft.ID = action.error.errors[0].instance.ID;
    } else {
      return state;
    }
  });

export default categoriesReducer;
