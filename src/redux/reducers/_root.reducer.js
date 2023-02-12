
import { combineReducers } from 'redux'
import errors from './errors.reducer';
import currentDate from './currentDate.reducer';
import messageList from './messages.reducer';
import selectedProduct from './selectedProduct.reducer';
import weeklyForms from './weeklyForms.reducer';
import nextMeetingDay from './nextMeetingDay.reducer';
import userAll from './user.all.reducer';
import user from './user.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors: errors,
  userAll: userAll,
  user: user,
  currentDate: currentDate,   
  messageList: messageList,
  selectedProduct: selectedProduct,
  weeklyForms: weeklyForms,
  nextMeetingDay: nextMeetingDay,

});

export default rootReducer;
