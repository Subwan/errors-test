import React from 'react';
import { useDispatch } from 'react-redux';

import { fetchData } from '../../actions';
import { withInterceptors } from '../../services/withInterceptors';
import { useFetch } from './hooks';

import { RequestType } from '../../types';
 
import styles from './styles.module.scss';

const _MainPage: React.FC = () => {
  const error = useFetch();
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(fetchData<RequestType>());
  }

  return (
    <div className={styles.mainBlock}>
      <button className={styles.button} onClick={onClick}>Нажать для запроса</button>
      <div>{error && error.toString()}</div>
    </div>
  )
};

export const MainPage = withInterceptors<RequestType, Object>(_MainPage);
