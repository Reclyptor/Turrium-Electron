import { combineReducers } from 'redux';
import ImageReducer from './Image';
import AlbumReducer from './Album';

const rootReducer = combineReducers({
  images: ImageReducer,
  albums: AlbumReducer,
});

export default rootReducer;
