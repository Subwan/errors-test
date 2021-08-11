import axios, { AxiosResponse } from 'axios';

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
  return (dispatch: DispatchType) => {
    axios.get(API.TEST(), {
      cancelToken: source.token,
    })
      .then((response: AxiosResponse<T>) => {
        const { data } = response;

        dispatch(fetchSuccess(ACTIONS.FETCH_ACTION, data));
      });
  };
};
