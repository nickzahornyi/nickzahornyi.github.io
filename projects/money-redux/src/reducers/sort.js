export default function sort(state = 'SORT_BY_DATE', action) {
  switch (action.type) {
    case 'SET_SORT': {
      return action.sort;
    }

    default: {
      return state;
    }
  }
}
