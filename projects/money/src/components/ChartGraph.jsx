import React from 'react';
import ReactDOM from 'react-dom';

import Highcharts from 'highcharts';

const ChartGraph = React.createClass({
  render() {
    return <div id="chart" />;
  },

  componentDidMount() {
    const chartGraphIncome = JSON.parse(localStorage.getItem('balance'))
      .filter(item => item.type === 'income')
      .reduce((newItem, current) => {
        return [...newItem, current.sum];
      }, [])
      .reverse();

    const chartGraphExpenditure = JSON.parse(localStorage.getItem('balance'))
      .filter(item => item.type === 'expenditure')
      .reduce((newItem, current) => {
        return [...newItem, current.sum];
      }, [])
      .reverse();

    Highcharts.chart('chart', {
      title: {
        text: 'Balance',
      },

      yAxis: {
        title: {
          text: 'Sum value',
        },
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
      },

      plotOptions: {
        series: {
          pointStart: 1,
        },
      },

      series: [
        {
          name: 'Income',
          data: chartGraphIncome,
        },
        {
          name: 'Expenditure',
          data: chartGraphExpenditure,
        },
      ],
    });
  },
});

export default ChartGraph;
