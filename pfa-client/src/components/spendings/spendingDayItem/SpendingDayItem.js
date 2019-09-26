import React, { Component } from 'react';
import format from 'date-fns/format';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import Cookie from 'js-cookie';

import StyledSpendingDayItem from './StyledSpendingDayItem';
import fr from "date-fns/locale/fr";
import en from "date-fns/locale/en-US";

import getDate from 'date-fns/getDate';

import {
  FormattedNumber,
  injectIntl,
} from 'react-intl';

import messages from '../messages';

import { ReactComponent as Spinner } from './spendingModal/assets/Wedges-3s-200px.svg';

import SpendingModal from './spendingModal/SpendingModal';
import SpendingItem from './spendingItem/SpendingItem';


class SpendingDayItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: Cookie.get('lang'),
      isModalVisible: false,
      addSpendingEnabled: true,
      spending: {},
      isEditing: false,
      // exchangeRatesIssue: !!JSON.parse(localStorage.getItem('exchangeRatesIssue')) || false,
    }
  }

  locales = {
    'fr': {
      fr,
      formatString: 'dd MMM yyyy',
    },
    'en': {
      en,
      formatString: 'MMM do y',
    },
  };


  addSpending = () => {
    this.setState({ isModalVisible: true });
    this.setState({ addSpendingEnabled: false });
  };

  closeModal = () => {
    this.setState({ isModalVisible: false });
    this.setState({ addSpendingEnabled: true });
    this.setState({ spending: {} });
    this.setState({ isEditing: false });
  };

  toggleAddSpending = () => {
    this.setState({ addSpendingEnabled: !this.state.addSpendingEnabled });
  };

  editSpending = (spending) => {
    this.setState({ isEditing: true });
    this.setState({ isModalVisible: true });
    this.setState({ addSpendingEnabled: false });
    this.setState({ spending });
  };

  spendingListContainer = (spendingsByDay, deleteSpending) => (
    <div className="spendings-list-container">
      {
        spendingsByDay ?
          this.props.isLoading ?
            <div className="spinner">
              <Spinner width="60px" height="60px" />
            </div>
            :
            spendingsByDay.map(spending => {
              return (
                <SpendingItem
                  key={spending._id}
                  spending={spending}
                  editCallback={this.editSpending}
                  deleteCallback={deleteSpending}
                  toggleAddSpending={this.toggleAddSpending}
                />
              )
            })
          :
          null
      }
    </div>
  );

  render() {
    const { spendingsByDay, deleteSpending } = this.props;
    const { lang, addSpendingEnabled } = this.state;

    return (
      <>
      {
        this.props.date ?
          <StyledSpendingDayItem>
            <div>
              <div className="spending-modal">
                {
                  this.state.isModalVisible ?
                    <SpendingModal
                      date={this.props.date}
                      closeModal={this.closeModal}
                      user={this.props.user}
                      spending={this.state.spending}
                      isEditing={this.state.isEditing}
                    />
                    :
                    null
                }
              </div>
              <div className="header">
                <div className={`date ${getDate(this.props.date) === getDate(Date.now()) && 'today'}`}>
                  {
                    this.props.date ?
                      <div>{format(this.props.date, this.locales[lang].formatString, { locale: this.locales[lang][lang] })}</div>
                      :
                      null
                  }
                </div>
                {
                  addSpendingEnabled ?
                    <div
                      className="add-spending"
                      onClick={this.addSpending}
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
                title={this.props.intl.formatMessage({ ...messages.noRates })}
              >
                <span className="total-label">Total</span>
                {
                  spendingsByDay ?
                    <span className="total-amount">
                      {/* eslint-disable  react/style-prop-object */}
                      <FormattedNumber
                        value={spendingsByDay.total}
                        style="currency"
                        currency="EUR"
                      />
                    </span>
                    :
                    null
                }
              </div>
              {this.spendingListContainer(spendingsByDay, deleteSpending)}
            </div>
          </StyledSpendingDayItem>
          :
          null
      }
      </>
    )
  }
}

export default injectIntl(SpendingDayItem);
