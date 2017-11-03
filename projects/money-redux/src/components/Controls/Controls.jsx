import React, { Component } from 'react';

import { Icon } from 'react-mdl';

import ControlsFilterLink from './ControlsFilterLink.jsx';
import ControlsSortLink from './ControlsSortLink.jsx';
import ControlsChartLink from './ControlsChartLink.jsx';
import './Controls.sass';

export default class Controls extends Component {
  render() {
    return (
      <div className="controls">
        <div>
          <span>Sort: </span>
          <ControlsSortLink sort="SORT_BY_DATE" icon="date_range" />
          <ControlsSortLink sort="SORT_BY_VALUE" icon="monetization_on" />
        </div>

        <div>
          <span>Filter: </span>
          <ControlsFilterLink filter="SHOW_ALL" icon="view_list" />
          <ControlsFilterLink filter="SHOW_INCOME" icon="attach_money" />
          <ControlsFilterLink filter="SHOW_EXPEND" icon="money_off" />
        </div>

        <div>
          <span>Charts: </span>
          <ControlsChartLink chart="PIE" icon="pie_chart" />
          <ControlsChartLink chart="GRAPH" icon="show_chart" />
        </div>
      </div>
    );
  }
}
