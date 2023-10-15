

const allUsersReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ALL_USERS':
      return action.payload;
    // case 'UNSET_ALL_USERS':
    //   return {};
    // override case // logs out individual user also
    case 'LOGOUT':
      sessionStorage.setItem('isLoggedIn', 'false');
      return {};
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default allUsersReducer;
