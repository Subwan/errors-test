import { combineReducers } from 'redux';

import fetchReducer from './fetchReducer';

const errorTestStore = combineReducers({
    fetch: fetchReducer
});

export default errorTestStore;