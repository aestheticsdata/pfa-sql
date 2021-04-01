import StyledCategories from "@components/categories/StyledCategories";
import { useState } from "react";

import getCategoryComponent from '@components/common/Category';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FormattedMessage } from "react-intl";
import messages from "@components/spendings/messages";


const CategoryItem = ({ category }) => {
  const [isDeleteConfirmVisible, setIsDeleteConfirmVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const editCategory = () => {};
  const deleteCallback = (id) => {console.log(id)};
  const item = {
    category: category.name,
    categoryColor: category.color,
  };

  const confirmDeletePopin = (item, deleteCallback) => {
    return (
      <div className="confirm-delete-popin">
        <span className="title">
          <FormattedMessage { ...messages.confirmDeleteTitle} />
        </span>
        <div className="button-container">
          <button
            className="cancel-button"
            onClick={() =>setIsDeleteConfirmVisible(false)}
          >
            <FormattedMessage { ...messages.confirmDeleteCancelButton } />
          </button>
          <button
            className="confirm-button"
            onClick={
              () => {
                setIsDeleteConfirmVisible(false)
                deleteCallback(item.ID);
              }
            }>
            <FormattedMessage { ...messages.confirmDeleteConfirmButton} />
          </button>
        </div>
      </div>
    );
  };

  const editCategoryPopin = (category) => {
    return (
      <div className="edit-category-popin">
        <input value={category.name} />
        <input value={category.color} />
        <span onClick={() => setIsEditing(false)}>cancel</span>
        <span onClick={() => setIsEditing(false)}>OK</span>
      </div>
    );
  };

  const actionsFragment = () => (
    <div className="actions">
      <span
        className="edit action"
        onClick={() => {
          setIsEditing(true);
          editCategory();
        }}
      >
        <FontAwesomeIcon icon={faPencilAlt} />
      </span>
      <span
        className="delete action"
        onClick={() => { setIsDeleteConfirmVisible(true) }}
      >
        <FontAwesomeIcon icon={faTrashAlt} />
      </span>
    </div>
  );

  const getCategoryContainer = () => {
    if (isDeleteConfirmVisible) return confirmDeletePopin(category, deleteCallback);
    if (isEditing) return editCategoryPopin(category);
    return (
      <div className="category-sub-container" >
        <span>{ getCategoryComponent(item) }</span>
        { actionsFragment() }
      </div>
    );
  }

  return (
    <StyledCategories>
      <div className="category-container">
        { getCategoryContainer() }
      </div>
    </StyledCategories>
  );
};

export default CategoryItem;
