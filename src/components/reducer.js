import { combineReducers } from 'redux';
import { connectRouter }   from 'connected-react-router'

import app        from './app/reducer';
import frontPage  from './frontPage/reducer';
import sortPage   from './sortPage/reducer';
import resultPage from './resultPage/reducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  app,
  frontPage,
  sortPage,
  resultPage,
});
