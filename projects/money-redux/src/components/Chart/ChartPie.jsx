import React, { Component } from 'react';

import Highcharts from 'highcharts';

export default class ChartPie extends Component {
  render() {
    return <div id="chart" />;
  }
  componentDidMount() {
    const chartPie = this.props.balance
      .filter(item => item.type === 'expend')
      .reduce((newItem, current) => {
        return [
          ...newItem,
          {
            name: current.expenditureType,
            y: current.sum
          }
        ];
      }, []);

    Highcharts.chart('chart', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Your expenditures by categories:'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [
        {
          name: 'Expenditures',
          colorByPoint: true,
          data: chartPie
        }
      ]
    });
  }
}
