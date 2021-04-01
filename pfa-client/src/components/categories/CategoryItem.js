import StyledCategories from "@components/categories/StyledCategories";
import { useState } from "react";
import { useDispatch } from "react-redux";

import getCategoryComponent from '@components/common/Category';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FormattedMessage } from "react-intl";
import messages from "@components/categories/messages";


const CategoryItem = ({ category }) => {
  const [isDeleteConfirmVisible, setIsDeleteConfirmVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [singleCategory, setSingleCategory] = useState(category);
  const initialCategory = {...category};
  const dispatch = useDispatch();
  const editCategory = () => {};
  const deleteCallback = (id) => {console.log(id)};
  const item = {
    category: singleCategory.name,
    categoryColor: singleCategory.color,
  };

  const cancelEditing = () => {
    setIsEditing(false);
    setSingleCategory(initialCategory);
  }

  const commitEditing = () => {
    setIsEditing(false);
    dispatch();
  }

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

  const editCategoryPopin = () => {
    return (
      <div className="edit-category-popin">

        <input
          type="text"
          className="edit-category-popin-name"
          value={singleCategory.name}
          onChange={(ev) => setSingleCategory({...singleCategory, name: ev.target.value})}
        />

        <input
          type="color"
          className="edit-category-popin-color"
          value={singleCategory.color}
          onChange={(ev) => setSingleCategory({...singleCategory, color: ev.target.value})}
        />

        <button
          className="cancel-button"
          onClick={() => { cancelEditing() }}
        >
          <FormattedMessage { ...messages.confirmDeleteCancelButton } />
        </button>

        <button
          className="confirm-button"
          onClick={() => { commitEditing() }}
        >
          <FormattedMessage { ...messages.confirmChangesCategoryButton } />
        </button>

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
    if (isEditing) return editCategoryPopin();
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
