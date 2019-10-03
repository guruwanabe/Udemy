import { combineReducers } from 'redux';
import postReducer from './postReducer';
import userReducer from './userReducer';

// const postReducer = () => {
//   return 123;
// }

export default combineReducers({
  posts: postReducer,
  users: userReducer
});
