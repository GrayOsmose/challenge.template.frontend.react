import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';

import App from './components/app';
import { createNewStore } from './store/store';
import registerServiceWorker from './registerServiceWorker';

const store = createNewStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
