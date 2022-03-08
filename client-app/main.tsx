import React from 'react';
import ReactDOM from 'react-dom';
import './src/app/layout/style.css';
import App from './src/app/layout/App';
import 'semantic-ui-css/semantic.min.css';
import { store, StoreContext } from './src/app/stores/store';

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  document.getElementById('root')
);
