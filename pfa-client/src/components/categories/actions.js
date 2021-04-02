import {
  DELETE_CATEGORY,
  UPDATE_CATEGORY,
  UPDATE_CATEGORY_ERROR,
} from "@components/categories/constants";

export const updateCategory = (category) => {
  return {
    type: UPDATE_CATEGORY,
    category,
  };
};

export const updateCategoryError = (error) => {
  return {
    type: UPDATE_CATEGORY_ERROR,
    error,
  };
};

export const deleteCategory = (category) => {
  return {
    type: DELETE_CATEGORY,
    category,
  };
};
