import adjustFontColor from "@components/spendings/spendingDayItem/spendingItem/helpers/adjustFontColor";

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
