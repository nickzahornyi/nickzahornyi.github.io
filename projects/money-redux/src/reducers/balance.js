let InitialBalance = JSON.parse(localStorage.getItem('balance'));

if (!InitialBalance) {
  InitialBalance = [];
  localStorage.setItem('balance', InitialBalance);
}

export default function balance(state = InitialBalance, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const newBalance = [action.newItem, ...state];
      localStorage.setItem('balance', JSON.stringify(newBalance));
      return newBalance;
    }

    default: {
      return state;
    }
  }
}
