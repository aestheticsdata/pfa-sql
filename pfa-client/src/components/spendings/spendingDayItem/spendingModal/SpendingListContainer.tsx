import React from "react";
import { ReactComponent as Spinner } from "../assets/Wedges-3s-200px.svg";
import SpendingItem from "../spendingItem/SpendingItem";

import { SpendingsListContainerType, SpendingType} from "../../types";

const SpendingListContainer = (
  {
    spendingsByDay,
    deleteSpending,
    toggleAddSpending,
    editSpending,
    isLoading,
  }: SpendingsListContainerType
) => (
  <div className="spendings-list-container">
    {
      spendingsByDay ?
        isLoading ?
          <div className="spinner">
            <Spinner width="60px" height="60px" />
          </div>
          :
          spendingsByDay.map((spending: SpendingType) => {
            return (
              <SpendingItem
                key={spending._id}
                spending={spending}
                editCallback={editSpending}
                deleteCallback={deleteSpending}
                toggleAddSpending={toggleAddSpending}
              />
            )
          })
        :
        null
    }
  </div>
);

export default SpendingListContainer;
