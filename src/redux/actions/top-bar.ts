import { Action, ActionCreator } from 'redux';
export const ADD = 'ADD';
export const PLAY = 'PLAY';
export const STOP = 'STOP';
export const DRAWER_OPENED = 'DRAWER_OPENED';
import { Mesh } from 'three';

export interface TopBarActionAdd extends Action<'ADD'> {
  mesh: Mesh;
}
export interface TopBarActionPlay extends Action<'PLAY'> {}
export interface TopBarActionStop extends Action<'STOP'> {}
export interface TopBarActionDrawerOpened extends Action<'DRAWER_OPENED'> {}
export type TopBarAction = TopBarActionAdd | TopBarActionPlay | TopBarActionStop | TopBarActionDrawerOpened;

export const add: ActionCreator<TopBarActionAdd> = (mesh: Mesh) => {
  return {
    type: ADD,
    mesh
  };
};

export const play: ActionCreator<TopBarActionPlay> = () => {
  return {
    type: PLAY
  };
};

export const stop: ActionCreator<TopBarActionStop> = () => {
  return {
    type: STOP
  };
};

export const drawerOpened: ActionCreator<TopBarActionDrawerOpened> = () => {
  return {
    type: DRAWER_OPENED
  };
};
