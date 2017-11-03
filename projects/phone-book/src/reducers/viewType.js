export default function viewType(state = 'LIST', action) {
  switch (action.type) {
    case 'VIEW_TYPE': {
      return action.viewType;
    }

    default: {
      return state;
    }
  }
}
