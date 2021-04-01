import { UPDATE_CATEGORY } from "@components/spendings/constants";

export const updateCategory = (category) => {
  return {
    type: UPDATE_CATEGORY,
    category,
  };
};
