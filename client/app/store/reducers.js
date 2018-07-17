import { combineReducers } from 'redux';

import { initialState } from './initState';
import { TOGGLE_NAV, ACTIVATE_NAVITEM } from './actions';

function navigation(state = initialState, action) {
  let newState = Object.assign({}, state);
  switch(action.type) {
    case TOGGLE_NAV : 
      newState.navOpen = !state.navOpen;
      return newState;
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

export default combineReducers({navigation});

