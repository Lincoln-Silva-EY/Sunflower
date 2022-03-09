import React from 'react';
import ReactDOM from 'react-dom';
import './src/app/layout/style.css';
import 'react-calendar/dist/Calendar.css'
import 'react-toastify/dist/ReactToastify.min.css'
import 'react-datepicker/dist/react-datepicker.css'
import App from './src/app/layout/App';
import 'semantic-ui-css/semantic.min.css';
import { store, StoreContext } from './src/app/stores/store';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <Router history={history}>
      <App />
    </Router>
  </StoreContext.Provider>,
  document.getElementById('root')
);
