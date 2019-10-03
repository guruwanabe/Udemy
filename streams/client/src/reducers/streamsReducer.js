import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  UPDATE_STREAM
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_STREAM:
    case FETCH_STREAM :
    case UPDATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_STREAMS:
      const newObject = action.payload.reduce((map, item) => (
        { ...map, [item.id]: item }
      ), {}); //_.mapKeys(action.payload, 'id')
      return newObject;
    case DELETE_STREAM:
      const { [action.payload]: _, ...newState } = state;
      return newState //_.omit(state, action.payload)
    default:
      return state;
  }
};
