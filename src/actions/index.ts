import axios, { AxiosResponse } from 'axios';

import { api } from '../services/api';

import { API } from '../constants/api';

import { ACTIONS, DispatchType } from '../reducers/types';

export const source = axios.CancelToken.source();

export function fetchSuccess<T, P>(type: T, payload: P) {
  return {
    type,
    payload,
  };
};

export function fetchData<T>() {
  return async (dispatch: DispatchType) => {
    api.get(API.TEST(), {
      cancelToken: source.token,
    })
      .then(async(response: AxiosResponse<T>) => {
        const { data } = response;

        dispatch(fetchSuccess(ACTIONS.FETCH_ACTION, data));
      });
  };
};
