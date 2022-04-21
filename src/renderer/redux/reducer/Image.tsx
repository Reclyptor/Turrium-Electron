import { Image } from '../../../types/Image';
import { Action } from '../action';
import { SET_IMAGES } from '../action/Image';

export type State = Image[];

const setImages = (_: State, action: Action<Image[]>): State => {
  return action.payload;
};

const ImageReducer = (state: State = [], action: Action<any>) => {
  switch (action.type) {
    case SET_IMAGES:
      return setImages(state, action);
    default:
      return state;
  }
};

export default ImageReducer;
