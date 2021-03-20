import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import StyledSpendings from './StyledSpendings';

import SpendingDayItem from '@components/spendings/spendingDayItem/SpendingDayItem';
import SpendingDashboard from '@components/spendings/spendingDashboard/SpendingDashboard';

import {
  getRecurring,
} from './actions';

import { SpendingCompoundType } from "./types";

import spendingsSelectorHelper from "./selectors";
import useSpendingsHelpers from "@components/spendings/helpers/useSpendingsHelpers";


const Spendings = () => {
  const {
    month,
    start,
    getSpendingsAndRecurring,
    getCategories,
    deleteRecurring,
    deleteItem,
  } = useSpendingsHelpers();

  const dispatch = useDispatch();

  const {
    user,
    spendings,
    recurrings,
    isLoading,
    dateRange,
  } = spendingsSelectorHelper();

  useEffect(() => {
    if (user.id && dateRange.from) {
      getSpendingsAndRecurring();
      getCategories();
    }
  }, []);

  useEffect(() => {
    if (month !== null) {
      dispatch(getRecurring(start));
    }
  }, [month]);

  useEffect(() => {
    if (dateRange.from) {
      getSpendingsAndRecurring();
    }
  }, [dateRange]);

  return (
    <StyledSpendings>
      <div className="spendings-list">
        {
          spendings.length > 0 && dateRange.range ?
            <div className="list-container">
              <SpendingDashboard
                weekTotal={spendings.weekTotal}
                recurring={recurrings}
                deleteRecurring={deleteRecurring}
                month={month}
                user={user}
                isLoading={isLoading}
              />
              <div className="spendings-container">
                {
                  spendings.map((spendingsByDay: SpendingCompoundType, i: number) => (
                    <SpendingDayItem
                      key={i}
                      spendingsByDay={spendingsByDay}
                      date={dateRange.range[i]}
                      isLoading={isLoading}
                      user={user}
                      deleteSpending={deleteItem}
                    />
                  ))
                }
              </div>
            </div>
            :
            null
        }
      </div>
    </StyledSpendings>
  );
};

export default Spendings;
