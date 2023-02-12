

const allUsersReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_ALL_USERS':
        return action.payload;
        
      case 'UNSET_USER':
        return {};
      case 'LOGOUT':
            return {};
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default allUsersReducer;
