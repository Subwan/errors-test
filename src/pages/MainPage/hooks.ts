import { useContext } from "react";

import { ErrorContext } from '../../services/withInterceptors';

import { FetchErrorType } from '../../types';

export const useFetch = (): FetchErrorType => {
  const error = useContext<FetchErrorType>(ErrorContext);

  return error;
};
