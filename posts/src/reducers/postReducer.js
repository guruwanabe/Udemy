// A reducer MUST return something, any value besides 'undefined';

// Produces 'state' or data to be used inside the app using only
// previous state and the action

// Must not return 'out of itself' to decide what
// value to return (reducers are pure)

// Must not mutate it's input 'state' argument

// Must make a compututation of the state and action (arra or objects)
// numbers and strings are immutable.

import {FETCH_POSTS} from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload
    default:
      return state;
  }
}
