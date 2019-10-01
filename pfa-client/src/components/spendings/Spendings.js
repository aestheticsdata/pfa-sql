import React, { Component } from 'react';
import { connect } from 'react-redux';

import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';

import StyledSpendings from './StyledSpendings';

import SpendingDayItem from './spendingDayItem/SpendingDayItem';
import SpendingDashboard from './spendingDashboard/SpendingDashboard';

import {
  getSpendings,
  deleteSpending,
  getRecurring,
  deleteRecurring,
} from './actions';


class Spendings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: null,
    };
  }

  componentDidMount() {
    if (this.props.user.id && this.props.dateRange.from) {
      // needed when coming from login but causes a 404 with componentDidUpadte
      this.getSpendingsAndRecurring();
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.dateRange !== prevProps.dateRange) {
      this.getSpendingsAndRecurring();
    }
  }

  getSpendingsAndRecurring = () => {
    this.props.getSpendings(this.props.user, this.props.dateRange);

    const start = startOfMonth(this.props.dateRange.from);
    const end = endOfMonth(this.props.dateRange.to);

    this.setState({ month: {start, end}}, () => {
      this.props.getRecurrings(start);
    });
  };

  deleteItem = (itemID, itemType) => {
    itemType === 'spending' ?
      this.deleteSpending(itemID)
      :
      this.deleteRecurring(itemID);
  };

  deleteSpending = (spendingID) => {
    this.props.deleteSpending(spendingID);
  };

  deleteRecurring = (recurringID) => {
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
                month={this.state.month}
                user={user}
                isLoading={isLoading}
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
    // token: state.loginReducer.token,
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
    getRecurrings: (start) => dispatch(getRecurring(start)),
    deleteSpending: (spendingID) => dispatch(deleteSpending(spendingID)),
    deleteRecurring: (recurringID) => dispatch(deleteRecurring(recurringID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Spendings);
