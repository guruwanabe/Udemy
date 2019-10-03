import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form'; // 'form' key is required
import streamsReducer from './streamsReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamsReducer
});
