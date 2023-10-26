
import { combineReducers } from 'redux'
import errorsReducer from './errors.reducer';
import currentDateReducer from './currentDate.reducer';
import messageListReducer from './messages.reducer';
import selectedProductReducer from './selectedProduct.reducer';
import weeklyFormsReducer from './weeklyForms.reducer';
import nextMeetingDayReducer from './nextMeetingDay.reducer';
import userAllReducer from './user.all.reducer';
import userReducer from './user.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors: errorsReducer,
  userAll: userAllReducer,
  user: userReducer,
  currentDate: currentDateReducer,   
  messageList: messageListReducer,
  selectedProduct: selectedProductReducer,
  weeklyForms: weeklyFormsReducer,
  nextMeetingDay: nextMeetingDayReducer,

});

export default rootReducer;
