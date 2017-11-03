export default function editing(state = '', action) {
  switch (action.type) {
    case 'FORM_EDIT': {
      if (state === action.form) {
        return '';
      }
      return action.form;
    }

    default: {
      return state;
    }
  }
}
