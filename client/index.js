import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './app/app';

const store = createStore(() => {});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App dispatch={store.dispatch} />
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);
