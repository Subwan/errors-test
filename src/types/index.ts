import { AxiosError } from 'axios';

export type RequestType = {
  testData: string;
};

export type FetchErrorType = AxiosError | null;
