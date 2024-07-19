import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
// Import other reducers if any

const rootReducer = combineReducers({
  cart: cartReducer,
  // Add other reducers here
});

export default rootReducer;
