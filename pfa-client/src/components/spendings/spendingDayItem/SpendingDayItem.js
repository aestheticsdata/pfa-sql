import React, { Component } from 'react';
import format from 'date-fns/format';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faPen, faPenAlt, faPencilAlt, faTrash, faTrashAlt} from '@fortawesome/free-solid-svg-icons';

import Cookie from 'js-cookie';

import StyledSpendingDayItem from './StyledSpendingDayItem';
import fr from "date-fns/locale/fr";
import en from "date-fns/locale/en-US";

import { FormattedNumber } from 'react-intl';

import { ReactComponent as Spinner } from './Wedges-3s-200px.svg';
// import { ReactComponent as Spinner } from './Bars-1s-200px.svg';

import SpendingModal from './spendingModal/SpendingModal';
import SpendingItem from './spendingItem/SpendingItem';


class SpendingDayItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: Cookie.get('lang'),
      isModalVisible: false,
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
  };

  closeModal = () => {
    this.setState({ isModalVisible: false });
  };

  render() {
    const { spendingsByDay } = this.props;
    const { lang } = this.state;

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
                    />
                    :
                    null
                }
              </div>
              <div className="header">
                <div className="date">
                  {
                    this.props.date ?
                      <div>{format(this.props.date, this.locales[lang].formatString, { locale: this.locales[lang][lang] })}</div>
                      :
                      null
                  }
                </div>
                <div
                  className="add-spending"
                  onClick={this.addSpending}
                >
                  <FontAwesomeIcon icon={faPlusSquare} />
                </div>
              </div>
              <div className="total">
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
                        />
                      )
                    })
                  :
                  null
              }
              </div>
            </div>
          </StyledSpendingDayItem>
          :
          null
      }
      </>
    )
  }
}

export default SpendingDayItem;
