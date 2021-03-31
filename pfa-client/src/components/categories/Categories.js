import { useSelector } from "react-redux";
import StyledCategories from "@components/categories/StyledCategories";
import GlobalContext from "@src/globalContext";
import { useContext, useEffect } from "react";

const Categories = () => {
  const categories = useSelector(state => state.spendingsReducer.categories);
  const { setContext } = useContext(GlobalContext);

  useEffect(() => {
    setContext({ displayDatePicker: false});
  }, []);

  return (
    <StyledCategories>
    {
      categories.map(category => {
        return <div key={category.ID}>{category.name}</div>
      })
    }
    </StyledCategories>
  );
};

export default Categories;
