import React, { Component } from 'react';

import Highcharts from 'highcharts';

export default class ChartGraph extends Component {
  render() {
    return <div id="chart" />;
  }

  componentDidMount() {
    const chartGraphIncome = this.props.balance
      .filter(item => item.type === 'income')
      .reduce((newItem, current) => {
        return [...newItem, current.sum];
      }, [])
      .reverse();

    const chartGraphExpenditure = this.props.balance
      .filter(item => item.type === 'expend')
      .reduce((newItem, current) => {
        return [...newItem, current.sum];
      }, [])
      .reverse();

    Highcharts.chart('chart', {
      title: {
        text: 'Balance'
      },

      yAxis: {
        title: {
          text: 'Sum value'
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },

      plotOptions: {
        series: {
          pointStart: 1
        }
      },

      series: [
        {
          name: 'Income',
          data: chartGraphIncome
        },
        {
          name: 'Expenditure',
          data: chartGraphExpenditure
        }
      ]
    });
  }
}
