import React, { Component } from 'react';
import { connect } from 'react-redux';

import StyledSpendings from './StyledSpendings';

import SpendingDayItem from './spendingDayItem/SpendingDayItem';
import SpendingDashboard from './spendingDashboard/SpendingDashboard';


import {
  getSpendings,
  deleteSpending,
  getRecurring,
  deleteRecurring,
} from './actions';
import {dateRangeChange} from '../datePickerWrapper/actions';

class Spendings extends Component {
  componentDidMount() {
    if (this.props.user.id && this.props.dateRange) {
      // needed when coming from login but causes a 404 with componentDidUpadte
      this.props.getSpendings(this.props.user, this.props.dateRange);
      this.props.getRecurrings();
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.dateRange !== prevProps.dateRange) {
      this.props.getSpendings(this.props.user, this.props.dateRange);
      this.props.getRecurrings();
    }
  }

  deleteItem = (itemID, itemType) => {
    itemType === 'spending' ?
      this.deleteSpending(itemID)
      :
      this.deleteRecurring(itemID);
  };

  deleteSpending = (spendingID) => {
    console.log('deleteSpending : id', spendingID);
    this.props.deleteSpending(spendingID);
  };

  deleteRecurring = (recurringID) => {
    console.log('deleteRecurring id :', recurringID);
    this.props.deleteRecurring(recurringID);
  };

  render() {
    const {
      isLoading,
      spendings,
      recurrings,
      dateRange,
      user,
    } = this.props;

    return (
      <StyledSpendings>

        <div className="spendings-list">
        {
          spendings.length > 0 && dateRange.range ?
            <div className="list-container">
              <SpendingDashboard
                weekTotal={spendings.weekTotal}
                recurring={recurrings}
                deleteRecurring={this.deleteRecurring}
              />
              <div className="spendings-container">
                {
                  spendings.map((spendingsByDay, i) => (
                    <SpendingDayItem
                      key={i}
                      spendingsByDay={spendingsByDay}
                      date={dateRange.range[i]}
                      total={0}
                      isLoading={isLoading}
                      user={user}
                      deleteSpending={this.deleteItem}
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
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.loginReducer.token,
    user: state.loginReducer.user,
    spendings: state.spendingsReducer.spendings,
    recurrings: state.spendingsReducer.recurrings,
    isLoading: state.spendingsReducer.isLoading,
    dateRange: state.dateRangeReducer.dateRange,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSpendings: (user, dateRange) => dispatch(getSpendings(user, dateRange)),
    getRecurrings: () => dispatch(getRecurring()),
    deleteSpending: (spendingID) => dispatch(deleteSpending(spendingID)),
    deleteRecurring: (recurringID) => dispatch(deleteRecurring(recurringID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Spendings);
