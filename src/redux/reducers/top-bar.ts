import { Reducer } from 'redux';
import { ADD, PLAY, DRAWER_OPENED } from '../actions/top-bar.js';
import { RootAction } from '../store.js';

export interface TopBarState {
  objects: any[];
  playing: boolean;
  drawerOpened: boolean;
}

const INITIAL_STATE: TopBarState = {
  objects: [],
  playing: false,
  drawerOpened: false
};

const topBar: Reducer<TopBarState, RootAction> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        objects: [...state.objects, action.type]
      };
    case PLAY:
      return {
        ...state,
        playing: true
      };
    case DRAWER_OPENED:
      return {
        ...state,
        drawerOpened: true
      };
    default:
      return state;
  }
};

export default topBar;
