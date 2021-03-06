import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';
import found from 'found/lib/foundReducer';
import FarceActions from 'farce/lib/Actions';
import BrowserProtocol from 'farce/lib/BrowserProtocol';
import createHistoryEnhancer from 'farce/lib/createHistoryEnhancer';
import queryMiddleware from 'farce/lib/queryMiddleware';
import createMatchEnhancer from 'found/lib/createMatchEnhancer';
import Matcher from 'found/lib/Matcher';

import routeConfig from '../routing/routeConfig';
import popup from '../../shared/popup/reducer';
import user from '../../user/reducer';
import modal from '../../shared/modal/reducer';

const historyEnhancer = createHistoryEnhancer({
  protocol: new BrowserProtocol(),
  middlewares: [queryMiddleware],
});

const matcherEnhancer = createMatchEnhancer(
  new Matcher(routeConfig),
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleWare = composeEnhancers(
  applyMiddleware(thunk),
  historyEnhancer,
  matcherEnhancer,
);

const reducers = combineReducers({
  found,
  form,
  popup,
  modal,
  user,
});

const store = createStore(reducers, {}, middleWare);

store.dispatch(FarceActions.init());

export default store;
