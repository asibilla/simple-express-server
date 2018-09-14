import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import initStore from './app/store';
import App from './app/App';
import './app/styles/styles.css';

const store = initStore(window.REDUX_STATE || {});
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);
store.dispatch({type: 'TEST_EVENT', data: {}})
