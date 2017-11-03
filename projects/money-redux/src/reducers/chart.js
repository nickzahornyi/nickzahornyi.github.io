export default function chart(state = '', action) {
  switch (action.type) {
    case 'SHOW_CHART': {
      if (state === action.chart) {
        return '';
      }
      return action.chart;
    }

    default: {
      return state;
    }
  }
}
