export  const SONG_SELECTED = 'SONG_SELECTED';
// Action creator
export const selectSong = (song) => {
  // Return an action
  return {
    type: SONG_SELECTED,
    payload: song
  }
};
