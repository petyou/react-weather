import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import merge from 'lodash.merge';
import queryOptions from './queryOptions';
import weatherData from './weatherData';

function entities(state = {
  // todos: {}
}, action) {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities);
  }
  return state;
}

const rootReducer = combineReducers({
  routing: routerReducer,
  weatherData,
  entities,
  queryOptions,
});


export default rootReducer;
