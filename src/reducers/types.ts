import { RequestType } from '../types';

export enum ACTIONS {
  FETCH_ACTION = 'FETCH_ACTION'
};

export type ActionType = {
  type: ACTIONS;
  payload: any;
};

export type FetchState = {
  payload: RequestType | undefined;
}

export type DispatchType = (args: ActionType) => ActionType;

