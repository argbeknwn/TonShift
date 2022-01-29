import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ColorModeScript } from '@chakra-ui/react';
import { StoreContext } from 'storeon/react';
import { QueryProvider } from './api/provider/queryProvider';

import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

import { store } from './store/store';

import { App } from './app/app';

import '@/styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <QueryProvider>
      <StoreContext.Provider value={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StoreContext.Provider>
    </QueryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
reportWebVitals();
