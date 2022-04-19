import { Album } from '../../types/Album';
import { Action } from '../action';
import { SET_ALBUMS } from '../action/Album';

export type State = Album[];

const setAlbums = (_: State, action: Action<Album[]>): State => {
  return action.payload;
};

const AlbumReducer = (state: State = [], action: Action<any>) => {
  switch (action.type) {
    case SET_ALBUMS:
      return setAlbums(state, action);
    default:
      return state;
  }
};

export default AlbumReducer;
