export const addContact = (name, mail) => {
  return {
    type: 'ADD_CONTACT',
    id: Date.now(),
    name,
    mail
  };
};

export const toggleContact = id => {
  return {
    type: 'TOGGLE_CONTACT',
    id
  };
};

export const deleteContact = id => {
  return {
    type: 'DELETE_CONTACT',
    id
  };
};

export const setFilter = filter => {
  return {
    type: 'SET_FILTER',
    filter
  };
};

export const toggleView = viewType => {
  return {
    type: 'VIEW_TYPE',
    viewType
  };
};

export const changeView = state => {
  return {
    type: 'LIST',
    state
  };
};
