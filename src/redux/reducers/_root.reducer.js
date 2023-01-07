
import { combineReducers } from 'redux'
import errorsReducer from './errors.reducer';
import currentDate from './current_date.reducer';
import messageList from './messages.reducer';
import selectedProduct from './selectedProduct.reducer';
// import selectedPlant from './selectedPlant.reducer';
// import selectedPhoto from './selectedPhoto.reducer';
// import userList from './userList.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors: errorsReducer,   // contains registrationMessage and loginMessage
  //   user,     // will have an id and username if someone is logged in
  //   plants,   // getting the user's plants from the store
  //   photos,   // getting the photo's of all the plants
  currentDate: currentDate,   // getting the current year month and day
  messageList: messageList,
  selectedProduct: selectedProduct,
  //   selectedPlant,  // getting and setting the clicked on plant
  //   selectedPhoto,  // getting and setting the click on plant's photos
  //   userList,       // getting all of the usernames registered to the app
});

export default rootReducer;
