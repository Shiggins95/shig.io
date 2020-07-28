const startingState = {
  title: ''
};

const navReducer = (state = startingState, action) => {
  const { type, newTitle } = action;
  switch (type) {
    case 'SET_NAVBAR_TITLE':
      return { ...state, title: newTitle };
    case 'RESET_NAVBAR_STATE':
      return { ...startingState };
    default:
      return state;
  }
};

export default navReducer;
