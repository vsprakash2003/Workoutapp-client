import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from "connected-react-router"
import { createBrowserHistory } from 'history'

import configureStore from './stores'
import './index.css';
import Root from './Root/Root.Container';
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory()
const store = configureStore(history)

const render = Component => {
    ReactDOM.render(
      <Provider store={store}>
      <ConnectedRouter history={history}>
        <Component />
        </ConnectedRouter>
      </Provider>,
      document.getElementById('root') 
    ); 
};

// In development, hot module replacement (HMR) updates the application
// when changes are made, without having to refresh.
if (module.hot) {
  module.hot.accept('./Root/Root.Container', () => {
    const NextApp = require('./Root/Root.Container').default;
    render(NextApp);
  });
}

render(Root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
