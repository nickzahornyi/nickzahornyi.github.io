function contact(state, action) {
  switch (action.type) {
    case 'ADD_CONTACT': {
      return {
        id: action.id,
        name: action.name,
        mail: action.mail,
        liked: false
      };
    }

    case 'DELETE_CONTACT': {
      return state.id !== action.id;
    }

    case 'TOGGLE_CONTACT': {
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        liked: !state.liked
      };
    }

    default: {
      return state;
    }
  }
}

export default function contacts(state = [], action) {
  switch (action.type) {
    case 'ADD_CONTACT': {
      return [...state, contact(undefined, action)];
    }

    case 'DELETE_CONTACT': {
      return state.filter(item => contact(item, action));
    }

    case 'TOGGLE_CONTACT': {
      return state.map(item => contact(item, action));
    }

    default: {
      return state;
    }
  }
}
