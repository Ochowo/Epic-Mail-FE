import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorsReducer';
import messageReducer from './messageReducers';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  message: messageReducer,
});
