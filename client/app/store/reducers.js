import { combineReducers } from 'redux';
import { TOGGLE_NAV, ACTIVATE_NAVITEM } from './actions';
import get from 'lodash.get';


function updateState(state, prop, value) {
  return Object.assign({}, state, {[prop]: value});
}

function navOpen(state= {}, action) {
  if (get(action, 'type', '') === TOGGLE_NAV) {
    return updateState(state, 'navOpen', !state.navOpen)
  }

  return state;
}

function activeNavItem(state = {}, action) {
  return state;
}

function contentLoaded(state = {}, action) {
  return state;
}

function navItems(state = {}, action) {
  console.log('dispatch heard', state, action);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case ACTIVATE_NAVITEM :
      if (action.data !== state.activeNavItem) {
        newState.activeNavItem = action.data;
        newState.navOpen = false;
      }
      return newState;
    default: 
      return state;
  }
}

export default combineReducers({navOpen, activeNavItem, contentLoaded, navItems});

