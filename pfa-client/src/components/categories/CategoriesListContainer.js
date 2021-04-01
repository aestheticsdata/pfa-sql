import { ReactComponent as Spinner } from "@src/assets/Wedges-3s-200px.svg";
import { useContext, useEffect } from "react";
import GlobalContext from "@src/globalContext";
import useSpendingsHelpers from "@components/spendings/helpers/useSpendingsHelpers";
import { useSelector } from "react-redux";
import CategoryItem from "@components/categories/CategoryItem";
import StyledCategoriesListContainer from "@components/categories/StyledCategoriesListcontainer";

const CategoriesListContainer = () => {
  const { setContext } = useContext(GlobalContext);
  const { getCategories } = useSpendingsHelpers();
  const categories = useSelector(state => state.spendingsReducer.categories);

  useEffect(() => {
    setContext({ displayDatePicker: false });
    getCategories();
  }, []);

  return (
    <StyledCategoriesListContainer>
      <div className="categories-list-container">
        {
          categories.length > 0 ?
            categories.map(category => (
              <CategoryItem
                key={category.ID}
                category={category}
              />
              )
            )
            :
            <div className="spinner">
              <Spinner width="60px" height="60px" />
            </div>
        }
      </div>
    </StyledCategoriesListContainer>
  );
}

export default CategoriesListContainer;
