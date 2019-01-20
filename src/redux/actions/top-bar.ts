import { Action, ActionCreator } from 'redux';
export const ADD = 'ADD';
export const PLAY = 'PLAY';
export const STOP = 'STOP';
export const DRAWER_OPENED = 'DRAWER_OPENED';

export interface TopBarActionAdd extends Action<'ADD'> {}
export interface TopBarActionPlay extends Action<'PLAY'> {}
export interface TopBarActionStop extends Action<'STOP'> {}
export interface TopBarActionDrawerOpened extends Action<'DRAWER_OPENED'> {}
export type TopBarAction = TopBarActionAdd | TopBarActionPlay | TopBarActionStop | TopBarActionDrawerOpened;

export const add: ActionCreator<TopBarActionAdd> = (object: any) => {
  return {
    type: ADD,
    object
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
