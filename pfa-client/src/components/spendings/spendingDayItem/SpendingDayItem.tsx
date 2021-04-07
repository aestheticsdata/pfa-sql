// @ts-nocheck
import {useEffect, useState} from 'react';
import format from 'date-fns/format';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import StyledSpendingDayItem from './StyledSpendingDayItem';

import getDate from 'date-fns/getDate';

import {
  FormattedMessage,
  FormattedNumber,
} from 'react-intl';

import _ from 'lodash';

import messages from '../messages';

import SpendingModal from './spendingModal/SpendingModal';

import { getLang, locales } from "@helpers/lang";
import { LangKeys } from "@helpers/types";
import SpendingListContainer from "./spendingModal/SpendingListContainer";

import { SpendingCompoundType, SpendingDayItemType } from "../types";

import useSpendingDayItem from "@components/spendings/spendingDayItem/spendingItem/helpers/useSpendingDayItem";
import SpendingSort from "@components/spendings/spendingSort/SpendingSort";
import useClickSort from "@components/spendings/helpers/useClickSort";


const SpendingDayItem = ({
  spendingsByDay,
  deleteSpending,
  user,
  month = null,
  date = 0,
  recurringType = false,
  isLoading = false,
}: SpendingDayItemType) => {

  const [lang] = useState<LangKeys>(getLang());
  const {
    onClickSort,
    spendingsByDaySorted,
    setSpendingsByDaySorted,
  } = useClickSort();

  useEffect(() => {
    setSpendingsByDaySorted(spendingsByDay);
  }, [spendingsByDay]);

  const getRecurringsTotal = (recurrings: SpendingCompoundType) => _.sumBy(recurrings, item => parseFloat(item.amount));

  const {
    isModalVisible,
    addSpendingEnabled,
    spending,
    isEditing,
    addSpending,
    closeModal,
    toggleAddSpending,
    editSpending,
  } = useSpendingDayItem();

  return (
    <>
      {
        date || recurringType ?
          <StyledSpendingDayItem
            recurringType={recurringType}
          >
            <div>
              <div className="spending-modal">
                {
                  isModalVisible ?
                    <SpendingModal
                      date={date}
                      closeModal={closeModal}
                      user={user}
                      spending={spending}
                      recurringType={recurringType}
                      isEditing={isEditing}
                      month={month}
                    />
                    :
                    null
                }
              </div>
              <div className="header">
                {
                  !recurringType ?
                    <div className={`date ${getDate(date) === getDate(Date.now()) && 'today'}`}>
                      {
                        date ?
                          <div>{format(date, locales[lang].formatString, { locale: locales[lang][lang] })}</div>
                          :
                          null
                      }
                    </div>
                    :
                    <div className="recurrings">
                      <FormattedMessage { ...messages.recurrings } />
                    </div>
                }
                {
                  addSpendingEnabled ?
                    <div
                      className="add-spending"
                      onClick={addSpending}
                    >
                      <FontAwesomeIcon icon={faPlusSquare} />
                    </div>
                    :
                    <div className="add-spending disabled">
                      <FontAwesomeIcon icon={faPlusSquare} />
                    </div>
                }
              </div>
              <div
                className="total"
              >
                {
                  spendingsByDaySorted ?
                    <>
                      <span className="total-label">Total</span>
                      {
                        <span className="total-amount">
                          {
                            !recurringType ?
                              <FormattedNumber
                                value={spendingsByDaySorted.total}
                                style="currency"
                                currency={user.baseCurrency}
                              />
                              :
                              <FormattedNumber
                                value={getRecurringsTotal(spendingsByDaySorted)}
                                style="currency"
                                currency={user.baseCurrency}
                              />
                          }
                        </span>
                      }
                    </>
                    :
                    null
                }
              </div>
              <SpendingSort
                recurringType={recurringType}
                onClickSort={onClickSort}
              />
              {SpendingListContainer({ spendingsByDaySorted, deleteSpending, toggleAddSpending, editSpending, isLoading })}
            </div>
          </StyledSpendingDayItem>
          :
          null
      }
    </>
  )
}

export default SpendingDayItem;

