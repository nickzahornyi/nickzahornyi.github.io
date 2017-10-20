import React from "react";
import ReactDOM from "react-dom";

import BalanceItem from "./BalanceItem.jsx";
import { List } from "react-mdl";

const Balance = React.createClass({
  render() {
    return (
      <List>
        {this.props.balance.map(item => (
          <BalanceItem
            key={item.id}
            name={item.name}
            icon={item.icon}
            sum={item.sum}
            type={item.type}
            date={item.date}
          />
        ))}
      </List>
    );
  }
});

export default Balance;
