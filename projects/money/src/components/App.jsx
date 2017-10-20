import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import Balance from './Balance.jsx';
import Form from './Form.jsx';
import Controls from './Controls.jsx';
import ChartPie from './ChartPie.jsx';
import ChartGraph from './ChartGraph.jsx';

import moment from 'moment';
import './App.sass';

const App = React.createClass({
  getInitialState() {
    return {
      balance: [],
      editing: false,
      adding: '',
      filter: '',
      chart: false,
      chartType: '',
    };
  },

  componentDidMount() {
    const balance = JSON.parse(localStorage.getItem('balance'));

    if (balance) {
      this.setState({ balance: balance });
    } else {
      localStorage.setItem('balance', this.state.balance);
    }
  },

  updateState() {
    const balance = JSON.stringify(this.state.balance);

    localStorage.setItem('balance', balance);
  },

  render() {
    return (
      <div className="app">
        <Header onShowForm={this.handleOpenForm} balance={this.state.balance} />
        {this.state.editing ? (
          <Form adding={this.state.adding} onAdd={this.handleAddBalanceItem} />
        ) : (
          <Controls
            balance={this.state.balance}
            onFilter={this.handleFilter}
            onSort={this.handleSort}
            onPieChartToogle={this.handleOpenPieChart}
            onGraphChartToogle={this.handleOpenGraphChart}
          />
        )}

        {this.state.chart && this.state.chartType === 'pie' ? (
          <ChartPie chartType={this.state.chartType} />
        ) : this.state.chart && this.state.chartType === 'graph' ? (
          <ChartGraph chartType={this.state.chartType} />
        ) : null}

        {!this.state.chart && (
          <Balance
            balance={this.state.balance.filter(
              item => item.type !== this.state.filter,
            )}
          />
        )}
      </div>
    );
  },

  handleOpenForm(add) {
    this.setState({
      editing: !this.state.editing,
      adding: add,
    });
  },

  handleOpenPieChart() {
    this.setState({
      chart: true,
      chartType: 'pie',
    });
  },

  handleOpenGraphChart() {
    this.setState({
      chart: true,
      chartType: 'graph',
    });
  },

  handleAddBalanceItem(newItem) {
    this.setState(
      {
        balance: [newItem, ...this.state.balance],
        editing: false,
      },
      this.updateState,
    );
  },

  handleFilter(filter) {
    this.setState({
      filter,
      chart: false,
    });
  },

  handleSort(param = 'id') {
    if (param !== 'id') {
      this.setState({
        balance: this.state.balance.sort((a, b) => a[param] - b[param]),
        chart: false,
      });
    } else {
      this.setState({
        balance: this.state.balance.sort((a, b) => b[param] - a[param]),
        chart: false,
      });
    }
  },
});

export default App;
