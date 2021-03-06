import React, { useEffect, useState } from 'react';
import { AxiosResponse, AxiosError } from 'axios';

import { api } from './api';

import { FetchErrorType } from '../types';

const FETCH_ERROR_DEFAULT = null;

export const ErrorContext = React.createContext<FetchErrorType>(FETCH_ERROR_DEFAULT); 

export function withInterceptors<T, P>(Component: React.FC) {
  return (props: P) => {
    const [fetchError, setFetchError] = useState<FetchErrorType>(FETCH_ERROR_DEFAULT);

    useEffect(() => {
      api.interceptors.response.use((response: AxiosResponse<T>) => {
        setFetchError(FETCH_ERROR_DEFAULT);

        return response;
      }, (error: AxiosError) => {
        setFetchError(error);

        return Promise.reject(error);
      });
    }, []);

    return (
      <ErrorContext.Provider value={fetchError}>
        <Component {...props} />
      </ErrorContext.Provider>
    );
  };
};
