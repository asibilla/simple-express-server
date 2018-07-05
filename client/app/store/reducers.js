import { combineReducers } from 'redux';

import { initialState } from './initState';
import { ACTIVATE_NAVITEM } from './actions';

function navigation(state = initialState, action) {
  switch(action.type) {
    case ACTIVATE_NAVITEM :
      console.log(action);
    default: 
      return state;
  }
}

export default combineReducers({navigation});

