import { ACTIONS, ActionType, FetchState } from './types';

const initialState: FetchState = {
    payload: undefined,
};

const ACTION_HANDLERS = {
  [ACTIONS.FETCH_ACTION]: (state: FetchState, action: ActionType) => {
    return ({
        ...state,
        payload: action.payload
    });
  },
};

export default function fetchReducer(state = initialState, action: ActionType) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state
};
