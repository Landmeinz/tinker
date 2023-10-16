const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      sessionStorage.setItem('isLoggedIn', 'true');
      return action.payload;
    case 'UNSET_USER':
      sessionStorage.clear();
      return {};
    case 'LOGOUT':
      sessionStorage.setItem('isLoggedIn', 'false');
      return {};
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default userReducer;
