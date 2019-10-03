import jsonPlaceholder from '../api/jsonPlaceholder';
import _ from 'lodash';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_USER = 'FETCH_USER';

// If using async/await it will not work,
// it will not be a plain object

// WE NEED MIDDLEWARE!!! like redux-thunk or redux-promise  etc
// https://stackoverflow.com/questions/50035984/which-redux-middleware-should-i-choose
// A middleware is a function that gets called with every action we disaptch,
// can stop, modify or otherwise mess around with actions

// export const fetchPosts = async () => {
//   const response = await jsonPlaceholder.get('/posts');
//
//   return {
//     type: 'FETCH_POSTS',
//     payload: response
//   }
// };

// export const fetchPosts = (callback) => {
//   const promise = jsonPlaceholder.get('/posts')
//     .then(() => callback());
//
//   return {
//     type: 'FETCH_POSTS',
//     payload: promise
//   }
// }

// Redux thunk returns a function that will automatically be invoked
// Mannualy dispatch an action with redux-thunk

// Destructured === fetchPosts = () => async (dispatch, getState) => { };
export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({
      type: FETCH_POSTS,
      payload: response.data
    });
  };
};

// Destructured version
export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({
    type: FETCH_USER,
    payload: response.data
  });
};


// Solves overFetching issue!!!
// Calling other actionCreators
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  userIds.forEach(id => dispatch(fetchUser(id)));

  // if need for await
  // await Promise.all(userIds.map(id => dispatch(fetchUser(id))));

  // Lodash chaining refactor
  //  _.chain(getState().posts)
  //     .map('userId')
  //     .uniq()
  //     .forEach(id => dispatch(fetchUser(id)))
  //     .value() //required for lodash chaining
};

// Memoized version (not really recommended but works in simple cases)
// Destructured version
// export const fetchUser = (id) => dispatch => _fetchUsers(id, dispatch);
// const _fetchUsers = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({
//     type: FETCH_USER,
//     payload: response.data
//   });
// });
