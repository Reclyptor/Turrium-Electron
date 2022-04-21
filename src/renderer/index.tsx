/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import * as ReactDOMClient from 'react-dom/client';
import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './redux/store';

const store = configureStore();
const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
