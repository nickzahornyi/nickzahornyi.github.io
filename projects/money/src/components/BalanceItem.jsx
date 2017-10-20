import React from 'react';
import ReactDOM from 'react-dom';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import moment from 'moment';

import { FABButton, Icon, Tooltip, ListItem, ListItemContent } from 'react-mdl';

import './BalanceItem.sass';

const BalanceItem = React.createClass({
  render() {
    const { icon, name, sum, type, date } = this.props;

    return (
      <ListItem>
        <ListItemContent icon={icon} className={icon}>
          <div>
            <p className="balance-item__name">{name}</p>
            <Tooltip label={date}>
              <p className="balance-item__date">
                {this.handleGetDateDiff(date)}
              </p>
            </Tooltip>
          </div>

          {type === 'income' ? (
            <p className="balance-item__income">{`+${sum}`}</p>
          ) : (
            <p className="balance-item__expenditure">{`-${sum}`}</p>
          )}
        </ListItemContent>
      </ListItem>
    );
  },

  handleGetDateDiff(date) {
    const dateNow = moment().format('YYYY-MM-DD HH:mm');
    const diffInMin = moment(date).diff(dateNow, 'minutes') * -1;
    const diffInHours = moment(date).diff(dateNow, 'hours') * -1;
    const diffInDays = moment(date).diff(dateNow, 'days') * -1;

    if (diffInMin < 1) {
      return `Less than minute ago`;
    } else if (diffInMin < 60) {
      return `${diffInMin} minutes ago`;
    } else if (diffInMin < 1400) {
      return `${diffInHours} hours ago`;
    } else {
      return `${diffInDays} days ago`;
    }
  },
});

export default BalanceItem;
