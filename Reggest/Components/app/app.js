import React from 'react';
import { Provider } from 'react-redux';
import { Resolver } from 'found-relay';
import { CookiesProvider } from 'react-cookie';

import Router from './routing/router';
import store from './store/store';
import environment from './environment/environment';

const resolver = new Resolver(environment);

const App = () => (
  <Provider store={store}>
    <CookiesProvider>
      <Router matchContext={{ store }} resolver={resolver} />
    </CookiesProvider>
  </Provider>
);

export default App;
