import StyledSpendingSort from "@components/spendings/spendingSort/StyledSpendingSort";
import SpendingSortItem from "@components/spendings/spendingSort/SpendingSortItem";

const SpendingSort = ({ recurringType, onClickSort }) => {
  return (
    <StyledSpendingSort>
      <div className="spending-sort-container">
        <SpendingSortItem
          name="label"
          onClickSort={onClickSort}
        />
        {
          !recurringType && (
            <SpendingSortItem
              name="category"
              onClickSort={onClickSort}
            />
          )
        }
        <SpendingSortItem
          name="amount"
          onClickSort={onClickSort}
        />
      </div>
    </StyledSpendingSort>
  );
};

export default SpendingSort;
