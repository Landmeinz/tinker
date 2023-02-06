
import { combineReducers } from 'redux'
import errorsReducer from './errors.reducer';
import currentDate from './current_date.reducer';
import messageList from './messages.reducer';
import selectedProduct from './selectedProduct.reducer';
import weeklyForm from './weeklyForm.reducer';
import nextMeetingDay from './nextMeetingDay.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors: errorsReducer,   // contains registrationMessage and loginMessage
  //   user,     // will have an id and username if someone is logged in
  currentDate: currentDate,   // getting the current year month and day
  messageList: messageList,
  selectedProduct: selectedProduct,
  weeklyForm: weeklyForm,
  nextMeetingDay: nextMeetingDay,
  
});

export default rootReducer;
