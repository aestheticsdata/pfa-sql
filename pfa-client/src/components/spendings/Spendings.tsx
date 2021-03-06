import { useEffect, useContext } from 'react';
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
import GlobalContext from "@src/globalContext";


const Spendings = () => {
  const {
    month,
    start,
    getSpendingsAndRecurring,
    getCategories,
    deleteRecurring,
    deleteItem,
    getWeeklyStats,
  } = useSpendingsHelpers();

  const dispatch = useDispatch();

  const {
    user,
    spendings,
    recurrings,
    isLoading,
    dateRange,
  } = spendingsSelectorHelper();

  const { setContext } = useContext(GlobalContext);

  // useEffect(() => {
  //   console.log('dateRange', dateRange);
  //   if (user.id && dateRange.from) {
  //     getSpendingsAndRecurring();
  //     getCategories();
  //   }
  // },[]);

  useEffect(() => {
    setContext({ displayDatePicker: true });
  }, []);

  useEffect(() => {
    if (month !== null) {
      dispatch(getRecurring(start));
      getWeeklyStats(start);
    }
  }, [month]);

  useEffect(() => {
    if (user.id && dateRange.from) {
      getSpendingsAndRecurring();
      getCategories();
    }
  }, [dateRange, user]);

  return (
    <StyledSpendings>
      <div className="spendings-list">
        {
          spendings.length > 0 && dateRange.range ?
            <div className="list-container">
              <SpendingDashboard
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
