import { Reducer } from 'redux';
import { ADD, PLAY, DRAWER_OPENED } from '../actions/top-bar.js';
import { RootAction } from '../store.js';
import { Mesh } from 'three';

export interface TopBarState {
  mesh: Mesh;
  meshes: { [key: string]: Mesh };
  playing: boolean;
  drawerOpened: boolean;
}

const INITIAL_STATE: TopBarState = {
  mesh: null!,
  meshes: {},
  playing: false,
  drawerOpened: false
};

const topBar: Reducer<TopBarState, RootAction> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
      const mesh = action.mesh;
      return {
        ...state,
        mesh,
        meshes: { ...state.meshes, [mesh.uuid]: mesh }
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
