import React from 'react';
import ReactDOM from 'react-dom';
import './src/app/layout/style.css';
import App from './src/app/layout/App';
import 'semantic-ui-css/semantic.min.css';
import { store, StoreContext } from './src/app/stores/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreContext.Provider>,
  document.getElementById('root')
);
