import React, { Component } from 'react';
import format from 'date-fns/format';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare} from '@fortawesome/free-solid-svg-icons';

import Cookie from 'js-cookie';

import StyledSpendingDayItem from './StyledSpendingDayItem';
import fr from "date-fns/locale/fr";
import en from "date-fns/locale/en-US";

import { FormattedNumber } from 'react-intl';


class SpendingDayItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: Cookie.get('lang'),
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

  render() {
    const { spendingsByDay } = this.props;
    const { lang } = this.state;

    return (
      <>
      {
        this.props.date ?
          <StyledSpendingDayItem>
            <div>
              <div className="header">
                <div className="date">
                  {
                    this.props.date ?
                      <div>{format(this.props.date, this.locales[lang].formatString, { locale: this.locales[lang][lang] })}</div>
                      :
                      null
                  }
                </div>
                <div className="add-spending">
                  <FontAwesomeIcon icon={faPlusSquare} />
                </div>
              </div>
              <div className="total">
                <span className="total-label">Total</span>
                {
                  spendingsByDay ?
                    <span className="total-amount">
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
                  spendingsByDay.map(spending => {
                    return (
                      <div
                        key={spending._id}
                        className="spending"
                      >
                        <span className="label" title={spending.label}>{spending.label}</span>
                        <span className="amount">
                          <FormattedNumber
                            value={spending.amount}
                            style="currency"
                            currency={spending.currency}
                          />
                        </span>
                      </div>
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
