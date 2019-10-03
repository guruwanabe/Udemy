
import { combineReducers } from 'redux';
import {SONG_SELECTED} from '../actions';

const songReducer = () => {
  return [
    { title: 'No scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'All star' , duration: '3:15' },
    { title: 'I want it that Way', duration: '1:45'}
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  switch (action.type) {
    case SONG_SELECTED:
      return action.payload;
      break;
    default:
      return selectedSong;
  }
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer
});
