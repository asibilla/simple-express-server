export const TOGGLE_NAV = 'TOGGLE_NAV';
export const ACTIVATE_NAVITEM = 'ACTIVATE_NAVITEM';

const createAction = (action) => {
  return (data) => {
    return {
      type: action,
      data
    };
  } 
}

export const toggleNav = createAction(TOGGLE_NAV);
export const activateNavItem = createAction(ACTIVATE_NAVITEM);
