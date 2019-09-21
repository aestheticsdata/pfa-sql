import React, { Component } from 'react';
import { connect } from 'react-redux';

import StyledSpendings from './StyledSpendings';

import SpendingDayItem from './spendingDayItem/SpendingDayItem';

import {
  getSpendings,
  deleteSpending,
} from './actions';

class Spendings extends Component {
  componentDidMount() {
    if (this.props.user.id && this.props.dateRange) {
      // needed when coming from login but causes a 404 with componentDidUpadte

      this.props.getSpendings(this.props.user, this.props.dateRange);
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.dateRange !== prevProps.dateRange) {
      this.props.getSpendings(this.props.user, this.props.dateRange);
    }
  }

  deleteSpending = (spendingID) => {
    this.props.deleteSpending(spendingID);
  };

  render() {
    const { isLoading } = this.props;

    return (
      <StyledSpendings>

        <div className="spendings-list">
        {
          this.props.spendings.length > 0 && this.props.dateRange.range ?
            <div className="list-container">

                {
                  this.props.spendings.map((spendingsByDay, i) => (
                    <SpendingDayItem
                      key={i}
                      spendingsByDay={spendingsByDay}
                      date={this.props.dateRange.range[i]}
                      total={0}
                      isLoading={isLoading}
                      user={this.props.user}
                      deleteSpending={this.deleteSpending}
                    />
                  ))
                }
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
    isLoading: state.spendingsReducer.isLoading,
    dateRange: state.dateRangeReducer.dateRange,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSpendings: (userID, dateRange) => dispatch(getSpendings(userID, dateRange)),
    deleteSpending: (spendingID) => dispatch(deleteSpending(spendingID)),
    // getExchangeRates: (baseCurrency) => dispatch(getCurrenciesExchangeRate(baseCurrency));
    // createSpending: (spending) => dispatch(createSpending(spending)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Spendings);
