import { combineReducers } from 'redux';

import balance from './balance';
import filter from './filter';
import editing from './editing';
import sort from './sort';
import chart from './chart';

export default combineReducers({ balance, filter, editing, sort, chart });
