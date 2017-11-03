export const formType = form => {
  return {
    type: 'FORM_EDIT',
    form
  };
};

export const addItem = newItem => {
  return {
    type: 'ADD_ITEM',
    newItem
  };
};

export const setFilter = filter => {
  return {
    type: 'SET_FILTER',
    filter
  };
};

export const setSort = sort => {
  return {
    type: 'SET_SORT',
    sort
  };
};

export const showChart = chart => {
  return {
    type: 'SHOW_CHART',
    chart
  };
};
