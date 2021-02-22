import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';

import StyledSpendings from './StyledSpendings';

import SpendingDayItem from './spendingDayItem/SpendingDayItem';
import SpendingDashboard from './spendingDashboard/SpendingDashboard';

import {
  getSpendings,
  deleteSpending as deleteSpendingAction,
  getRecurring,
  deleteRecurring as deleteRecurringAction,
} from './actions';

import { Month } from "./types";


const Spendings = () => {
  const [month, setMonth] = useState<Month>(null);

  const dispatch = useDispatch();

  const user: any = useSelector((state: any) => state.loginReducer.user);
  const spendings: any = useSelector((state: any) => state.spendingsReducer.spendings);
  const recurrings: any = useSelector((state: any) => state.spendingsReducer.recurrings);
  const isLoading: boolean = useSelector((state: any) => state.spendingsReducer.isLoading);
  const dateRange: any = useSelector((state: any) => state.dateRangeReducer.dateRange);

  const getSpendingsAndRecurring = () => {
    dispatch(getSpendings(user, dateRange));

    const start = startOfMonth(dateRange.from);
    const end = endOfMonth(dateRange.to);

    setMonth({ start, end });
  };

  const deleteSpending = (spendingID: string) => {
    dispatch(deleteSpendingAction(spendingID));
  };

  const deleteRecurring = (recurringID: string) => {
    dispatch(deleteRecurringAction(recurringID));
  };

  const deleteItem = (itemID: string, itemType: string) => {
    itemType === 'spending' ?
      deleteSpending(itemID)
      :
      deleteRecurring(itemID);
  };

  useEffect(() => {
    console.log("didMount");
    if (user.id && dateRange.from) {
      getSpendingsAndRecurring();
    }
  }, []);

  useEffect(() => {
    if (month !== null) {
      const start = startOfMonth(dateRange.from);
      dispatch(getRecurring(start));
    }
  }, [month]);

  useEffect(() => {
    if (dateRange?.from !== null) {
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
  // @ts-ignore
                  spendings.map((spendingsByDay, i) => (
                    <SpendingDayItem
                      key={i}
                      spendingsByDay={spendingsByDay}
                      date={dateRange.range[i]}
                      total={0}
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
