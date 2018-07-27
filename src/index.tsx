import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Draftable from './draftable/container';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { enthusiasm } from './draftable/reducers';
import { StoreState } from './draftable/store';

import './index.css';

const store = createStore<StoreState>(enthusiasm, {
  selected: 1,
  draftableId: 'TypeScript',
});

ReactDOM.render(
  <Provider store={store}>
    <Draftable />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
