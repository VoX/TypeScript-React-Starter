import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { enthusiasm } from './draftable/reducers';
import { StoreState } from './draftable/store';

import './index.css';
import App from './App';

const store = createStore<StoreState>(enthusiasm, {
  selected: 1,
});

ReactDOM.render(
  <Provider store={store}>
    <App apiConnectionString="https://api.draftkings.com" />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
