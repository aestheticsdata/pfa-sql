import { useSelector } from "react-redux";

const Categories = () => {
  const categories = useSelector(state => state.spendingsReducer.categories);

  return (
    <div>
    {
      categories.map(category => {
        return <div key={category.ID}>{category.name}</div>
      })
    }
    </div>
  );
};

export default Categories;

