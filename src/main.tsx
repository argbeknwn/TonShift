import React from 'react';
import ReactDOM from 'react-dom';

import { ColorModeScript } from '@chakra-ui/react';

import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

import { App } from './app/app';

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
reportWebVitals();
