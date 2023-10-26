const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      console.log('--- SET_USER user.reducer.js ---');
      return action.payload;
    case 'UNSET_USER':
      console.log('--- UNSET_USER user.reducer.js ---');
      return {};
    case 'LOGOUT':
      console.log('--- LOGOUT user.reducer.js ---');
      return {};
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default userReducer;
