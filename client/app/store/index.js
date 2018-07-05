import { createStore } from 'redux';
import combinedReducers from './reducers';

export default function initStore() {
  return createStore(combinedReducers);
}

