import { createStore } from 'redux';
import combinedReducers from './reducers';
import { initialState } from './initState';

export default function initStore(serverState) {
  const initState = Object.assign(initialState, serverState);
  return createStore(combinedReducers, initState);
}

