import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';

import StyledSpendings from './StyledSpendings';

import SpendingDayItem from '@components/spendings/spendingDayItem/SpendingDayItem';
import SpendingDashboard from '@components/spendings/spendingDashboard/SpendingDashboard';

import {
  getSpendings,
  deleteSpending as deleteSpendingAction,
  getRecurring,
  deleteRecurring as deleteRecurringAction,
} from './actions';

import {
  Month,
  SpendingCompoundType,
  SpendingsType,
} from "./types";

import {
  userSelector,
  spendingsSelector,
  recurringsSelector,
  isLoadingSelector,
  dateRangeSelector,
} from "./selectors";


const Spendings = () => {
  const [month, setMonth] = useState<Month>(null);

  const dispatch = useDispatch();

  const user: any = useSelector(userSelector);
  const spendings: SpendingsType = useSelector(spendingsSelector);
  const recurrings: any = useSelector(recurringsSelector);
  const isLoading: boolean = useSelector(isLoadingSelector);
  const dateRange: any = useSelector(dateRangeSelector);

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
