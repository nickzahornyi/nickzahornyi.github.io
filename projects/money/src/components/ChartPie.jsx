import React from 'react';
import ReactDOM from 'react-dom';

import Highcharts from 'highcharts';

const ChartPie = React.createClass({
  render() {
    return <div id="chart" />;
  },

  componentDidMount() {
    const chartPie = JSON.parse(localStorage.getItem('balance'))
      .filter(item => item.type === 'expenditure')
      .reduce((newItem, current) => {
        return [
          ...newItem,
          {
            name: current.expenditureType,
            y: current.sum,
          },
        ];
      }, []);

    Highcharts.chart('chart', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
      },
      title: {
        text: 'Your expenditures by categories:',
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false,
          },
          showInLegend: true,
        },
      },
      series: [
        {
          name: 'Expenditures',
          colorByPoint: true,
          data: chartPie,
        },
      ],
    });
  },
});

export default ChartPie;
