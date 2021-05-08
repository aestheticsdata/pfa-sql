import adjustFontColor from "@components/common/helpers/adjustFontColor";

const getCategoryComponent = (item) => {
  return (
    <span
      className="category"
      style={{
        color: `${adjustFontColor(item.categoryColor)}`,
        backgroundColor: `${item.categoryColor}`,
      }}
    >
      {item.category}
    </span>
  );
};

export default getCategoryComponent;
